import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { enrollment_id, session_id } = body;

    // Validate required parameters
    if (!enrollment_id || !session_id) {
      console.error("Payment: Missing required parameters", body);
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Get Stripe session details
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-01-27.acacia'
    });

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items', 'payment_intent']
    });

    if (!session) {
      console.error("Payment: Session not found", session_id);
      return NextResponse.json({ error: 'Session not found' }, { status: 400 });
    }

    // Extract billing address details from session
    const customer_details = session.customer_details;

    // Return the customer data gathered by stripe to the frontend
    const customerData = {
      plan_id: session.metadata!.plan_id,
      first_name: customer_details?.name?.split(' ')[0] || '',
      last_name: customer_details?.name?.split(' ')[1] || '',
      email: customer_details?.email || '',
      billing_address_one: customer_details?.address?.line1 || '',
      billing_address_two: customer_details?.address?.line2 || '',
      billing_city: customer_details?.address?.city || '',
      billing_state: customer_details?.address?.state || '',
      billing_zip_code: customer_details?.address?.postal_code || ''
    }

    if (enrollment_id !== session.metadata?.enrollment_id) {
      console.error("Payment: Enrollment ID mismatch", enrollment_id, session.metadata?.enrollment_id);
      return NextResponse.json({ error: 'Enrollment ID mismatch' }, { status: 400 });
    }

    // @ts-expect-error: Legacy code requires type override
    const transaction_id = session.payment_intent?.latest_charge as string;
    // @ts-expect-error: Legacy code requires type override
    const charge_id = session.payment_intent?.latest_charge as string;

    if (process.env.IS_TEST_MODE !== 'false') {
      // Simulate response in test mode
      return NextResponse.json({
        customerData,
        makePayment: {
          coupon_transaction_id: "",
          evad_order_number: "",
          invoice_number: "2024-05-2002",
          order_id: 938,
          overnight_shipping_amount: '0.00',
          payment_status: "SUCCESS",
          plan_activation_fee: 0,
          plan_tax: 0,
          processingFee: '0.00',
          total_amount: '44.00',
          total_shipping_amount: 0,
          transaction_no: transaction_id
        }
      });
    }

    // Get auth token for Telgoo API
    const token = await getAuthToken();

    // Call Telgoo API
    const response = await fetch(`${process.env.TELGOO_API_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({
        action: "make_payment",
        enrollment_id: enrollment_id,
        plan_id: session.metadata?.plan_id,
        zip_code: session.metadata?.zip_code,
        billing_address1: customerData.billing_address_one,
        billing_address2: customerData.billing_address_two,
        billing_city: customerData.billing_city,
        billing_state: customerData.billing_state,
        billing_zip: customerData.billing_zip_code,
        save_card: "Y",
        payment_method: "OTHER_PAYMENT_OPTION",
        payment_method_option: "STRIPE",
        payment_type: "NEW_SIGNUP",
        no_of_lines: "1",
        source: "WEBSITE",
        agent_id: process.env.TELGOO_AGENT_ID,
        charge_id: charge_id,
        transaction_id: transaction_id,
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.msg || 'Payment failed' }, { status: response.status });
    }

    const makePayment = await response.json();

    if (makePayment.msg !== "Success") {
      return NextResponse.json({ error: makePayment.msg || 'Payment failed' }, { status: 400 });
    }

    return NextResponse.json({
      customer: customerData,
      makePayment: makePayment.data
    });

  } catch (error) {
    console.error("Error in make-payment endpoint", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
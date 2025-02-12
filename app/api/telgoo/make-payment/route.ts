import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate required parameters
    if (!body.enrollment_id || !body.session_id) {
      console.error("Payment: Missing required parameters", body);
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Get Stripe session details
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-01-27.acacia'
    });

    const session = await stripe.checkout.sessions.retrieve(body.session_id, {
      expand: ['line_items', 'payment_intent']
    });
    console.log("session", session);

    // Extract billing address details from session
    const customer_details = session.customer_details;
    console.log("customer_details", customer_details);

    // Add stripe transaction details to body
    const customerData = {
      // @ts-expect-error: Legacy code requires type override
      charge_id: session.payment_intent?.latest_charge as string,
      plan_id: session.metadata?.plan_id || '',
      first_name: customer_details?.name?.split(' ')[0] || '',
      last_name: customer_details?.name?.split(' ')[1] || '',
      email: customer_details?.email || '',
      address_one: customer_details?.address?.line1 || '',
      address_two: customer_details?.address?.line2 || '',
      city: customer_details?.address?.city || '',
      state: customer_details?.address?.state || '',
      zip_code: customer_details?.address?.postal_code || ''
    }

    if (process.env.NODE_ENV !== 'production') {
      // Simulate response in test mode
      return NextResponse.json({
        customerData,
        makePayment: {
          data: {
            coupon_transaction_id: "",
            evad_order_number: "",
            invoice_number: "2024-05-2002",
            order_id: 938,
            overnight_shipping_amount: 0,
          payment_status: "SUCCESS",
          plan_activation_fee: 5,
          plan_tax: 0,
          processingFee: 0,
          total_amount: 44,
          total_shipping_amount: 0,
          transaction_no: body.transaction_id || ""
          },
          msg: "Success",
          msg_code: "RESTAPI000"
        }
      });
    }

    // Get auth token for Telgoo API
    const token = await getAuthToken();

    // Prepare payload for Telgoo API
    const payload = {
      action: "make_payment",
      enrollment_id: body.enrollment_id,
      plan_id: body.plan_id,
      billing_state: body.billing_state,
      zip_code: body.zip_code,
      save_card: "Y",
      payment_method: "OTHER_PAYMENT_OPTION",
      payment_method_option: "STRIPE",
      transaction_id: body.transaction_id,
      charge_id: body.charge_id,
      payment_type: "NEW_SIGNUP",
      no_of_lines: "1",
      source: "WEBSITE",
      agent_id: process.env.TELGOO_AGENT_ID
    };

    // Call Telgoo API
    const response = await fetch(`${process.env.TELGOO_API_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.msg || 'Payment failed' }, { status: response.status });
    }

    const makePayment = await response.json();

    return NextResponse.json({
      customerData,
      makePayment
    });

  } catch (error) {
    console.error("Error in make-payment endpoint", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
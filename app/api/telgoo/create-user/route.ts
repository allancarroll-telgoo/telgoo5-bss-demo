import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

// Updated interface for request body to include all used properties
interface CreateUserRequestBody {
  session_id: string;
  enrollment_id: string;
  plan_id: string;
  external_transaction_id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  address_one: string;
  address_two?: string;
  city: string;
  state: string;
  zip: string;
}

export async function POST(request: Request) {
  try {
    // Use JSON.parse on request.text() to bypass the strict literal type error
    const body: CreateUserRequestBody = JSON.parse(await request.text());
    const { session_id, enrollment_id } = body;

    // Validate required parameters
    if (!session_id || !enrollment_id) {
      console.error("User: Missing required parameters", body);
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Call the make-payment endpoint to get order_id
    const paymentUrl = new URL('/api/telgoo/make-payment', request.url);
    const paymentPayload = {
      enrollment_id,
      session_id,
    };

    const makePaymentRes = await fetch(paymentUrl.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentPayload)
    });

    if (!makePaymentRes.ok) {
      const errorData = await makePaymentRes.json();
      return NextResponse.json({ error: errorData.error || 'Payment failed' }, { status: 400 });
    }

    const paymentData = await makePaymentRes.json();
    console.log("paymentData", paymentData);
    const order_id = paymentData.makePayment.data?.order_id;

    if (!order_id) {
      return NextResponse.json({ error: 'Payment did not return an order id' }, { status: 400 });
    }

    let createUserData;

    if (process.env.IS_TEST_MODE !== 'false') {
      // Simulate response in test mode with customer info
      createUserData = {
        data: [
          {
            data: {
              cust_id: 102245,
              customer_id: 102245,
              enrollment_id,
              order_id,
              enrollment_type: "SHIPMENT",
              invoice_number: "",
              mdn: null,
              msid: "",
              msl: ""
            },
            msg: "Success",
            msg_code: "RESTAPI000"
          }
        ],
        msg: "Success",
        msg_code: "RESTAPI000",
        external_transaction_id: body.external_transaction_id || "",
        customer: {
          first_name: paymentData.customerData.first_name,
          last_name: paymentData.customerData.last_name,
          email: paymentData.customerData.email,
          address_one: paymentData.customerData.address_one || "",
          city: paymentData.customerData.city || "",
          state: paymentData.customerData.state || ""
        }
      };
    } else {

      // Get auth token for Telgoo API
      const token = await getAuthToken();

      // Prepare create user payload
      const createUserPayload = {
        lines: [
          {
            enrollment_id,
            order_id,
            password: "",
            first_name: body.first_name,
            middle_name: body.middle_name,
            last_name: body.last_name,
            email: body.email,
            pin: null,
            service_address_one: body.address_one,
            service_city: body.city,
            service_state: body.state,
            service_zip: body.zip,
            billing_address_one: body.address_one,
            billing_city: body.city,
            billing_state: body.state,
            billing_zip: body.zip,
            plan_id: body.plan_id,
            carrier: "BLUECONNECTSATT",
            is_portin: "N",
            enrollment_type: "SHIPMENT",
            is_esim: "N",
            parent_enrollment_id: enrollment_id
          }
        ],
        action: "create_prepaid_postpaid_customer_v2",
        agent_id: process.env.TELGOO_AGENT_ID,
        source: "WEBSITE",
        request_name: "customer"
      };

      // Call Telgoo API to create user
      const response = await fetch(`${process.env.TELGOO_API_URL}/customer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(createUserPayload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        return NextResponse.json({ error: errorData.error || 'User creation failed' }, { status: 400 });
      }

      createUserData = await response.json();
      console.log("createUserData", createUserData);
    }

    return NextResponse.json(createUserData, { status: 200 });
  } catch (error) {
    console.error('Error in create-user endpoint', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
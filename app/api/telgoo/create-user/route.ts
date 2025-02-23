import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

export async function POST(request: Request) {
  try {
    // Use JSON.parse on request.text() to bypass the strict literal type error
    const body = await request.json();
    const { session_id, enrollment_id, portIn, portDetails } = body;

    // Validate required parameters
    if (!session_id || !enrollment_id) {
      console.error("User: Missing required parameters", body);
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Call the make-payment endpoint to get order_id
    const paymentUrl = new URL('/api/telgoo/make-payment', request.url);
    const makePaymentRes = await fetch(paymentUrl.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enrollment_id,
        session_id,
      })
    });

    if (!makePaymentRes.ok) {
      const errorData = await makePaymentRes.json();
      return NextResponse.json({ error: errorData.error || 'Payment failed' }, { status: 400 });
    }

    const {customer, makePayment} = await makePaymentRes.json();
    const order_id = makePayment.order_id;

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
              mdn: portIn ? portDetails?.phoneNumber : null,
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
          first_name: customer.first_name,
          last_name: customer.last_name,
          email: customer.email,
          address_one: customer.billing_address_one,
          city: customer.billing_city,
          state: customer.billing_state
        }
      };
    } else {
      // Get auth token for Telgoo API
      const token = await getAuthToken();

      const createUserBody = {
        lines: [
          {
            enrollment_id,
            order_id,
            password: Math.random().toString(36).slice(-12),
            first_name: customer.first_name,
            middle_name: customer.middle_name || "",
            last_name: customer.last_name,
            email: customer.email,
            service_address_one: customer.billing_address_one,
            service_city: customer.billing_city,
            service_state: customer.billing_state,
            service_zip: customer.billing_zip_code,
            billing_address_one: customer.billing_address_one,
            billing_address_two: customer.billing_address_two || "",
            billing_city: customer.billing_city,
            billing_state: customer.billing_state,
            billing_zip: customer.billing_zip_code,
            plan_id: customer.plan_id,
            carrier: "BLUECONNECTSATT",

            is_portin: portIn ? "Y" : "N",
            port_number: portIn ? portDetails?.phoneNumber : undefined,
            port_current_carrier: portIn ? portDetails?.carrier : undefined,
            port_account_number: portIn ? portDetails?.accountNumber : undefined,
            port_account_password: portIn ? portDetails?.accountPassword : undefined,
            port_first_name: portIn ? customer.first_name : undefined,
            port_last_name: portIn ? customer.last_name : undefined,
            port_address_one: portIn ? customer.billing_address_one : undefined,
            port_address_two: portIn ? customer.billing_address_two : undefined,
            port_city: portIn ? customer.billing_city : undefined,
            port_state: portIn ? customer.billing_state : undefined,
            port_zip_code: portIn ? customer.billing_zip_code : undefined,
            pin: portIn ? portDetails?.pin : undefined,

            enrollment_type: "SHIPMENT",
            is_esim: "N",
            parent_enrollment_id: enrollment_id
          }
        ],
        action: "create_prepaid_postpaid_customer_v2",
        agent_id: process.env.TELGOO_AGENT_ID,
        source: "WEBSITE",
        request_name: "customer"
      }

      // Call Telgoo API to create user
      const response = await fetch(`${process.env.TELGOO_API_URL}/customer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(createUserBody)
      });
      console.log("body", createUserBody);

      if (!response.ok) {
        const errorData = await response.json();
        return NextResponse.json({ error: errorData.error || 'User creation failed' }, { status: 400 });
      }

      createUserData = await response.json();
      console.log("createUserData", createUserData);
      console.log("createUserData.data", createUserData.data);
      console.log("createUserData.errors", createUserData.errors);

      // Check for specific error cases
      if (createUserData.errors?.includes('Fail')) {
        const errorDetails = createUserData.data?.[0]?.errors?.[0];
        if (errorDetails?.includes('Customer is already created')) {
          return NextResponse.json({
            error: 'USER_ALREADY_EXISTS',
            message: 'Customer is already created against this enrollment id',
            data: createUserData.data[0].data
          }, { status: 409 }); // Using 409 Conflict for already exists
        }
      }

      if (createUserData.msg !== "Success") {
        return NextResponse.json({
          error: 'CREATE_USER_FAILED',
          message: createUserData.msg || 'User creation failed',
          details: createUserData.errors || []
        }, { status: 400 });
      }
    }

    return NextResponse.json(createUserData, { status: 200 });
  } catch (error) {
    console.error('Error in create-user endpoint', error);
    return NextResponse.json({
      error: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
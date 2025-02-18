import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

export async function POST(request: Request) {
  const { zip_code } = await request.json();
  if (!zip_code) {
    return NextResponse.json({ error: 'Zip code is required' }, { status: 400 });
  }

  const isTestMode = process.env.IS_TEST_MODE !== 'false';
  if (isTestMode) {
    // Return test responses
    if (zip_code === "00000") {
      return NextResponse.json({
        available: false,
        message: 'Service is currently not available in your area.'
      });
    }
    return NextResponse.json({
      available: true,
      message: 'Service is available in your area.',
      enrollment_id: 'TEST123'
    });
  }

    // Call the Enrollment API to check if service is available in the zip cod
    // Create an enrollment id to use to setup service through the flow
    // Example shows a non lifeline enrollment for a single line
  try {
    const token = await getAuthToken();
    const response = await fetch(process.env.TELGOO_API_URL! + 'enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({
        action: 'check_service_availability',
        zip_code: zip_code,
        is_enrollment: 'Y',
        enrollment_type: 'NON_LIFELINE',
        source: 'WEBSITE',
        agent_id: process.env.TELGOO_AGENT_ID,
      })
    });

    const data = await response.json();

    // Returns the city, state, and zip for the zip code given.
    // Also returns the enrollment id. Pass it back to the client to use
    // as a session id for the rest of the flow.
    console.log('check service availability data', data);

    return NextResponse.json({
      available: data.msg === 'Success',
      enrollment_id: data.data.enrollment_id,
    });

  } catch (error) {
    console.error('Error checking service availability:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
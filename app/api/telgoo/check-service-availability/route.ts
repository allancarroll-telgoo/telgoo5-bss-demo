import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

export async function POST(request: Request) {
  try {
    const { zip } = await request.json();
    const isTestMode = process.env.NODE_ENV !== 'production';

    if (!zip) {
      return NextResponse.json({ error: 'Zip code is required' }, { status: 400 });
    }

    if (isTestMode) {
      // Return test responses
      if (zip === "00000") {
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

    // Call real Telgoo API
    const token = await getAuthToken();
    const response = await fetch(process.env.TELGOO_API_URL! + 'enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({
        action: 'check_service_availability',
        zip_code: zip,
        enrollment: 'Y',
        enrollment_type: 'NON_LIFELINE',
        source: 'WEBSITE',
        agent_id: process.env.TELGOO_AGENT_ID,
      })
    });

    console.log('Response:', response);
    const data = await response.json();
    console.log('Data:', data);

    return NextResponse.json({
      available: data.status === 'success',
      message: data.message,
      enrollment_id: data.enrollment_id
    });

  } catch (error) {
    console.error('Error checking service availability:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
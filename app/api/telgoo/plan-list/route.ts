import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

export async function POST(request: Request) {
  const { zip_code } = await request.json();
  if (!zip_code) {
    return NextResponse.json({ error: 'Zip code is required' }, { status: 400 });
  }

  const isTestMode = process.env.IS_TEST_MODE !== 'false';
  if (isTestMode) {
    // Return mock data that matches production Telgoo5 API structure
    return NextResponse.json([
      {
        data: '15360', // 15GB
        data_unlimited: '',
        minute_unlimited: 'Y',
        plan_id: '1',
        plan_name: 'Essential',
        plan_price: '29.99',
        talk: '0', // Unlimited
        text: '0', // Unlimited
        text_unlimited: 'Y',
        total_plan_price: '29.99',
        display_features_description: ['5G access', 'Mobile hotspot', 'International texting', 'HD Streaming']
      },
      {
        data: '0',
        data_unlimited: 'Y',
        minute_unlimited: 'Y',
        plan_id: '2',
        plan_name: 'Premium',
        plan_price: '49.99',
        talk: '0',
        text: '0',
        text_unlimited: 'Y',
        total_plan_price: '49.99',
        display_features_description: ['5G access', 'Mobile hotspot', 'International texting', 'HD Streaming']
      }
    ]);
  }

  try {
    const token = await getAuthToken();
    const response = await fetch(process.env.TELGOO_API_URL! + '/plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({
        action: 'plan_list',
        zip_code: zip_code,
        enrollment_type: 'NON_LIFELINE',
        // is_family_plan: 'N', // TODO: Support for family plans
        source: 'WEBSITE',
        agent_id: process.env.TELGOO_AGENT_ID,
      })
    });

    const data = await response.json();
    console.log('plan list data', data);

    if (data.msg === 'Success') {
      return NextResponse.json(data.data);
    } else {
      return NextResponse.json({ error: 'Error fetching plan list', msg: data.msg }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching plan list:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
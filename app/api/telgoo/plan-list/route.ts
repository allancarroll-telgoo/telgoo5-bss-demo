import { NextResponse } from 'next/server';
import { getAuthToken } from '@/lib/telgoo5Api';

export async function GET() {
  const isTestMode = process.env.IS_TEST_MODE !== 'false';
  if (isTestMode) {
    // Return hard-coded plans in test mode
    return NextResponse.json([
      {
        name: "Essential",
        price: 29.99,
        data: "15GB",
        features: ["Unlimited talk & text", "5G access", "Mobile hotspot"],
      },
      {
        name: "Premium",
        price: 49.99,
        data: "Unlimited",
        features: [
          "Unlimited talk & text",
          "Priority 5G access",
          "Unlimited mobile hotspot",
          "International texting",
          "HD Streaming",
        ],
      },
    ]);
  }

  try {
    const token = await getAuthToken();
    const response = await fetch(process.env.TELGOO_API_URL! + '/plan_list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching plan list:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
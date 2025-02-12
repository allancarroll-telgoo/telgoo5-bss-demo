interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface BillingDetails {
  billingId: string;
  userId: string;
  plan: string;
  status: string;
}

interface SetupUserParams {
  name: string;
  email: string;
  phone: string;
}

interface InitiateBillingParams {
  userId: string;
  plan: string;
}

// Add token caching and authentication function
let authTokenCache: { token: string; expiresAt: number } | null = null;

export async function getAuthToken(): Promise<string> {
  const response = await fetch(process.env.TELGOO_API_URL! + '/authenticate', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      vendor_id: process.env.TELGOO_VENDOR_ID,
      username: process.env.TELGOO_USERNAME,
      password: process.env.TELGOO_PASSWORD,
      pin: process.env.TELGOO_PIN,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to get auth token");
  }
  const data = await response.json();
  console.log('Auth Data:', data);

  authTokenCache = { token: data.token, expiresAt: Date.now() + 1000 * 60 * 15 };
  return authTokenCache.token;
}

export async function setupUser({ name, email, phone }: SetupUserParams): Promise<User> {
  // Simulate an API call to create or update the user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 'user_' + Math.floor(Math.random() * 10000),
        name,
        email,
        phone
      });
    }, 500);
  });
}

export async function initiateBilling({ userId, plan }: InitiateBillingParams): Promise<BillingDetails> {
  // Simulate an API call to initiate billing for the selected plan
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        billingId: 'bill_' + Math.floor(Math.random() * 10000),
        userId,
        plan,
        status: 'active'
      });
    }, 500);
  });
}

// Updated return type for checkServiceAvailability
export async function checkServiceAvailability({ zip }: { zip: string }): Promise<{ available: boolean; message?: string; enrollment_id?: string }> {
  const response = await fetch('/api/telgoo/check-service-availability', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zip }),
  });
  if (!response.ok) {
    throw new Error('Service availability check failed');
  }
  return response.json();
}

// Add function to get the plan list - step 2 of the subscription flow
export async function getPlanList(): Promise<Array<{ name: string; price: number; data: string; features: string[] }>> {
  // Use the backend proxy endpoint to get plans
  const response = await fetch('/api/telgoo/plan-list', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch plans from backend proxy');
  }
  const data = await response.json();
  return data;
}
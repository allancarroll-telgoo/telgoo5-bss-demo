import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(request: Request) {
  try {
    const { plan, price, zip, enrollment_id } = await request.json();

    console.log('Creating checkout session with:', { plan, price, zip, enrollment_id });

    // First create a product for the plan if it doesn't exist
    const product = await stripe.products.create({
      name: plan,
      description: `${plan} Mobile Plan`,
    });

    // Create a price for the product
    const stripePrice = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(price * 100), // Convert to cents
      currency: 'usd',
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePrice.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&enrollment_id=${enrollment_id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/plan-list?enrollment_id=${enrollment_id}`,
      metadata: {
        enrollment_id,
        plan,
      },
      billing_address_collection: 'required',
    });

    console.log('Checkout session created:', session.id);
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Error creating checkout session'
    }, { status: 500 });
  }
}
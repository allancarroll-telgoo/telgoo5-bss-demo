# Allan Wireless - Telgoo5 BSS API Demo

This repository is a demonstration and reference implementation of the Telgoo5 BSS API integration. It showcases a complete mobile plan subscription flow, built with Next.js 14, React, Tailwind CSS, integrated with Stripe for secure payments, and connected to the Telgoo5 BSS API for customer management.

## Purpose

This demo helps Telgoo5 customers to:
- Understand how to integrate with the Telgoo5 BSS API.
- Experience a working example of a mobile plan subscription workflow.
- Use it as a foundation for their own implementations.
- Follow best practices for API integration and error handling.

## Features

- Modern UI with Tailwind CSS
- Stripe Checkout integration for secure payment processing
- Secure API token management
- Complete mobile plan subscription flow with service availability checking
- Real-time validations and robust error handling

## Tech Stack

- Next.js 14 (App Router)
- React (latest)
- Tailwind CSS
- Stripe Payment Integration
- TypeScript
- Telgoo5 BSS API

## Getting Started

### Prerequisites

- Node.js 18+ and [pnpm](https://pnpm.io/)
- A Stripe account for payments
- Telgoo5 BSS API credentials

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Telgoo5 API Configuration
TELGOO_API_URL=https://api.telgoo5.com/v1
TELGOO_VENDOR_ID=your_vendor_id
TELGOO_USERNAME=your_username
TELGOO_PASSWORD=your_password
TELGOO_PIN=your_pin
TELGOO_AGENT_ID=your_agent_id

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3001
```

### Installation

1. Clone the repository:
   git clone https://github.com/yourusername/allanwireless-v0.git
   cd allanwireless-v0

2. Install dependencies:
   pnpm install

3. Run the development server:
   pnpm dev

   The application will be available at [http://localhost:3001](http://localhost:3001).

## API Integration Flow

The demo implements the following Telgoo5 BSS API workflow:

1. Service Availability Check
   - Validates if mobile service is available in the customer's area.
   - Returns an enrollment ID for initiating the subscription process.
   - (Endpoint: Adjust settings in `app/api/telgoo/check_service_availability/route.ts` as needed.)

2. Plan List Retrieval
   - Retrieves a list of available mobile plans along with pricing and features.
   - Customize options in `app/api/telgoo/plan_list/route.ts`.

3. Payment Processing
   - Utilizes Stripe Checkout to securely process payments.
   - Links the subscription with Telgoo5 customer records.

4. Customer Onboarding
   - Creates or updates customer records in Telgoo5 using the `/create_prepaid_postpaid_customer_v2` endpoint.

## Testing

When running in test mode (any `NODE_ENV` value other than 'production'):
- API calls may return mock data.
- Using the zip code "00000" simulates service unavailability.

## Customization

### Styling
- Modify `tailwind.config.ts` to update brand colors and other theme settings.
- Customize UI components located in the `app/components` directory.

### Plan Configuration
- Edit plan options in `app/api/telgoo/plan_list/route.ts`.
- Adjust pricing details and subscription parameters as required.

## Contributing

Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with your improvements.

## Support

- For Telgoo5 BSS API issues, contact Telgoo5 support.
- For repository-specific questions, open an issue in the repository.

## License

MIT License - See the [LICENSE](LICENSE) file for details.

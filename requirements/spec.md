# Telgoo5 API Mobile Subscription Flow

## Project Goal

Create a minimal, modern subscription flow that highlights the Telgoo5 API's capabilities—user setup, billing, and SIM dispatch—while ensuring the codebase is easy to fork and customize.

## Key Features

- **Clean UI/UX:** Built with Next.js, React, and Tailwind CSS.
- **Telgoo5 API Integration:** Direct integration using Telgoo5 BSS.openapi.json for user account management, billing, and SIM card dispatch.
- **Payment Processing:** Secure payments through Stripe.
- **Modular Design:** Simple, well-documented code for easy customization.

## Technical Overview

- **Frontend:** Next.js and React for a dynamic and responsive UI.
- **API Integration:** Direct calls to the Telgoo5 API.
- **Payment:** Stripe for secure transactions.
- **Optional Backend:** Node.js server layer, if needed, for additional orchestration.

## Roadmap

1. **Setup:** Initialize the project with Next.js and Tailwind CSS.
2. **Subscription Flow:** Build essential screens for plan selection, customer details, and order confirmation.
3. **API Integration:** Implement Telgoo5 API calls with robust error handling.
4. **Payment Integration:** Add Stripe for payment processing.
5. **Testing & Documentation:** Build tests and document customization points.

## Features

* Check service availability
* Plan list
* Make payment
* Create user
* Show user home page
* Change plan
* Cancel plan
* Add a line
* Account management
* Usage alerts
* Data rollover
* International usage

## Home Page

* Show user account information
* Show user plan information
* Show user usage information
* Show user billing information
* Show user support information
* Allow user to change plan
* Allow user to cancel plan
* Allow user to manage account

## Subscription Flow and API Integration Details

The flow follows these steps and uses these API endpoints:

1. Check service availability: /check_service_availability
2. Get plan list, show the plan list to the user and let them select a plan: /plan_list
3. Use stripe integration to initiate billing: /make_payment with stripe hosted checkout
4. Validate portin: /validate_portin
5. Create prepaid postpaid customer: /create_prepaid_postpaid_customer_v2
6. Show user home page

## Conclusion

This project is a streamlined showcase of the Telgoo5 API, designed for an excellent user experience and rapid customization with minimal engineering effort.
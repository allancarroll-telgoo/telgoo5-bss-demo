# Mobile Phone Plan Subscription Flow PRD

## Overview
This document outlines the requirements for implementing a subscription flow that allows users to purchase mobile phone plans through our ecommerce platform.

## Goals
- Enable users to easily subscribe to prepaid mobile phone plans
- Minimize friction in the checkout process
- Ensure clear communication of plan details and pricing
- Maintain high conversion rates
- Provide a proof of concept that can be open sourced and used by other companies to show off the Telgoo5 API
- Use basic front end technologies including React, Next.js, Tailwind, and Stripe

## Roadmap for features to add

* Porting phone numbers
* Support Apple pay and Google pay through Stripe. Need to figure out how to do this with the Telgoo5 API.
* Device purchase
* Insurance
* Device finance
* Family plans
* Add-ons

* Add a line
* Recurring payments
* Refunds
* Cancellation
* Account management

- **Types of Line Orders**
	- Single Line Order
	- Multiline Order
	- Family Plan Order
	- Advance Month Enrollment
- **Types of Enrollment**
	- Physical
	- eSIM
	- Physical BYOD
	- Port-in Physical
	- Port-in eSIM
	- Equipment Purchase
	- Add Line After Login
- **Post-Login Features**
	- Physical Activation (New Activation / Port-in Activation)
	- eSIM Activation (New Activation / Port-in Activation)
	- Plan Change
	- Plan Renewal
	- SIM Swap
	- Address Change

## Useful API endpoints

* set_autopay
* validate_portin / submit_portin
* check_device_compatibility / get_equipment_list
* check_esn_status
* payment_details / estimate_charges
* purchase_prepaid_insurance / get_list / get_insurance
* various customer self-care endpoints (get_usage, customer_info, change_plan, etc)


## User Flow

1. Plan Selection
   - User enters zip code to verify service availability
   - Display available phone plans with clear pricing
   - Show key features of each plan (data, minutes, texts)
   - Allow easy comparison between plans
   - Include monthly price and contract duration

2. Plan Customization
   - Select contract length (# of months)
   - Use the Telgoo5 API to setup the user, do billing, and send the SIM card to the user
   - Choose device or bring your own device
   - Choose insurance

3. Select to bring your own number or get a new number
   - Enter number to port if choosing to bring your own number

5. Customer Information if not gathered with Payment Information
   - Collect essential user details:
     - Name
     - Email
     - Password
     - Phone number
     - Address for SIM card

4. Payment Information
   - Show details on the plan and total price.
   - Accept major credit cards and Apple Pay and Google Pay
   - Show clear breakdown of charges
   - Display recurring billing date
   - Integrate Stripe for payment processing

5. Confirmation
   - Order summary
   - Estimated SIM delivery date
   - Welcome email with next steps
   - Account activation instructions

6. Show user home page
   - Show user account information
   - Show user plan information
   - Show user usage information
   - Show user billing information
   - Allow user to change plan
   - Allow user to cancel plan
   - Allow user to manage account
   - Allow user to add a line

## Auto porting AI bot

When there are issues with porting a number, supply an AI bot that can help the user troubleshoot and
solve the issue. When possible, provide a way for the user to correct the issue. When possible, automatically
solve the issue for the customer.

## Technical Requirements

- Real-time validation of user inputs. Don't allow the user to enter invalid data.
- Secure payment processing
- Integration with inventory management
- Automated email system for confirmations
- Mobile-responsive design
- Use the Telgoo5 API to setup the user, do billing, and send the SIM card to the user

## Success Metrics

- Conversion rate > 3%
- Cart abandonment rate < 40%
- Customer support tickets < 5% of orders
- User satisfaction score > 4.5/5

## Timeline
- Phase 1: Basic subscription flow
- Phase 2: Add-ons and customization
- Phase 3: Analytics and optimization

# Next.js Stripe Payment

This project demonstrates how to integrate **Stripe** payment gateway with a **subscription-based payment system** in a **Next.js** application. The implementation uses **TypeScript** to ensure type safety and better development practices.

> **Note**: This repository is created for **learning purposes** to understand how to implement payment systems using **Stripe** and **Next.js**.

## Features

- **Subscription-based payment system** using Stripe
- Integration with Stripe Checkout for secure and easy payment handling
- Built with **Next.js** and **TypeScript** for better structure and scalability

## Setup and Installation

### 1. Clone the repository

````bash
git@github.com:devhimal/nextjs-stripe-payment.git


### 2. Install dependencies

Navigate to the project directory and install the required dependencies:


cd nextjs-stripe-payment
npm install
````

### 3. Set up environment variables

Create a `.env.local` file in the root of the project and add your Stripe API keys:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_
STRIPE_SECRET_KEY=sk_test_
STRIPE_WEBHOOK_SECRET=whsec_

NEXT_PUBLIC_SUPABASE_URL=https://sgywvtibahdftby.supabase.co
SUPABASE_SECRET_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c

```

### 4. Run the application

To run the development server, use the following command:

```bash
npm run dev or yarn run dev
```

The app should now be running at `http://localhost:3000`.

## Usage

- The app allows users to create a subscription by selecting a payment plan.
- Stripe Checkout is used to securely handle the payments.
- The backend creates a Stripe session and redirects users to Stripe's hosted payment page.

## Learning Resources

This repository was built as part of a learning process to integrate **Stripe** with a **Next.js** application. The resources used are:

- [Stripe Documentation](https://stripe.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe API Reference](https://stripe.com/docs/api)

## License

This project is open-source and available under the [MIT License](LICENSE).
# nextjs-stripe-payment

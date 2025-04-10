import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";

export async function POST(request: Request) {
  try {
    const { priceId, email, userId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      metadata: {
        user_id: userId,
      },
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          // base subscription
          price: priceId,
          quantity: 2,
        },
        {
          // one-time setup fee
          price: "price_1R1lHfJ42rESEVQ9ZwwG5iXd",
        },
      ],
      mode: "subscription",
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: unknown) {
    console.error(error);

    let errorMessage = "An unexpected error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

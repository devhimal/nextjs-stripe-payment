"use client";

import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { supabase } from "@/utils/supabaseClient";

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
      toast.error("Please log in to create a new Stripe Checkout session");
      return;
    }

    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "price_1R1KbyJ42rESEVQ91qPmH6y2",
        userId: data.user?.id,
        email: data.user?.email,
      }),
    });
    const session = await response.json();
    console.log("session", session);
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div>
      <h1>Signup for a Plan</h1>
      <p>Clicking this button creates a new Stripe Checkout session</p>
      <button
        className="btn bg-red-600 hover:cursor-pointer py-4 px-4 rounded-md"
        onClick={handleCheckout}
      >
        Buy Now
      </button>
    </div>
  );
}

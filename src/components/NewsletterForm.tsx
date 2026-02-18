"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/lib/actions/newsletter";
import type { ActionResult } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeNewsletter,
    initialState
  );

  return (
    <div>
      {state.message ? (
        <p
          className={`text-sm mb-4 ${
            state.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {state.message}
        </p>
      ) : null}
      <form action={formAction} className="max-w-md mx-auto flex gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0 disabled:opacity-60"
        >
          {pending ? "..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useActionState } from "react";
import { login } from "@/lib/actions/auth";
import type { ActionResult } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl text-lg font-bold mb-4">
            U3
          </div>
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-muted text-sm mt-1">Urban 360 Dashboard</p>
        </div>

        {state.message && !state.success && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 mb-6">
            <p className="text-sm text-red-400 text-center">{state.message}</p>
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              placeholder="admin@urban360.com.au"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

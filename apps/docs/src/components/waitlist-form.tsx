"use client";

import { Alert, AlertDescription } from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("You have successfully joined the waitlist!");
      setEmail("");
    }, 1500);
  };

  return (
    <Card className="mx-auto w-full max-w-md border-white/20 bg-white/10 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
      <CardHeader className="space-y-2 pb-4 text-center">
        <CardDescription className="font-normal text-lg text-white/90">
          Join our waitlist for early access and exclusive launch offers.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Input
              className="h-12 border-white/20 bg-white/10 text-base text-white backdrop-blur-sm placeholder:text-white/50 focus-visible:border-white/40 focus-visible:ring-white/40"
              disabled={status === "loading"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              type="email"
              value={email}
            />
          </div>

          <Button
            className="h-12 w-full bg-white font-bold text-base text-blue-600 shadow-xl transition-all duration-300 hover:bg-white/90 hover:shadow-2xl"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>

        {status === "success" && (
          <Alert className="mt-4 border-teal-400/50 bg-teal-900/30 backdrop-blur-sm">
            <CheckCircle className="h-4 w-4 text-teal-400" />
            <AlertDescription className="text-teal-100">
              {message}
            </AlertDescription>
          </Alert>
        )}

        {status === "error" && (
          <Alert className="mt-4 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm">
            <AlertCircle className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-100">
              {message}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

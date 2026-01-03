"use client";

import { Button } from "@workspace/ui/components/button";
import { Spinner } from "@workspace/ui/components/spinner";
import { toast } from "sonner";

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Button
        onClick={() => toast("Event has been created.")}
        size="sm"
        variant="outline"
      >
        <Spinner />
        Click me
      </Button>
    </div>
  );
}

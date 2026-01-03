import { Button } from "@workspace/ui/components/button";
import { Spinner } from "@workspace/ui/components/spinner";

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Button disabled size="sm" variant="outline">
        <Spinner />
        Click me
      </Button>
    </div>
  );
}

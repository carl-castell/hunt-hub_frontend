import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="auth-gradient flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Hunt Hub</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        Sign in to access your dashboard or create a new account to get started.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link to="/login">Sign in</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/register">Create account</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;

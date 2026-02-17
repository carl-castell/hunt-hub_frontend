import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
}

const AuthLayout = ({ children, title, subtitle, footerText, footerLinkText, footerLinkTo }: AuthLayoutProps) => {
  return (
    <div className="auth-gradient flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-lg font-bold tracking-tight text-primary">Hunt Hub</h2>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-lg shadow-black/20">
          {children}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {footerText}{" "}
          <Link to={footerLinkTo} className="font-medium text-primary hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;

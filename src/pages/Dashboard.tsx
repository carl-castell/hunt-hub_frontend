import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Shield } from "lucide-react";

const Dashboard = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  const infoItems = [
    { icon: User, label: "Name", value: `${user?.firstName} ${user?.lastName}` },
    { icon: Mail, label: "Email", value: user?.email },
    { icon: Shield, label: "Role", value: user?.role },
  ];

  return (
    <div className="auth-gradient min-h-screen">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-tight text-primary">Hunt Hub</span>
          <span className="text-xs text-muted-foreground">/ Dashboard</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2 text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </header>

      <main className="mx-auto max-w-lg px-4 py-16">
        <div className="mb-8">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-semibold">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <h1 className="text-xl font-semibold">Welcome, {user?.firstName}</h1>
          <p className="text-sm text-muted-foreground">Here's your profile information</p>
        </div>

        <div className="rounded-xl border border-border bg-card">
          {infoItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 px-5 py-4 ${i < infoItems.length - 1 ? "border-b border-border" : ""}`}
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Header white />
      {children}
    </div>
  );
}

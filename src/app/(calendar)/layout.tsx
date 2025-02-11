import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-background">
      <Header white />
      {children}
    </div>
  );
}

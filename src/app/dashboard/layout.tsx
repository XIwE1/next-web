import BackRouter from "@/components/ui/BackRouter";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <BackRouter />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

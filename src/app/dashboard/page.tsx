import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex justify-center items-center h-screen gap-1">
            <h1>Dashboard</h1>
            <Link href="/dashboard/customers">Customers</Link>
        </div>
    );
}
import Link from "next/link";

export default function Customers() {
    return <div className="flex justify-center items-center h-screen gap-[1]">
        <div>Customers Page.</div>
        <Link href="/dashboard/customers/waylen123">Customers id</Link>
        </div>;
  }
  
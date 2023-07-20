import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> Not found </h2>
      <Link href="/">Go Home </Link>
    </main>
  );
}

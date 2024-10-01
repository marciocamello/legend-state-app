import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold">Legend State App</h1>
      <Link href="/basics" className="hover:text-red-400">Basics Page</Link>
      <Link href="/form-immediate" className="hover:text-red-400">Form Immediate Page</Link>
      <Link href="/form-with-deltas" className="hover:text-red-400">Form Deltas Page</Link>
      <Link href="/form-with-submit" className="hover:text-red-400">Form Submit Page</Link>
      <Link href="/form-factored" className="hover:text-red-400">Form Factored Page</Link>
    </div>
  );
}

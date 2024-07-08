import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-4xl font-bold">Welcome to your Next.js app</h1>
      <hr />
      <nav className="mt-6">
        <Link className="text-blue-500" href="/portal">
          acesse o portal
        </Link>{" "}
        ou <Link href="/portal/cadastro">crie sua conta</Link>
      </nav>
    </main>
  );
}

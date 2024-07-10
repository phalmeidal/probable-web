"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Ajuste conforme a biblioteca de roteamento que você está usando
import { redirect } from 'next/navigation';
import AuthActions from '@/modules/auth/actions/auth-actions';
// Importe ou defina a função `redirect` conforme necessário

export default function PortalPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoggedOut, setIsLoggedOut] = useState<boolean | null>(null);

  const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    AuthActions.logout();
    setError(null);
    setIsLoggedOut(true);
  };

  useEffect(() => {
    if (isLoggedOut) {
      redirect("/portal/login");
    } else if (isLoggedOut === false) {
      setError("Falha ao tentar sair. Por favor, tente novamente.");
    }
  }, [isLoggedOut]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Página do Portal</h1>
      <Link href="#" onClick={handleLogout}>
        Logout
      </Link>
      {error && <p>{error}</p>}
    </main>
  );
}

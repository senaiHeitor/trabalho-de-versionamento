"use client";
import { useRouter } from "next/navigation";
export default function PaginaEventos() {
    const router = useRouter();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          Seja bem-vindo a Página de Eventos do Trabalho de Versionamento de Software!
          <br />
        </h1>
        <button
          onClick={() => router.back()}
          className="mt-8 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        >
          Voltar
        </button>
      </main>
    </>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          Seja bem-vindo ao Trabalho de Versionamento de Software!
          <br />
        </h1>
        <p>
          Todas as informações necessárias realização do trabalho encontra-se no
          arquivo <span className="">README.md</span>
        </p>
        <Link
          href="/clientes"
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ir para Clientes
        </Link>
      </main>
    </>
  );
}

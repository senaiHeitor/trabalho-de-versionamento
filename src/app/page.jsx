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
        <div className="flex gap-4 mt-8">
          <Link
            href="/clientes"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition"
          >
            Ir para Clientes
          </Link>
          <Link
            href="/produtos"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition"
          >
            Ir para Produtos
          </Link>
           <Link
            href="/eventos"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition"
          >
            Ir para Eventos
          </Link>
           <Link
            href="/sobrenos"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition"
          >
            Ir para Sobre Nos
          </Link>
          <Link
            href="/contatos"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition"
          >
            Ir para Contatos
          </Link>
        </div>
      </main>
    </>
  );
}

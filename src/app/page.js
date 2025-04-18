'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      {/* Logo Header */}
      <header className="bg-blue-900 text-white py-4 px-6 text-center text-2xl sm:text-3xl font-bold shadow">
        Multicrédito DM
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-10 px-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
          Financiamiento Rápido y Cercano para tu Negocio
        </h1>
        <p className="text-base sm:text-lg">
          Desde 2002 apoyando a microempresarios en Lima Norte
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition w-full sm:w-auto">
          Solicita tu préstamo hoy
        </button>
      </section>

      {/* Section Template */}
      <section className="bg-white py-10 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Quiénes Somos</h2>
        <p>
          Multicrédito DM es una institución financiera fundada en 2002 en Carabayllo, Lima - Peru. Nos especializamos en brindar microcréditos accesibles para emprendedores y trabajadores independientes. Nuestra cercanía, trato humano y atención diaria nos hacen únicos en el mercado.
        </p>
      </section>

      <section className="bg-blue-50 py-10 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Nuestros Servicios</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Préstamos desde 300 soles</li>
          <li>Sin colaterales ni trámites complicados</li>
          <li>Pagos diarios flexibles y personalizados</li>
          <li>Atención en bodegas, boticas, tienda de ropa, frutas, ferreterías y más</li>
        </ul>
      </section>

      <section className="bg-white py-10 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Nuestro Modelo</h2>
        <p>
          Realizamos visitas diarias para cobros y seguimiento. Nuestro equipo conoce a cada cliente personalmente, y trabajamos como una comunidad comprometida con el crecimiento de cada negocio.
        </p>
      </section>

      <section className="bg-blue-50 py-10 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Nuestros Clientes</h2>
        <p>
          Atendemos a comerciantes y emprendedores en Carabayllo, Comas, Los Olivos, Ventanilla y Puente Piedra. Nuestro enfoque es local, directo y humano.
        </p>
      </section>

      <section className="bg-white py-10 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Contáctanos</h2>
        <p>📍 Dirección: Carabayllo - Lima</p>
        <p>📞 Teléfono: (01) 9078978</p>
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition w-full sm:w-auto">
          Escríbenos
        </button>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10 pb-4 border-t mt-12">
        © {new Date().getFullYear()} Multicrédito DM. Todos los derechos reservados.
      </footer>
    </main>
  );
}
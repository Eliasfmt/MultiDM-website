export default function GraciasPage() {
    return (
      <main className="text-center py-20 px-6">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ¡Tu solicitud ha sido enviada!
        </h1>
        <p className="text-lg text-gray-700">
          Gracias por confiar en Multicrédito DM. Nos pondremos en contacto contigo muy pronto.
        </p>
  
        <a
          href="/"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          Volver al inicio
        </a>
      </main>
    )
  }
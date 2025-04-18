// src/app/solicitud/page.js
export default function SolicitudPage() {
    return (
      <main className="font-sans bg-gray-50 text-gray-800 px-6 sm:px-10 py-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Solicita tu Préstamo</h1>
  
        <form
          action="https://formsubmit.co/eliasfmt@gmail.com"
          method="POST"
          className="space-y-4 bg-white p-6 rounded-lg shadow"
        >
          <input type="hidden" name="_next" value="https://multicredito-website.vercel.app/gracias" />
  
          <label className="block">
            <span className="text-sm font-medium">Nombres</span>
            <input
              type="text"
              name="nombre"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Apellidos</span>
            <input
              type="text"
              name="apellidos"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>
  
          <label className="block">
            <span className="text-sm font-medium">Teléfono</span>
            <input
              type="tel"
              name="telefono"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>
  
          <label className="block">
            <span className="text-sm font-medium">Correo Electrónico</span>
            <input
              type="email"
              name="email"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>
  
          <label className="block">
            <span className="text-sm font-medium">Tipo de Negocio</span>
            <input
              type="text"
              name="negocio"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Ubicacion del negocio (Distrito)</span>
            <input
              type="text"
              name="distrito"
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Enviar Solicitud
          </button>
        </form>
      </main>
    );
  }
const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-600 mb-8">
          En nuestro spa, nos dedicamos a ofrecer bienestar y relajación a través de tratamientos personalizados y un equipo de profesionales altamente capacitados.
        </p>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Nuestro Equipo" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Nuestro Equipo</h3>
            <p className="text-gray-700 mb-4">
              Contamos con un equipo de expertos en bienestar y relajación, comprometidos con tu salud y confort.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Conoce más</a>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Nuestros Servicios" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Nuestros Servicios</h3>
            <p className="text-gray-700 mb-4">
              Ofrecemos una variedad de tratamientos diseñados para satisfacer tus necesidades de bienestar.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Descubre nuestros servicios</a>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Nuestra Misión" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Nuestra Misión</h3>
            <p className="text-gray-700 mb-4">
              Nuestra misión es proporcionar un ambiente de tranquilidad y rejuvenecimiento para todos nuestros clientes.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Lee más sobre nuestra misión</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;

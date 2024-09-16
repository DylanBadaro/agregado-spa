const Noticias = () => {
  return (
    <section id="noticias" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Últimas Noticias</h2>
        <p className="text-lg text-gray-600 mb-8">
          Mantente informado sobre nuestras últimas ofertas, eventos especiales y noticias importantes.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Noticia 1" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Noticia Destacada 1</h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Leer más</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Noticia 2" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Noticia Destacada 2</h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Leer más</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Noticia 3" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl font-semibold mb-2">Noticia Destacada 3</h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Leer más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticias;


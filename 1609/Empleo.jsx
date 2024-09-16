const Empleo = () => {
  return (
    <section id="empleo" className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Trabaja con Nosotros</h2>
    <p className="text-lg text-gray-700 mb-8">
      Estamos siempre en busca de profesionales apasionados por el bienestar
      y la relajación. Únete a nuestro equipo y descubre oportunidades de crecimiento.
    </p>
    
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2">Áreas disponibles:</h3>
      <ul className="list-disc list-inside text-left mx-auto inline-block text-lg text-gray-700">
        <li>Masajista</li>
        <li>Esteticista</li>
        <li>Recepción y atención al cliente</li>
        <li>Marketing y redes sociales</li>
      </ul>
    </div>

    <p className="text-lg text-gray-700 mb-6">
      Si compartes nuestra pasión por el bienestar, ¡queremos conocerte!
    </p>

    <a href="https://wa.me/1234567890" className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
      Envíanos un mensaje por WhatsApp
    </a>
  </div>
</section>
  );
};

export default Empleo;


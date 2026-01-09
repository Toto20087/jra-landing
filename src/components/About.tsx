import { Scale, Users2, BookOpen, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Scale,
      title: "Justicia Restaurativa",
      description: "Con un enfoque restaurativo nos centramos en la restauración de los vínculos y responsabilización del daño."
    },
    {
      icon: Users2,
      title: "Enfoque Humano",
      description: "Trabajamos directamente con personas privadas de su libertad, reconociendo su dignidad y potencial a traves de un equipo de voluntades."
    },
    {
      icon: BookOpen,
      title: "Talleres Transformadores",
      description: "Desarrollamos programas educativos y restaurativos que promueven la responsabilización."
    },
    {
      icon: Award,
      title: "Resultados Comprobados",
      description: "Nuestros programas han demostrado una reducción significativa en los índices de reincidencia y reinterancia en el delito."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra Organización
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contribuimos a la construcción de una sociedad más justa, humana y pacífica, 
            acompañando a las personas privadas de libertad en procesos de reparación y transformación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Talleres con Sentido
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Diseñamos y llevamos adelante programas desde el paradigma de Justicia Restaurativa y asistencia integral 
              para personas privadas de su libertad, generando espacios de encuentro, capacitación, educación formal y aprendizaje. 
              Trabajamos con espacios libres de violencia que fortalecen la empatía y la responsabilidad personal y social.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Promovemos la reconciliación consigo mismas, con los demás y con la sociedad, 
              acompañando la construcción de proyectos de vida dignos y sostenibles fuera del delito y la violencia.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img1.jpg"
                alt="Taller de justicia restaurativa"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">16</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 transform group-hover:scale-110 ${
                index === 0 ? 'bg-gradient-to-br from-red-500 to-pink-500' :
                index === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                index === 2 ? 'bg-gradient-to-br from-green-500 to-blue-500' :
                'bg-gradient-to-br from-indigo-500 to-purple-500'
              }`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
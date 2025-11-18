import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Programas', href: '#programas' },
    { name: 'Testimonios', href: '#testimonios' }
  ];

  const programs = [
    { name: 'Talleres de Reflexión', href: '#programas' },
    { name: 'Círculos Restaurativos', href: '#programas' },
    { name: 'Capacitación Laboral', href: '#programas' },
    { name: 'Reintegración Social', href: '#programas' }
  ];

  const supportLinks = [
    { name: 'Voluntariado', href: '#contacto' },
    { name: 'Donaciones', href: '#contacto' },
    { name: 'Alianzas', href: '#contacto' },
    { name: 'Transparencia', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/JusticiaRestaurativaAR/?locale=es_LA', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/justiciarestaurativaar/', name: 'Instagram' },
    { icon: Linkedin, href: 'https://ar.linkedin.com/company/justicia-restaurativa-argentina?trk=ppro_cprof', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-600 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fundación</h3>
                <p className="text-blue-400">Justicia Restaurativa</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contribuimos a la construcción de una sociedad más justa, humana y pacífica, 
              acompañando a personas privadas de libertad en procesos de reparación y transformación 
              que les permitan reconstruir su proyecto de vida con dignidad.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+54 9 11 6418-4459</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">contacto@justiciarestaurativaar.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programas</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Cómo Ayudar</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-gray-400 mb-4">Síguenos</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Fundación Justicia Restaurativa. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
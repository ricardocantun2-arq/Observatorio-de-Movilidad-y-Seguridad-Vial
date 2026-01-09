import React from 'react';
import { Globe, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-imdut-gray text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="h-8 w-8 bg-imdut-secondary rounded-full flex items-center justify-center text-imdut-gray font-bold">I</div>
               <span className="font-bold text-lg">IMDUT</span>
             </div>
             <p className="text-sm text-gray-300">
               Instituto de Movilidad y Desarrollo Urbano Territorial.
             </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-imdut-secondary">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Portal del Gobierno</a></li>
              <li><a href="#" className="hover:text-white">Transparencia</a></li>
              <li><a href="#" className="hover:text-white">Datos Abiertos</a></li>
              <li><a href="#" className="hover:text-white">Aviso de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-imdut-secondary">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Calle 26 s/n ÷ 65-a y 65. Col. Juan Pablo II. Mérida, Yucatán. C.P. 97246</li>
              <li>Dirección General: 999 432 0882</li>
              <li>Dirección de Movilidad: 999 481 6137</li>
              <li>contacto.imdut@yucatan.gob.mx</li>
              <li className="flex gap-4 mt-4">
                <a href="https://movilidad.yucatan.gob.mx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-imdut-secondary transition-colors" aria-label="Página del IMDUT">
                  <Globe size={20} />
                </a>
                <a href="https://www.instagram.com/imdut_yucatan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-imdut-secondary transition-colors" aria-label="Instagram del IMDUT">
                  <Instagram size={20} />
                </a>
                <a href="https://es-la.facebook.com/ImdutYucatan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-imdut-secondary transition-colors" aria-label="Facebook del IMDUT">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/ImdutYucatan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-imdut-secondary transition-colors" aria-label="X (Twitter) del IMDUT">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-imdut-secondary">Emergencias Viales</h4>
             <div className="bg-red-900/50 p-4 rounded-lg border border-red-800">
                <p className="text-xl font-bold text-white text-center">911</p>
                <p className="text-xs text-center text-gray-300 mt-1">Atención inmediata 24/7</p>
             </div>
             <button className="w-full mt-4 bg-imdut-secondary text-imdut-gray font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors text-sm">
                Chat en Línea
             </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gobierno del Estado de Yucatán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
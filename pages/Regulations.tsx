import React from 'react';
import { FileText, Download } from 'lucide-react';

const regulationsData = [
  {
    category: 'Normativa Federal',
    documents: [
      { title: 'Ley General de Movilidad y Seguridad Vial', date: 'Publicada en el DOF 17-05-2022', link: '#' },
      { title: 'NOM-004-SEDATU-2023', date: 'Estructura y diseño para vías urbanas incluyentes', link: '#' },
      { title: 'NOM-034-SCT2-2022', date: 'Señalamiento y dispositivos viales para calles y carreteras', link: '#' },
    ]
  },
  {
    category: 'Normativa Estatal',
    documents: [
      { title: 'Ley de Movilidad y Seguridad Vial del Estado de Yucatán', date: 'Publicada en el DOE 12-08-2022', link: '#' },
      { title: 'Reglamento de la Ley de Movilidad', date: 'Publicado 01-01-2023', link: '#' },
    ]
  },
  {
    category: 'Planes y Programas Estratégicos',
    documents: [
      { title: 'Plan Maestro de Movilidad Urbana 2030', date: 'Presentado 15-06-2021', link: '#' },
      { title: 'Programa Integral de Movilidad Urbana Sustentable (PIMUS)', date: 'Actualización 2024', link: '#' },
      { title: 'Programa de Ampliación de la Red de Ciclovías Metropolitanas', date: 'Fase II - 2024', link: '#' },
    ]
  },
   {
    category: 'Estudios y Publicaciones Oficiales',
    documents: [
      { title: 'Estudio Origen-Destino de la Zona Metropolitana de Mérida 2023', date: 'Publicado 10-02-2024', link: '#' },
      { title: 'Informe Anual de Siniestralidad Vial 2023', date: 'Publicado 01-03-2024', link: '#' },
      { title: 'Manual de Lineamientos de Diseño Vial para Yucatán', date: 'Versión 2.0 - 2023', link: '#' },
    ]
  }
];

export const Regulations: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-20">
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-imdut-primary flex items-center gap-3"><FileText />Marco Normativo</h1>
          <p className="text-gray-600 mt-2 max-w-3xl">
            Consulta las leyes, reglamentos, planes y estudios que rigen la movilidad en el estado.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="space-y-12">
            {regulationsData.map(category => (
                <div key={category.category}>
                    <h2 className="text-2xl font-bold text-imdut-gray border-l-4 border-imdut-secondary pl-4 mb-6">
                        {category.category}
                    </h2>
                    <div className="space-y-4">
                        {category.documents.map(doc => (
                            <a href={doc.link} key={doc.title} className="block bg-white p-5 rounded-lg border border-gray-200 hover:shadow-lg hover:border-imdut-primary transition-all duration-300 group">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-imdut-primary">{doc.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{doc.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-imdut-primary">
                                        <Download size={16} />
                                        <span className="hidden md:inline">Descargar PDF</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
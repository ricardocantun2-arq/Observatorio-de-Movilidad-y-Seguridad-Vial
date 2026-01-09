import React from 'react';
import { Building2 } from 'lucide-react';

export const Local: React.FC = () => {
  const powerBiUrl = "https://app.powerbi.com/view?r=eyJrIjoiYWM4NjlhNmUtYjE0YS00YTZkLWI5YzMtOGI3NzI0MWQyYTY0IiwidCI6ImQxYzIwM2EyLWQzZmMtNDIwNS1iZWFkLTA5OTAyMGUxZDI1MCIsImMiOjR9";

  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Building2 size={36} className="text-imdut-primary" />
            <div>
              <h1 className="text-3xl font-bold text-imdut-primary">Movilidad Local</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">
                Análisis de datos y visualizaciones interactivas sobre la movilidad dentro de los municipios, enfocado en Mérida.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Power BI Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
           <h2 className="text-lg font-bold text-imdut-gray mb-4">Dashboard Interactivo de Movilidad</h2>
           <div className="w-full" style={{height: '80vh'}}>
                <iframe
                    title="IMDUT - Movilidad Local"
                    width="100%"
                    height="100%"
                    src={powerBiUrl}
                    frameBorder="0"
                    allowFullScreen={true}
                    className="rounded-lg"
                ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Siniestralidad: React.FC = () => {
  const visualizadorUrl = "https://ocmovilidad.mx/siniestralidad/";

  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle size={36} className="text-imdut-primary" />
            <div>
              <h1 className="text-3xl font-bold text-imdut-primary">Observatorio de Siniestralidad Vial</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">
                Análisis de datos e indicadores clave sobre incidentes de tránsito en Yucatán para una movilidad más segura.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
           <h2 className="text-lg font-bold text-imdut-gray mb-4">Dashboard Interactivo de Siniestralidad</h2>
           <p className="text-sm text-gray-500 mb-4">
             Visualizadores del Observatorio Ciudadano de Siniestralidad de Jalisco, presentados como referencia temporal.
           </p>
           <div className="w-full" style={{height: '80vh'}}>
                <iframe
                    title="Visualizadores - Observatorio Ciudadano de Siniestralidad de Jalisco"
                    width="100%"
                    height="100%"
                    src={visualizadorUrl}
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
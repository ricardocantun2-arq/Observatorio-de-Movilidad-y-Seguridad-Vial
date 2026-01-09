import React from 'react';

export const Metropolitan: React.FC = () => {
  const powerBiUrl = "https://app.powerbi.com/view?r=eyJrIjoiYWM4NjlhNmUtYjE0YS00YTZkLWI5YzMtOGI3NzI0MWQyYTY0IiwidCI6ImQxYzIwM2EyLWQzZmMtNDIwNS1iZWFkLTA5OTAyMGUxZDI1MCIsImMiOjR9";

  return (
    <div className="min-h-screen bg-[#F9F9F9] pb-20">
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-imdut-primary">Movilidad Metropolitana</h1>
          <p className="text-gray-600 mt-2 max-w-3xl">
            Visión integral para la zona metropolitana de Mérida y sus municipios conurbados. Plan Maestro 2030.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
           <h2 className="text-lg font-bold text-imdut-gray mb-4">Dashboard Interactivo Metropolitano</h2>
           <div className="w-full" style={{height: '80vh'}}>
                <iframe
                    title="IMDUT - Movilidad Metropolitana"
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
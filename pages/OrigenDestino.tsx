import React from 'react';
import { ArrowRightLeft, Users, TrendingUp, Clock, MapPin, Lightbulb } from 'lucide-react';

const KpiCard: React.FC<{ icon: React.ReactNode; value: string; label: string; }> = ({ icon, value, label }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
        <div className="bg-imdut-primary/10 text-imdut-primary p-3 rounded-full">
            {icon}
        </div>
        <div>
            <div className="text-3xl font-bold text-imdut-primary">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    </div>
);

const FindingCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-yellow-50/50 p-5 rounded-lg border-l-4 border-yellow-400">
        <h3 className="font-bold text-yellow-800 flex items-center gap-2"><Lightbulb size={18} />{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
);

const topFlowsData = [
    { pair: 'Mérida ↔ Kanasín', trips: '289,878' },
    { pair: 'Mérida ↔ Conkal', trips: '35,766' },
    { pair: 'Mérida ↔ Hunucmá', trips: '20,277' },
    { pair: 'Mérida ↔ Tixkokob', trips: '10,810' },
    { pair: 'Mérida ↔ Acanceh', trips: '9,142' },
];

export const OrigenDestino: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            {/* Header */}
            <div className="bg-white shadow-sm py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-imdut-primary flex items-center gap-3"><ArrowRightLeft />Estudio de Matrices Origen-Destino</h1>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                        Análisis de los patrones de viaje en la Zona Metropolitana de Mérida a partir de datos de telefonía móvil.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 mt-8 space-y-12">
                {/* KPIs Section */}
                <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Radiografía de la Movilidad</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KpiCard icon={<Users size={28} />} value="4.2 M" label="Viajes en día laboral" />
                        <KpiCard icon={<TrendingUp size={28} />} value="3.1" label="Tasa de Viaje / Persona" />
                        <KpiCard icon={<Clock size={28} />} value="18%" label="Viajes en Pico AM (6-8h)" />
                        <KpiCard icon={<MapPin size={28} />} value="2-5 km" label="Distancia más frecuente" />
                     </div>
                </div>

                {/* Diagnostic Section */}
                 <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Principales Hallazgos de la Matriz</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                         <FindingCard title="Perfil del Viajero" description="La población de 25 a 60 años, económicamente activa, concentra casi el 50% de todos los viajes diarios." />
                         <FindingCard title="Patrón Pendular Clásico" description="Picos de viaje entre 6-8 AM (hacia trabajo/estudio) y 5-7 PM (regreso a casa) definen el ritmo de la ciudad." />
                         <FindingCard title="Movilidad de Proximidad" description="El 30.1% de los desplazamientos son cortos (2-5 km), lo que evidencia una fuerte dinámica de viajes dentro de las mismas zonas." />
                     </div>
                </div>
                
                 {/* Top 5 Flows */}
                <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Flujos Intermunicipales Clave</h2>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <p className="text-gray-600 mb-4">Mérida se confirma como el nodo central del sistema metropolitano. El par Mérida-Kanasín representa el flujo intermunicipal más grande, con cerca del 7% del total de viajes.</p>
                        <div className="overflow-x-auto">
                           <table className="w-full text-left">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                               <tr>
                                 <th scope="col" className="px-6 py-3 rounded-l-lg">Par de Municipios</th>
                                 <th scope="col" className="px-6 py-3 rounded-r-lg text-right">Viajes Totales (prom. diario)</th>
                               </tr>
                             </thead>
                             <tbody>
                               {topFlowsData.map((item, index) => (
                                 <tr key={index} className="bg-white border-b">
                                   <td className="px-6 py-4 font-medium text-gray-900">{item.pair}</td>
                                   <td className="px-6 py-4 font-mono text-right">{item.trips}</td>
                                 </tr>
                               ))}
                             </tbody>
                           </table>
                        </div>
                     </div>
                </div>
                
                <div className="text-center text-gray-500 text-sm pt-8">
                  <p>Fuente: Estudio "Generación de Matrices Origen-Destino de Mérida, Yucatán" (Nommon, 2025).</p>
                  <p>Metodología basada en datos anonimizados de telefonía móvil.</p>
                </div>
            </div>
        </div>
    );
};
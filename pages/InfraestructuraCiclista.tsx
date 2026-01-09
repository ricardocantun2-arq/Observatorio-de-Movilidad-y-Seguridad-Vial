import React from 'react';
import { Bike, Map, Search, AlertCircle, BarChart2 } from 'lucide-react';

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
    <div className="bg-red-50/50 p-5 rounded-lg border-l-4 border-red-400">
        <h3 className="font-bold text-red-800 flex items-center gap-2"><AlertCircle size={18} />{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
);

const MapCard: React.FC<{imageUrl: string, title: string, description: string}> = ({imageUrl, title, description}) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h4 className="font-bold text-gray-800">{title}</h4>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
    </div>
);

const priorityData = [
    { name: 'Periférico', priority: 'Máxima', score: 1.00 },
    { name: 'Av. Canek a Santa Fe – Caucel', priority: 'Muy Alta', score: 0.80 },
    { name: 'Av. Itzaes', priority: 'Alta', score: 0.70 },
    { name: 'Av. Canek / Calle 67', priority: 'Media', score: 0.40 },
    { name: '42 sur (Circuito Sta Rosa)', priority: 'Baja', score: 0.20 },
];

export const InfraestructuraCiclista: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            {/* Header */}
            <div className="bg-white shadow-sm py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-imdut-primary flex items-center gap-3"><Bike />Diagnóstico de la Infraestructura Ciclista</h1>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                        Análisis de la red ciclista de Mérida y su Zona Metropolitana, identificando barreras, potencialidades y acciones prioritarias.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 mt-8 space-y-12">
                {/* KPIs Section */}
                <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">La Red Ciclista en Cifras</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KpiCard icon={<Map size={28} />} value="217.3 km" label="de Red Existente" />
                        <KpiCard icon={<AlertCircle size={28} />} value="4.7%" label="con Protección Segregada" />
                        <KpiCard icon={<BarChart2 size={28} />} value="1,616" label="Ciclistas Aforados (12h)" />
                        <KpiCard icon={<Search size={28} />} value="3.6/10" label="Calificación Estacionamientos" />
                     </div>
                </div>

                {/* Diagnostic Section */}
                 <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Principales Barreras a la Ciclabilidad</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         <FindingCard title="Seguridad Vial Crítica" description="Alta siniestralidad, velocidades peligrosas (41 km/h promedio en zonas escolares) y diseño vial hostil disuaden el uso de la bicicleta, especialmente en mujeres (65% reportan acoso)." />
                         <FindingCard title="Infraestructura Insuficiente y de Baja Calidad" description="La red está fragmentada, con protección mínima (sólo 4.7% segregada), anchos por debajo de la norma, mal estado y falta de señalización e iluminación." />
                         <FindingCard title="Desconexión con la Demanda" description="Existe una brecha entre la infraestructura y los polos generadores de viaje (zonas económicas, educativas). La falta de estacionamiento seguro limita su utilidad." />
                         <FindingCard title="Falta de Visión Metropolitana" description="La red es municipal y fragmentada, con una intermodalidad débil con el transporte público (sólo 24.2% de viajes intermodales), agravada por largos tiempos de viaje." />
                     </div>
                </div>

                {/* Map Gallery */}
                <div>
                    <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Mapas del Diagnóstico</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MapCard imageUrl="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop" title="Red de Ciclovías Existentes" description="Distribución actual de la infraestructura ciclista en la ZMM." />
                        <MapCard imageUrl="https://images.unsplash.com/photo-1579546929662-711aa81148e9?q=80&w=2070&auto=format&fit=crop" title="Atractores de Viaje" description="Concentración de unidades económicas y su relación con la red." />
                        <MapCard imageUrl="https://images.unsplash.com/photo-1579547945412-0a7e3a24c52f?q=80&w=2070&auto=format&fit=crop" title="Barreras a la Ciclabilidad" description="Identificación de vías rápidas y discontinuidades en la red." />
                        <MapCard imageUrl="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop" title="Líneas de Deseo" description="Rutas deseadas por los ciclistas donde actualmente no existe infraestructura." />
                    </div>
                </div>

                 {/* Priority Actions */}
                <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Priorización de Vialidades</h2>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <p className="text-gray-600 mb-4">Basado en el taller participativo, se identificaron y priorizaron las siguientes vialidades para intervención:</p>
                        <div className="overflow-x-auto">
                           <table className="w-full text-left">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                               <tr>
                                 <th scope="col" className="px-6 py-3 rounded-l-lg">Vialidad</th>
                                 <th scope="col" className="px-6 py-3">Nivel de Prioridad</th>
                                 <th scope="col" className="px-6 py-3 rounded-r-lg">Puntuación Norm. (PN)</th>
                               </tr>
                             </thead>
                             <tbody>
                               {priorityData.map((item, index) => (
                                 <tr key={index} className="bg-white border-b">
                                   <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                   <td className="px-6 py-4">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                       item.priority === 'Máxima' ? 'bg-red-100 text-red-800' :
                                       item.priority === 'Muy Alta' ? 'bg-orange-100 text-orange-800' :
                                       item.priority === 'Alta' ? 'bg-yellow-100 text-yellow-800' :
                                       item.priority === 'Media' ? 'bg-blue-100 text-blue-800' :
                                       'bg-green-100 text-green-800'
                                     }`}>{item.priority}</span>
                                   </td>
                                   <td className="px-6 py-4 font-mono">{item.score.toFixed(2)}</td>
                                 </tr>
                               ))}
                             </tbody>
                           </table>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};
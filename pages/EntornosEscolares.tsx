import React from 'react';
import { School, Users, MapPin, AlertTriangle, Car, Footprints, ShieldCheck, HeartPulse, Megaphone, BookOpen } from 'lucide-react';

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

const FindingCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string; }> = ({ icon, title, description, color }) => (
    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4" style={{ borderColor: color }}>
        <div className="flex items-center gap-3 mb-2">
            <div className="text-lg" style={{ color: color }}>{icon}</div>
            <h3 className="font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const ActionItem: React.FC<{icon: React.ReactNode, category: string, description: string}> = ({icon, category, description}) => (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-imdut-primary mt-1">{icon}</div>
        <div>
            <h4 className="font-semibold text-gray-700">{category}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

export const EntornosEscolares: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            {/* Header */}
            <div className="bg-white shadow-sm py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-imdut-primary flex items-center gap-3"><School />Plan de Entornos Escolares Seguros</h1>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                        Análisis y estrategias del polígono piloto Cinvestav-Tecnológico para una movilidad segura hacia la escuela.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                {/* KPIs Section */}
                <div className="mb-12">
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Polígono Piloto en Cifras</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KpiCard icon={<Users size={28} />} value="6,902" label="Estudiantes" />
                        <KpiCard icon={<MapPin size={28} />} value="5,377" label="Residentes" />
                        <KpiCard icon={<School size={28} />} value="16" label="Escuelas" />
                        <KpiCard icon={<AlertTriangle size={28} />} value="38" label="Siniestros Viales (2023)" />
                     </div>
                </div>

                {/* Diagnostic Section */}
                 <div className="mb-12">
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Diagnóstico de Seguridad Vial</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         <FindingCard icon={<Car size={24} />} title="Velocidades Excesivas" description="Se registraron velocidades de hasta 50.6 km/h, muy por encima de los límites permitidos en zonas escolares." color="#D32F2F" />
                         <FindingCard icon={<Footprints size={24} />} title="Infraestructura Peatonal" description="Más del 60% de las banquetas evaluadas son inaccesibles o no presentan condiciones de confort adecuadas." color="#F57C00" />
                         <FindingCard icon={<ShieldCheck size={24} />} title="Falla del Conductor" description="El 89% de los siniestros viales fueron atribuidos a fallas del conductor, siendo el principal factor de riesgo." color="#1976D2" />
                         <FindingCard icon={<HeartPulse size={24} />} title="Factores de Riesgo" description="El 21% de los conductores responsables en siniestros presentaron aliento alcohólico." color="#7B1FA2" />
                     </div>
                </div>

                 {/* Action Plan Section */}
                <div>
                     <h2 className="text-2xl font-bold text-imdut-gray mb-6 border-l-4 border-imdut-secondary pl-4">Plan de Acción Multisectorial</h2>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                         <p className="text-gray-600 mb-6">Se propone un conjunto de acciones coordinadas para dar solución a los problemas identificados, bajo un enfoque de Sistema Seguro y Visión Cero.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ActionItem icon={<Car size={20} />} category="Infraestructura y Gestión de Velocidad" description="Implementar Zonas 30km/h, mejorar 20 tramos peatonales prioritarios con banquetas más anchas y rampas universales." />
                            <ActionItem icon={<BookOpen size={20} />} category="Políticas Públicas y Normativa" description="Fortalecer el marco normativo para el cumplimiento de límites de velocidad y certificar la competencia vial en jóvenes." />
                            <ActionItem icon={<Megaphone size={20} />} category="Comunicación y Cultura Vial" description="Lanzar la campaña 'Cuida a los que ruedan' y vincular a jóvenes como embajadores viales para la sensibilización." />
                            <ActionItem icon={<Users size={20} />} category="Participación Ciudadana" description="Crear Comités Viales Juveniles en escuelas y Mesas de Diálogo Intergeneracional para el seguimiento de las acciones." />
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

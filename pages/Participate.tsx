import React from 'react';
import { Users, FileText, Lightbulb, MessageSquare, Mic } from 'lucide-react';

export const Participate: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            <div className="relative bg-imdut-primary text-white py-20 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Participa y Transforma</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">Tu voz es fundamental para construir una movilidad más humana, segura y eficiente para todos.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoCard 
                        icon={<Mic size={28} />}
                        title="Consultas Públicas"
                        description="Opina sobre los nuevos proyectos y cambios normativos antes de que se implementen."
                    />
                     <InfoCard 
                        icon={<Users size={28} />}
                        title="Consejos Ciudadanos"
                        description="Forma parte de los órganos de participación que dan seguimiento a las políticas de movilidad."
                    />
                     <InfoCard 
                        icon={<Lightbulb size={28} />}
                        title="Buzón de Ideas"
                        description="¿Tienes una propuesta innovadora? Compártela con nuestro equipo de planeación."
                        highlight
                    />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-imdut-gray">Canales de Participación</h2>
                    <p className="text-gray-600 mt-2">Elige la forma que mejor se adapte a ti.</p>
                </div>

                <div className="space-y-8">
                    {/* Section 1: Public Consultations */}
                    <ParticipationSection
                        icon={<FileText className="text-imdut-primary"/>}
                        title="Consultas Abiertas"
                        description="Actualmente estamos recabando opiniones sobre los siguientes temas. Tu perspectiva es muy valiosa."
                    >
                        <div className="mt-4 space-y-3">
                            <ConsultationItem title="Reglamento para Vehículos de Movilidad Personal (Scooters y Monociclos)" deadline="30 de Noviembre, 2024" />
                            <ConsultationItem title="Propuesta de nueva ciclovía en Anillo Periférico" deadline="15 de Diciembre, 2024" />
                        </div>
                    </ParticipationSection>

                    {/* Section 2: Suggestion Form */}
                     <ParticipationSection
                        icon={<MessageSquare className="text-imdut-secondary"/>}
                        title="Envía tu Propuesta"
                        description="Utiliza nuestro formulario para enviar ideas, sugerencias o identificar áreas de oportunidad en tu comunidad."
                    >
                        <form className="mt-6 space-y-4 bg-white p-6 rounded-lg border border-gray-200" onSubmit={e => e.preventDefault()}>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
                                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border" placeholder="Juan Pérez" />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                <input type="email" className="w-full border-gray-300 rounded-md shadow-sm p-2 border" placeholder="juan.perez@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tu Propuesta</label>
                                <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border h-28" placeholder="Describe tu idea para mejorar la movilidad..."></textarea>
                            </div>
                            <button className="w-full bg-imdut-primary text-white font-bold py-3 rounded-md hover:bg-opacity-90 transition-opacity">
                                Enviar Idea
                            </button>
                        </form>
                    </ParticipationSection>
                </div>
            </div>

        </div>
    );
};

const InfoCard: React.FC<{icon: React.ReactNode, title: string, description: string, highlight?: boolean}> = ({icon, title, description, highlight}) => (
    <div className={`p-6 rounded-xl shadow-lg transition-all hover:-translate-y-1 ${highlight ? 'bg-imdut-secondary text-imdut-gray' : 'bg-white text-gray-700'}`}>
        <div className={`mb-3 ${highlight ? '' : 'text-imdut-primary'}`}>{icon}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className={`text-sm ${highlight ? 'text-imdut-gray' : 'text-gray-500'}`}>{description}</p>
    </div>
);

const ParticipationSection: React.FC<{icon: React.ReactNode, title: string, description: string, children: React.ReactNode}> = ({icon, title, description, children}) => (
    <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 flex justify-center md:block">
            <div className="bg-white p-4 rounded-full shadow border">{icon}</div>
        </div>
        <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-500 mt-1">{description}</p>
            {children}
        </div>
    </div>
);

const ConsultationItem: React.FC<{title: string, deadline: string}> = ({title, deadline}) => (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow">
        <div>
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-red-600 font-medium">Fecha límite: {deadline}</p>
        </div>
        <button className="text-imdut-primary text-sm font-bold hover:underline">
            Participar
        </button>
    </div>
);

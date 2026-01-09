import React from 'react';
import { Users, FileText, Lightbulb, Mic } from 'lucide-react';

export const ParticipacionCiudadana: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            {/* Header */}
            <div className="relative bg-imdut-primary text-white py-20 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Participación Ciudadana</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">Tu voz es fundamental para construir una movilidad más humana, segura y eficiente para todos.</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-16">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-imdut-gray">Canales de Participación</h2>
                    <p className="text-gray-600 mt-2">Elige la forma que mejor se adapte a ti para transformar la movilidad.</p>
                </div>
                <div className="space-y-12">
                    <ParticipationSection
                        icon={<Mic className="text-imdut-primary"/>}
                        title="Consultas Públicas Abiertas"
                        description="Actualmente estamos recabando opiniones sobre los siguientes temas. Tu perspectiva es muy valiosa."
                    >
                        <div className="mt-4 space-y-3">
                            <ConsultationItem title="Reglamento para Vehículos de Movilidad Personal" deadline="30 de Noviembre, 2024" />
                            <ConsultationItem title="Propuesta de nueva ciclovía en Anillo Periférico" deadline="15 de Diciembre, 2024" />
                        </div>
                    </ParticipationSection>
                     <ParticipationSection
                        icon={<Lightbulb className="text-imdut-secondary"/>}
                        title="Buzón de Ideas"
                        description="¿Tienes una propuesta innovadora para mejorar la movilidad? Compártela con nuestro equipo de planeación y ayúdanos a mejorar."
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
                    <ParticipationSection
                        icon={<Users className="text-imdut-primary"/>}
                        title="Consejos Ciudadanos"
                        description="Forma parte de los órganos de participación que dan seguimiento a las políticas de movilidad. Publicaremos las próximas convocatorias en este espacio."
                    >
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <p className="text-sm text-blue-800">No hay convocatorias abiertas por el momento. ¡Vuelve pronto!</p>
                        </div>
                    </ParticipationSection>
                </div>
            </div>
        </div>
    );
};

const ParticipationSection: React.FC<{icon: React.ReactNode, title: string, description: string, children: React.ReactNode}> = ({icon, title, description, children}) => (
    <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="bg-white p-5 rounded-full shadow border">{icon}</div>
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-500 mt-2">{description}</p>
            <div className="mt-4">{children}</div>
        </div>
    </div>
);

const ConsultationItem: React.FC<{title: string, deadline: string}> = ({title, deadline}) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left hover:shadow-sm transition-shadow">
        <div>
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-red-600 font-medium mt-1">Fecha límite: {deadline}</p>
        </div>
        <button className="mt-3 md:mt-0 text-imdut-primary text-sm font-bold hover:underline flex-shrink-0 ml-4 bg-imdut-primary/10 px-4 py-2 rounded-full">
            Opinar Ahora
        </button>
    </div>
);
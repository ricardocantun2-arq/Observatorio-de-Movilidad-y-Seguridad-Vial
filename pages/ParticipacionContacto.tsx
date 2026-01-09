import React from 'react';
import { Users, FileText, Lightbulb, MessageSquare, Send, AlertTriangle } from 'lucide-react';

export const ParticipacionContacto: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            {/* Header */}
            <div className="relative bg-imdut-primary text-white py-20 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Participación y Contacto</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">Tu voz es fundamental. Reporta, opina y colabora para construir una movilidad más segura y eficiente.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Participation */}
                    <div>
                        <h2 className="text-3xl font-bold text-imdut-gray mb-2">Canales de Participación</h2>
                        <p className="text-gray-600 mb-8">Elige la forma que mejor se adapte a ti para transformar la movilidad.</p>
                        <div className="space-y-8">
                            <ParticipationSection
                                icon={<FileText className="text-imdut-primary"/>}
                                title="Consultas Abiertas"
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
                                description="¿Tienes una propuesta innovadora? Compártela con nuestro equipo de planeación y ayúdanos a mejorar."
                            >
                                 <button className="mt-4 w-full md:w-auto bg-imdut-secondary text-imdut-gray font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors text-sm">
                                    Enviar Propuesta
                                 </button>
                            </ParticipationSection>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-imdut-secondary">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <AlertTriangle className="text-imdut-secondary" /> 
                            Generar Reporte Ciudadano
                        </h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
                                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border" placeholder="Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Reporte</label>
                                <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-imdut-primary focus:border-imdut-primary">
                                    <option value="vial">Problema Vial / Bacheo</option>
                                    <option value="school">Entorno Escolar Seguro</option>
                                    <option value="transport">Transporte Público</option>
                                    <option value="traffic">Semáforos</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                                <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border h-24" placeholder="Detalles del incidente..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Evidencia (Opcional)</label>
                                <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-imdut-secondary/10 file:text-imdut-primary hover:file:bg-imdut-secondary/20"/>
                            </div>
                            <button className="w-full bg-imdut-primary text-white font-bold py-3 rounded-md hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <Send size={18} /> Enviar Reporte
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ParticipationSection: React.FC<{icon: React.ReactNode, title: string, description: string, children: React.ReactNode}> = ({icon, title, description, children}) => (
    <div className="flex gap-6">
        <div className="flex-shrink-0">
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
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-sm transition-shadow">
        <div>
            <p className="font-semibold text-gray-800 text-sm">{title}</p>
            <p className="text-xs text-red-600 font-medium mt-1">Fecha límite: {deadline}</p>
        </div>
        <button className="text-imdut-primary text-sm font-bold hover:underline flex-shrink-0 ml-4">
            Opinar
        </button>
    </div>
);

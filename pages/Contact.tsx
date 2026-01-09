import React, { useState } from 'react';
import { AlertTriangle, Send, Phone, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
    const [reportType, setReportType] = useState('vial');

    return (
        <div className="min-h-screen bg-[#F9F9F9] py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-imdut-gray">Centro de Atención Ciudadana</h1>
                    <p className="text-gray-600 mt-2">Estamos para escucharte. Reporta incidencias o solicita información.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Channels */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-imdut-primary transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Chat en Línea</h3>
                                    <p className="text-sm text-gray-500">Lunes a Viernes 8:00 - 20:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-imdut-primary transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">WhatsApp Oficial</h3>
                                    <p className="text-sm text-gray-500">Envía reportes con foto y ubicación</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-imdut-primary text-white p-6 rounded-xl shadow-lg">
                            <h3 className="font-bold mb-2">Oficina de Atención</h3>
                            <p className="text-sm opacity-90 mb-4">
                                Calle 00 x 00 y 00, Colonia Centro, Mérida, Yucatán.
                            </p>
                            <button className="text-xs bg-white text-imdut-primary px-3 py-1 rounded font-bold uppercase tracking-wider">
                                Ver Ubicación
                            </button>
                        </div>
                    </div>

                    {/* Report Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-imdut-secondary">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <AlertTriangle className="text-imdut-secondary" /> 
                            Generar Reporte
                        </h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Reporte</label>
                                <select 
                                    value={reportType} 
                                    onChange={(e) => setReportType(e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-imdut-primary focus:border-imdut-primary"
                                >
                                    <option value="vial">Problema Vial / Bacheo</option>
                                    <option value="school">Entorno Escolar Seguro</option>
                                    <option value="transport">Transporte Público</option>
                                    <option value="traffic">Semáforos</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
                                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border" placeholder="Calle, cruzamiento o referencia" />
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
}

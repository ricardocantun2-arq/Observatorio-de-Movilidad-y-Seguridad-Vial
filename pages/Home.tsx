import React from 'react';
import { SmartSearch } from '../components/SmartSearch';
import { ViewState } from '../types';
import { MOCK_TRAFFIC_DATA } from '../constants';
import { 
  Bike, School, BarChart2, BookOpen, Users,
  Map as MapIcon, Calendar, Activity, Sun, Wind, AlertTriangle
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

interface HomeProps {
  setView: (view: ViewState) => void;
}

const WidgetCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }> = ({ icon, title, children, className = '' }) => (
  <div className={`bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
        {icon}
        {title}
      </h3>
    </div>
    <div className="flex-grow flex flex-col justify-center">{children}</div>
  </div>
);

export const Home: React.FC<HomeProps> = ({ setView }) => {

  // Simulated real-time data
    const airQuality = {
      aqi: 45,
      city: 'Centro Histórico',
      getLevel: function() {
        if (this.aqi <= 50) return { label: 'Buena', textColor: 'text-green-600', ringColor: 'ring-green-500', ringBgColor: 'ring-green-200' };
        if (this.aqi <= 100) return { label: 'Moderada', textColor: 'text-yellow-600', ringColor: 'ring-yellow-500', ringBgColor: 'ring-yellow-200'};
        return { label: 'Mala', textColor: 'text-red-600', ringColor: 'ring-red-500', ringBgColor: 'ring-red-200' };
      }
    };
    const airQualityLevel = airQuality.getLevel();

    const weather = {
      temp: 32,
      feelsLike: 35,
      condition: 'Soleado',
      wind: '15 km/h NE',
      icon: <Sun size={40} className="text-yellow-500" />
    };

    const trafficIncidents = [
      { type: 'Accidente', location: 'Periférico km 23', time: 'hace 5 min', level: 'high' },
      { type: 'Cierre de Vía', location: 'Calle 60 x 57, Centro', time: 'hace 15 min', level: 'medium' },
      { type: 'Tráfico Lento', location: 'Av. Itzaes con Colón', time: 'ahora', level: 'low' },
    ];


  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-imdut-primary overflow-hidden">
        <img src="https://24horasyucatan.mx/wp-content/uploads/yucatan/2025/11/renac.jpg" alt="Mosaico decorativo del gobierno de Yucatán" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-imdut-primary/80"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-28 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
            Movilidad para el <span className="text-imdut-secondary">Bienestar</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
            Datos y análisis para una movilidad segura y sostenible en Yucatán.
          </p>
        </div>
      </div>

      {/* Smart Search Widget */}
      <SmartSearch />

      {/* Quick Access Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-imdut-gray mb-8 flex items-center gap-2 border-l-4 border-imdut-primary pl-4">
          Accesos Rápidos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <QuickAccessCard 
            icon={<MapIcon size={32} />} 
            title="Movilidad Metropolitana" 
            onClick={() => setView(ViewState.MOVILIDAD_METROPOLITANA)} 
          />
          <QuickAccessCard 
            icon={<BarChart2 size={32} />} 
            title="Siniestralidad Vial" 
            onClick={() => setView(ViewState.SINISTRALIDAD)} 
          />
           <QuickAccessCard 
            icon={<School size={32} />} 
            title="Entornos Escolares" 
            onClick={() => setView(ViewState.ENTORNOS_ESCOLARES)} 
          />
          <QuickAccessCard 
            icon={<Bike size={32} />} 
            title="Infraestructura Ciclista" 
            onClick={() => setView(ViewState.INFRAESTRUCTURA_CICLISTA)} 
          />
          <QuickAccessCard 
            icon={<Users size={32} />} 
            title="Participación Ciudadana" 
            onClick={() => setView(ViewState.PARTICIPACION_CIUDADANA)} 
            highlight
          />
        </div>
      </div>

      {/* Featured Publication */}
      <div className="bg-gray-200/50 py-16">
          <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                      <span className="text-sm font-bold text-imdut-primary uppercase">Publicación Destacada</span>
                      <h2 className="text-3xl font-bold text-imdut-gray mt-2">Plan Estatal de Entornos Escolares Seguros</h2>
                      <p className="mt-4 text-gray-600">
                          Análisis del polígono piloto Cinvestav-Tecnológico que sienta las bases para una movilidad más segura para nuestros estudiantes. Explora el diagnóstico completo, los hallazgos clave y el plan de acción multisectorial.
                      </p>
                      <button 
                          onClick={() => setView(ViewState.ENTORNOS_ESCOLARES)}
                          className="mt-6 bg-imdut-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                          <BookOpen size={18} />
                          Explorar el Visualizador
                      </button>
                  </div>
                  <div className="md:w-1/2 w-full">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM72ubo41_-gE6DLsOR7NIQHfmpFosa3u0DA&s" alt="Autobús del sistema de transporte Va y Ven en Mérida" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                  </div>
              </div>
          </div>
      </div>

      {/* Live Widgets Section */}
      <div className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-imdut-gray border-l-4 border-imdut-secondary pl-4">
                Monitoreo en Tiempo Real
              </h2>
              <p className="mt-2 text-gray-500 pl-5">Estado actual de la movilidad en la zona metropolitana</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                 Sistemas Operativos
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <WidgetCard icon={<Activity size={18} className="text-imdut-primary" />} title="Flujo Vehicular">
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={MOCK_TRAFFIC_DATA}>
                      <defs>
                        <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7A0E23" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#7A0E23" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#7A0E23" fillOpacity={1} fill="url(#colorTraffic)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-xs text-center text-gray-500">Últimas 12 horas</div>
              </WidgetCard>

              <WidgetCard icon={<Sun size={18} className="text-yellow-500" />} title="Clima Actual">
                <div className="text-center flex flex-col items-center gap-2">
                    {weather.icon}
                    <div className="text-4xl font-bold text-gray-800">{weather.temp}°C</div>
                    <div className="font-semibold text-gray-600">{weather.condition}</div>
                    <div className="text-xs text-gray-500">
                        Sensación: {weather.feelsLike}°C / Viento: {weather.wind}
                    </div>
                </div>
              </WidgetCard>

              <WidgetCard icon={<span className="text-blue-500">☁️</span>} title="Calidad del Aire">
                 <div className="flex items-center justify-center">
                    <div className={`relative w-32 h-32 flex items-center justify-center ring-8 ${airQualityLevel.ringBgColor} rounded-full`}>
                       <div className={`absolute inset-0 ring-8 ${airQualityLevel.ringColor} rounded-full ring-inset`}></div>
                       <div className="text-center">
                         <span className="block text-3xl font-bold text-gray-800">{airQuality.aqi}</span>
                         <span className={`text-xs ${airQualityLevel.textColor} font-bold uppercase`}>{airQualityLevel.label}</span>
                       </div>
                    </div>
                 </div>
                 <p className="mt-4 text-xs text-gray-500 text-center">{airQuality.city}</p>
              </WidgetCard>
              
              <WidgetCard icon={<AlertTriangle size={18} className="text-orange-500" />} title="Hechos de Tránsito">
                <ul className="space-y-3">
                  {trafficIncidents.map((incident, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${incident.level === 'high' ? 'bg-red-500' : incident.level === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                        <div>
                            <p className="font-semibold text-gray-800">{incident.type}</p>
                            <p className="text-xs text-gray-500">{incident.location} - <span className="italic">{incident.time}</span></p>
                        </div>
                    </li>
                  ))}
                </ul>
              </WidgetCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickAccessCard: React.FC<{ icon: React.ReactNode; title: string; onClick: () => void; highlight?: boolean }> = ({ icon, title, onClick, highlight }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1
      ${highlight 
        ? 'bg-imdut-primary text-white shadow-lg hover:bg-opacity-90' 
        : 'bg-white text-gray-600 shadow border border-gray-100 hover:border-imdut-secondary hover:text-imdut-primary'
      }`}
  >
    <div className="mb-3">{icon}</div>
    <span className="text-sm font-semibold text-center">{title}</span>
  </button>
);
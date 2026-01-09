import React, { useState } from 'react';
import { Search, Loader2, MapPin, Bus, Bike, Footprints } from 'lucide-react';
import { generateSmartRoute } from '../services/geminiService';
import { ServiceRoute } from '../types';

export const SmartSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [routes, setRoutes] = useState<ServiceRoute[] | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setRoutes(null);
    try {
      const results = await generateSmartRoute(query);
      setRoutes(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto -mt-8 relative z-10 px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-imdut-secondary">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          ¿A dónde quieres ir hoy?
        </label>
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej: De Plaza Grande a Puerto Progreso..."
            className="w-full p-4 pr-14 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-imdut-primary focus:border-transparent outline-none shadow-inner"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-2 bottom-2 bg-imdut-primary text-white p-2 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Search />}
          </button>
        </form>

        {/* Results Area */}
        {routes && (
          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <h3 className="text-sm font-bold text-imdut-primary uppercase tracking-wide">Rutas Sugeridas (IA)</h3>
            {routes.length === 0 ? (
               <p className="text-gray-500 italic">No se encontraron rutas para tu búsqueda.</p>
            ) : (
                routes.map((route, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2 text-imdut-primary font-semibold">
                            <MapPin size={18} />
                            <span>{route.from} <span className="text-gray-400 mx-1">→</span> {route.to}</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                            {route.duration}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                            {route.modes.some(m => m.toLowerCase().includes('bus') || m.includes('Va-y-Ven')) && <Bus size={16} />}
                            {route.modes.some(m => m.toLowerCase().includes('bici')) && <Bike size={16} />}
                            {route.modes.some(m => m.toLowerCase().includes('caminata')) && <Footprints size={16} />}
                            <span className="ml-1">{route.modes.join(' + ')}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="font-medium text-imdut-gray">{route.cost}</span>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="text-xs text-green-600 flex items-center gap-1">
                             🌱 {route.carbonFootprint} CO2
                        </span>
                    </div>
                </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

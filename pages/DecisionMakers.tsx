import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Lock, Download } from 'lucide-react';

// Simulated Auth Component
const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <div className="min-h-[600px] flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full border-t-4 border-imdut-primary">
      <div className="flex justify-center mb-6">
        <div className="bg-gray-200 p-4 rounded-full">
            <Lock size={32} className="text-imdut-gray" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Acceso Institucional</h2>
      <p className="text-center text-gray-500 mb-6 text-sm">Portal para tomadores de decisiones y planeación estratégica.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Credencial de Funcionario</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-imdut-primary focus:border-imdut-primary" placeholder="ID-IMDUT-XXXX" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-imdut-gray text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors font-semibold">
          Entrar al Dashboard
        </button>
      </form>
    </div>
  </div>
);

export const DecisionMakers: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const data = [
    { name: 'Lun', users: 4000, capacity: 2400 },
    { name: 'Mar', users: 3000, capacity: 1398 },
    { name: 'Mie', users: 2000, capacity: 9800 },
    { name: 'Jue', users: 2780, capacity: 3908 },
    { name: 'Vie', users: 1890, capacity: 4800 },
    { name: 'Sab', users: 2390, capacity: 3800 },
    { name: 'Dom', users: 3490, capacity: 4300 },
  ];

  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border-l-4 border-imdut-secondary">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Ejecutivo</h1>
            <p className="text-sm text-gray-500">Bienvenido, Director de Planeación. Última actualización: Hoy 08:30 AM</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50">
            <Download size={16} /> Exportar Reporte
          </button>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500">Presupuesto Ejercido</div>
            <div className="text-2xl font-bold text-imdut-primary mt-1">68%</div>
            <div className="text-xs text-green-500 mt-1">↑ 2% vs mes anterior</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500">Polígonos Atendidos</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">1</div>
            <div className="text-xs text-gray-400 mt-1">Piloto Cinvestav-Tec.</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500">Reportes Ciudadanos</div>
            <div className="text-2xl font-bold text-orange-500 mt-1">145</div>
            <div className="text-xs text-red-500 mt-1">↑ 15% esta semana</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500">Cumplimiento Normativo</div>
            <div className="text-2xl font-bold text-green-600 mt-1">98%</div>
            <div className="text-xs text-gray-400 mt-1">Auditoría en curso</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm h-96">
            <h3 className="font-bold text-gray-700 mb-4">Demanda vs Capacidad (Semanal)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" name="Usuarios" fill="#7A0E23" radius={[4, 4, 0, 0]} />
                <Bar dataKey="capacity" name="Capacidad" fill="#C9A040" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm h-96">
            <h3 className="font-bold text-gray-700 mb-4">Tendencia de Incidentes Viales</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" name="Incidentes" stroke="#444444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

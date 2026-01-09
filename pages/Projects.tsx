import React, { useState, useMemo } from 'react';
import { PROJECTS_MOCK } from '../constants';
import { ProjectCardProps } from '../types';
import { Briefcase, Filter } from 'lucide-react';

// Re-usable project card component
const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
        <div className="relative h-48 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${project.type === 'Local' ? 'bg-blue-600' : 'bg-green-600'}`}>
                {project.type}
            </div>
        </div>
        <div className="p-5">
            <h3 className="font-bold text-lg text-gray-800 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4 h-10">{project.municipality}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                    className={`h-2.5 rounded-full ${project.status === 'Finalizado' ? 'bg-green-500' : 'bg-imdut-secondary'}`} 
                    style={{ width: `${project.progress}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-xs font-medium">
                <span className={`${project.status === 'En Ejecución' ? 'text-blue-600' : project.status === 'Finalizado' ? 'text-green-600' : 'text-orange-500'}`}>
                    {project.status}
                </span>
                <span>{project.progress}%</span>
            </div>
        </div>
    </div>
);

export const Projects: React.FC = () => {
    const [filterType, setFilterType] = useState<'All' | 'Local' | 'Metropolitano'>('All');
    const [filterStatus, setFilterStatus] = useState<'All' | 'En Ejecución' | 'Planeación' | 'Finalizado'>('All');
    
    const filteredProjects = useMemo(() => {
        return PROJECTS_MOCK.filter(p => {
            const typeMatch = filterType === 'All' || p.type === filterType;
            const statusMatch = filterStatus === 'All' || p.status === filterStatus;
            return typeMatch && statusMatch;
        });
    }, [filterType, filterStatus]);

    const FilterButton: React.FC<{label: string, active: boolean, onClick: () => void}> = ({ label, active, onClick }) => (
        <button 
            onClick={onClick}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active 
                ? 'bg-imdut-primary text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20">
            <div className="bg-white shadow-sm py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-imdut-primary flex items-center gap-3"><Briefcase />Proyectos de Movilidad</h1>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                        Explora las iniciativas que están transformando la movilidad en Yucatán.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8">
                {/* Filters */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
                    <div className="flex items-center gap-3">
                        <Filter size={18} className="text-imdut-primary" />
                        <h3 className="font-semibold text-gray-700">Filtrar:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-bold text-gray-500 uppercase mr-2 self-center">Tipo</span>
                      <FilterButton label="Todos" active={filterType === 'All'} onClick={() => setFilterType('All')} />
                      <FilterButton label="Local" active={filterType === 'Local'} onClick={() => setFilterType('Local')} />
                      <FilterButton label="Metropolitano" active={filterType === 'Metropolitano'} onClick={() => setFilterType('Metropolitano')} />
                    </div>
                     <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-wrap gap-2">
                       <span className="text-sm font-bold text-gray-500 uppercase mr-2 self-center">Estatus</span>
                      <FilterButton label="Todos" active={filterStatus === 'All'} onClick={() => setFilterStatus('All')} />
                      <FilterButton label="En Ejecución" active={filterStatus === 'En Ejecución'} onClick={() => setFilterStatus('En Ejecución')} />
                      <FilterButton label="Planeación" active={filterStatus === 'Planeación'} onClick={() => setFilterStatus('Planeación')} />
                      <FilterButton label="Finalizado" active={filterStatus === 'Finalizado'} onClick={() => setFilterStatus('Finalizado')} />
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((proj, idx) => (
                            <ProjectCard key={idx} project={proj} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-gray-600">No se encontraron proyectos</h3>
                        <p className="text-gray-500 mt-2">Intenta ajustar los filtros de búsqueda.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
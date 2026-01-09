import { ViewState, NavItem, ChartDataPoint, ProjectCardProps } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: ViewState.HOME, label: 'Inicio' },
  { id: ViewState.MOVILIDAD_METROPOLITANA, label: 'Movilidad Metropolitana' },
  {
    id: ViewState.VISUALIZADORES,
    label: 'Visualizadores',
    children: [
      { id: ViewState.SINISTRALIDAD, label: 'Siniestralidad Vial' },
      { id: ViewState.ENTORNOS_ESCOLARES, label: 'Entornos Escolares Seguros' },
      { id: ViewState.INFRAESTRUCTURA_CICLISTA, label: 'Infraestructura Ciclista' },
      { id: ViewState.ORIGEN_DESTINO, label: 'Matrices Origen-Destino' },
    ]
  },
  { id: ViewState.REGULATIONS, label: 'Normativa' },
  { id: ViewState.PARTICIPACION_CIUDADANA, label: 'Participación Ciudadana' },
  { id: ViewState.DECISION_MAKERS, label: 'Gestión Interna', isPrivate: true },
];

export const MOCK_TRAFFIC_DATA: ChartDataPoint[] = [
  { name: '06:00', value: 20 },
  { name: '09:00', value: 85 },
  { name: '12:00', value: 45 },
  { name: '15:00', value: 60 },
  { name: '18:00', value: 90 },
  { name: '21:00', value: 30 },
];

export const MOCK_MODAL_SPLIT: ChartDataPoint[] = [
  { name: 'Transporte Público', value: 45 },
  { name: 'Vehículo Privado', value: 35 },
  { name: 'Bicicleta', value: 8 },
  { name: 'Peatonal', value: 12 },
];

// FIX: Add and export PROJECTS_MOCK to provide data for the projects page
// and resolve the import error in pages/Projects.tsx.
export const PROJECTS_MOCK: ProjectCardProps[] = [
    {
        image: 'https://images.unsplash.com/photo-1618828221212-9a3b19a1a1f2?q=80&w=2070&auto=format&fit=crop',
        title: 'Ampliación Ciclovía Paseo de Montejo',
        type: 'Metropolitano',
        municipality: 'Mérida',
        status: 'En Ejecución',
        progress: 75,
    },
    {
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
        title: 'Estudio de Reordenamiento de Rutas de Transporte Público',
        type: 'Metropolitano',
        municipality: 'Mérida, Kanasín, Umán',
        status: 'Planeación',
        progress: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1593106578502-27fa84f9d467?q=80&w=2070&auto=format&fit=crop',
        title: 'Implementación de Semáforos Inteligentes Centro Histórico',
        type: 'Local',
        municipality: 'Mérida',
        status: 'Finalizado',
        progress: 100,
    },
    {
        image: 'https://images.unsplash.com/photo-1506505711281-b512b48ebb22?q=80&w=2070&auto=format&fit=crop',
        title: 'Corredor Peatonal Seguro en Progreso',
        type: 'Local',
        municipality: 'Progreso',
        status: 'En Ejecución',
        progress: 50,
    },
    {
        image: 'https://images.unsplash.com/photo-1621992683838-56114a8f33c3?q=80&w=1974&auto=format&fit=crop',
        title: 'Plan Maestro de Movilidad Escolar',
        type: 'Metropolitano',
        municipality: 'Zona Metropolitana de Mérida',
        status: 'Planeación',
        progress: 10,
    },
    {
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1920&auto=format&fit=crop',
        title: 'Construcción de Terminal de "Va y Ven" en Umán',
        type: 'Local',
        municipality: 'Umán',
        status: 'Finalizado',
        progress: 100,
    },
];
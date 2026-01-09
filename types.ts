export enum ViewState {
  HOME = 'HOME',
  
  // Top Level
  MOVILIDAD_METROPOLITANA = 'MOVILIDAD_METROPOLITANA',
  REGULATIONS = 'REGULATIONS',
  PARTICIPACION_CIUDADANA = 'PARTICIPACION_CIUDADANA',
  DECISION_MAKERS = 'DECISION_MAKERS',
  
  // Visualizadores (parent and children)
  VISUALIZADORES = 'VISUALIZADORES',
  SINISTRALIDAD = 'SINISTRALIDAD',
  ENTORNOS_ESCOLARES = 'ENTORNOS_ESCOLARES',
  INFRAESTRUCTURA_CICLISTA = 'INFRAESTRUCTURA_CICLISTA',
  ORIGEN_DESTINO = 'ORIGEN_DESTINO',
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon?: string;
  isPrivate?: boolean;
  children?: NavItem[]; // For dropdowns
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
}

export interface ServiceRoute {
  id: string;
  from: string;
  to: string;
  duration: string;
  modes: string[];
  cost: string;
  carbonFootprint: string;
}

// FIX: Export ProjectCardProps interface to define the shape for project data
// and resolve the import error in pages/Projects.tsx.
export interface ProjectCardProps {
  image: string;
  title: string;
  type: 'Local' | 'Metropolitano';
  municipality: string;
  status: 'En Ejecución' | 'Planeación' | 'Finalizado';
  progress: number;
}
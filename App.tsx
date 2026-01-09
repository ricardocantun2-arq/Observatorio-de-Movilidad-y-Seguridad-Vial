import React, { useState } from 'react';
import { ViewState } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MovilidadMetropolitana } from './pages/MovilidadMetropolitana';
import { DecisionMakers } from './pages/DecisionMakers';
import { Regulations } from './pages/Regulations';
import { Siniestralidad } from './pages/Siniestralidad';
import { EntornosEscolares } from './pages/EntornosEscolares';
import { InfraestructuraCiclista } from './pages/InfraestructuraCiclista';
import { ParticipacionCiudadana } from './pages/ParticipacionCiudadana';
import { OrigenDestino } from './pages/OrigenDestino';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home setView={setCurrentView} />;
      case ViewState.MOVILIDAD_METROPOLITANA:
        return <MovilidadMetropolitana />;
      case ViewState.SINISTRALIDAD:
        return <Siniestralidad />;
      case ViewState.ENTORNOS_ESCOLARES:
        return <EntornosEscolares />;
      case ViewState.INFRAESTRUCTURA_CICLISTA:
        return <InfraestructuraCiclista />;
      case ViewState.ORIGEN_DESTINO:
        return <OrigenDestino />;
      case ViewState.REGULATIONS:
        return <Regulations />;
      case ViewState.PARTICIPACION_CIUDADANA:
        return <ParticipacionCiudadana />;
      case ViewState.DECISION_MAKERS:
        return <DecisionMakers />;
      default:
        return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navigation currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
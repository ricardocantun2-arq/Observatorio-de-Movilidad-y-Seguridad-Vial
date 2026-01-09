import React, { useState } from 'react';
import { ViewState, NavItem } from '../types';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const NavLink: React.FC<{
  item: NavItem;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  isMobile?: boolean;
}> = ({ item, currentView, setView, isMobile = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isParentActive = hasChildren && item.children.some(child => child.id === currentView);

  const handleParentClick = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  if (hasChildren) {
    return (
      <div 
        className="relative" 
        onMouseEnter={() => !isMobile && setIsDropdownOpen(true)} 
        onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
      >
        <button
          onClick={handleParentClick}
          className={`flex items-center gap-1 w-full text-left transition-colors ${
            isMobile
            ? `px-3 py-4 rounded-md text-base font-medium ${isParentActive ? 'text-imdut-primary bg-red-50' : 'text-gray-600'}`
            : `px-3 py-2 rounded-md text-sm font-medium ${isParentActive ? 'text-imdut-primary bg-red-50' : 'text-gray-600 hover:text-imdut-primary hover:bg-gray-50'}`
          }`}
        >
          {item.label}
          <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          isMobile ? (
            <div className="pl-4 border-l-2 border-gray-200 ml-3">
              {item.children!.map(child => <NavLink key={child.id} item={child} currentView={currentView} setView={setView} isMobile />)}
            </div>
          ) : (
            <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
              {item.children!.map(child => (
                <button
                  key={child.id}
                  onClick={() => setView(child.id)}
                  className={`block w-full text-left px-4 py-2 text-sm ${currentView === child.id ? 'bg-red-50 text-imdut-primary' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {child.label}
                </button>
              ))}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => setView(item.id)}
      className={`block w-full text-left transition-colors ${
        isMobile
        ? `px-3 py-4 rounded-md text-base font-medium ${currentView === item.id ? 'text-imdut-primary bg-red-50' : 'text-gray-600 hover:text-imdut-primary hover:bg-gray-50'}`
        : `px-3 py-2 rounded-md text-sm font-medium ${currentView === item.id ? 'text-imdut-primary bg-red-50' : 'text-gray-600 hover:text-imdut-primary hover:bg-gray-50'}`
      }`}
    >
      {item.label}
    </button>
  );
};


export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-imdut-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="flex items-center gap-3">
               <span className="text-2xl font-bold text-imdut-primary tracking-tight">IMDUT</span>
               <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
               <span className="hidden md:block text-sm font-semibold text-imdut-gray">Observatorio de Movilidad y Seguridad Vial</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.filter(item => !item.isPrivate).map((item) => (
              <NavLink key={item.id} item={item} currentView={currentView} setView={setView} />
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <button
               onClick={() => setView(ViewState.DECISION_MAKERS)}
               className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                 currentView === ViewState.DECISION_MAKERS
                  ? 'bg-imdut-gray text-white border-imdut-gray'
                  : 'text-imdut-gray border-imdut-gray hover:bg-gray-100'
               }`}
            >
              <ShieldCheck size={14} />
              Acceso Institucional
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-imdut-primary hover:bg-gray-100 focus:outline-none"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                currentView={currentView}
                setView={(view) => {
                  if (!item.children) setIsMobileOpen(false);
                  setView(view);
                }}
                isMobile
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
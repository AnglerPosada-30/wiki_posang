import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, Server, Network, Shield, MonitorPlay, Users } from 'lucide-react';

// Importamos el componente que da estructura a la página de inicio.
import Inicio from './components/Inicio';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans">
        
        {/* Menú Lateral (Sidebar) */}
        <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-10">
          <div className="p-6 border-b border-slate-800 bg-slate-950">
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="text-brand-500" size={24} />
              Wiki IT
            </h1>
            <p className="text-xs text-slate-400 mt-1.5 ml-8">Windows Server & Redes</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
            <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 mt-2">Navegación</p>
            
            {/* Enlace al Inicio */}
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <Home size={20} className="text-brand-400" />
              <span className="font-medium text-sm">Inicio y Topología</span>
            </NavLink>

            {/* Marcadores de posición para las siguientes fases */}
            <NavLink 
              to="/instalacion" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <MonitorPlay size={20} className="text-emerald-400" />
              <span className="font-medium text-sm">2.1.1 Instalación</span>
            </NavLink>

            <NavLink 
              to="/active-directory" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <Users size={20} className="text-blue-400" />
              <span className="font-medium text-sm">2.1.2 Active Directory</span>
            </NavLink>
            
            {/* Puedes agregar el resto de enlaces aquí después */}
          </nav>
        </aside>

        {/* Contenedor Principal donde cargan las páginas */}
        <main className="flex-1 overflow-y-auto bg-slate-50">
          <div className="max-w-5xl mx-auto p-8 md:p-12">
            <Routes>
              {/* Aquí le decimos a React que cuando la ruta sea "/" muestre tu componente Inicio */}
              <Route path="/" element={<Inicio />} />
              
              {/* Rutas en construcción para los siguientes pasos */}
              <Route path="/instalacion" element={
                <div className="flex flex-col items-center justify-center h-64 text-slate-500">
                  <MonitorPlay size={48} className="mb-4 text-slate-300" />
                  <h2 className="text-2xl font-bold">Instalación Básica</h2>
                  <p>Próximamente crearemos este componente...</p>
                </div>
              } />
              
              <Route path="/active-directory" element={
                <div className="flex flex-col items-center justify-center h-64 text-slate-500">
                  <Users size={48} className="mb-4 text-slate-300" />
                  <h2 className="text-2xl font-bold">Active Directory</h2>
                  <p>Próximamente crearemos este componente...</p>
                </div>
              } />
            </Routes>
          </div>
        </main>
        
      </div>
    </Router>
  );
}
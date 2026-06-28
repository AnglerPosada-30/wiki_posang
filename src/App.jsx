import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, Server, Network, Shield, MonitorPlay, Users, Monitor, ShieldAlert, Menu, X, Code } from 'lucide-react';

// Importamos los componentes de las páginas
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';
import ActiveDirectory from './components/ActiveDirectory';
import ClienteDominio from './components/ClienteDominio';
import ServiciosRed from './components/ServiciosRed';
import PoliticasGrupo from './components/PoliticasGrupos';

export default function App() {
  // Estado para controlar si el menú lateral está abierto o cerrado
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
        
        {/* Menú Lateral (Sidebar) Animado */}
        <aside 
          className={`bg-slate-900 text-slate-300 flex flex-col shadow-xl z-20 transition-all duration-300 ease-in-out shrink-0 overflow-hidden ${
            isSidebarOpen ? 'w-72' : 'w-0'
          }`}
        >
          {/* Contenedor interno fijo para evitar que los textos se deformen al cerrar */}
          <div className="w-72 flex flex-col h-full">
            
            <div className="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Server className="text-brand-500" size={24} />
                  Wiki PosAng
                </h1>
                <p className="text-xs text-slate-400 mt-1.5 ml-8">Windows Server & Redes</p>
              </div>
              {/* Botón para cerrar el menú */}
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="text-slate-400 hover:text-white transition-colors"
                title="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
              <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 mt-2">Navegación</p>
              
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <Home size={20} className="text-brand-400" />
                <span className="font-medium text-sm">Inicio y Topología</span>
              </NavLink>

              <NavLink 
                to="/instalacion" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <MonitorPlay size={20} className="text-emerald-400" />
                <span className="font-medium text-sm">Instalación</span>
              </NavLink>
              
              <NavLink 
                to="/active-directory" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <Users size={20} className="text-blue-400" />
                <span className="font-medium text-sm">Active Directory</span>
              </NavLink>

              <NavLink 
                to="/cliente-dominio" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <Monitor size={20} className="text-cyan-400" />
                <span className="font-medium text-sm"> Conectar Cliente</span>
              </NavLink>
              
              <NavLink 
                to="/servicios-red" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <Network size={20} className="text-purple-400" />
                <span className="font-medium text-sm">Servicios (DHCP)</span>
              </NavLink>

              <NavLink 
                to="/politicas-grupo" 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
                }
              >
                <ShieldAlert size={20} className="text-emerald-400" />
                <span className="font-medium text-sm"> Políticas (GPO)</span>
              </NavLink>
            </nav>

            {/* SECCIÓN INFERIOR: Botón de GitHub */}
            <div className="p-4 mt-auto border-t border-slate-800 bg-slate-900">
              <a
                // URL del repositorio de GitHub.
                href="https://github.com/AnglerPosada-30/wiki_posang.git" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-brand-600 text-slate-300 hover:text-white shadow-sm border border-slate-700 hover:border-transparent"
              >
                <Code size={20} />
                <span className="font-medium text-sm">Ver código fuente</span>
              </a>
            </div>

          </div>
        </aside>

        {/* Contenedor Principal donde cargan las páginas */}
        <main className="flex-1 overflow-y-auto bg-slate-50 relative">
          
          {/* Botón flotante para ABRIR el menú (Solo aparece si está cerrado) */}
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="absolute top-6 left-6 z-50 p-2.5 bg-slate-900 text-white rounded-lg shadow-md hover:bg-slate-800 transition-colors"
              title="Abrir menú"
            >
              <Menu size={24} />
            </button>
          )}

          {/* Área de Rutas (Con un poco de padding extra arriba por si el botón de menú se sobrepone) */}
          <div className="max-w-5xl mx-auto p-8 md:p-12 pt-20 md:pt-12">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/instalacion" element={<Instalacion />} />
              <Route path="/active-directory" element={<ActiveDirectory />} />
              <Route path="/cliente-dominio" element={<ClienteDominio />} />
              <Route path="/servicios-red" element={<ServiciosRed />} />
              <Route path="/politicas-grupo" element={<PoliticasGrupo />} />
            </Routes>
          </div>
        </main>
        
      </div>
    </Router>
  );
}
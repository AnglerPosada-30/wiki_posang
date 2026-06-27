import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, Server, Network, Shield, MonitorPlay, Users, Monitor, ShieldAlert } from 'lucide-react';

// Importamos el componente que da estructura a la página de inicio.
import Inicio from './components/Inicio';

// Importamos el componente que da estructura a la página de instalación.
import Instalacion from './components/Instalacion';

// Importamos el componente que da estructura a la página de Active Directory.
import ActiveDirectory from './components/ActiveDirectory';

// Importamos el componente que da estructura a la página de Cliente Dominio.
import ClienteDominio from './components/ClienteDominio';

// Importamos el componente que da estructura a la página de Configuración de Red.
import ServiciosRed from './components/ServiciosRed';

// Importamos el componente que da estructura a la página de Políticas de Grupo.
import PoliticasGrupo from './components/PoliticasGrupos';



export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans">
        
        {/* Menú Lateral (Sidebar) */}
        <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-10">
          <div className="p-6 border-b border-slate-800 bg-slate-950">
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="text-brand-500" size={24} />
              Wiki PosAng
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

            {/* Enlace a Instalación */}
            <NavLink 
              to="/instalacion" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >

              <MonitorPlay size={20} className="text-emerald-400" />
              <span className="font-medium text-sm">Instalación</span>
            </NavLink>
            
            {/* Enlace a Active Directory */}
            <NavLink 
              to="/active-directory" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <Users size={20} className="text-blue-400" />
              <span className="font-medium text-sm">Active Directory</span>
            </NavLink>
            

            {/* Enlace a Cliente Dominio */}

            <NavLink 
              to="/cliente-dominio" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <Monitor size={20} className="text-cyan-400" />
              <span className="font-medium text-sm"> Conectar Cliente</span>
            </NavLink>
            
            {/* Enlace a Servicios de Red */}

            <NavLink 
              to="/servicios-red" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-brand-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`
              }
            >
              <Network size={20} className="text-purple-400" />
              <span className="font-medium text-sm">Servicios (DHCP)</span>
            </NavLink>

            {/* Enlace a Políticas de Grupo */}

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
        </aside>


        {/* Contenedor Principal donde cargan las páginas */}
        <main className="flex-1 overflow-y-auto bg-slate-50">
          <div className="max-w-5xl mx-auto p-8 md:p-12">
            <Routes>
              {/* Aquí le decimos a React que cuando la ruta sea "/" muestre tu componente Inicio */}
              <Route path="/" element={<Inicio />} />
              
              {/* Ruta para Instalación */}
              <Route path="/instalacion" element={<Instalacion />} />
              
              {/* Ruta para Active Directory */}
              <Route path="/active-directory" element={<ActiveDirectory />} />

              {/* Ruta para Cliente Dominio */}
              <Route path="/cliente-dominio" element={<ClienteDominio />} />

              {/* Ruta para Servicios de Red */}
              <Route path="/servicios-red" element={<ServiciosRed />} />

              {/* Ruta para Políticas de Grupo */}
              <Route path="/politicas-grupo" element={<PoliticasGrupo />} />
            </Routes>
          </div>
        </main>
        
      </div>
    </Router>
  );
}
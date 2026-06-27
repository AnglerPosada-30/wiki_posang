import React from 'react';
import { ShieldAlert, HelpCircle, Server, Monitor, Terminal, Lightbulb, Lock } from 'lucide-react';

export default function PoliticasGrupo() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Encabezado */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <ShieldAlert className="text-emerald-400" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">
             Políticas de Grupo (GPO)
          </h2>
        </div>
        
        <div className="p-6 md:p-8 bg-emerald-50/30">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <HelpCircle className="text-emerald-600" size={24} />
            ¿Qué haremos aquí de forma sencilla?
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            A los jefes de informática no les gusta que los empleados anden desconfigurando los computadores. Para evitar ir puesto por puesto prohibiendo cosas, usaremos la "magia" del servidor. Crearemos una regla en el Servidor que viajará por los cables y le bloqueará el acceso al <strong>'Panel de Control'</strong> a todos los empleados del departamento de Ventas.
          </p>
        </div>
      </div>

      {/* Guía Paso a Paso */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-10">
        
        {/* Paso 1: Configuración en el Servidor */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 border-b border-slate-100 pb-4">
            <Server className="text-emerald-600" size={28} />
            Configuración en el servidor (SRV-DC01)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ol className="list-decimal ml-5 space-y-3 text-slate-700 text-sm">
              <li>Abre el <strong>Administrador del servidor</strong>, selecciona <strong>Herramientas</strong> y luego <strong>Administración de directivas de grupo</strong>.</li>
              <li>En el panel izquierdo, despliega la siguiente ruta: <br/>
                <code className="bg-slate-100 text-emerald-700 px-2 py-1 rounded block mt-1">Bosque: inacap.local → Dominios → inacap.local</code>
              </li>
              <li>Busca la Unidad Organizativa <strong>Ventas</strong> que creaste anteriormente. Haz clic derecho sobre ella y selecciona <strong>Crear un GPO en este dominio y vincularlo aquí...</strong></li>
              <li>Asigna el nombre <strong>GPO-Ventas</strong> y haz clic en <strong>Aceptar</strong>.</li>
              <li>Haz clic derecho sobre la nueva directiva <strong>GPO-Ventas</strong> y selecciona <strong>Editar</strong>.</li>
              <li>En la ventana del Editor, navega hasta: <br/>
                <code className="bg-slate-100 text-emerald-700 px-2 py-1 rounded block mt-1">Configuración de usuario → Directivas → Plantillas administrativas → Panel de control</code>
              </li>
              <li>En el panel derecho, busca la opción <strong>Prohibir el acceso al Panel de control y a la configuración de PC</strong> y haz doble clic sobre ella.</li>
              <li>Selecciona la opción <strong>Habilitada</strong>, luego haz clic en <strong>Aplicar</strong> y finalmente en <strong>Aceptar</strong>. Una vez guardados los cambios, puedes cerrar el editor.</li>
            </ol>

            <div className="grid grid-cols-1 gap-3">
              <img src="/img/img_gpo/herramientas.png" alt="Herramientas GPO" className="rounded-lg border border-slate-200 w-full shadow-sm" />
              <img src="/img/img_gpo/asignar_nombre.png" alt="Asignar nombre a GPO" className="rounded-lg border border-slate-200 w-full shadow-sm" />
              <img src="/img/img_gpo/prohibir_acceso.png" alt="Prohibir acceso" className="rounded-lg border border-slate-200 w-full shadow-sm" />
            </div>
          </div>
        </div>

        {/* Paso 2: Aplicar en el Cliente */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 border-b border-slate-100 pb-4">
            <Monitor className="text-emerald-600" size={28} />
            Aplicar la política en el equipo cliente (PC01)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <ol className="list-decimal ml-5 space-y-3 text-slate-700 text-sm">
                <li>Inicia sesión en el equipo cliente con un usuario perteneciente al dominio (por ejemplo, el usuario creado en la Unidad Organizativa <strong>Ventas</strong>).</li>
                <li>Abre el símbolo del sistema (<strong>CMD</strong>) presionando <strong>Win + R</strong>, escribe <code>cmd</code> y presiona <strong>Enter</strong>.</li>
                <li>Ejecuta el siguiente comando para actualizar las políticas del dominio:</li>
              </ol>
              
              <div className="bg-slate-900 rounded-lg p-4 ml-5 flex items-center gap-3 shadow-inner">
                <Terminal className="text-emerald-400" size={20} />
                <code className="text-emerald-400 font-mono text-sm">gpupdate /force</code>
              </div>

              <ol className="list-decimal ml-5 space-y-3 text-slate-700 text-sm" start="4">
                <li>Espera a que el proceso finalice correctamente. Luego, cierra la sesión del usuario e inicia sesión nuevamente para que los cambios se apliquen por completo.</li>
                <li>Finalmente, intenta abrir el <strong>Panel de control</strong> o la <strong>Configuración de Windows</strong>. Si la política se aplicó correctamente, aparecerá un mensaje indicando que el acceso ha sido restringido por el administrador del sistema.</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <img src="/img/img_gpo/gpupdate.png" alt="Comando gpupdate" className="rounded-lg border border-slate-200 w-full shadow-sm" />
              <img src="/img/img_gpo/panel_control.png" alt="Acceso al Panel de Control" className="rounded-lg border border-slate-200 w-full shadow-sm" />
              <img src="/img/img_gpo/accion_denegada.png" alt="Acción Denegada" className="rounded-lg border border-slate-200 w-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Explicación Final */}
      <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200 shadow-sm relative overflow-hidden">
        <Lock className="absolute -right-4 -bottom-4 text-emerald-100/50" size={120} />
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
            <Lightbulb className="text-amber-500" size={24} />
            ¿Por qué hacemos esto?
          </h3>
          <p className="text-emerald-800 leading-relaxed text-sm text-justify mb-4">
            <strong>GPO</strong> significa "Objeto de Directiva de Grupo". Es como un sistema de altoparlantes en nuestra oficina virtual. En lugar de ir máquina por máquina, el Administrador usa el altoparlante y dice: <em>"Nadie en Ventas puede usar el Panel de Control"</em>. 
          </p>
          <p className="text-emerald-800 leading-relaxed text-sm text-justify">
            Y de forma instantánea, todas las computadoras acatan la orden. Al aplicar esta regla específicamente en la carpeta de 'Ventas', nos aseguramos de no bloquearle el computador, por ejemplo, a los gerentes.
          </p>
        </div>
      </div>

    </div>
  );
}
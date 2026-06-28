import React from 'react';
import { Users, HelpCircle, CheckCircle2, ShieldCheck, Server, Lightbulb } from 'lucide-react';

export default function ActiveDirectory() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Encabezado */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <Users className="text-blue-400" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Active Directory y Dominio
          </h2>
        </div>
        
        <div className="p-6 md:p-8 bg-blue-50/30">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <HelpCircle className="text-blue-600" size={24} />
            ¿Qué haremos aquí de forma sencilla?
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            En este momento, nuestro servidor es solo un computador común y corriente. Para que realmente se convierta en el <strong>Jefe Supremo</strong> de la empresa, instalaremos <strong>Active Directory</strong>. Es como un libro de recursos humanos mágico y un portero VIP combinados en uno solo.
          </p>
        </div>
      </div>

      {/* Guía Paso a Paso */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-8">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <span className="text-2xl">🧩</span> Guía paso a paso: Instalar Active Directory
        </h3>

        {/* Paso 1 */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-blue-700 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
            Instalar el rol (AD DS)
          </h4>
          <ol className="list-decimal ml-10 space-y-3 text-slate-700">
            <li>En el <strong>Administrador del servidor</strong>, ve a <strong>Administrar → Agregar roles y características</strong>. 
               <img src="/img/img_active_directory/agg_rol_carac.png" alt="Agregar roles" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>Avanza con <strong>Siguiente</strong> hasta llegar a la lista de roles.</li>
            <li>Marca <strong>Servicios de dominio de Active Directory</strong>. <img src="/img/img_active_directory/select_dom_act.png" alt="Selección" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>Haz clic en <strong>Agregar características</strong> cuando aparezca la ventana. <img src="/img/img_active_directory/agg_carac.png" alt="Agregar características" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>Presiona <strong>Siguiente</strong> hasta terminar e <strong>Instalar</strong>. <img src="/img/img_active_directory/instalar.png" alt="Instalar" className="my-2 rounded-lg border shadow-sm"/></li>
          </ol>
        </div>

        {/* Paso 2 */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h4 className="text-lg font-bold text-blue-700 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
            Promover a Controlador de Dominio
          </h4>
          <ul className="ml-10 space-y-3 text-slate-700">
            <li>✓ Haz clic en la <strong>bandera amarilla</strong> de notificaciones. <img src="/img/img_active_directory/notificaciones.png" alt="Notificaciones" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>✓ Selecciona <strong>Promover este servidor a controlador de dominio</strong>. <img src="/img/img_active_directory/promover_serv.png" alt="Promover" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>✓ Elige <strong>Agregar un nuevo bosque</strong> y escribe: <code>inacap.local</code>. <img src="/img/img_active_directory/nuevo_bosque.png" alt="Nuevo bosque" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>✓ Configura la contraseña (DSRM). <img src="/img/img_active_directory/password.png" alt="Password" className="my-2 rounded-lg border shadow-sm"/></li>
            <li>✓ Sigue los pasos y haz clic en <strong>Instalar</strong>. <img src="/img/img_active_directory/instalacion.png" alt="Instalación final" className="my-2 rounded-lg border shadow-sm"/></li>
          </ul>
        </div>
      </div>

      {/* Resumen */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 flex items-center gap-6 shadow-sm">
        <div className="text-5xl">🎉</div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Dominio inacap.local creado</h3>
          <p className="text-blue-800">Tu servidor ahora es un <strong>Controlador de Dominio</strong>. Ya puedes gestionar usuarios, equipos y aplicar políticas de seguridad en toda la red.</p>
        </div>
      </div>

      {/* Explicación */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Lightbulb className="text-indigo-500" size={24} />
          ¿Por qué hacemos esto?
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          Active Directory es el corazón de la red. Al instalarlo, creamos el dominio <code>inacap.local</code>. Él decide quién tiene permiso para usar los computadores y gestionar contraseñas. Además, al instalarlo, se configura el <strong>DNS</strong>, el "traductor" que convierte nombres amigables (como `inacap.local`) a direcciones IP que las máquinas pueden entender.
        </p>
      </div>

    </div>
  );
}
import React from 'react';
import { Monitor, HelpCircle, Clock, ShieldAlert, Lightbulb } from 'lucide-react';

export default function ClienteDominio() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Encabezado */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <Monitor className="text-cyan-400" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2.1.3 Conectar al Empleado (Windows 10)
          </h2>
        </div>
        
        <div className="p-6 md:p-8 bg-cyan-50/30">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <HelpCircle className="text-cyan-600" size={24} />
            ¿Qué haremos aquí de forma sencilla?
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Vamos a armar el computador del empleado (Windows 10). Luego, haremos el paso más emocionante: lo presentaremos formalmente a la empresa. Le diremos a este computador que deje de ser independiente y que de ahora en adelante debe obedecer al Jefe (el Servidor).
          </p>
        </div>
      </div>

      {/* Guía Paso a Paso */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-8">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <span className="text-2xl">🧩</span> Guía paso a paso: Unir el equipo PC01 al dominio
        </h3>

        {/* Paso 1 & 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Paso 1 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-300 transition-colors flex flex-col">
            <h4 className="text-lg font-bold text-cyan-700 mb-4 flex items-center gap-2">
              <span className="bg-cyan-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
              Crear máquina PC01
            </h4>
            <ul className="list-disc ml-5 space-y-1.5 text-slate-700 text-sm marker:text-cyan-500 mb-4 flex-1">
              <li>Haz clic en <strong>Nueva</strong> en VirtualBox.</li>
              <li><strong>Nombre:</strong> <code>PC01</code> | <strong>Versión:</strong> Windows 10 (64-bit).</li>
              <li><strong>RAM:</strong> 2048 MB (2 GB).</li>
              <li><strong>Disco duro:</strong> 30 a 50 GB.</li>
              <li>En <strong>Configuración → Red</strong> (Adaptador 1), selecciona <strong>Red interna</strong> y escribe: <code>redlab</code>.</li>
            </ul>
            <img 
              src="/img/img_cliente_dominio/red_interna_pc.png" 
              alt="Configuración de Red Interna del Cliente" 
              className="rounded-lg shadow-sm border border-slate-200 w-full object-cover"
            />
          </div>

          {/* Paso 2 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-300 transition-colors flex flex-col">
            <h4 className="text-lg font-bold text-cyan-700 mb-4 flex items-center gap-2">
              <span className="bg-cyan-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
              Instalar Windows 10 Pro
            </h4>
            <ul className="list-disc ml-5 space-y-1.5 text-slate-700 text-sm marker:text-cyan-500 mb-4 flex-1">
              <li>Inicia la máquina con la ISO de Windows 10.</li>
              <li>Selecciona <strong>"No tengo clave de producto"</strong>.</li>
              <li>Elige obligatoriamente <strong>Windows 10 Pro</strong>.</li>
              <li>Tipo de instalación: <strong>Personalizada</strong>.</li>
              <li>Crea una <strong>"Cuenta sin conexión"</strong> o "Experiencia limitada" con un usuario local.</li>
            </ul>
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <img 
                src="/img/img_cliente_dominio/no_tengo_clave.png" 
                alt="Selección de la opción no tengo clave" 
                className="rounded-lg shadow-sm border border-slate-200 w-full"
              />
              <img 
                src="/img/img_cliente_dominio/10_pro.png" 
                alt="Selección de Windows 10 Pro" 
                className="rounded-lg shadow-sm border border-slate-200 w-full"
              />
            </div>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-300 transition-colors">
          <h4 className="text-lg font-bold text-cyan-700 mb-3 flex items-center gap-2">
            <span className="bg-cyan-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
            Verificar red y DHCP
          </h4>
          <div className="ml-9 text-slate-700 space-y-3">
            <p>Es importantísimo confirmar que el servidor le está entregando IP al cliente.</p>
            <div className="bg-slate-800 text-green-400 font-mono p-4 rounded-lg text-sm shadow-inner flex flex-col gap-2">
              <span>{"C:\\Users\\UsuarioLocal> ipconfig"}</span>
              <span className="text-slate-300">Dirección IPv4 . . . . . . . . . : 192.168.10.50</span>
              <span>{"C:\\Users\\UsuarioLocal> ping 192.168.10.10"}</span>
              <span className="text-slate-300">Respuesta desde 192.168.10.10: bytes=32 tiempo=1ms TTL=128</span>
            </div>
            <p className="text-sm">Si aparece una IP rara (<code>169.254.x.x</code>), el cliente no ve al servidor. Verifica tu configuración en VirtualBox.</p>
            
            <img 
              src="/img/img_cliente_dominio/ip_config.png" 
              alt="Verificación de IP en CMD" 
              className="rounded-lg shadow-sm border border-slate-200 max-w-2xl w-full mt-4"
            />
          </div>
        </div>

        {/* Paso 4 (Alerta de Reloj) */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
          <div className="bg-rose-500 text-white p-3 rounded-full shrink-0">
            <Clock size={28} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-rose-800 mb-2">Paso 4: Sincronizar la hora (¡Crítico!)</h4>
            <p className="text-rose-700">
              Revisa la hora y fecha en Windows 10 y compárala con el Windows Server. <strong>Ambas deben coincidir exactamente</strong> (incluyendo la zona horaria). Si hay diferencia de minutos, ajusta el reloj de Windows 10 manualmente. Si omites este paso, el dominio rechazará la conexión.
            </p>
          </div>
        </div>

        {/* Paso 5 */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h4 className="text-lg font-bold text-cyan-700 flex items-center gap-2">
            <span className="bg-cyan-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">5</span>
            Unir PC01 al dominio inacap.local
          </h4>
          <div className="ml-10">
            <ol className="list-decimal space-y-2 text-slate-700 mb-6">
              <li>Presiona <code>Win + R</code>, escribe <code>sysdm.cpl</code> y presiona Enter.</li>
              <li>En la pestaña <strong>Nombre de equipo</strong>, haz clic en el botón <strong>Cambiar...</strong></li>
              <li>En "Miembro de", selecciona <strong>Dominio</strong> y escribe: <code>inacap.local</code>.</li>
              <li>Ingresa las credenciales del servidor (<code>{"INACAP\\Administrator"}</code> y tu contraseña).</li>
              <li>Si ves el mensaje <strong>"Bienvenido al dominio"</strong>, ¡lo lograste! Reinicia el equipo.</li>
            </ol>

            {/* Galería de imágenes Paso 5 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <img src="/img/img_cliente_dominio/sysdm_cpl.png" alt="Ventana de cambio de dominio" className="rounded-lg shadow-sm border border-slate-200 w-full" />
              <img src="/img/img_cliente_dominio/cambiar_nombre.png" alt="Cambiar dominio" className="rounded-lg shadow-sm border border-slate-200 w-full" />
              <img src="/img/img_cliente_dominio/dominio_inacap.png" alt="Dominio de inacap" className="rounded-lg shadow-sm border border-slate-200 w-full" />
              <img src="/img/img_cliente_dominio/union_dominio.png" alt="Bienvenido al dominio" className="rounded-lg shadow-sm border border-slate-200 w-full" />
            </div>
          </div>
        </div>

        {/* Paso 6 */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h4 className="text-lg font-bold text-cyan-700 flex items-center gap-2">
            <span className="bg-cyan-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">6</span>
            Iniciar sesión con tu usuario del dominio
          </h4>
          <div className="ml-10">
            <p className="text-slate-700 mb-4">
              Después del reinicio, selecciona <strong>Otro usuario</strong> en la pantalla de bloqueo. Inicia sesión usando la cuenta creada en el servidor (ej: <code>{"INACAP\\tucodigo"}</code>) y su respectiva contraseña.
            </p>
            <img 
              src="/img/img_cliente_dominio/inicio_sesion.png" 
              alt="Inicio de Sesión" 
              className="rounded-lg shadow-sm border border-slate-200 max-w-md w-full" 
            />
          </div>
        </div>
      </div>

      {/* Resumen */}
      <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200 flex items-center gap-6 shadow-sm">
        <div className="text-5xl">🎉</div>
        <div>
          <h3 className="text-xl font-bold text-cyan-900 mb-2">Cliente conectado exitosamente</h3>
          <p className="text-cyan-800">¡Felicidades! Tienes una red real operando. Windows 10 Pro está instalado, aislado en la red interna <code>redlab</code>, pertenece al dominio <code>inacap.local</code> y su inicio de sesión es controlado por Active Directory.</p>
        </div>
      </div>

      {/* Explicación Kerberos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6 md:p-8">
          <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
            <ShieldAlert className="text-amber-500" size={24} />
            ¿Por qué la hora es tan importante?
          </h3>
          <p className="text-amber-800 leading-relaxed text-sm text-justify">
            Active Directory usa un protocolo de seguridad llamado <strong>Kerberos</strong>. Este "guardia virtual" revisa a qué hora exacta pones tu contraseña. Si ingresas tu clave a las 15:00, pero el reloj del Servidor dice que son las 15:10, Kerberos asume que se trata de un "ataque de repetición" (un hacker usando una clave robada hace 10 minutos) y <strong>bloquea todo el acceso</strong>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="text-indigo-500" size={24} />
            ¿Por qué exigimos Windows 10 Pro?
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm text-justify">
            Las versiones "Home" de Windows (las que vienen de fábrica en los notebooks domésticos) tienen bloqueada intencionalmente por Microsoft la función para unirse a dominios corporativos. Al usar la versión <strong>Pro</strong>, desbloqueamos todas las características de administración en red.
          </p>
        </div>
      </div>

    </div>
  );
}
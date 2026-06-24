import React from 'react';
import { 
  Server, 
  HelpCircle, 
  Settings, 
  Disc, 
  Edit3, 
  Network, 
  ShieldCheck, 
  CheckCircle2, 
  Lightbulb, 
  AlertTriangle 
} from 'lucide-react';

export default function Instalacion() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Encabezado Principal */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <Server className="text-emerald-400" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2.1.1 Instalación y Configuración Básica
          </h2>
        </div>
        
        <div className="p-6 md:p-8 bg-emerald-50/30">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <HelpCircle className="text-emerald-600" size={24} />
            ¿Qué haremos aquí de forma sencilla?
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Vamos a "comprar" y encender el computador del Jefe (el Servidor). Le instalaremos su sistema operativo (Windows Server) y le pondremos una placa con su nombre en la puerta de su oficina. Además, le daremos un número de teléfono fijo (Dirección IP) para que los empleados nunca se pierdan al intentar llamarlo.
          </p>
        </div>
      </div>

      {/* Guía Paso a Paso */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-5 flex items-center gap-3 bg-slate-50/50">
          <span className="text-2xl">🧩</span>
          <h3 className="text-xl font-bold text-slate-800">
            Guía paso a paso: Crear y configurar el servidor SRV-DC01
          </h3>
        </div>
        
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Paso 1 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
              Crear la máquina virtual
            </h4>
            <div className="ml-9 space-y-3 text-slate-700">
              <p>Abre VirtualBox y haz clic en el botón <strong>Nueva</strong>. Configura los siguientes datos:</p>
              <ul className="list-disc ml-5 space-y-1 marker:text-blue-400">
                <li><strong>Nombre:</strong> <code>SRV-DC01</code></li>
                <li><strong>Tipo:</strong> Microsoft Windows</li>
                <li><strong>Versión:</strong> Windows Server 2022 (64-bit) o Windows Server 2025 (64-bit)</li>
                <li><strong>ISO:</strong> <em>Déjala sin seleccionar por ahora.</em></li>
              </ul>
              <p className="mt-3 font-semibold text-slate-800">Recursos del sistema:</p>
              <ul className="list-disc ml-5 space-y-1 marker:text-blue-400">
                <li><strong>Memoria (RAM):</strong> Entre 2048 MB (2 GB) y 4096 MB (4 GB). <em>(Si tu PC real tiene 16GB o más, usa 4 GB para que la instalación sea mucho más rápida)</em>.</li>
                <li><strong>Procesador (CPU):</strong> 1 o 2 núcleos.</li>
              </ul>
              <p className="mt-3 font-semibold text-slate-800">Disco duro virtual:</p>
              <ul className="list-disc ml-5 space-y-1 marker:text-blue-400">
                <li><strong>Tamaño:</strong> 50 GB.</li>
                <li><strong>Tipo:</strong> Reservado dinámicamente.</li>
                <li>Haz clic en <strong>Terminar</strong> para crear la máquina.</li>
              </ul>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
              Configurar la red interna
            </h4>
            <div className="ml-9 space-y-4 text-slate-700">
              <p>Antes de encender la máquina, vamos a aislarla para que funcione solo dentro de nuestro laboratorio virtual y no afecte tu internet real.</p>
              <ol className="list-decimal ml-5 space-y-1.5 marker:text-blue-400">
                <li>Selecciona la máquina <code>SRV-DC01</code> y haz clic en el engranaje de <strong>Configuración</strong>.</li>
                <li>En el menú de la izquierda, entra a <strong>Red</strong>.</li>
                <li>En la pestaña <strong>Adaptador 1</strong>, configura lo siguiente:
                  <ul className="list-none ml-2 mt-1 space-y-1">
                    <li>✓ Marca la casilla <strong>"Habilitar adaptador de red"</strong>.</li>
                    <li>✓ En la opción "Conectado a:", despliega el menú y elige <strong>Red interna</strong>.</li>
                    <li>✓ En la opción "Nombre:", escribe exactamente: <code>redlab</code>.</li>
                  </ul>
                </li>
                <li>Guarda los cambios con <strong>Aceptar</strong>.</li>
              </ol>
              <img 
                src="/img/img_instalacion/red_interna.png" 
                alt="Captura de la configuración de Red" 
                className="rounded-lg shadow border border-slate-200 max-w-full h-auto mt-4"
              />
            </div>
          </div>

          {/* Paso 3 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
              Montar la ISO e instalar Windows Server
            </h4>
            <div className="ml-9 space-y-4 text-slate-700">
              <ol className="list-decimal ml-5 space-y-1.5 marker:text-blue-400">
                <li>En VirtualBox, con <code>SRV-DC01</code> seleccionado, entra a <strong>Configuración → Almacenamiento</strong>.</li>
                <li>En la lista, haz clic en el ícono del CD que dice <strong>Vacío</strong>.</li>
                <li>A la derecha de la ventana, haz clic en el ícono del disco pequeño y selecciona <strong>Elegir un archivo de disco...</strong></li>
                <li>Busca en tu computador y selecciona el archivo ISO de Windows Server que descargaste.</li>
                <li>Cierra la configuración y enciende la máquina con el botón verde <strong>Iniciar</strong>.</li>
              </ol>
              
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 mt-4">
                <p className="font-semibold text-blue-800 mb-2">Durante la instalación en pantalla:</p>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex gap-2">
                    <span>👉</span> 
                    <span>Cuando te pregunte qué sistema operativo instalar, elige obligatoriamente la opción que dice <strong>Windows Server Standard (Experiencia de escritorio)</strong>. <em>(¡Peligro!: Si omites la parte de "Experiencia de escritorio", se instalará la versión Core, que es solo una pantalla negra sin mouse ni ventanas)</em>.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>👉</span> 
                    <span>Acepta los términos de licencia y elige <strong>Instalación personalizada</strong> </span>
                  </li>
                  <li className="flex gap-2">
                    <span>👉</span> 
                    <span>Selecciona el disco de 50 GB y dale a Siguiente.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>👉</span> 
                    <span>Al finalizar la carga, el sistema se reiniciará solo. Te pedirá crear una <strong>contraseña</strong> para el usuario <code>Administrador</code>. <em>(Debe cumplir con requisitos de complejidad: usa letras mayúsculas, minúsculas y números)</em></span>
                  </li>
                </ul>
              </div>
              
              <img 
                src="/img/img_instalacion/experiencia_escritorio.png" 
                alt="Selección de la versión Experiencia de Escritorio" 
                className="rounded-lg shadow border border-slate-200 max-w-full h-auto mt-4"
              />
            </div>
          </div>

          {/* Paso 4 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
              Cambiar el nombre del servidor
            </h4>
            <div className="ml-9 space-y-4 text-slate-700">
              <p>Cuando logres ver el escritorio de Windows Server por primera vez:</p>
              <ol className="list-decimal ml-5 space-y-1.5 marker:text-blue-400">
                <li>Se abrirá automáticamente el panel del <strong>Administrador del servidor</strong>.</li>
                <li>En el menú izquierdo, haz clic en <strong>Servidor local</strong>.</li>
                <li>Busca donde dice "Nombre de equipo" y haz clic en el nombre raro generado al azar (ej. <code>WIN-X892...</code>).</li>
                <li>En la ventana que se abre, haz clic en el botón <strong>Cambiar...</strong></li>
                <li>Escribe el nuevo nombre oficial: <code>SRV-DC01</code>.</li>
                <li>Acepta todas las advertencias y <strong>reinicia el servidor</strong> de inmediato cuando el sistema te lo pida.</li>
              </ol>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <img src="/img/img_instalacion/nombre_servidor.png" alt="Nombre del Servidor" className="rounded-lg shadow border border-slate-200 w-full" />
                <img src="/img/img_instalacion/cambio_nombre.png" alt="Cambio del nombre del Servidor" className="rounded-lg shadow border border-slate-200 w-full" />
                <img src="/img/img_instalacion/reinicio_equipo.png" alt="Reinicio del Equipo" className="rounded-lg shadow border border-slate-200 w-full" />
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">5</span>
              Configurar la IP fija
            </h4>
            <div className="ml-9 space-y-4 text-slate-700">
              <p>Ahora le daremos su "número de teléfono" estable para siempre.</p>
              <ol className="list-decimal ml-5 space-y-1.5 marker:text-blue-400">
                <li>Tras el reinicio, vuelve a <strong>Servidor local</strong> en el Administrador del servidor.</li>
                <li>Haz clic en las letras azules ubicadas al lado de <strong>Ethernet</strong> <em>(generalmente dice "Dirección IPv4 asignada por DHCP")</em>.</li>
                <li>Se abrirá la ventana de Conexiones de red. Haz clic derecho sobre el ícono de Ethernet y selecciona <strong>Propiedades</strong>.</li>
                <li>Haz doble clic en <strong>Protocolo de Internet versión 4 (TCP/IPv4)</strong>.</li>
                <li>Selecciona la burbuja "Usar la siguiente dirección IP" y escribe exactamente esto:
                  <ul className="list-none ml-2 mt-2 space-y-1 bg-white p-3 rounded border border-slate-200 font-mono text-sm text-slate-800">
                    <li><strong>Dirección IP:</strong> 192.168.10.10</li>
                    <li><strong>Máscara de subred:</strong> 255.255.255.0</li>
                    <li><strong>Puerta de enlace predeterminada:</strong> <em>(Déjala completamente vacía)</em></li>
                  </ul>
                </li>
                <li className="mt-2">En la sección de abajo (DNS), selecciona "Usar las siguientes direcciones de servidor DNS" y escribe:
                  <ul className="list-none ml-2 mt-2 space-y-1 bg-white p-3 rounded border border-slate-200 font-mono text-sm text-slate-800">
                    <li><strong>Servidor DNS preferido:</strong> 127.0.0.1</li>
                  </ul>
                </li>
                <li className="mt-2">Guarda los cambios haciendo clic en <strong>Aceptar</strong> en ambas ventanas.</li>
              </ol>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <img src="/img/img_instalacion/ip01.png" alt="Seleccionamos la opció Ethernet" className="rounded-lg shadow border border-slate-200 w-full" />
                <img src="/img/img_instalacion/ip02.png" alt="Clic derecho y selección de Propiedades" className="rounded-lg shadow border border-slate-200 w-full" />
                <img src="/img/img_instalacion/ip03.png" alt="Protocolo de internet Versión 4" className="rounded-lg shadow border border-slate-200 w-full" />
                <img src="/img/img_instalacion/ip04.png" alt="Asignación de IP" className="rounded-lg shadow border border-slate-200 w-full" />
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">6</span>
              Verificar que el Firewall esté activado
            </h4>
            <div className="ml-9 space-y-4 text-slate-700">
              <ol className="list-decimal ml-5 space-y-1.5 marker:text-blue-400">
                <li>En la misma pantalla de <strong>Servidor local</strong>, busca la propiedad <strong>Firewall de Windows Defender</strong>.</li>
                <li>Asegúrate de que su estado diga <strong>Activado</strong> (o "Privado: Activado").</li>
                <li><strong>No lo desactives por ningún motivo:</strong> Windows abrirá automáticamente los puertos de seguridad necesarios cuando instalemos Active Directory más adelante.</li>
              </ol>
              <img src="/img/img_instalacion/firewall_activo.png" alt="Verificación del Firewall Activado" className="rounded-lg shadow border border-slate-200 max-w-full h-auto mt-4" />
            </div>
          </div>

        </div>
      </div>

      {/* Resumen */}
      <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200 flex flex-col md:flex-row gap-6 items-center shadow-sm">
        <div className="text-6xl">🎉</div>
        <div>
          <h3 className="text-xl font-bold text-emerald-900 mb-3">Resumen: Servidor listo</h3>
          <p className="text-emerald-800 mb-3">Con estos pasos finalizados exitosamente, tu infraestructura base está lista. Ya tienes:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-emerald-800">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600"/> La máquina creada y conectada al cable invisible <code>redlab</code>.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600"/> Windows Server instalado con entorno gráfico completo.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600"/> El nombre oficial del servidor (<code>SRV-DC01</code>).</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600"/> La IP estática asignada (<code>192.168.10.10</code>).</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-600"/> El escudo protector (Firewall) funcionando.</li>
          </ul>
          <p className="mt-4 font-medium text-emerald-900">Tu servidor está 100% preparado para ser promovido a Controlador de Dominio en la siguiente fase.</p>
        </div>
      </div>

      {/* Explicación y Consejos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Lightbulb className="text-indigo-500" size={24} />
            ¿Por qué hicimos la configuración de la IP y el DNS así?
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Normalmente, tu celular o tu notebook cambian de "número de teléfono" (Dirección IP) de forma automática cada vez que te conectas al Wi-Fi. Pero un Servidor no puede hacer eso[cite: 2]. Si la estación de policía cambiara su número de emergencia todos los días, ¡nadie sabría a quién llamar! Por eso le ponemos el número estático <code>192.168.10.10</code>. La parte que dice DNS <code>127.0.0.1</code> es una forma técnica de decirle al servidor: <em>"Cuando necesites buscar información, mírate al espejo, tú eres el jefe aquí"</em>.
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6 md:p-8">
          <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={24} />
            Consejos de Supervivencia en el Laboratorio
          </h3>
          <ul className="space-y-4 text-sm text-amber-800">
            <li>
              <strong className="block mb-1">¡Anota tu contraseña!</strong>
              Si olvidas la clave del usuario Administrador, no hay forma sencilla de recuperarla. Tendrás que borrar la máquina virtual en VirtualBox y empezar este tutorial desde el paso 1.
            </li>
            <li>
              <strong className="block mb-1">Resolución de pantalla (Tip visual):</strong>
              Si la pantalla de Windows Server se ve como un cuadrito muy pequeño en tu monitor, ve al menú superior de VirtualBox, selecciona <strong>Dispositivos → Insertar imagen de CD de las Guest Additions</strong>. Abre el explorador de archivos dentro del servidor, instala ese CD y reinicia. La pantalla se adaptará al tamaño de tu monitor.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
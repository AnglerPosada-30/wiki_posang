import React from 'react';
import { Network, HelpCircle, FolderTree, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function ServiciosRed() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10 servicios-red">
      
      {/* Encabezado */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <Network className="text-purple-400" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Servicios de Red (DHCP) y Usuarios
          </h2>
        </div>
        
        <div className="p-6 md:p-8 bg-purple-50/30">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <HelpCircle className="text-purple-600" size={24} />
            ¿Qué haremos aquí de forma sencilla?
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Primero, vamos a crear carpetas para organizar a nuestros empleados y les crearemos sus cuentas de usuario para que puedan trabajar. Luego, instalaremos un servicio llamado <strong>DHCP</strong>, que funciona como un dispensador de tickets en un banco, entregando números de atención (IPs) automáticamente a cada computador nuevo que encendamos.
          </p>
        </div>
      </div>

      {/* Guía Paso a Paso */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-10">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 border-b border-slate-100 pb-4">
          <span className="text-2xl">🧩</span> Guía paso a paso: Configurar Usuarios y el Servidor DHCP
        </h3>

        {/* Paso 1: Unidad Organizativa y Usuarios */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-purple-700 flex items-center gap-2">
            <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-sm">1</span>
            Crear la Unidad Organizativa, Usuarios y Grupo
          </h4>
          <p className="text-slate-600 ml-9">En este paso vas a organizar tu dominio creando una carpeta especial (Unidad Organizativa), tus usuarios y un grupo donde estarán agrupados.</p>
          
          <div className="ml-9 space-y-6">
            {/* 1A */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><FolderTree size={18} className="text-purple-500"/> A. Crear la Unidad Organizativa "Ventas"</h5>
              <ol className="list-decimal ml-5 space-y-1.5 text-slate-700 text-sm mb-4">
                <li>En el <strong>Administrador del servidor</strong>, ve arriba a la derecha a <strong>Herramientas → Usuarios y equipos de Active Directory</strong>.</li>
                <li>A la izquierda verás tu dominio <code>inacap.local</code>. Haz clic derecho sobre él y selecciona <strong>Nuevo → Unidad organizativa</strong>.</li>
                <li>Escribe el nombre: <code>Ventas</code> y presiona <strong>Aceptar</strong>.</li>
              </ol>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <img src="/img/img_servicios_red/herramientas.png" alt="Herramientas" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/usuarios_y_equipos.png" alt="Usuarios y Equipos" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/unidad_organizativa.png" alt="Unidad Organizativa" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/ventas.png" alt="Objeto Ventas" className="rounded border border-slate-200 w-full" />
              </div>
            </div>

            {/* 1B */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Users size={18} className="text-purple-500"/> B. Crear los usuarios</h5>
              <ol className="list-decimal ml-5 space-y-1.5 text-slate-700 text-sm mb-4">
                <li>Haz clic derecho en la carpeta <strong>Ventas → Nuevo → Usuario</strong>.</li>
                <li>Para el primer usuario: En "Nombre de inicio de sesión", escribe tu código personal (ej: <code>posang</code>).</li>
                <li>En la siguiente pantalla: ✓ <strong>Desmarca</strong> "El usuario debe cambiar la contraseña..." y ✓ <strong>Marca</strong> "La contraseña nunca expira". Asigna una contraseña.</li>
                <li>Repite el proceso para crear un segundo usuario (ej: <code>prueba1</code>).</li>
              </ol>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <img src="/img/img_servicios_red/ventas_usuario.png" alt="Creación de Usuarios" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/nuevo_usuario.png" alt="Nombre nuevo usuario" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/password_sin_exp.png" alt="Contraseña nunca expira" className="rounded border border-slate-200 w-full" />
              </div>
            </div>

            {/* 1C */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Users size={18} className="text-purple-500"/> C. Crear el grupo "G-Ventas" y agregar usuarios</h5>
              <ol className="list-decimal ml-5 space-y-1.5 text-slate-700 text-sm mb-4">
                <li>Haz clic derecho en la carpeta <strong>Ventas → Nuevo → Grupo</strong>.</li>
                <li>Nombre del grupo: <code>G-Ventas</code> y presiona <strong>Aceptar</strong>.</li>
                <li>Abre las <strong>Propiedades</strong> del usuario con tu código personal. Ve a la pestaña <strong>Miembro de</strong> y haz clic en <strong>Agregar</strong>.</li>
                <li>Escribe <code>G-Ventas</code>, haz clic en <strong>Comprobar nombres</strong> y acepta todo. Repite con <code>prueba1</code>.</li>
              </ol>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <img src="/img/img_servicios_red/ventas_grupo.png" alt="Nuevo Grupo" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/g_ventas.png" alt="Nombre G-Ventas" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/agregar_usuario.png" alt="Agregar Usuario" className="rounded border border-slate-200 w-full" />
                <img src="/img/img_servicios_red/comprobar_nombres.png" alt="Comprobar nombres" className="rounded border border-slate-200 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Paso 2: DHCP */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h4 className="text-lg font-bold text-purple-700 flex items-center gap-2">
            <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-sm">2</span>
            Instalar el servicio DHCP
          </h4>
          <p className="text-slate-600 ml-9 mb-4">Ahora vas a instalar el rol que permitirá que el servidor entregue direcciones IP automáticamente a los equipos del laboratorio.</p>
          <div className="ml-9 grid md:grid-cols-2 gap-6 items-start">
            <ol className="list-decimal ml-5 space-y-2 text-slate-700 text-sm">
              <li>En el <strong>Administrador del servidor</strong>, ve a <strong>Administrar → Agregar roles y características</strong>.</li>
              <li>Avanza con <strong>Siguiente</strong> hasta llegar a la lista de roles de servidor.</li>
              <li>Marca la casilla <strong>Servidor DHCP</strong> <em>(acepta las características adicionales)</em>.</li>
              <li>Continúa con <strong>Siguiente</strong> hasta presionar <strong>Instalar</strong>.</li>
              <li>Cuando termine, haz clic en la bandera amarilla de notificación y selecciona <strong>Completar la configuración de DHCP</strong>.</li>
              <li>En el asistente, presiona <strong>Confirmar</strong> y luego <strong>Cerrar</strong>.</li>
            </ol>
            <div className="grid grid-cols-2 gap-2">
              <img src="/img/img_servicios_red/nn.png" alt="Roles del servidor" className="rounded border border-slate-200 w-full" />
              <img src="/img/img_servicios_red/servidor_dhcp.png" alt="Servidor DHCP" className="rounded border border-slate-200 w-full" />
              <img src="/img/img_servicios_red/intalacion_en_progreso.png" alt="Instalación" className="rounded border border-slate-200 w-full" />
              <img src="/img/img_servicios_red/completar_configuracion.png" alt="Completar configuración" className="rounded border border-slate-200 w-full" />
            </div>
          </div>
        </div>

        {/* Paso 3: Ámbito DHCP */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h4 className="text-lg font-bold text-purple-700 flex items-center gap-2">
            <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-sm">3</span>
            Crear y configurar el Ámbito DHCP
          </h4>
          <p className="text-slate-600 ml-9">El "ámbito" es el rango de IPs que el servidor tendrá permitido entregar a los equipos del laboratorio.</p>
          
          <div className="ml-9 grid md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block mb-1">A. Crear el ámbito</strong>
                Ve a Herramientas → DHCP. Expande tu servidor, haz clic derecho en IPv4 y selecciona <strong>Ámbito nuevo</strong>. Llámalo <code>RedLab</code>.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">B. Configurar el rango de IP</strong>
                IP inicial: <code>192.168.10.50</code> | IP final: <code>192.168.10.100</code> | Longitud: 24.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">C. Opciones del DHCP</strong>
                Marca "Configurar estas opciones ahora". Deja Puerta de enlace vacía. En DNS, pon Dominio: <code>inacap.local</code> y Servidor: <code>192.168.10.10</code>.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">D. Activar el ámbito</strong>
                Selecciona <strong>Activar este ámbito ahora</strong> y Finalizar.
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
               <img src="/img/img_servicios_red/dhcp.png" alt="DHCP" className="rounded border border-slate-200 w-full" />
               <img src="/img/img_servicios_red/ambito_nuevo.png" alt="Ámbito nuevo" className="rounded border border-slate-200 w-full" />
               <img src="/img/img_servicios_red/redlab.png" alt="RedLab" className="rounded border border-slate-200 w-full" />
               <img src="/img/img_servicios_red/rango_ip.png" alt="Rango IP" className="rounded border border-slate-200 w-full" />
               <img src="/img/img_servicios_red/opciones_ahora.png" alt="Opciones ahora" className="rounded border border-slate-200 w-full" />
               <img src="/img/img_servicios_red/inacap_local.png" alt="Inacap Local" className="rounded border border-slate-200 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Resumen */}
      <div className="bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-200 flex flex-col md:flex-row items-center gap-6 shadow-sm">
        <div className="text-5xl">🎉</div>
        <div>
          <h3 className="text-xl font-bold text-purple-900 mb-2">Resumen: Red automatizada</h3>
          <p className="text-purple-800 mb-3">Con esto finalizado, tu infraestructura ha subido de nivel.</p>
          <ul className="space-y-1 text-purple-800 text-sm">
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-600"/> Tienes una estructura organizativa real con cuentas de usuarios y grupos.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-600"/> El servidor DHCP está activo y autorizando conexiones.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-600"/> Tienes un banco de 50 direcciones IP listas para ser entregadas automáticamente.</li>
          </ul>
        </div>
      </div>

      {/* Explicación */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Lightbulb className="text-amber-500" size={24} />
          ¿Por qué hacemos esto?
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm text-justify mb-4">
          Imagínate llegar a una empresa con 500 computadores y tener que ir uno por uno escribiendo a mano su dirección IP, su máscara y su DNS. ¡Sería una tortura y tomaría semanas!
        </p>
        <p className="text-slate-600 leading-relaxed text-sm text-justify">
          El <strong>DHCP</strong> (Protocolo de Configuración Dinámica de Host) es nuestro salvador administrativo. Cuando un computador se enciende y se conecta al cable de red, grita invisiblemente: <em>"¡Hola, soy nuevo, necesito un número para existir en esta red!"</em>. El Servidor DHCP lo escucha inmediatamente, revisa su "Ámbito" (el rango que configuramos del 50 al 100) y le responde: <em>"Toma, tú serás la IP 192.168.10.50. Por cierto, el directorio telefónico de la empresa (DNS) es el 192.168.10.10"</em>. Todo se configura en milisegundos sin que tú muevas un solo dedo.
        </p>
      </div>

    </div>
  );
}
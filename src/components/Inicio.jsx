import React from 'react';
import { Building2, Network, BookOpen, Download, MonitorPlay, Cloud } from 'lucide-react';

export default function Inicio() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Encabezado Principal */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-6 py-5 flex items-center gap-4">
          <Building2 className="text-brand-500" size={32} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Inicio y Topología del Laboratorio: Nuestra Oficina Virtual</h2>
        </div>
        
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">¿De qué se trata todo esto?</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Imagina que vamos a construir un edificio de oficinas desde cero, pero en lugar de usar ladrillos y cemento, lo haremos todo dentro de tu propio computador usando un programa llamado VirtualBox. Vamos a crear dos "computadores fantasma" (máquinas virtuales). Uno será el <strong>Jefe de la empresa</strong> (el Servidor con Windows Server) y el otro será el <strong>Escritorio de un empleado</strong> (el Cliente con Windows 10). Nuestra meta es conectarlos para que el Jefe pueda dictar las reglas y el empleado pueda trabajar bajo esas normas.
            </p>
          </div>

          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <div className="flex items-center gap-3 mb-4">
              <Network className="text-brand-600" size={24} />
              <h3 className="text-lg font-bold text-brand-900">El Plano de nuestra Oficina (Topología de Red)</h3>
            </div>
            <p className="text-brand-800 mb-4">Para que este experimento sea seguro y no afecte tu internet real, crearemos un entorno cerrado, como una oficina sin puertas hacia el exterior.</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-brand-800">
                <span className="font-bold text-brand-500">→</span>
                <span><strong>El cable invisible:</strong> En VirtualBox crearemos una red interna llamada <code className="bg-white px-1.5 py-0.5 rounded text-brand-600 font-semibold shadow-sm">redlab</code>. Piensa en esto como un cable de red que solo conecta a nuestras dos máquinas virtuales entre sí; no tienen salida a internet, están completamente privadas.</span>
              </li>
              <li className="flex gap-3 text-brand-800">
                <span className="font-bold text-brand-500">→</span>
                <span><strong>El Jefe (SRV-DC01):</strong> Es nuestra máquina con Windows Server. Tendrá un número de identificación fijo (IP <code className="bg-white px-1.5 py-0.5 rounded text-brand-600 font-semibold shadow-sm">192.168.10.10</code>) para que todos sepan siempre dónde encontrarlo.</span>
              </li>
              <li className="flex gap-3 text-brand-800">
                <span className="font-bold text-brand-500">→</span>
                <span><strong>El Empleado (PC01):</strong> Es la máquina con Windows 10. No le pondremos número manual, sino que el Jefe le asignará uno automáticamente cuando llegue a trabajar.</span>
              </li>
              <li className="flex gap-3 text-brand-800">
                <span className="font-bold text-brand-500">→</span>
                <span><strong>El Nombre de la Empresa:</strong> A todo este conjunto le llamaremos el dominio <code className="bg-white px-1.5 py-0.5 rounded text-brand-600 font-semibold shadow-sm">inacap.local</code>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conceptos Fundamentales */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-5 flex items-center gap-3 bg-slate-50/50">
          <BookOpen className="text-indigo-500" size={28} />
          <h3 className="text-xl font-bold text-slate-800">Conceptos fundamentales para entender el trabajo</h3>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Servidor", desc: "Un computador que está siempre encendido y conectado para entregar información o servicios a otros dispositivos. Es como un “ayudante central” que atiende solicitudes y mantiene funcionando todo." },
              { title: "Cliente", desc: "Es el dispositivo o programa que pide algo al servidor (tu celular, tu computador). Envía una solicitud y el servidor responde entregando la información." },
              { title: "Dominio", desc: "Es el nombre que usas para identificar un servicio en internet (como miempresa.cl). Funciona como la “dirección” de una casa, permitiendo a las personas acceder a un sitio escribiendo un nombre fácil." },
              { title: "Active Directory (AD)", desc: "Es como el “registro central” de una empresa. Permite controlar quién puede entrar, qué puede usar y qué puede ver dentro de la red. El administrador puede manejar cientos de equipos desde un solo lugar." },
              { title: "DNS", desc: "Es como la “guía telefónica” de internet. Convierte los nombres fáciles (google.com) en las direcciones numéricas reales (IP) donde viven los servidores." },
              { title: "DHCP", desc: "Es el encargado de repartir IPs. Le entrega automáticamente una dirección y configuración a cada dispositivo que se conecta a la red, para que todo funcione sin que el usuario haga nada manual." },
              { title: "GPO (Directiva de Grupo)", desc: "Es una regla que se aplica automáticamente a los computadores. Sirve para controlar qué pueden hacer los usuarios. En vez de ir PC por PC, el administrador crea una GPO y se aplica a todos al instante." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all">
                <h4 className="font-bold text-indigo-700 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requisitos y Enlaces */}
      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="text-emerald-500" size={24} />
              <h3 className="text-lg font-bold text-slate-800">Enlaces de Descarga Oficiales</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-emerald-50">
                  <strong className="text-slate-800 group-hover:text-emerald-700 block text-lg">VirtualBox</strong>
                  <span className="text-sm text-slate-500 group-hover:text-emerald-600">Descargar desde el sitio oficial</span>
                </a>
              </li>
              <li>
                <a href="https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2025" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-emerald-50">
                  <strong className="text-slate-800 group-hover:text-emerald-700 block text-lg">Windows Server 2025 (ISO)</strong>
                  <span className="text-sm text-slate-500 group-hover:text-emerald-600">Centro de evaluación de Microsoft</span>
                </a>
              </li>
              <li>
                <a href="https://www.microsoft.com/es-es/software-download/windows10" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-emerald-50">
                  <strong className="text-slate-800 group-hover:text-emerald-700 block text-lg">Windows 10 Pro (ISO)</strong>
                  <span className="text-sm text-slate-500 group-hover:text-emerald-600">Media Creation Tool (Elegir edición Pro)</span>
                </a>
              </li>
            </ul>
         </div>

         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <MonitorPlay className="text-amber-500" size={24} />
              <h3 className="text-lg font-bold text-slate-800">Requisitos del Equipo Físico</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
                  Requisitos Mínimos (Funciona, pero justo)
                </h4>
                <ul className="text-sm text-slate-600 space-y-1.5 ml-5 list-disc marker:text-slate-400">
                  <li><strong>CPU:</strong> 4 núcleos (Intel i5 o Ryzen 3)</li>
                  <li><strong>RAM:</strong> 12 GB</li>
                  <li><strong>Disco:</strong> 150 GB libres (HDD funciona, pero lento)</li>
                  <li><strong>Virtualización:</strong> Activada en BIOS</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3 bg-white p-2 rounded border border-slate-200"><em>Rendimiento:</em> Podrás correr el Servidor y el Cliente básicos, pero no esperes mucha fluidez.</p>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm"></span>
                  Requisitos Óptimos (Recomendado)
                </h4>
                <ul className="text-sm text-amber-800 space-y-1.5 ml-5 list-disc marker:text-amber-400">
                  <li><strong>CPU:</strong> 6–8 núcleos (Intel i7 / Ryzen 5 o superior)</li>
                  <li><strong>RAM:</strong> 16–32 GB</li>
                  <li><strong>Disco:</strong> 250–500 GB libres (SSD muy recomendado)</li>
                  <li><strong>Virtualización:</strong> Activada en BIOS</li>
                </ul>
                <p className="text-xs text-amber-800 mt-3 bg-amber-100/50 p-2 rounded border border-amber-200"><em>Rendimiento:</em> Podrás correr sin problemas el Servidor con AD/DNS/DHCP y 2 Clientes Windows 10.</p>
              </div>
            </div>
         </div>
      </div>

      {/* Nueva Sección de Cuentas */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-100 px-6 py-5 flex items-center gap-3 bg-slate-50/50">
          <Cloud className="text-sky-500" size={28} />
          <h3 className="text-xl font-bold text-slate-800">Cuentas y Despliegue</h3>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-slate-600 leading-relaxed text-lg">
            Se debe crear una cuenta en <strong>GitHub</strong> para mantener el proyecto versionado y respaldado. Además también se debe crear una cuenta en <strong>Vercel</strong> y sincronizarla con la de <strong>GitHub</strong> para poder desplegar la aplicación Wiki terminada y que sea accesible desde internet.
          </p>
        </div>
      </div>

    </div>
  );
}
# Inicio y Topología del Laboratorio: Nuestra Oficina Virtual

## ¿De qué se trata todo esto?
Imagina que vamos a construir un edificio de oficinas desde cero, pero en lugar de usar ladrillos y cemento, lo haremos todo dentro de tu propio computador usando un programa llamado VirtualBox. Vamos a crear dos "computadores fantasma" (máquinas virtuales). Uno será el **Jefe de la empresa** (el Servidor con Windows Server) y el otro será el **Escritorio de un empleado** (el Cliente con Windows 10). Nuestra meta es conectarlos para que el Jefe pueda dictar las reglas y el empleado pueda trabajar bajo esas normas.

### El Plano de nuestra Oficina (Topología de Red)
Para que este experimento sea seguro y no afecte tu internet real, crearemos un entorno cerrado, como una oficina sin puertas hacia el exterior.
* **El cable invisible:** En VirtualBox crearemos una red interna llamada `redlab`. Piensa en esto como un cable de red que solo conecta a nuestras dos máquinas virtuales entre sí; no tienen salida a internet, están completamente privadas.
* **El Jefe (SRV-DC01):** Es nuestra máquina con Windows Server. Tendrá un número de identificación fijo (IP `192.168.10.10`) para que todos sepan siempre dónde encontrarlo.
* **El Empleado (PC01):** Es la máquina con Windows 10. No le pondremos número manual, sino que el Jefe le asignará uno automáticamente cuando llegue a trabajar.
* **El Nombre de la Empresa:** A todo este conjunto le llamaremos el dominio `inacap.local`.

### Conceptos fundamentales para entender el trabajo
* **Servidor:** Un servidor es un computador que está siempre encendido y conectado para entregar información o servicios a otros dispositivos. Es como un “ayudante central” que atiende solicitudes y mantiene funcionando todo.
* **Cliente:** Es el dispositivo o programa que pide algo al servidor (tu celular, tu computador). Envía una solicitud y el servidor responde entregando la información.
* **Dominio:** Es el nombre que usas para identificar un servicio en internet (como `miempresa.cl`). Funciona como la “dirección” de una casa, permitiendo a las personas acceder a un sitio escribiendo un nombre fácil en lugar de números complicados (IP).
* **Active Directory (AD):** Es como el “registro central” de una empresa. Permite controlar quién puede entrar, qué puede usar y qué puede ver dentro de la red. El administrador puede manejar cientos de equipos desde un solo lugar.
* **DNS:** Es como la “guía telefónica” de internet. Convierte los nombres fáciles (`google.com`) en las direcciones numéricas reales (IP) donde viven los servidores. 
* **DHCP:** Es el encargado de repartir IPs. Le entrega automáticamente una dirección y configuración a cada dispositivo que se conecta a la red, para que todo funcione sin que el usuario haga nada manual.
* **GPO (Directiva de Grupo):** Es una regla que se aplica automáticamente a los computadores. Sirve para controlar qué pueden hacer los usuarios. En vez de ir PC por PC, el administrador crea una GPO y se aplica a todos al instante.

### Herramientas y Requisitos

**Enlaces de Descarga Oficiales:**
* **VirtualBox:** [Descargar desde el sitio oficial](https://www.virtualbox.org/wiki/Downloads)
* **Windows Server 2025 (ISO):** [Centro de evaluación de Microsoft](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2025)
* **Windows 10 Pro (ISO):** [Media Creation Tool (Elegir edición Pro)](https://www.microsoft.com/es-es/software-download/windows10)

**🖥️ Requisitos del equipo físico (Tu PC real)**
Este punto es vital, ya que todo depende de la potencia de tu computador.

**✔️ Requisitos Mínimos (Funciona, pero justo)**
* **CPU:** 4 núcleos (Intel i5 o Ryzen 3)
* **RAM:** 12 GB
* **Disco:** 150 GB libres (HDD funciona, pero lento)
* **Virtualización:** Activada en BIOS (Intel VT‑x / AMD‑V)
* *Rendimiento:* Podrás correr el Servidor y el Cliente básicos, pero no esperes mucha fluidez.

**⭐ Requisitos Óptimos (Recomendado para trabajar cómodo)**
* **CPU:** 6–8 núcleos (Intel i7 / Ryzen 5 o superior)
* **RAM:** 16–32 GB
* **Disco:** 250–500 GB libres (SSD muy recomendado)
* **Virtualización:** Activada en BIOS
* *Rendimiento:* Podrás correr sin problemas el Servidor con AD/DNS/DHCP y 2 Clientes Windows 10, y tu PC seguirá funcionando fluido.

**☁️ Requisitos de Cuentas (Para el despliegue web)**
Se debe crear una cuenta en **GitHub** para mantener el código de esta Wiki versionado y respaldado. Además, se requiere una cuenta en **Vercel** (sincronizada con GitHub) para poder desplegar la aplicación y que sea accesible desde internet.


# 🖥️ Wiki Lab: Infraestructura Windows Server y Active Directory

Esta es una aplicación web interactiva construida con **React** y **Vite**, diseñada para documentar paso a paso la implementación de un laboratorio de red empresarial utilizando Windows Server y Windows 10. 

El proyecto funciona como un manual digital, estructurado de forma didáctica para guiar la creación de una topología de red cerrada.

## 🚀 Tecnologías Utilizadas

- **React 18** (Librería UI)
- **Vite** (Herramienta de construcción rápida)
- **Tailwind CSS** (Framework de estilos utilitarios)
- **Lucide React** (Librería de íconos SVG)

## 📚 Contenido de la Wiki

La documentación está dividida en módulos interactivos que detallan cada fase del laboratorio:

1. **Inicio y Topología:** Conceptos teóricos fundamentales, requisitos de hardware y diseño de la red cerrada (`redlab`).
2. **Instalación Básica:** Creación de la máquina virtual y configuración inicial del sistema operativo Windows Server (SRV-DC01).
3. **Active Directory:** Instalación del rol AD DS y promoción del servidor a Controlador de Dominio (`inacap.local`).
4. **Cliente Windows 10:** Preparación de la máquina cliente (PC01), sincronización del protocolo Kerberos y unión formal al dominio corporativo.
5. **Servicios de Red (DHCP):** Implementación de Unidades Organizativas (Ventas), usuarios, grupos y automatización de entrega de direcciones IP.

## ⚙️ Instalación y Ejecución Local

Para correr este proyecto en tu entorno local, asegúrate de tener [Node.js](https://nodejs.org/) instalado y sigue estos pasos:

1. Instala las dependencias del proyecto:
   ```bash
   npm install

2. Inicia el servidor de desarrollo:
    ```bash
    npm run dev

3. Abre tu navegador y navega a la ruta indicada en la terminal, generalmente de la siguiente URL:
    ```bash
    http://localhost:5173


## 👨‍💻 Autor
Angler Jose Posada Miranda, Desarrollado como parte de las actividades prácticas de la carrera de Ingeniería en Informática.
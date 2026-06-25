# 07. Bitácora de Prompts y Uso de IA

**Objetivo del documento:** Registrar y justificar las instrucciones (prompts) utilizadas con la inteligencia artificial (Gemini) para transformar la documentación del laboratorio (Markdown) en componentes interactivos de React con Tailwind CSS.

---

## 🛠️ Prompt 1: Creación del Dashboard Principal
**Componente:** `Inicio.jsx`
**Objetivo:** Transformar el texto base en una portada moderna y estructurada.

> **Prompt utilizado:**
> "Actúa como un desarrollador Front-end experto. Crea un componente React con JSX llamado Inicio.jsx para la portada de mi wiki de Windows Server.
> 
> **Requisitos técnicos y de diseño:**
> Utiliza Tailwind CSS para los estilos. Necesito un diseño moderno usando tarjetas con bordes redondeados, sombras suaves y fondos organizados. Importa e incluye iconos de la librería lucide-react para acompañar visualmente cada título importante.
> 
> **Instrucciones de Contenido:**
> No inventes datos ni texto de relleno. Usa estrictamente la información de mi archivo fuente docs_posada/01_inicio_posada.md que te pego a continuación.
> - Organiza la sección de 'Conceptos fundamentales' en una cuadrícula.
> - Dale un formato destacado a los 'Requisitos del equipo'.
> - Agrega la sección final de 'Cuentas' en su propia tarjeta.
> 
> Aquí está mi contenido:
> [Se adjuntó el archivo Inicio.md]"

**💡 Justificación técnica:** Se utilizó la técnica de **Asignación de Rol** ("Actúa como un desarrollador Front-end experto") para establecer el nivel técnico de la respuesta. Además, se aplicaron **Restricciones Negativas** ("No inventes datos ni texto de relleno") para asegurar la fidelidad de la información académica.

---

## 🛠️ Prompt 2: Documentación de Instalación
**Componente:** `Instalacion.jsx`
**Objetivo:** Mantener la consistencia visual y de código con la página de inicio.

> **Prompt utilizado:**
> "Actúa como un desarrollador Front-end experto. Crea un componente React con JSX llamado Instalacion.jsx para la sección de instalación de mi wiki de Windows Server, siguiendo la misma estructura que en la sección de Inicio.
> 
> **Requisitos técnicos y de diseño:**
> Utiliza Tailwind CSS para los estilos. Necesito un diseño moderno usando tarjetas con bordes redondeados, sombras suaves y fondos organizados. Importa e incluye iconos de la librería lucide-react para acompañar visualmente cada título importante.
> 
> **Instrucciones de Contenido:**
> No inventes datos ni texto de relleno. Usa estrictamente la información de mi archivo fuente docs_posada/01_instalacion_posada.md que te pego a continuación.
> 
> Aquí está mi contenido:
> [Se adjuntó el archivo .md]"

**💡 Justificación técnica:**
Se empleó la técnica de **Continuidad de Contexto** ("siguiendo la misma estructura que en la sección de Inicio") para garantizar que el diseño de la aplicación web sea cohesivo en todas sus rutas, sin necesidad de reexplicar toda la paleta de estilos.

---

## 🛠️ Prompt 3: Configuración del Directorio Activo
**Componente:** `ActiveDirectory.jsx`
**Objetivo:** Renderizar correctamente imágenes y resaltar conceptos teóricos clave.

> **Prompt utilizado:**
> "Hola Gemini. Necesito generar el componente de código para la fase '2.1.2 Active Directory y Dominio' de mi proyecto web. El archivo se debe llamar ActiveDirectory.jsx.
> 
> **Sobre el diseño y las herramientas:**
> Quiero que utilices React y Tailwind CSS. Aplica un estilo limpio con contenedores tipo tarjeta (bg-white, rounded-2xl, shadow-sm) para separar la guía paso a paso de las explicaciones conceptuales. Para darle vida a los títulos, inserta íconos pertinentes de lucide-react (te sugiero usar 'Users' para el título principal y 'Server' o 'CheckCircle2' para los pasos).
> 
> **Sobre el contenido:**
> Es súper importante que NO generes texto automático ni inventes instrucciones. Debes procesar y usar exactamente la información que yo mismo redacté en mi archivo fuente docs_posada/03_active_directory_posada.md.
> 
> **Detalles clave para el código:**
> - Renderiza las etiquetas `<img>` cuidando de poner las rutas exactas que dejé en mi texto.
> - Pon la sección final de '¿Por qué hacemos esto?' dentro de una tarjeta destacada con un fondo de color suave (ej. bg-blue-50), para que el lector note que es una explicación teórica importante sobre qué es el DNS.
> 
> Aquí tienes mi documento para que lo transformes a código JSX:
> [Se adjuntó 03_active_directory_posada.md]"

**💡 Justificación técnica:**
Este prompt destaca por el uso de **Instrucciones de Formato Específico**, dictando clases exactas de Tailwind (`bg-blue-50`) para jerarquizar la información. También se aborda la integración de medios pidiendo explícitamente el respeto por las rutas relativas de las imágenes.

---

## 🛠️ Prompt 4: Conexión del Cliente al Dominio
**Componente:** `ClienteDominio.jsx`
**Objetivo:** Manejar advertencias de UI y prevenir errores de sintaxis (caracteres de escape).

> **Prompt utilizado:**
> "Actúa como un desarrollador Front-end experto. Crea un componente React con JSX llamado ClienteDominio.jsx para la sección 'Conectar al Empleado (Windows 10)' de mi wiki.
> 
> **Requisitos técnicos y de diseño:**
> Utiliza Tailwind CSS para los estilos. Diseña una interfaz moderna estructurada en tarjetas con bordes redondeados (rounded-2xl), fondos organizados (bg-slate-50) y sombras suaves (shadow-sm). Importa e incluye íconos de la librería lucide-react (como Monitor, Clock, ShieldAlert, etc.) para acompañar los títulos de cada paso.
> 
> Destaca visualmente el 'Paso 4: Sincronizar la hora' usando un diseño de alerta (colores rojizos/rosados), ya que es un paso crítico para el laboratorio.
> 
> **Instrucciones de Contenido:**
> No inventes información ni texto de relleno. Usa estrictamente el texto y la estructura de mi archivo docs_posada/04_cliente_dominio_posada.md que te pego abajo.
> 
> - Asegúrate de codificar las etiquetas `<img>` para que rendericen las 9 imágenes exactamente donde están indicadas en mi texto.
> - Maneja correctamente las barras invertidas en las rutas de Windows (ej. `INACAP\Administrator`) para que no rompan el código de React.
> - Coloca las explicaciones finales de 'Kerberos' y 'Windows 10 Pro' en un grid de tarjetas al final del componente.
> 
> Aquí está mi contenido fuente:
> [Se adjuntó 04_cliente_dominio_posada.md]"

**💡 Justificación técnica:**
Representa el prompt más avanzado del proyecto. Demuestra **Anticipación de Errores** ("Maneja correctamente las barras invertidas... para que no rompan el código"), lo que previene fallos de compilación en Vite. Además, incluye **Diseño Basado en Contexto**, exigiendo colores de alerta (rojo/rosado) para advertir al usuario sobre pasos críticos del laboratorio (Kerberos).


## 🛠️ Prompt 5: Servicios de Red (DHCP) y Usuarios
**Componente:** `ServiciosRed.jsx`
**Objetivo:** Integrar un alto volumen de capturas de pantalla sin saturar la interfaz de usuario, manteniendo la legibilidad del manual.

> **Prompt utilizado:**
> "Actúa como un desarrollador UX/UI experto en React. Necesito que crees el componente `ServiciosRed.jsx` basado en la sección '2.1.4 Servicios de Red (DHCP) y Usuarios' de mi wiki.
> 
> **Requisitos técnicos y de diseño:**
> - Sigue utilizando Tailwind CSS para mantener la estética de tarjetas (`bg-white`, `rounded-2xl`, `shadow-sm`).
> - Utiliza una paleta de acento en tonos morados (`text-purple-600`, `bg-purple-50`) para diferenciar visualmente esta fase de las anteriores.
> - Importa iconos de `lucide-react` (ej. Network, FolderTree, Users).
> 
> **Instrucciones de Contenido e Imágenes (Crítico):**
> Usa el texto exacto de mi archivo `docs_posada/05_servicios_red_posada.md`. Esta sección contiene 19 capturas de pantalla. Para evitar un scroll infinito, agrupa las etiquetas `<img>` de cada sub-paso utilizando CSS Grid de Tailwind (ej. `grid grid-cols-2 lg:grid-cols-4 gap-3`).
> 
> Pon la explicación final del DHCP dentro de una tarjeta blanca con un icono de Lightbulb.
> 
> Aquí está mi contenido fuente:
> [Se adjuntó 05_servicios_red_posada.md]"

**💡 Justificación técnica:**
Se aplicó la técnica de **Restricción de Presentación**. Al tener 19 imágenes, un renderizado secuencial tradicional destruiría la experiencia de usuario. Se le exigió explícitamente a la IA el uso de CSS Grid (`grid-cols-2`, `grid-cols-4`) para generar galerías compactas y organizadas por contexto (ej. todas las imágenes de la Unidad Organizativa agrupadas en un solo bloque).
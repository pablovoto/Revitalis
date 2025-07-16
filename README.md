# Revitalis - Clínica Estética

Una landing page moderna y elegante para la clínica estética Revitalis, desarrollada con React, TypeScript, Tailwind CSS y DaisyUI.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Header con menú de navegación claro y llamativo
- **Carousel Interactivo**: Carousel automático con controles manuales que muestra los servicios principales
- **Heroes con Video**: Secciones hero con videos en loop automático en páginas de servicios
- **Mapas Interactivos**: Integración con React Leaflet para mostrar ubicaciones de clínicas
- **Datos Centralizados**: Información de contacto, servicios y FAQs gestionados desde un archivo central
- **Seis Páginas Principales**:
  - **Inicio**: Página principal con hero section, servicios destacados y sección about
  - **Servicios**: Catálogo completo de tratamientos disponibles
  - **Contacto**: Formulario de contacto, mapa interactivo, información de ubicación y FAQ
  - **Depilación Láser**: Página dedicada con hero de video y información detallada
  - **Medicina Estética**: Página especializada con tratamientos médicos estéticos
  - **Estética Avanzada**: Página de tratamientos corporales y faciales avanzados

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.1** - Estilos y diseño
- **DaisyUI 5** - Componentes UI prediseñados
- **React Router DOM** - Navegación entre páginas
- **React Leaflet** - Mapas interactivos
- **Leaflet** - Biblioteca de mapas
- **Vite** - Build tool y servidor de desarrollo

## 🎨 Diseño

- **Tema Personalizado**: Paleta de colores personalizada con DaisyUI
- **Tipografía**: Inter font para una apariencia moderna y profesional
- **Iconos**: SVG icons integrados para mejor rendimiento
- **Videos**: Heroes con videos en loop automático
- **Mapas**: Integración con OpenStreetMap para ubicaciones

## 📱 Páginas

### Inicio
- Hero section con carousel automático
- Servicios destacados con cards interactivas
- Sección "¿Por qué elegirnos?" con beneficios
- Call-to-action para reservar citas

### Servicios
- Grid de servicios con imágenes y descripciones
- Lista de tratamientos incluidos
- Precios y botones de reserva
- Sección de beneficios y garantías

### Contacto
- Formulario de contacto completo con selección de servicios
- Mapa interactivo con ubicaciones de ambas clínicas
- Información de contacto centralizada
- Horarios de atención
- Preguntas frecuentes (FAQ) dinámicas

### Depilación Láser
- Hero con video en loop automático
- Información detallada del tratamiento
- Beneficios y ventajas
- Proceso paso a paso
- Preguntas frecuentes específicas

### Medicina Estética
- Hero con video en loop automático
- Catálogo completo de tratamientos médicos
- Información sobre ácido hialurónico, botox, plasma rico en plaquetas
- Garantías y certificaciones médicas

### Estética Avanzada
- Hero con video en loop automático
- Tratamientos faciales y corporales
- Tecnologías como HydraFacial, radiofrecuencia, cavitación
- Información detallada de cada procedimiento

## 🛠️ Instalación y Uso

1. Clona el repositorio:
```bash
git clone [repository-url]
cd estetica
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Footer.tsx      # Footer con links e información
│   ├── Carousel.tsx    # Carousel interactivo
│   ├── VideoHero.tsx   # Hero con video de fondo
│   ├── ContactMap.tsx  # Mapa interactivo con React Leaflet
│   └── ContactInfo.tsx # Información de contacto reutilizable
├── pages/              # Páginas principales
│   ├── Home.tsx        # Página de inicio
│   ├── Services.tsx    # Página de servicios
│   ├── Contact.tsx     # Página de contacto
│   ├── DepilacionLaser.tsx    # Página de depilación láser
│   ├── MedicinaEstetica.tsx   # Página de medicina estética
│   └── EsteticaAvanzada.tsx   # Página de estética avanzada
├── data/               # Datos centralizados
│   └── contactData.ts  # Información de contacto, servicios, FAQs y videos
├── App.tsx             # Componente principal con routing
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales y tema DaisyUI
```

## 🎯 Características Técnicas

- **Routing**: Implementado con React Router DOM para 6 páginas
- **Estado Local**: Uso de React Hooks (useState, useEffect)
- **Responsive Design**: Mobile-first approach con Tailwind CSS
- **Componentes UI**: DaisyUI para componentes prediseñados
- **Mapas Interactivos**: React Leaflet con OpenStreetMap
- **Videos**: Heroes con reproducción automática en loop
- **Datos Centralizados**: Información gestionada desde un archivo TypeScript
- **Accesibilidad**: Estructuras semánticas y navegación por teclado
- **Rendimiento**: Lazy loading y optimización de recursos

## 🎬 Configuración de Videos

Los videos para las secciones hero se configuran en `src/data/contactData.ts`:

```typescript
export const serviceVideos: ServiceVideo[] = [
  {
    id: "depilacion-laser",
    title: "Depilación Láser",
    subtitle: "Tecnología de vanguardia para una depilación definitiva",
    buttonText: "Solicitar Consulta Gratuita",
    videoUrl: "/videos/depilacion-laser.mp4", // Actualizar con URL real
    gradientFrom: "primary/30",
    gradientTo: "secondary/30",
  },
  // ... más configuraciones
];
```

## 🗺️ Configuración de Mapas

Las ubicaciones de las clínicas se gestionan centralmente:

```typescript
export const clinicLocations: ClinicLocation[] = [
  {
    id: 1,
    name: "Revitalis - San Miguel de Tucumán",
    address: "25 de Mayo 639, Local 1, San Miguel de Tucumán",
    position: [-26.8223278, -65.2031367],
    phone: "+54 9 381 5540611",
    email: "administracion@clinicaesteticarevitalis.com",
  },
  // ... más ubicaciones
];
```

## 📞 Información de Contacto

### Clínica Revitalis

**San Miguel de Tucumán**
- 📍 25 de Mayo 639, Local 1, San Miguel de Tucumán
- 📞 +54 9 381 5540611
- ✉️ administracion@clinicaesteticarevitalis.com

**Yerba Buena**
- 📍 Solar del Cerro Shopping, Avenida Aconquija 1336, Piso 1, Local 102
- 📞 +54 9 381 5712134
- ✉️ administracion@clinicaesteticarevitalis.com

**Redes Sociales**
- 📱 Instagram: [@clinicarevitalis](https://www.instagram.com/clinicarevitalis/)
- 📘 Facebook: [Clínica Revitalis](https://www.facebook.com/profile.php?id=61573944629110)
- 💬 WhatsApp: [+54 9 381 5540611](https://wa.me/5493815540611)

Para más información sobre el proyecto o para reportar problemas, por favor contacta al equipo de desarrollo.

---

Desarrollado con ❤️ para **Revitalis - Medicina Estética Avanzada**

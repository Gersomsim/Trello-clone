# 🎯 Trello Clone

Un clon funcional de Trello construido con Angular, que replica las características principales de gestión de tableros, listas y tareas.

## 📋 Descripción

Este proyecto es una implementación completa de un sistema de gestión de proyectos inspirado en Trello. Permite a los usuarios crear tableros, organizar tareas en listas, asignar responsabilidades y colaborar en proyectos de manera eficiente.

### ✨ Características Principales

- **Gestión de Tableros**: Crear, editar y organizar tableros de proyectos
- **Sistema de Listas**: Organizar tareas en listas personalizables
- **Gestión de Tareas**: Crear, editar y asignar tareas con descripciones detalladas
- **Interfaz Intuitiva**: Diseño moderno y responsive inspirado en Trello
- **Persistencia de Datos**: Almacenamiento local con sincronización
- **Autenticación**: Sistema de login y gestión de usuarios
- **Workspaces**: Organización de proyectos en espacios de trabajo

## 🚀 Tecnologías Utilizadas

### Frontend

- **Angular 19** - Framework principal para la aplicación
- **TypeScript** - Lenguaje de programación tipado
- **Tailwind CSS 4** - Framework de CSS utility-first
- **Angular CDK** - Componentes de desarrollo de Angular
- **RxJS** - Programación reactiva

### Estado y Persistencia

- **@ngneat/elf** - Gestión de estado ligera y eficiente
- **@ngneat/elf-persist-state** - Persistencia automática del estado
- **ngx-cookie-service** - Gestión de cookies para autenticación

### UI/UX

- **FontAwesome** - Iconografía
- **SweetAlert2** - Alertas y modales elegantes
- **Angular Animations** - Animaciones fluidas

### Desarrollo

- **Angular CLI** - Herramientas de desarrollo
- **Jasmine & Karma** - Testing framework
- **Prettier** - Formateo de código

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Gersomsim/Trello-clone.git
   cd Trello-clone
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   Navega a `http://localhost:4200/`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/                 # Lógica de negocio y entidades
│   ├── infrastructure/       # Servicios y almacenamiento
│   ├── pages/               # Componentes de página
│   ├── ui/                  # Componentes reutilizables
│   └── layouts/             # Layouts de la aplicación
```

## 🧪 Testing

### Ejecutar tests unitarios

```bash
npm test
```

### Ejecutar tests e2e

```bash
npm run e2e
```

## 🏗️ Build

### Build de desarrollo

```bash
npm run build
```

### Build de producción

```bash
npm run build --prod
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este es un proyecto de código abierto y apreciamos cualquier contribución.

### Cómo Contribuir

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución

- Mantén el código limpio y bien documentado
- Sigue las convenciones de Angular
- Añade tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 Trello Clone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Autores

- **Gersom Hernandez** - _Desarrollo inicial_ - [Gersomsim](https://github.com/Gersomsim)

## 🙏 Agradecimientos

- Inspirado en [Trello](https://trello.com/)
- Comunidad de Angular por las excelentes herramientas
- Contribuidores y revisores del código

## 📞 Contacto

- **Email**: gersomhernandez@me.com
- **GitHub**: [@Gersomsim](https://github.com/Gersomsim)
- **LinkedIn**: [Gersom Hernandez](https://linkedin.com/in/gersom-hernandez)

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!

<h1 align="left">API DE SISTEMA DE CONTROL DE PETICIONES INTER-SUCURSALES</h1>

###

<div align="center">
  <img height="350" src="https://i.ibb.co/LXwcXGwg/api.png"  />
</div>

###

<p align="left">Administra mas de 4 sucursales ubicadas en diferentes lugares y subdominios, todo controlado desde la casa matriz o dominio principal, controla el flujo de trabajo atraves de roles, permisos , areas o sucursales, y todo en tiempo real, authenticacion atraves de tokens y permisos de usuarios.</p>

###

<h2 align="left">📌 Funcionalidades</h2>

###

<p align="left">✅ Authenticacion por token.<br>✅ Gestión de tareas con  creación, edición y eliminación .<br>✅ Reportes en tiempo real con gráficos (Recharts)<br>✅ Control de usuarios con roles y permisos.<br>✅ CRUDs de Áreas, roles, usuarios, tareas.</p>

###

<h2 align="left">⚙️ Tecnologías usadas</h2>

###

<p align="left">- [Nodejs](https://nodejs.org/es) – Framework<br>- [TypeScript](https://www.typescriptlang.org/) – Tipado estático<br>- [Vercel](https://vercel.com/) – Hosting y despliegue automático<br>-[Turso](https://app.turso.tech/) - Almacenamiento de la informacion en Database</p>

###

<h2 align="left">🚀 Ejecución</h2>

###
```bash
#clonar repositorio
git clone https://github.com/oscarMolina1523/workflowSystemAPI.git

#navegar a la carpeta del proyecto
cd workflowSystemAPI

#instalar dependencias
npm install

#correr el proyecto en local
npm run dev

```
###

<h2 align="left">📂 Estructura del proyecto</h2>

###
```bash
#Esa estructura sigue el patrón de diseño de Arquitectura Limpia (Clean Architecture), para proyectos Node.js grandes y mantenibles.
├───Aplication.Endpoint   # Lógica de la aplicación: Contiene los "Use Cases" (Casos de Uso) o Application Services.
├───Domain.Endpoint       # El Corazón del Negocio: Define las reglas de negocio, entidades, y contratos (interfaces) que son independientes de la tecnología.
│   ├───dtos              # Data Transfer Objects: Estructuras de datos para pasar información entre capas .
│   ├───entities          # Las Entidades del Negocio: Objetos que representan el estado y las reglas 
│   ├───interfaces        # Contratos/Puertos: Define las "firmas" (interfaces) que otras capas (Infrastructure) deben implementar.
│   │   ├───repositories  # Contratos para acceder a datos (ej. IUserRepository, define los métodos pero no la implementación de la base de datos).
│   │   └───services      # Contratos para servicios externos o de dominio (ej. IEmailSender).
│   ├───services          # Servicios de Dominio: Lógica que no encaja directamente en una entidad (ej. transferir dinero entre cuentas).
│   └───utils             # Utilidades o helpers puros del dominio (ej. funciones de validación de negocio).
├───Infrastructure.Endpoint   # Implementación: Contiene las implementaciones concretas de las interfaces definidas en Domain, conectando con el mundo exterior.
│   ├───builders          # Clases para construir objetos complejos (a menudo, servicios o configuraciones).
│   ├───data              # Implementación de acceso a datos.
│   │   ├───info          # Puede contener migraciones de base de datos o información de esquema.
│   │   └───repositories  # Implementaciones concretas de las interfaces de 'repositories' (ej. UserRepository.js usando Mongoose/Sequelize).
│   ├───database          # Módulos de conexión y configuración de la base de datos (ej. pool de conexiones).
│   ├───interfaces        # Contratos o interfaces específicos de la infraestructura (menos común en Clean Architecture, a veces usado para adaptadores).
│   │   └───database      # Interfaces para la capa de base de datos si se requiere abstracción extra.
│   ├───services          # Implementación de servicios externos (ej. la implementación real del IEmailSender usando SendGrid).
│   └───utils             # Utilidades de bajo nivel o relacionadas con el sistema (logs, archivos, etc.).
└───WebApi                # Interfaz de Usuario/Entrada: El punto de entrada a la aplicación (el framework web, en este caso Node.js/Express).
├───controllers           # Manejan la petición HTTP, llaman a los Casos de Uso (Application.Endpoint) y formatean la respuesta.
├───routes                # Archivos de configuración de rutas (mapeo de URLs a Controllers).
├───swagger               # Documentación de la API (archivos de configuración de Swagger/OpenAPI).
└───utils                 # Middleware, validadores de entrada HTTP o helpers específicos de la capa web.
```
###

<h2 align="left">🛠️ Scripts útiles</h2>

###
```bash

npm run dev → Modo desarrollo
npm run build → Compila para producción
npm run preview → Vista previa de la build

```
###

<h2 align="left">✨ Autores</h2>

###

<p align="left">Desarrollador Oscar Molina<br>💼 Desarrollador Web<br>GitHub: @oscarMolina1523<br>linkedin: https://www.linkedin.com/in/oscar-molina-916195309</p>

###

# E-commerce Data Pipeline

Proyecto desarrollado como práctica integral de ingeniería de datos y desarrollo web. El objetivo fue tomar un conjunto de datos sin procesar, realizar un proceso ETL, diseñar una base de datos relacional, desarrollar una API REST y consumirla desde una aplicación web. Finalmente, toda la aplicación fue contenerizada utilizando Docker.

---

# Arquitectura del Proyecto

El proyecto se divide en cuatro etapas principales:

## 1. Ingeniería de Datos

- Descarga de un dataset.
- Limpieza y transformación de datos utilizando Python.
- Modelado de datos.
- Creación de tablas.
- Creación de consultas SQL.
- Organización de datos en la capa **Gold**.
- Creación de una base de datos PostgreSQL local.

---

## 2. Backend

API REST desarrollada con:

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL

Se implementó una arquitectura basada en:

- Routes
- Controllers
- Middleware
- Validaciones
- Manejo de errores
- CORS

Las pruebas de los endpoints fueron realizadas con **Postman**.

---

## 3. Frontend

Aplicación desarrollada con:

- Next.js
- TypeScript
- Zod

Características:

- Consumo de la API mediante **Fetch API**.
- Validación de datos con **Zod**.
- Interfaz sencilla enfocada en visualizar la información obtenida desde el backend.

---

## 4. Docker

Toda la aplicación fue contenerizada utilizando:

- Docker
- Docker Compose

Incluye:

- Contenedor para PostgreSQL.
- Contenedor para la API.
- Contenedor para el Frontend.

También se realizaron las migraciones necesarias para crear la estructura de la base de datos dentro del contenedor de PostgreSQL.

---

# Tecnologías

## Backend

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL

## Frontend

- Next.js
- TypeScript
- Zod

## Data Engineering

- Python
- SQL
- PostgreSQL

## DevOps

- Docker
- Docker Compose

## Herramientas

- Postman
- Git

---

# Variables de Entorno

## Backend

Crear un archivo `.env` dentro del proyecto del backend.

```env
DATABASE_URL=postgresql://root:123456@db:5432/ecommerce_data
PORT=4000
```

### Nota

`DATABASE_URL` puede apuntar a:

- La base de datos local.
- La base de datos del contenedor Docker.

Ejemplo con Docker:

```env
DATABASE_URL=postgresql://root:123456@db:5432/ecommerce_data
```

Ejemplo local:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/ecommerce_data
```

---

## Frontend

Crear un archivo `.env.local`

```env
API_URL=http://localhost:4000
```

Cuando se utilice Docker, la URL puede apuntar al servicio de la API definido en `docker-compose.yml`.

Ejemplo:

```env
API_URL=http://api:4000
```

---

# Instalación

## Clonar repositorio

```bash
git clone <url-del-repositorio>

cd proyecto
```

---

## Backend

Instalar dependencias

```bash
npm install
```

Iniciar servidor

```bash
npm run dev
```

---

## Frontend

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
npm run dev
```

---

# Docker

Construir los contenedores

```bash
docker compose build
```

Levantar los servicios

```bash
docker compose up
```

En segundo plano

```bash
docker compose up -d
```

Detener servicios

```bash
docker compose down
```

---

# Migraciones

Una vez levantados los contenedores, ejecutar las migraciones para crear las tablas dentro del contenedor de PostgreSQL.

Ejemplo:

```bash
docker compose exec api npm run migrate
```

> El comando puede variar dependiendo de la configuración del proyecto.

---

# Flujo del Proyecto

```text
Dataset
      │
      ▼
Limpieza (Python)
      │
      ▼
Modelado de Datos
      │
      ▼
PostgreSQL
      │
      ▼
Express API
      │
      ▼
Next.js
      │
      ▼
Docker Compose
```

---

# Estructura del Proyecto

```text
project
│
├── backend/
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── models
│   ├── migrations
│   └── ...
│
├── frontend/
│   ├── app
│   ├── components
│   ├── lib
│   └── ...
│
├── docker-compose.yml
└── README.md
```

---

# Autor

**Israel Castañeda Luna**

Ingeniero en Sistemas Computacionales

---

# Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.
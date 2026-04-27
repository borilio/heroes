# 🦸‍♂️ Superhéroes App - Proyecto Angular

Este proyecto será la base que utilizaremos durante el curso para aprender Angular paso a paso.

Trabajaremos sobre esta aplicación para construir un CRUD completo de superhéroes, añadiendo funcionalidades de forma progresiva.

---

## 🚀 Ejecutar en el navegador (sin instalar nada)

Puedes abrir el proyecto directamente en tu navegador usando StackBlitz, o descargarlo desde GitHub para editarlo localmente:

### 📋 Versiones disponibles

| Versión | Enlace a Stackblitz | Descargar de GitHub | Descripción |
|---------|--------|-------------|-------------|
| v1-base | https://stackblitz.com/github/borilio/heroes/tree/v1-base | https://github.com/borilio/heroes/archive/refs/tags/v1-base.zip | Versión base inicial del proyecto |
| v2-routing | https://stackblitz.com/github/borilio/heroes/tree/v2-routing | https://github.com/borilio/heroes/archive/refs/tags/v2-routing.zip | Versión con el routing terminado |
| v3-modelos | https://stackblitz.com/github/borilio/heroes/tree/v3-modelos | https://github.com/borilio/heroes/archive/refs/tags/v3-modelos.zip | Versión con los modelos añadidos |
| v4-servicios | https://stackblitz.com/github/borilio/heroes/tree/v4-modelos | https://github.com/borilio/heroes/archive/refs/tags/v4-servicios.zip | Versión con los servicios añadidos |
| v5-http | https://stackblitz.com/github/borilio/heroes/tree/v5-http | https://github.com/borilio/heroes/archive/refs/tags/v5-http.zip | Versión que usa peticiones http |
| próximamente | ... |  | ... |

> [!warning]
>
> A medida que se creen nuevas versiones, se irán añadiendo aquí.

> [!tip]
>
> Cómo crear una nueva versión
>
> ```bash
> # Una vez terminado el commit, creamos el tag que apuntará al último commit
> # Crear tag local
> git tag -a v2-routing -m "Versión terminada con el routing"
> 
> # Subir tag a remoto
> git push origin v2-routing
> ```

---

## 🧪 Cómo usar StackBlitz

1. Abre el enlace anterior en la versión deseada
2. Espera a que cargue el proyecto
3. Pulsa en **"Fork"** o **"Edit"** para crear tu propia copia
4. Empieza a trabajar sobre tu versión

> [!caution]
>
> No se recomienda usar Stackblitz como IDE o como único apoyo del curso. Sirve como complemento para verlo en acción de forma rápida, pero se recomienda que crees tu propio proyecto localmente y lo edites con VSC

---

## 📦 Estructura del proyecto

El proyecto está organizado en varias partes:

* **components** → componentes reutilizables divididos en estructurales (layout) y páginas de la aplicación (pages)
  * **layout** → cabecera, navegación y pie de página
  * **pages** → distintas pantallas de la aplicación

* **services** → lógica de acceso a datos (más adelante)
* **models** → estructura de datos (más adelante)
* **guards** → seguridad de las rutas (más adelante)

---

## 🧠 Objetivo del proyecto

A lo largo del curso aprenderemos a:

1. Crear y organizar componentes
2. Navegar entre páginas (routing)
3. Gestionar datos con modelos
4. Centralizar lógica con servicios
5. Conectar con un backend mediante HTTP

---

## ⚠️ Importante

Este proyecto es una **base inicial**:

* Algunas partes están preparadas pero no implementadas
* Iremos completando la aplicación en cada tema
* No es necesario entender todo desde el primer momento

---

## 🛠️ Uso en local (opcional)

Si quieres trabajar en tu equipo:

```bash
npm install
ng serve
```

Y abre en el navegador:

```
http://localhost:4200
```

---

## 📚 Recomendación

Trabaja siempre sobre tu copia (Fork en StackBlitz o clon en local) para no perder cambios y poder experimentar sin miedo.


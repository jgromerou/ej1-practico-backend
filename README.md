# Ejercicio 1 del TP Backend: Lista de Tareas

## Descripción

Crear un proyecto de backend con los endpoints necesarios para poder agregar
una tarea, listar todas las tareas existentes, borrar una tarea, editar una tarea y
obtener una tarea por el nombre o identificador único. Modelar la base de datos
necesaria con MongoDB.

## Tecnologias / Herramientas 🛠

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Javascript](https://www.w3schools.com/js/)
- [NodeJs](https://nodejs.org/es)
- [ExpressJs](https://expressjs.com/es/)
- [BabelJs](https://babeljs.io/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors#readme)
- [Morgan](https://github.com/expressjs/morgan)
- [Express Validator](https://express-validator.github.io/docs)
- [Markdown](https://markdown.es/)

## Pasos para clonar y ejecutar la Aplicación 🖥

Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

1.  **Requisitos previos:** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la versión más reciente desde el sitio web oficial de Node.js (https://nodejs.org).
    Asegúrate también de tener un administrador de paquetes de Node.js instalado, como npm (que se instala junto con Node.js) o Yarn.

2.  **Clona el repositorio:** En tu línea de comandos, ejecuta el siguiente comando para clonar el repositorio:

    ```
    git clone https://github.com/jgromerou/ej1-practico-backend.git
    ```

3.  **Accede al directorio:** Ve al directorio de la aplicación clonada:

    ```
    cd <ej1-practico-backend>
    ```

4.  **Instala las dependencias:** Ejecuta el siguiente comando para instalar las dependencias de la aplicación:

    ```
    npm install
    ```

5.  **Inicia el servidor:** Utiliza el siguiente comando para iniciar la aplicación en tu entorno local:

        ```
        npm run dev
        ```

    Esto ejecutará el script definido en el archivo package.json para iniciar el servidor Node.js.

6.  **Accede al servidor:** Abre tu navegador web y visita la siguiente URL: _http://localhost:4000_. El servidor debería cargarse, mostrar el siguiente mensaje: 'Este es un test de mi ruta GET de raíz' y estar lista para usar. Se recomienda usar [Postman](https://www.postman.com/) para las solicitudes al servidor.

## Llamadas a la API

URL -> http://localhost:4000/apitareas/

## Métodos de Tareas

| Método | #Url de Tareas | #Acción                            |
| ------ | -------------- | ---------------------------------- |
| POST   | /tareas        | Crear nueva tarea                  |
| GET    | /tareas        | Muestra la lista de tareas         |
| PUT    | /tareas/:id    | Edita una tarea por su id          |
| DELETE | /tareas/:id    | Borra una tarea por su id          |
| GET    | /tareas/:id    | Busca una tarea por su id          |
| DELETE | /tareas        | Borrar la lista completa de tareas |

Ejemplo de Body en el envío de Crear nueva tarea:

```
    {
    "nombreTarea":"Codear"
    }
```

## Autor

1. Juan Gerardo Romero Uro [github](https://github.com/jgromerou)

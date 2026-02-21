# README - Ejecución del Proyecto

Este proyecto es una aplicación React con TypeScript que utiliza *npm* para la
gestión de dependencias.

## Requisitos previos

Asegúrate de tener instalado:

- *Node.js*
- *npm* (se instala automáticamente con Node.js)

Para comprobarlo:

bash
node -v
npm -v


### macOS

Si tienes Homebrew instalado:

bash
brew install node


### Linux (Debian/Ubuntu)

bash
sudo apt update
sudo apt install nodejs npm


### Linux (Arch)

bash
sudo pacman -S nodejs npm


---

## Instalación del proyecto

Desde la carpeta raíz del proyecto:

bash
npm install
npm install axios


Este comando instalará todas las dependencias necesarias definidas en
package.json y npm install axios instalará axios.

---

## Ejecutar en modo desarrollo

bash
npm run dev


Esto iniciará el servidor de desarrollo. Normalmente podrás abrir la app en:


http://localhost:5173


(o el puerto que indique la terminal).

---

## Resumen rápido de comandos

bash
npm install      # instalar dependencias
npm run dev      # ejecutar en desarrollo


---

# Problemas encontrados y sus soluciones

## GIT 
### .env 
Adjunte el .env en el primer commit,me di cuenta a tiempo y no hice push, por lo que la solución fue sencilla: borre de la caché de git el archivo .env y añadi a .gitignore el archivo .env.
### ERROR al hacer push. 
Hice push a la rama MASTER ya que mi entorno de trabajo utilizado para resolver está practica es una MV que tiene almacenada que por defecto utilizar la rama MASTER para hacer push, la solución fue cambiar a la rama main y ahí hacer push.
![GIT](public/Imagen%20pegada.png)

## Tipos
Debido al escaso tiempo de la práctica, el tediosidad de trabajo que es, el poco aprendizaje que este aporta, y lo mas importante permiso previo del profesor, transformé el objeto json que devuelve la api para en endpoint '/people/{}' con el uso de [chatgpt](https://chatgpt.com/share/69999a46-3be0-8004-8452-7e495d558ab7).

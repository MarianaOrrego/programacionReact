## Comandos para iniciar un proyecto desde cero

1. Verificar si el computador tiene **node.js** instalado para eso se abre el CMD y se escribe 

    **node -v** 

    Si aparece un numero de version, quiere decir que esta instalado, de lo contrario, se debe instalar

2. Se crea una carpeta la cual va a contener el proyecto nuevo

3. Se abre esa carpeta en Visual Studio Code, ahora bien, hay dos opciones, la primera es emplear la terminal integrada de Visual Studio Code o emplear la terminal del computador respectivamente, ambas deben funcionar de la misma manera 

4. En el terminal escogido, se escribe el comando que se encuentra en la pagina de Vite:
    ```bash
    npm create vite@latest
    ```
5. Se siguen los pasos que aparecen, en primera instancia, si es proyecto nuevo, es probable que pida una instalación extra, solo le da  **(y)** y se hace esa instalación, dado el caso que no aparezca ese mensaje, se va a pedir que ingrese el nombre de la carpeta (la cual será ya el proyecto a crear)

6. Luego de ingresar el nombre, se abre un menú en el cual con las flechas del teclado se va a escoger la opción que diga **React**, se da enter

7. Posterior a esto, se escoge la opción **JavaScript**, de igual manera haciendo uso de las flechas

8. Luego de esto, ya queda configurado el proyecto, en el terminal se mostrará los comandos que se deben correr luego de la instalación, esos comandos son: 
```bash	
 cd <nombre_carpeta>
 npm install
 npm run dev
```

Cuando se clona o se descarga un repositorio de GitHub, con la finalidad de instalar el paquete **node_modules** en el proyecto
```bash
 cd <nombre_carpeta>
 npm install
 npm run dev
```	

Como pueden notar, los comandos en el paso 8 y los comandos al clonar un repositorio son los mismos, por lo tanto, si se clona un repositorio, no es necesario correr el comando **npm create vite@latest** ya que el proyecto esta creado, solo se debe correr los comandos que se muestran en el paso 8.

### NOTA: 

- Vite: 

    **npm create vite@latest** 

    Se crea el proyecto React empleando Vite siguiendo los pasos indicados en la primera parte del mensaje

    Hay otra opción pero para eso se debe verificar la versión de npm, en el CMD se escribe 

    **npm -v**
    
    Si la versión es inferior o igual a 6, ejecuta el siguiente comando:

    ```bash	
    npm create vite@latest my-react-app --template react
    ```
    Donde **my-react-app** es el nombre de la carpeta del proyecto, es lo único que deben modificar

    Si la versión de npm les da superior a 7, ejecutan la siguiente linea 
    ```bash	
    npm create vite@latest my-react-app -- --template react 
    ```

    De esta manera se saltan la mayoría de pasos indicados en la primera parte de las instrucciones, pues ya no hay que escoger las opciones

- Node: 

    **npm install** instala las dependencias necesarias para ejecutar el programa

    **npm run dev** levanta el servidor local para la visualización de la pagina

### Recordar 
El comando **cd** es tanto para ingresar a una carpeta *cd <nombre_carpeta>* como para salir de una carpeta *cd ..*
const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// Route System
	// ¿?

	/*
	A. La aplicación deberá contar con un entry point llamado ​app.js​.
	B. El sistema de ruteo de la aplicación deberá generarse en un archivo llamado
	router.js.​
	C. El contenido de las distintas secciones deberá estar en un carpeta llamada ​src.​
	Se deberá ​crear un archivo por cada sección,​ cada sección deberá consumir el archivo JSON que corresponda. La carpeta ​src​ deberá tener un archivo i​ ndex.js que exponga hacia afuera el contenido de todas las secciones.
	D. La información de los archivos JSON deberá estar guardada en una carpeta llamada d​ ata​.
	E. El archivo ​app.js​ deberá tener la creación del servidor y consumir el sistema de rutas del archivo ​router.js.​
	F. La estructura de directorios recomendada será la siguiente:
	├── ​data
	│ ├──​faqs.json
	│ ├──​movies.json
	│ └──​theaters.json
	├── ​src
	│ ├──​contacto.js
	│ ├──​enCartelera.js
	│ ├──​homePage.js
	│ ├──​index.js
	│ ├──​masVotadas.js
	│ ├──​preguntasFrecuentes.js │ └──​sucursales.js
	├── ​app.js
	├── ​customFunctions.js
	├── ​package.json
	└── ​router.js*/
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
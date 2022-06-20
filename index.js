import express from 'express'; //ES6
import db from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Crear la app

const app = express();

// Conexión a la base de datos
try {
  await db.authenticate();
  console.log('Conectado a la base de datos');
} catch (error) {
  console.log(error);
}

// Habilitar  Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta publica
app.use(express.static('public'));

// Routing
app.use('/auth', usuarioRoutes);

// Definir el puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
  console.log(`El servidor esta funcionado en el puerto ${port}`);
});

import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <h1>Esto es lo que dicen nuestros aprendices del semillero de investigación del Producto Talentic, "Sistema de información documental en contenidos Digitales"</h1>
      <Testimonio 
        nombre='Juan Carlos Alfonso Silva'
        pais='Colombia'
        imagen='juan-carlos'
        cargo='Productor Multimedia'
        empresa='Pac Gráfica'
        testimonio='Que buena empresa en donde al iniciar mi formación como Productor Multimedia me ha acogido y he podido desempeñar mis funciones como diseñador de interfaces y experiencias de usuario, muy contento de hacer parte de la familia Pac Gráfica' />
      <Testimonio 
        nombre='Michel Andrea Yazo Diaz'
        pais='Colombia'
        imagen='michel'
        cargo='Administradora'
        empresa='Publicar'
        testimonio='Al comenzar a trabajar con codigo, he podido comprender el aspecto administrativo y organizacional de una startup, sus estructuras y departamentos, esta tarea no es facíl pero lo estamos haciendo realidad' />
      <Testimonio 
        nombre='Ana Lorena Fernandez Castro'
        pais='Colombia'
        imagen='lorena'
        cargo='Comunicaciones'
        empresa='Teleperformance'
        testimonio='Que buena empresa en donde al iniciar mi formación como Productor Multimedia me ha acogido y he podido desempeñar mis funciones como diseñador de interfaces y experiencias de usuario, muy contento de hacer parte del proyecto Talentic' />
    </div>
  );
}

export default App;

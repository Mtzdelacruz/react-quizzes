import './App.css';

import Badge from "./badge/badge";
import Card from './card/card';
import Footer from './footer/footer';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header title= "React Beginner's Quiz"/>
      <Card title= "Funciones" content ="Componente básico de react" children="Especificaciones" />
  
      <Badge label= "New" color='sucess'/>
      <Footer content= "Created with ❤️ by Cristina"/>
      

    </div> 
  );
}

export default App;

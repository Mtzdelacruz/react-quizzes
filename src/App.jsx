import './App.css';

import Avatar from './avatar/avatar';
import Badge from "./badge/badge";
import Card from './card/card';
import Footer from './footer/footer';
import Header from './header/header';
import nocheEstrellada from "./nocheEstrellada.jpg"

function App() {
  return (
    <div className="App">
      <Header title= "React Beginner's Quiz"/>

      
    <div className="card-container">
      <Card title= "Card 1" content ="Insert content 1" />
      <Card title= "Card 2" content= "Insert content 2" />
      <Card title= "Card 3" content= "Insert content 3" />

      <Badge label= "New" color='sucess'/>

      <Avatar 
      imageSrc= {nocheEstrellada}
      description= "This is my Avatar" />
    </div>


      <Footer content= "Created with ❤️ by Cristina"/>
    </div> 
  );
}

export default App;

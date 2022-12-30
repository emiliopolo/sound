// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Tiles from './Components/Tiles';
import Footer from './Components/Footer';



import {data} from './Data/data';

const App = () => {
    
  return (

    <div className="App">

      <Header/>

      <div className="all-tiles">
        {data.map((data) => {
          

          return (
           
              <Tiles key = {data.id}
                id={data.id}
                title={data.title}
                genre={data.genre}
                role={data.role}
                description={data.description}
                source = {data.img}
                video = {data.video}
  

              />
          
          );
        })
        }
      </div>

      <Footer/>

      



      
    </div>
    
  );
}

export default App;





/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />

</header> */
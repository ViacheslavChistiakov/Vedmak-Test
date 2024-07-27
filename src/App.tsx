import './App.css';
import  Header  from './components/Header';
import './style/app.scss'
import Main from './components/Main';
import SliderEl from './components/SliderEl';
import { Container } from '@mui/material';





function App() {


  return (
    <div className="App">
          <Header/>
              <Main />
                <SliderEl />
        
    </div>
  );
}

export default App;

import './App.css';
// import { useEffect} from 'react/cjs/react.development';
import fakedata from './component/Fake Data/players_data.json'

function App() {

  // const [data, setData] = useState({});

  // useEffect(()=> {
  //   console.log(fakedata)
  // }, [])


  return (
    <div className="App">
      <h1>Hello</h1>
      
      <a
        href="https://wa.me/01787118444"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="ri-whatsapp-line whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;

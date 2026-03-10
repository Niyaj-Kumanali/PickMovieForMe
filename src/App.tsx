import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  // useEffect(() => {
  //     axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=9f9ff980&type=movie&s=mar&plot=full').then((response) => {console.log(response.data.Search)})

  // }, []);


  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

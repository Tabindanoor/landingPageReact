// import Footer from '../../figmaapp/src/Components/Footer';
import './App.css';
import CardSection from './Components/CardSection';
import FeatuedWork from './Components/FeaturedWork';
import Footer from './Components/Footer';
import HandSection from './Components/HandSection';
import Navbar from './Components/Navbar';
import Publish from './Components/Publish';


function App() {
  return (
    <div className='bg-[#F6F6F6]'>
      <Navbar/>
      <FeatuedWork/>
      <Publish/>
      <CardSection/>
      <HandSection/>
      <Footer/>
    </div>

  );
}

export default App;

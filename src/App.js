import "./App.css";
import Card from "./components/Card";
import Image from "./components/Image";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Card>
      <Image 
        imgSrc="https://i.imgur.com/qbo75P1.jpg" 
      />
      <Main 
        name="Hugo Tiburcio" 
        website="hugotiburcio.website"  
      />
      <Footer />
    </Card>
  );
}

export default App;

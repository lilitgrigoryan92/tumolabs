//import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import{
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About';
import {News} from './components/News';
import {Home} from './components/Home';
import {Events} from './components/Events';
import {Partners} from './components/Partners';
import Hello from './index.js'

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="ligth" variant="ligth">
        <Container>
        <Navbar.Brand href="#home"><img src='https://tumolabs.am/wp-content/uploads/2021/06/Group.svg'></img></Navbar.Brand>

          <Navbar.Brand href="#home">We're Students Union at TUMO Labs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            <Nav.Link as={Link}to="/about">About</Nav.Link>
            <Nav.Link as={Link}to="/news">News</Nav.Link>
            <Nav.Link as={Link}to="/partners">Partners</Nav.Link>
            <Nav.Link as={Link}to="/">Events</Nav.Link>

        </Nav>
           </Container>
      </Navbar>
      </>
      <div>
      <Routes>
  <Route path="/about" element={<About/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/events" element={<Events/>}/>
  <Route path="/partners" element={<Partners/>}/>

</Routes>

      </div>

    </div>
    </BrowserRouter>

        );
        }
export default App;

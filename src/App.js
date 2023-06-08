import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import brooklyn from './images/brooklyn.jpg';
import christmas from './images/christmas.jpg';
import paloma from './images/paloma.jpg';
import cow from './images/cow.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='church'>
          <a href='https://www.ipanema.mg.gov.br/' target="_blank">
            <img className="logo" src='https://static.wixstatic.com/media/845270_86e6fd8f442f4cb1aa40eefacb166afd~mv2.png/v1/fill/w_297,h_75,al_c,q_85,enc_auto/logotipo.png'/>
          </a>
          <h1 id='title01'>Ipanema, MG</h1>
          <p id='title02'>A place of culture, unforgettable moments, and lots of fun.</p>
        </div>

        <div className='activities'>
          <h1>Top three activities to do in Ipanema</h1>
          <div className='group'>
            <div className='container-image'>
              <img className='round-image' src={brooklyn}/>
              <p><b>Brooklyn Burger & Beer</b></p>
              <p>One of the best restaurants in town.</p>
            </div>

            <div className='container-image'>
              <img className='round-image' src={cow}/>
              <p><b>Festa do Queijo</b></p>
              <p>Every year the city produces a giant cheese to be shared with the population.</p>
            </div>

            <div className='container-image'>
              <img className='round-image' src={christmas}/>
              <p><b>Chritmas Decorations</b></p>
              <p>On one of the best holidays of the year, the city is filled with lights and Christmas decorations.</p>

            </div> 
          </div>

          <div className='myself'>
            <div className='box'>
              <img className='paloma' src={paloma}/>
              <div className='box-content'>
                <p>"I have lived in Ipanema for over 25 years, so I can show you all of its best parts."</p>
                <h3>Paloma Reynolds</h3>
              </div>
            </div>  
          </div>

          <div className='footer'>
            <footer>
              <Container>
                <div className='icons-color icons-position'>
                  <p>Follow me:
                    <div className='icons-group'>
                      <a href="https://www.facebook.com/palomap.reynolds/" target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>  
                      <a href="https://www.linkedin.com/in/paloma-reynolds-7170a6216/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>  
                      <a href="https://www.instagram.com/palomap.paula/" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>  
                    </div>  
                  </p> 
                </div>   
              </Container>
            </footer>
          </div>  
        </div>       
      </header>
    </div>
  );
}

export default App;

import Background.JPG from '../../components/images/Background.JPG'
import { Row, Col } from 'react-bootstrap';
import { AboutStyles, Background.JPG, AboutContainer, AboutLeft, AboutSec, AboutRight } from '../styles/AboutStyles';

const About = () => (
  <>
    <AboutContainer>
      <Row>
        <Col>
          <AboutSec>
            <AboutLeft>
              <h4 className='medium-heading'>About Me</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              <p>
                My recently used skills include:
              </p>
            </AboutLeft>
          </AboutSec>
          <ul>
            List skills here 
          
)

export default About;
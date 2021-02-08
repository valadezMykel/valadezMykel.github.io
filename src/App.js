import NavbarName from './components/NavbarName'
import BackgroundDiv from './components/projectCards/backgroundDiv'
import ScreenSizeContext from './contexts/screenSizeContext'
import Home from './components/Home'
import ReachOut from './components/ReachOut'
import Projects from './components/Projects'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ScreenSizeContext>
      <div style={{backgroundColor: 'rgb(230,225,215)', paddingBottom: '20px'}}>
        <NavbarName />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path='/contact' component={ReachOut} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </BrowserRouter>
    </ScreenSizeContext>
  );
}

export default App;

// Styling
import '../src/styles/main.scss';

// Router
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import GetStarted from './components/getStarted';
// import LogIn from './components/logIn';
import DashboardComponent from './components/dashboardComponent';


function App() {

  return (
    <> 
    <BrowserRouter>
    {/* <GetStarted/> */}
    {/* <LogIn/> */}
    <Route exact path = "/" component = {GetStarted}/>
    <Route path = "/dashboard" component = {DashboardComponent}/>
    </BrowserRouter>
    </>
  );
};

export default App;
//https://developer.spotify.com/documentation/general/design-and-branding/
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
// https://www.onlinepalette.com/spotify/
// https://www.w3schools.com/cssref/css_default_values.asp


// to do:
// get request for search data 
// implement search term into get req
// Iterate + Show data
// Add Player component 
// 

//Ideas:
// In search terms, spaces should be replaced by '%20' or '+'  
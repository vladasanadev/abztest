
import './App.css';
import DesctopHeader from "./components/DesctopHeader/DesctopHeader";
import {Route} from "react-router";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Header from "./components/Header/Header";
import useWindowSize from './components/customHooks/useWindowSize'

function App() {
const type = useWindowSize()
console.log(type, 'APP')

  return (
    <div className="App">
    <Header type={type}/>
        {/*<Route exact path="/" component={DesctopHeader} />*/}
    </div>
  );
}

export default App;

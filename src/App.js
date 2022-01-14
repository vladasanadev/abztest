
import {Route} from "react-router";

import Header from "./components/Header/Header";
import useWindowSize from './components/customHooks/useWindowSize'
import Main from "./components/pages/Main/Main";

function App() {
const type = useWindowSize()
console.log(type, 'APP')

  return (
    <div className="App">
    <Header type={type}/>
      <Main/>
        {/*<Route exact path="/" component={DesctopHeader} />*/}
    </div>
  );
}

export default App;

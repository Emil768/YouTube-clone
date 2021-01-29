import "./scss/style.scss";

import { Route, Switch } from "react-router-dom";

//components
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;

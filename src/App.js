import "./scss/style.scss";

import { Route, Switch, useHistory } from "react-router-dom";

//components
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { accessToken, loading } = useSelector(state => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;

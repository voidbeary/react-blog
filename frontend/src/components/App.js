import Posts from "./Posts";
import PostForm from "./PostForm";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/new" component={PostForm} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

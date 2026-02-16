import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/chats" component={ChatPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

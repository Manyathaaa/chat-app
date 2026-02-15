import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chats" component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

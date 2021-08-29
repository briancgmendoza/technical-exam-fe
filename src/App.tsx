import { Redirect, Route, Switch } from "react-router-dom";

/* Importing Pages */
import ViewList from "./Pages/ViewList";
import DetailsPage from "./Pages/DetailsPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <main className="App container">
      <Switch>
        <Route path="/" exact component={ViewList} />
        <Route path="/viewlist" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/detailspage/:id" exact component={DetailsPage} />

        {/* When route doesn't exist, show Not found page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;

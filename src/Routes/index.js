import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner';
import Forbidden from '../Components/Shared/Forbidden';

const TodoRoutes = lazy(() => import('./todo'));
const AuthRoutes = lazy(() => import('./auth'));

const MainRoutes = () => {

  return (
    <Router>
       <Suspense
        fallback={<Spinner type="TailSpin" color="#002147" height={80} width={80} text="To-Do List" />}>
        <Switch>
          <Route path="/forbidden"  component={Forbidden} />
          <Route path="/login"  component={AuthRoutes} />
          <Route path="/" component={TodoRoutes} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default MainRoutes;
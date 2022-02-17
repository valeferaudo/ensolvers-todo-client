import { Redirect, Route, Switch } from 'react-router-dom';
import Folders from '../Components/Folders';
import Layout from '../Components/Shared/Layout';
import Tasks from '../Components/Tasks'
import PrivateRouteTodo from './privateRouteTodo';

const TodoRoutes = () => {
  return (
    <Layout>
      <Switch>
        <PrivateRouteTodo path={`/tasks`} exact component={Tasks} />
        <PrivateRouteTodo path={`/folders`} component={Folders} />
        <PrivateRouteTodo path={`/folder/:id`} component={Tasks} />
        <Redirect to={`/`} component={Tasks} />
      </Switch>
    </Layout>
  );
};

export default TodoRoutes;
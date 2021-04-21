import './sass/style.css';
import { HomePage, ProjectPage } from './pages';
import { Header, Footer } from './components';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.PROJECTS} component={ProjectPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

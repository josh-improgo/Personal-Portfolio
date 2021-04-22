import './sass/style.css';
import { ContactPage, AboutPage, HomePage, ProjectPage } from './pages';
import { Header, Footer } from './components';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TweenLite } from 'gsap';
import { useInView } from 'react-intersection-observer';

function App() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const fadeIn = (element) => {
        TweenLite.to(element, 1, {
            opacity: 1,
            ease: 'power4.out',
            stagger: { amount: 0.3 },
        });
    };
    const fadeOut = (element) => {
        TweenLite.to(element, 1, {
            opacity: 0,
            ease: 'power4.out',
        });
    };
    inView ? fadeIn('.footer--fade') : fadeOut('.footer--fade');

    return (
        <Router>
            <Header />
            <Switch>
                <Route path={ROUTES.PROJECTS} component={ProjectPage} />
                <Route path={ROUTES.CONTACT} component={ContactPage} />
                <Route path={ROUTES.ABOUT} component={AboutPage} />
                <Route path={ROUTES.HOME} component={HomePage} />
            </Switch>
            <Footer className='footer--fade' ref={ref} />
        </Router>
    );
}

export default App;

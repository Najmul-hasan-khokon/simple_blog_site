import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PagePage from './pages/PagePage';
import ProjectPage from './pages/ProjectPage';
import Services from './pages/Services';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <AboutUs />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/blog">
                    <BlogPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/project">
                    <ProjectPage />
                </Route>
                <Route path="/page">
                    <PagePage />
                </Route>
                <ErrorPage />
            </Switch>
        </Layout>
    </Router>
);

export default App;

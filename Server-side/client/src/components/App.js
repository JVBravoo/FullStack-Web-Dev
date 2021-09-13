import React from 'React';
import { BrowserRouter, Route } from 'react-router-dom'; // Contains a set of react routers and helpers specifically 
                                    // around environment that uses the browsers DOM.

// BrowserRouter: Looks at the current URL and changes the set of components that are visible on the screen at any given time.
// Route: is a react component that is used to setup a rule between a certain route that a user might visit of an application
// and a set of components that will be actually visible on the screen.

// this file is responsible for all the initial view layer setup

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => { 
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
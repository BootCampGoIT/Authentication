import React from 'react'
import Todo from './todo/Todo'

import { NavLink, Switch, Route } from 'react-router-dom';
import css from './App.module.css';

const App = () => {
    return (
        <>
            <div className={css.navigation}>
                <ul className={css.navigationList}>
                    <li>
                        <NavLink
                            exact to="/"
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signin"
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}>
                            SignIn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}>
                            SignUp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/todo"
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}>
                            Todo
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={css.container}>
                <Switch>
                    <Route exact path="/" component={() => <h2>Home</h2>} />
                    <Route path="/signin" component={() => <h2>SignIn</h2>} />
                    <Route path="/signup" component={() => <h2>SignUp</h2>} />
                    <Route path="/todo" component={Todo} />
                </Switch>
            </div>

        </>
    );
}

export default App;
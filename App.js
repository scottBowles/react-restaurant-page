import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Menu from './Menu'

function App() {
    const [activePage, setActivePage] = useState("home")

    const changePage = (newPage) => setActivePage(newPage)

    const pages = ["home", "menu", "contact"]

    return (
        <>
            <Header pages={pages} changePage={changePage} />
            <Switch>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default App
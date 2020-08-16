import React, { useState } from 'react'

import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Menu from './Menu'

function App() {
    const [activePage, setActivePage] = useState("home")

    const changePage = (newPage) => setActivePage(newPage)

    return (
        <>
            <Header changePage={changePage} />
            {
                activePage === "home"
                ? <Home />
                : activePage === "menu"
                ? <Menu />
                : <Contact />
            }
        </>
    )
}

export default App
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

function Header(props) {
    const { pages } = props

    return (
        <nav>
            { pages.map(page => (
                    <Link to={`/${page}`} key={ pages.indexOf(page) } style={{marginRight: "20px"}}>
                        {page.toUpperCase()}
                    </Link>
                )
            )}
        </nav>
    )
}

export default Header
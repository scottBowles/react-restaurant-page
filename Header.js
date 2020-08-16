import React from 'react'

function Header(props) {
    const pages = ["home", "menu", "contact"]
    return (
        <nav>
            { pages.map(page => (
                <button onClick={ () => props.changePage(page) } key={ pages.indexOf(page) }>
                    {page.toUpperCase()}
                </button>
                )
            )}
        </nav>
    )
}

export default Header
import React from 'react'

import backgroundImg from './assets/background.jpg'

function Home() {
    return (
        <>
            <img src={backgroundImg} style={{width: "800px"}}></img>
            <h1>Corcovado</h1>
            <p>Brazilian warmth. Ethically sourced coffee. A whole lotta bossa.</p>
        </>
    )
}

export default Home
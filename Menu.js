import React from 'react'

function Menu() {

    const menuItems = [
        { id: 1, name: "Brewed Coffee", price: "1.95" },
        { id: 2, name: "Solo Espresso", price: "1.25" },
        { id: 3, name: "Double Espresso", price: "1.80" },
        { id: 4, name: "Americano", price: "2.05" },
        { id: 5, name: "Cafe Latte", price: "3.15" },
        { id: 6, name: "Cafe Mocha", price: "3.95" },
        { id: 7, name: "Earl Grey Tea", price: "1.75" },
        { id: 8, name: "Yerba Mate", price: "1.75" },
    ];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { menuItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    )
}

export default Menu
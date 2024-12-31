import React from 'react';
import './FruitsVegBirds.css';

function FruitsVegBirds() {
    const fruits = ['Mango', 'Apple', 'Banana', 'Strawberry', 'Pineapple'];
    const vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Potato', 'Cucumber'];
    const birds = ['Peacock', 'Parrot', 'Sparrow', 'Eagle', 'Owl'];

    return (
        <div className="container">
            <h1>My Favorites</h1>
            <div className="category">
                <h2>Fruits</h2>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
            <div className="category">
                <h2>Vegetables</h2>
                <ul>
                    {vegetables.map((vegetable, index) => (
                        <li key={index}>{vegetable}</li>
                    ))}
                </ul>
            </div>
            <div className="category">
                <h2>Birds</h2>
                <ul>
                    {birds.map((bird, index) => (
                        <li key={index}>{bird}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FruitsVegBirds;

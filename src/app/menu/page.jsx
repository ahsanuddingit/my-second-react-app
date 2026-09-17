import React from 'react';
import FoodCards from '../components/FoodCards';

const MenuPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await res.json();
    const foods = data.data;
    console.log(foods);

    return (
        <div>
            <h1>Menu page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food) => (
                <FoodCards key={food.id} food={food} />
            ))}
            </div>
        </div>
    );
};

export default MenuPage;
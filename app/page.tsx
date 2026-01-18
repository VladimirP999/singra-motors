import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';


const brands = {
china: ["Geely", "Chery", "Haval", "BYD", "Zeekr"],
japan: ["Toyota", "Honda", "Nissan", "Mazda", "Subaru"],
korea: ["Hyundai", "Kia", "Genesis", "SsangYong"]
};


export default function Home() {
const [section, setSection] = useState('home');


return (
<div className="min-h-screen">
{/* Заставка */}
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
<Image src='/logo.png' width={300} height={100} alt='Сингра Моторс' />
</motion.div>


{/* Навигация */}
<nav className="flex gap-4 p-4">
<button onClick={() => setSection('home')}>Все авто</button>


{Object.keys(brands).map(country => (
<div key={country} className="relative group">
<button>{`Авто из ${country.charAt(0).toUpperCase()+country.slice(1)}`}</button>
<div className="absolute hidden group-hover:block bg-gray-800 p-2 rounded">
{brands[country].map(brand => (
<div key={brand} className="px-2 py-1 hover:bg-red-600 cursor-pointer" onClick={() => setSection(country)}>{brand}</div>
))}
</div>
</div>
))}


<button onClick={() => setSection('terms')}>Условия</button>
<button onClick={() => setSection('reviews')}>Отзывы</button>
<button onClick={() => setSection('contacts')}>Контакты</button>
</nav>


{/* Основное тело */}
<div className="p-4">
{section === 'home' && <div>Все авто карточки (слайдшоу)</div>}
{section === 'china' && <div>Авто из Китая</div>}
{section === 'japan' && <div>Авто из Японии</div>}
{section === 'korea' && <div>Авто из Кореи</div>}
{section === 'terms' && <div>Условия пока пусто</div>}
{section === 'reviews' && <div>Отзывы пока пусто</div>}
{section === 'contacts' && <div>Контакты пока пусто</div>}
</div>
</div>
);
}
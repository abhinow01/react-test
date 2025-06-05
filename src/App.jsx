import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlanCard from './components/PlanCard';

const plans = [
  {
    title: "Build Your Own Sky Package",
    subtitle: "TV Shows, News & more ...",
    channels: "60+ channels",
    price: "00.00",
    img: "/rambo.jpg",
    offer: "Best Value"
  },
  {
    title: "Sky Entertainment",
    subtitle: "Movies & Entertainment",
    channels: "80+ channels",
    price: "35.00",
    img: "/rambo.jpg",
    offer: "Most Popular"
  },
  {
    title: "Sky Premium",
    subtitle: "Ultimate Entertainment",
    channels: "100+ channels",
    price: "45.00",
    img: "/rambo.jpg",
    offer: "Premium"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              channels={plan.channels}
              price={plan.price}
              img={plan.img}
              offer={plan.offer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App

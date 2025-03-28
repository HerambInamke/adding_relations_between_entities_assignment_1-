import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Stunning sunsets and white-washed architecture",
    price: "$1,800"
  },
  {
    id: 4,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Modern city with rich traditions and amazing food",
    price: "$2,000"
  }
];

const DestinationContainer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Popular Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map(destination => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationContainer;
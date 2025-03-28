const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="w-20 h-20 mx-auto mt-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">{price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white">Welcome to Our Website</h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6" 
                onClick={()=>navigate('/register')}
              >Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 2xl:px-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6">Our Products</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="https://picsum.photos/200/300" alt="Product Image" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Product 1</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="https://picsum.photos/200/301" alt="Product Image" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Product 2</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="https://picsum.photos/200/302" alt="Product Image" className="w-full h-64 object-cover mb-4 " />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Product 3</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
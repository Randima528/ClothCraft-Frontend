import { useState } from "react";

const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const products = [
  {
    id: 1,
    name: "Casual Floral Frock",
    price: 4500,
    image: "/images/product-01.png",
    category: "women",
  },
  {
    id: 2,
    name: "Ladies Crossbody Bag",
    price: 5200,
    image: "/images/product-02.jpg",
    category: "women",
  },
  {
    id: 3,
    name: "Men's Slim Fit Denim Trouser",
    price: 6900,
    image: "/images/product-03.jpg",
    category: "men",
  },
  {
    id: 4,
    name: "Long Sleeve Ladies Blouse",
    price: 3600,
    image: "/images/product-04.jpeg",
    category: "women",
  },
  {
    id: 5,
    name: "Ladies Knit Sweater",
    price: 4100,
    image: "/images/product-05.jpeg",
    category: "women",
  },
  {
    id: 6,
    name: "Modern Leather Strap Watch",
    price: 16500,
    image: "/images/product-06.jpeg",
    category: "watches",
  },
  {
    id: 7,
    name: "Women's Stretch Cotton Shirt",
    price: 5200,
    image: "/images/product-07.jpeg",
    category: "women",
  },
  {
    id: 8,
    name: "Printed Casual Top",
    price: 2900,
    image: "/images/product-08.jpeg",
    category: "women",
  },
];


  const categories = [
    { id: "*", name: "All Products" },
    { id: "women", name: "Women" },
    { id: "men", name: "Men" },
    { id: "bag", name: "Bag" },
    { id: "shoes", name: "Shoes" },
    { id: "watches", name: "Watches" },
  ];

  const filteredProducts =
    activeFilter === "*"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Product Overview</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 space-y-6 lg:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeFilter === category.id
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Filter and Search Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                />
              </svg>
              Filter
            </button>

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                
                <button className="absolute inset-x-0 bottom-4 mx-4 bg-white text-black py-3 px-6 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
                  Quick View
                </button>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <a
                    href="#"
                    className="block text-gray-800 hover:text-indigo-600 transition-colors duration-300 mb-2"
                  >
                    <h3 className="text-sm font-medium">{product.name}</h3>
                  </a>
                  <p className="text-gray-600 text-sm">
                    Rs.{product.price.toFixed(2)}
                  </p>
                </div>

                {/* Wishlist Button */}
                <button className="ml-4 text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-gray-200 text-black rounded-3xl px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

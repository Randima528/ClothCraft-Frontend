import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h4 className="text-white text-lg font-medium mb-8">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Shoes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Watches
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-lg font-medium mb-8">Help</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white text-lg font-medium mb-8">
              GET IN TOUCH
            </h4>
            <p className="text-sm leading-relaxed mb-6">
              No. 165/A, Park St,Colombo 10, Sri Lanka <br />
              011 123 4567
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.051 3.999c-2.326 0-2.614.01-3.527.052-.914.042-1.538.187-2.084.4-.565.22-1.045.513-1.524.992-.479.479-.772.959-.992 1.524-.213.546-.358 1.17-.4 2.084-.042.913-.052 1.201-.052 3.527s.01 2.614.052 3.527c.042.914.187 1.538.4 2.084.22.565.513 1.045.992 1.524.479.479.959.772 1.524.992.546.213 1.17.358 2.084.4.913.042 1.201.052 3.527.052s2.614-.01 3.527-.052c.914-.042 1.538-.187 2.084-.4.565-.22 1.045-.513 1.524-.992.479-.479.772-.959.992-1.524.213-.546.358-1.17.4-2.084.042-.913.052-1.201.052-3.527s-.01-2.614-.052-3.527c-.042-.914-.187-1.538-.4-2.084-.22-.565-.513-1.045-.992-1.524-.479-.479-.959-.772-1.524-.992-.546-.213-1.17-.358-2.084-.4-.913-.042-1.201-.052-3.527-.052zm0 2.163c2.292 0 2.563.009 3.463.05.835.038 1.288.177 1.591.294.4.155.686.341.986.641.3.3.486.586.641.986.117.303.256.756.294 1.591.041.9.05 1.171.05 3.463s-.009 2.563-.05 3.463c-.038.835-.177 1.288-.294 1.591-.155.4-.341.686-.641.986-.3.3-.586.486-.986.641-.303.117-.756.256-1.591.294-.9.041-1.171.05-3.463.05s-2.563-.009-3.463-.05c-.835-.038-1.288-.177-1.591-.294-.4-.155-.686-.341-.986-.641-.3-.3-.486-.586-.641-.986-.117-.303-.256-.756-.294-1.591-.041-.9-.05-1.171-.05-3.463s.009-2.563.05-3.463c.038-.835.177-1.288.294-1.591.155-.4.341-.686.641-.986.3-.3.586-.486.986-.641.303-.117.756-.256 1.591-.294.9-.041 1.171-.05 3.463-.05z" />
                  <path d="M12.051 7.435c-2.547 0-4.616 2.069-4.616 4.616s2.069 4.616 4.616 4.616 4.616-2.069 4.616-4.616-2.069-4.616-4.616-4.616zm0 7.611c-1.654 0-2.995-1.341-2.995-2.995s1.341-2.995 2.995-2.995 2.995 1.341 2.995 2.995-1.341 2.995-2.995 2.995z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-medium mb-8">Newsletter</h4>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 placeholder-gray-500 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded-3xl px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-16 pt-8 border-t border-gray-700">
          {/* Copyright */}
          <p className="text-center text-sm text-gray-500">
            ClothCraft &copy; 2025 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

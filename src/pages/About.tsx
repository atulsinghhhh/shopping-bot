import { ShoppingBag, MessageSquare, Mic, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About ShopSmart</h1>
        
        <div className="prose lg:prose-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Future of Shopping</h2>
            <p className="text-gray-600 mb-6">
              ShopSmart combines cutting-edge AI technology with a seamless shopping experience to bring you
              the next generation of e-commerce. Our platform is designed to make your shopping journey
              more intuitive, personalized, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">AI Assistant</h3>
              </div>
              <p className="text-gray-600">
                Our AI shopping assistant is always ready to help you find the perfect products,
                answer your questions, and provide personalized recommendations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Mic className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Voice Control</h3>
              </div>
              <p className="text-gray-600">
                Shop hands-free with our voice control feature. Simply speak your commands
                and let our AI assistant guide you through your shopping experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <ShoppingBag className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Smart Shopping</h3>
              </div>
              <p className="text-gray-600">
                Enjoy a curated selection of high-quality products, with intelligent
                recommendations based on your preferences and shopping history.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Wishlist</h3>
              </div>
              <p className="text-gray-600">
                Save your favorite items for later and never lose track of the products
                you love with our smart wishlist feature.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Experience Smart Shopping?</h3>
            <p className="text-blue-600 mb-6">
              Try our AI assistant now and discover a new way to shop!
            </p>
            <button 
              onClick={() => (document.querySelector('.ai-assistant-trigger') as HTMLElement)?.click()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Chat with AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
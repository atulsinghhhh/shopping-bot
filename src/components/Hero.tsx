import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const Hero = () => {
  const openAIAssistant = () => {
    const aiButton = document.querySelector('.ai-assistant-trigger') as HTMLElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.5'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Shop Smart with AI Assistance
          </h1>
          <p className="text-xl mb-8">
            Experience the future of shopping with our AI-powered assistant. Get personalized recommendations and instant support.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/products"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop Now
            </Link>
            <button
              onClick={openAIAssistant}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Try AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
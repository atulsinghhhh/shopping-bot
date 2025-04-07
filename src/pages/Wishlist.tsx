import { Trash2, ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const handleMoveToCart = (productId: number) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      removeFromWishlist(productId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ShoppingCart className="w-5 h-5 mr-1" />
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
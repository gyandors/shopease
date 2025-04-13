const CartSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-8 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="h-6 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                      </div>
                      <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="ml-4 h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;

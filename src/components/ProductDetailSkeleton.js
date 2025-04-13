const ProductDetailSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative aspect-square">
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        </div>

        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>

          <div className="flex items-center space-x-4">
            <div className="h-8 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/6"></div>
          </div>

          <div className="pt-4">
            <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;

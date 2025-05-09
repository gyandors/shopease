const ProductCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/50 overflow-hidden animate-pulse">
      <div className="aspect-auto w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

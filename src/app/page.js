import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import FilterBar from "@/components/FilterBar";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

function filterAndSortProducts(products, category, sortBy) {
  let filteredProducts = products;

  // Filter by category
  if (category && category !== "all") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  // Sort products
  switch (sortBy) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
      break;
    case "rating-desc":
      filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    default:
      // Default sorting (by id)
      filteredProducts.sort((a, b) => a.id - b.id);
  }

  return filteredProducts;
}

export default async function Home({ searchParams }) {
  const products = await getProducts();
  const category = searchParams.category || "all";
  const sortBy = searchParams.sort || "default";

  const filteredProducts = filterAndSortProducts(products, category, sortBy);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Available Products
        </h1>
        <FilterBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

// Loading component
export function Loading() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Available Products
        </h1>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:shadow-gray-700/50 mb-6 animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

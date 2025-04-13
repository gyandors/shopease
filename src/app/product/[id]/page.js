import Image from "next/image";
import ProductDetailSkeleton from "@/components/ProductDetailSkeleton";
import AddToCartButton from "./AddToCartButton";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductPage({ params }) {
  const [product, products] = await Promise.all([
    getProduct(params.id),
    getProducts(),
  ]);

  // Filter related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-gray-900 flex items-center gap-2 mb-4 font-bold">
          <Link href="/">
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          {product.category} / {product.title}
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4">
                <p className="text-2xl font-semibold text-gray-900">
                  ${product.price}
                </p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <div className="pt-4">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// Loading component
export function Loading() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetailSkeleton />
      </div>
    </main>
  );
}

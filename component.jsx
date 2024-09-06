/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9mTTsl8GGO9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-primary" prefetch={false}>
            Glam Cosmetics
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="sr-only">Cart</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              <UserIcon className="w-6 h-6" />
              <span className="sr-only">Account</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#f5f5f5] py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Discover the Latest Makeup Trends</h1>
                <p className="text-gray-600 mb-6">
                  Explore our curated collection of high-quality makeup products for all your beauty needs.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary/80 transition-colors"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Makeup products"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  id: 1,
                  name: "Luminous Foundation",
                  image: "/product-1.jpg",
                  price: 29.99,
                },
                {
                  id: 2,
                  name: "Velvet Lipstick",
                  image: "/product-2.jpg",
                  price: 14.99,
                },
                {
                  id: 3,
                  name: "Shimmer Eyeshadow Palette",
                  image: "/product-3.jpg",
                  price: 39.99,
                },
                {
                  id: 4,
                  name: "Hydrating Primer",
                  image: "/product-4.jpg",
                  price: 24.99,
                },
              ].map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md">
                  <Link href="#" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: "300/300", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                      <p className="text-primary font-medium">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2023 Glam Cosmetics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
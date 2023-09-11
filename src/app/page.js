import HeroSection from "./components/herosection";
import ProductCard from "./components/Productcard";
import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(
  () => import("./components/ScrollCarouselComponent"),
  { ssr: false }
);

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      price: 39.99,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 49.99,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      image:
        "https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 49.99,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of Product 6",
      image:
        "https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      price: 49.99,
    },
  ];
  return (
    <>
      <HeroSection class="animate-fade-in" />
      <h1 className="text-center">LANDING PAGE</h1>
      <ScrollCarousel />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

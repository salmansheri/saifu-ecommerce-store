import ProductDetails from "@/components/ui/products/product-details";
import ProductShowcase from "@/components/ui/products/product-showcase";
import { getProductById } from "@/lib/actions/products";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);

  return (
    <section className="min-h-screen lg:px-40 md:px-32 px-10">
      <div className="py-6 lg:flex">
        <ProductShowcase images={product.images} />
        <ProductDetails data={product} />
      </div>
    </section>
  );
}

import ProductClient from "@/components/client/product-client";
import { getCategories } from "@/lib/actions/categories";
import { getColors } from "@/lib/actions/colors";
import { getProducts } from "@/lib/actions/products";
import { getSizes } from "@/lib/actions/sizes";

interface ProductPageProps {
  productName: string;
}

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: ProductPageProps;
  searchParams: {
    category: string;
    color: string;
    size: string;
  };
}) => {
  const text = params.productName.split("-").join(" ");
  const { category, color, size } = searchParams;

  const categories = await getCategories();
  const colors = await getColors();
  const sizes = await getSizes();
  const products = await getProducts();
  console.log(products);

  return (
    <ProductClient
      categories={categories}
      colors={colors}
      sizes={sizes}
      products={products}
      text={text}
    />
  );
};

export default ProductPage;

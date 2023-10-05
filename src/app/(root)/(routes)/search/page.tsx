import SearchProductClient from "@/components/client/search-product-client";
import { getCategories } from "@/lib/actions/categories";
import { getColors } from "@/lib/actions/colors";
import { getSearchProducts } from "@/lib/actions/products";
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
    query: string;
  };
}) => {
  const { query } = searchParams;
  const text = query?.toUpperCase();

  const categories = await getCategories();
  const colors = await getColors();
  const sizes = await getSizes();
  const products = await getSearchProducts(query);

  return (
    <SearchProductClient
      categories={categories}
      colors={colors}
      sizes={sizes}
      products={products}
      text={text}
    />
  );
};

export default ProductPage;

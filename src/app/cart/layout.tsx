import CartHeader from "@/components/ui/cart/header";
import { currentUser } from "@clerk/nextjs";

export default async function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <div>
      <CartHeader user={user} />
      {children}
    </div>
  );
}

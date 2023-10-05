import { toast } from "@/components/ui/use-toast";
import { ProductType } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast({
            title: "Item already exists in the cart",
          });
        }

        set({ items: [...get().items, data] });
        return toast({
          title: "Successfully added the item to the cart",
        });
      },
      removeAll() {
        set({ items: [] });
      },
      removeItem(id: string) {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        return toast({
          title: "Removed item from the cart",
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

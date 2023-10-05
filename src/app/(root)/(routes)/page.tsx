import Poster from "@/components/ui/poster";
import Carousal from "@/components/ui/swiper/swiper";
import Thumbnail from "@/components/ui/thumbnail";
import { images, thumbnailImages } from "@/lib/constants/data";

export default function Home() {
  return (
    <section>
      <Carousal className="w-full h-[80vh]" images={images} />
      <div className="lg:px-38 md:px-32 px-10 h-[40vh]  mt-10 grid grid-cols-8 w-full overflow-x-auto gap-4">
        {thumbnailImages.map((image) => (
          <Thumbnail
            label={image.label}
            href={image.href}
            key={image.id}
            src={image.src}
          />
        ))}
      </div>
      <Poster />
    </section>
  );
}

import Carousal from "@/components/ui/swiper/swiper";
import Image from "next/image";

interface CampainPageProps {
  campaignName: string;
}

export default function CampaignPage({ params }: { params: CampainPageProps }) {
  const images: (string | undefined)[] = [
    "/images/mens-showcase/1.png",
    ,
    "/images/mens-showcase/2.png",

    "/images/mens-showcase/3.png",

    "/images/mens-showcase/4.png",
  ];
  return (
    <section>
      <Carousal className="h-screen w-full" images={images} />
    </section>
  );
}

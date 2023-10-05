interface CampainPageProps {
  campaignName: string;
}

export default function CampaignPage({ params }: { params: CampainPageProps }) {
  return <div>{params.campaignName}</div>;
}

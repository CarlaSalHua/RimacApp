import { HomeIcon, Hospital, HospitalIcon, Laptop, Medico } from "@/assets/icons";

export const getPlanIcon = (planName: string) => {
  const normalized = planName.toLowerCase().trim();

  switch (true) {
    case normalized.includes('casa') && normalized.includes('clínica'):
      return <HospitalIcon width={56} height={56} />;
    case normalized.includes('casa'):
      return <HomeIcon width={56} height={56} />;
    default:
      return <HomeIcon width={56} height={56} />;
  }
};

export const getBulletIcon = (index: number) => {
  switch (true) {
    case index === 0:
      return <Medico width={20} height={20} />;
    case index === 1:
      return <Laptop width={20} height={20} />;
    case index === 2:
      return <Hospital width={20} height={20} />;
    default:
      return <Medico width={20} height={20} />;
  }
};

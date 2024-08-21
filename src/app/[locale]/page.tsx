import { useTranslations } from "next-intl";

export default function Home() {
  
  const t = useTranslations('IndexPage');
  
  console.log(t('title')); 
  
  return (
    <div>
      <h1 className="text-5xl mb-3 font-serif">{t('title')}</h1> 
      <p>{t('description')}</p>
    </div>
  );
}

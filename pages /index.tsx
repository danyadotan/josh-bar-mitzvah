import Head from "next/head";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HeroSection } from "@/components/HeroSection";
import { InfoSection } from "@/components/InfoSection";
import { RSVPSection } from "@/components/RSVPSection";
import { Footer } from "@/components/Footer";


export default function Home() {
return (
<>
<Head>
<title>Josh's Bar Mitzvah</title>
<meta name="description" content="Join us in celebrating Josh’s big day!" />
</Head>
<main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
<LanguageToggle />
<HeroSection />
<InfoSection />
<RSVPSection />
<Footer />
</main>
</>
);
}
return (
  
<AppLayout>
<Head>
<title>{t('title')}</title>
</Head>
<div className="flex flex-col items-center justify-center h-screen text-center p-4">
<h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
<p className="mb-6 text-lg">{t('instructions')}</p>
<Button onClick={toggleLanguage}>{t('change_language')}</Button>
</div>
</AppLayout>
);
}

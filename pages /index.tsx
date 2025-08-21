import { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import { AppLayout } from '@/components/AppLayout';


export default function Home() {
const { t } = useTranslation();
const [language, setLanguage] = useState<'en' | 'he'>('en');


const toggleLanguage = () => {
const nextLang = language === 'en' ? 'he' : 'en';
setLanguage(nextLang);
document.documentElement.lang = nextLang;
};


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

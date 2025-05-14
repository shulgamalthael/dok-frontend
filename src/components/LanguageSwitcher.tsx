"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const LANGUAGES = [
    { code: 'ua', name: 'Українська', flag: 'https://flagcdn.com/w40/ua.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
];

const LanguageSwitcher = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const changeLanguage = (lang: string) => {
        const segments = pathname.split('/');
        segments[1] = lang; // заменяем текущую локаль
        const newPath = segments.join('/');
        router.replace(newPath);
        setOpen(false);
    };

    const currentLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 border px-3 py-1 rounded hover:bg-gray-100"
            >
                <Image src={currentLang.flag} alt={currentLang.name} width={20} height={20} />
                <span>{currentLang.code.toUpperCase()}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-10">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
                        >
                            <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
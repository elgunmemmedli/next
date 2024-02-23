"use client"

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Navbar({token ,logout }) {
    const t = useTranslations("nav");
    const locale = useLocale();
    const [show,setShow] = useState(false);

    useEffect(()=>{
        setShow(true);
    }, [token])
    
   

    return (
        <div className="hidden lg:flex lg:gap-x-12">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900"> {t('home')} </Link>
                </li>
                <li>
                    <Link href={`/${locale}/products`} className="text-sm font-semibold leading-6 text-gray-900">{t('products')}</Link>
                </li>
               {
                show && <li>
                    {
                        !token ? <Link href={`/${locale}/login`} className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">Login</Link>
                            :
                            <div className="relative inline-block text-left">
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    {t('options')}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                <ul className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <li className="py-1" role="none">
                                        <Link href={`/${locale}/dashboard`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-solid fa-table-columns"></i> {t('dashboard')}</Link>
                                    </li>
                                    <li className="py-1" role="none">
                                        <Link href={`/${locale}/add`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-regular fa-address-book"></i> {t('add')}</Link>
                                    </li>
                                    <li className="py-1" role="none">
                                        <button onClick={logout} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">sign put</button>
                                    </li>
                                </ul>
                            </div>
                    }
                </li>
               }
            </ul>
        </div>
    )
}

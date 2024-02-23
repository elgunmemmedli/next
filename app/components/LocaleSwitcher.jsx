import React from 'react'
import {useRouter} from 'next/navigation'
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
    const router = useRouter();
    const locale = useLocale();

    function handleChange(e){
        let nextLocale = e.target.value;
        const newPath = window.location.pathname.replace(/^\/[a-zA-Z]{2}/, `/${nextLocale}`);
        router.replace(newPath);
        console.log(newPath, 'test');
    }


  return (
  <div className='mx-4'>
  <select name="" defaultValue={locale} id="" onChange={handleChange}>
    <option value="en">EN</option>
    <option value="az">AZ</option>
    <option value="ru">RU</option>
  </select>
  </div>
  )
}

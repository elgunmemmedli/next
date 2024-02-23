import { useLocale } from "next-intl";

export async function getData() {
    const res = await fetch('https://products-e5533-default-rtdb.firebaseio.com/products.json', {
      cache : 'no-cache'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }



  // export async function getBanner() {
  //   const locale = useLocale();
  //   const res = await fetch('http://localhost:8080/api/banner', {
  //     headers : {
  //       "accept-language" : locale
  //     }
  //   });
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data')
  //   }
   
  //   return res.json()
  // }

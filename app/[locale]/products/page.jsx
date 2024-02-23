import { getData } from "../../api";
import Cards from "@/app/components/Cards";


export default async function page() {

  const data = await getData();

  let productsArr = Object.entries(data);


  return (
    <>
      <div className="mt-[80px]">
        <h1 className="text-center text-3xl">Products</h1>
        <div className="max-w-screen-xl   mx-auto">
          <div className=" flex flex-wrap justify-between mt-[20px] gap-y-5">
            {
              productsArr.map(item => (
                <Cards key={item[0]} id={item[0]} item={item[1]} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


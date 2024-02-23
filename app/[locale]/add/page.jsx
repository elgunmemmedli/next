import Add from "@/app/components/Dashboard/Add";

export default function page() {
  return (
    <>
      <div className="mt-[80px]">
        <h1 className="text-center text-3xl my-3">Products Add</h1>
        <div className="w-[50%] h-screen  mx-auto mt-5">
          <Add />
        </div>
      </div>
    </>
  );
}

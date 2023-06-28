import type { NextPage } from "next";

const Home: NextPage = () => {
  return ( 
  <div className="bg-slate-400 py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen xl:place-content-center dark">
    <div className="bg-white dark:bg-black p-6 rounded-3xl shadow-2xl sm:bg-red-500 md:bg-teal-500 lg:bg-purple-500 xl:bg-pink-500">
      <span className="font-semibold dark:text-white text-3xl">Select Item</span>
      
        <ul>
          {[1,2,3,4,5].map((i)=>(
            <div key={i} className="flex justify-between my-2 first:bg-blue-50 last:bg-blue-50 ">
              <span className="text-gray-500 dark:text-gray-100">Gray Chair</span>
                <span className="font-semibold dark:text-gray-100">$19</span>
            </div>
          ))}
        </ul>
          
      <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
        <span>Total</span>
        <span className="font-semibold">$10</span>
      </div>
      <button className="block mt-5 bg-blue-500 dark:bg-black dark:border-white  text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">Checkout</button>
    </div>
    <div className="bg-white overflow-hidden rounded-2xl shadow-2xl group ">
      <div className="bg-blue-500 p-6 pb-14 xl:pb-80 portrait:bg-yellow-500 landscape:bg-teal-500">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="rounded-3xl relative -top-5 bg-white p-6">
        <div className="flex relative -top-16 items-end justify-between">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Orders</span>
            <span className="font-medium">340</span>
          </div>
          <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-100 transition-colors"/>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Spent</span>
            <span className="font-medium">$2,310</span>
          </div>
        </div>
        <div className="relative flex flex-col items-center -mt-10 -mb-5">
          <span className="text-lg font-medium">Tony Molloy</span>
          <span className="text-sm text-gray-500">USA</span>
        </div>
      </div>
    </div>
    <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <span className="shadow-xl p-2 rounded-md">⬅️</span>
        <div className="space-x-5">
          <span>💫4.9</span>
          <span className="shadow-xl p-2 rounded-md">❤️</span>
        </div>
      </div>
      <div className="bg-zinc-400 h-72 mb-5" />
      <div className="flex flex-col">
        <span className="font-medium text-xl">Swoon lounge</span>
        <span className="text-xs text-gray-500">Chair</span>
       <div className="mt-3 mb-5 flex justify-between items-center">
          <div className="space-x-2">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"/>
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition "/>
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"/>
          </div>
          <div className="flex items-center space-x-5">
            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
            <span>1</span>
            <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
          </div>
       </div>
       <div className="flex justify-between items-center">
        <span className="font-medium text-2xl">$450</span>
        <button className="bg-blue-500 text-center py-2 px-8 text-white rounded-xl">Add to cart</button>
       </div>
      </div>
    </div>
  </div>
  // form
  // <form className="flex flex-col space-y-2 p-5 h-screen">
  //   <input type="text" required placeholder="Username" className="border-gray-400 rounded peer" />
  //   <span className="hidden peer-invalid:block peer-invalid:text-red-500">This input is invalid.</span>
  //   <span className="hidden peer-valid:block peer-valid:text-teal-500">Awesome username</span>
  //   <input type="submit" value="Login" className="bg-white" />
  // </form>

  // <div className="flex flex-col space-y-2 p-5 h-screen">
  //   <details className="select-none open:bg-indigo-400">
  //     <summary className="cursor-pointer ">What is my fav. food?</summary>
  //   <input type="file" className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 bg-red-4009" />
  //   </details>
  // </div>
  );
};
export default Home;
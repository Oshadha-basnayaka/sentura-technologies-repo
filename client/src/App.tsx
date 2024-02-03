import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <div className={"bg-[#5B8A72] h-screen"} >


       <div className={"flex justify-center items-center text-center pt-10 text-xl"}>
          <h1 className={"font-bold text-center text-black"}> CRUD SYSTEM</h1>

       </div>


       <div className="flex justify-center items-center gap-52 pb-20 pt-20">
           <form className={"flex flex-col  gap-3 "}>

               <h1 className={"text-2xl text-white"}>Your full Name</h1>
               <input className="" type="text"

                      />

               <h1 className={"text-2xl text-white"}>PassWord</h1>
               <input className="" type="text"

                      />

               <h1 className={"text-2xl text-white"}>Location</h1>
               <input className="" type="text"

                      />

           </form>

           <form className={"flex flex-col gap-3"}>

               <h1 className={"text-2xl text-white"}>User Name</h1>
               <input className="" type="text"
                     />

               <h1 className={"text-2xl text-white"}>your Role</h1>
               <input className="" type="text"
                  />

               <h1 className={"text-2xl text-white"}>Contact Number</h1>
               <input className="" type="text"
                     />
           </form>
       </div>


       <div className={"flex gap-5 justify-center"}>
           <div className={"bg-blue-600 rounded px-2 py-2 text-white"}>add customer</div>
           <div className={"bg-gray-500 rounded px-2 py-2 text-white"}>search customer</div>
           <div className={"bg-green-600 rounded px-2 py-2 text-white"}>update customer</div>
           <div className={"bg-red-600 rounded px-2 py-2 text-white"}>delete customer</div>
       </div>




       <div className={"pt-20"}>
           <table className="min-w-full divide-y divide-gray-200 ">
               <thead className="bg-gray-50">
               <tr>
                   <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                       Full Name
                   </th>
                   <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                       User Name
                   </th>
                   <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                       Role
                   </th>
                   <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                       Location
                   </th>
                   <th
                       scope="col"
                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                       Contact
                   </th>
               </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">

                   <tr >
                       <td className="px-6 py-4 whitespace-nowrap"></td>
                       <td className="px-6 py-4 whitespace-nowrap"></td>
                       <td className="px-6 py-4 whitespace-nowrap"></td>
                       <td className="px-6 py-4 whitespace-nowrap"></td>
                       <td className="px-6 py-4 whitespace-nowrap"></td>
                   </tr>

               </tbody>
           </table>
       </div>



   </div>
   </>
  );
}

export default App;

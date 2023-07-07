'use client'
// import Prices from '@/components/Prices';
import React, { useState } from 'react'
import Prices from '@/components/Prices';

export default function page() {

  return (
    <main>
        <Prices/>
    </main>
  )
}

// 'use client'
// // import Prices from '@/components/Prices';
// import React, { useState } from 'react'
// import {month, year} from '@/prices'

// export default function page() {
//     const [fullDescription, setfullDescription] = useState('monthly');

//     function changeToMonthly() {
//         setfullDescription("monthly");
//     }

//     function changeToYearly() {
//         setfullDescription("yearly");
//     }
  

//   return (
//     <main className='full-main-styles'>

//         <div className="buttons">
//             <button className={fullDescription == "monthly" ? "activeBtn" : ""} onClick={changeToMonthly}>
//             Monthly
//             </button>

//             <button className={fullDescription == "yearly" ? "activeBtn" : ""} onClick={changeToYearly}>
//             Yearly
//             </button>
//         </div>

//     <div className='prices-styles'>

//         {
//             fullDescription == "monthly" ?(
//                 month.map((months)=>{
//                     return (
//                     <div className="content">
//                         <h3>{months.title}</h3>
            
//                     <h2>$ {months.decription} Monthly</h2>
//                         {/* {itemsArray.map((item, id) => (
//                 <p key={id}>{month.item}</p>
//             ))} */}
//         </div>
//         )
//                 })
                
//             ) :(
//                 year.map((years)=>{
//                     return (
//                     <div className='contnet'>
//                         <h3>{years.title}</h3>

//                         <h2>$ {years.decription} Anually</h2>
//                         {/* {itemArray.map((item, id) => (
//                             <p key={id}>{year.itm}</p>
//                 ))} */}
//                     </div>
//                     )
//                 })
//             )
//         }
    
//     </div>
//     </main>
//   )
// }

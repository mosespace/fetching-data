import React, { useState } from 'react'
import {month, year} from '@/prices'

export default function Prices({subTitle, title, items}) {

    const [fullDescription, setfullDescription] = useState('monthly');

    function changeToMonthly() {
        setfullDescription("monthly");
    }

    function changeToYearly() {
        setfullDescription("yearly");
    }

  return (
    <main className='full-main-styles'>
        <h1>Pricing ✅</h1>
        <h3>Sign up in less than 30 seconds. Try out 7 day risk free trial upgrade
            at anytime, no questions no hassle </h3>

        <div className="buttons">
             
            <button className={fullDescription == "monthly" ? "activeBtn" : ""} onClick={changeToMonthly}>
             MONTHLY
             </button>

            <button className={fullDescription == "yearly" ? "activeBtn" : ""} onClick={changeToYearly}>
             ANUALLY
             </button>

        </div>

        <div className="card-styles">
        {
            fullDescription == "monthly" ?(
                month.map((months)=>{
                    return (
                    <div className="card-01">
                        <h3>{months.title}</h3>
            
                    <h2>$ <span>{months.decription}</span> Monthly</h2>
                    <ul>
                    {months.itemsArray.map((item, itemId) => ( // Loop through the itemsArray
                    <li key={itemId}>{item}</li> // Use itemId as the key for each item
                    
        ))}
        </ul>
        </div>
        )
                })
                
            ) :(
                year.map((years)=>{
                    return (
                    <div className='card-02'>
                        <h3>{years.title}</h3>

                        <h2>$ <span>{years.decription}</span> Anually</h2>
                        <ul>
                            {years.itemsArray.map((item, id) => ( // Loop through the itemsArray
                            <li key={id}>{item}</li> // Use itemId as the key for each item
                    
        ))}
        </ul>
                    </div>
                    )
                })
            )
        }
            

        </div>
    </main>
  )
}



// {/* <div className='card-02'>
// <h3>Free</h3>
//     <h2>$ <span>49</span> /mo</h2>
//         <p>Cras sodales lobortis erat</p>
//         <p>Vitae pellentesque diam</p>
//         <p>Consequat eted tempus</p>
//         {/* <button> SIGN UP TODAY</button> */}
// </div>
// <div className='card-03'>
// <h3>Free</h3>
//     <h2>$ <span>49</span> /mo</h2>
//         <p>Cras sodales lobortis erat</p>
//         <p>Vitae pellentesque diam</p>
//         <p>Consequat eted tempus</p>
//         {/* <button> SIGN UP TODAY</button> */}
// </div>
// <div className='card-04'>
// <h3>Free</h3>
//     <h2>$ <span>49</span> /mo</h2>
//         <p>Cras sodales lobortis erat</p>
//         <p>Vitae pellentesque diam</p>
//         <p>Consequat eted tempus</p>
//         {/* <button> SIGN UP TODAY</button> */}
// </div> */}
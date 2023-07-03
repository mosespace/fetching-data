import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href= "/products">Go to Products</Link>
    </main>
  )
}

// {benefits.map((item)=>{
//   return (
//     <BenefitsCard data={item} key={item.id}/>
//   )
// })}
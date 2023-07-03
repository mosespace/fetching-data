import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ title, desc, id, src, price }) {
  return (
    <Link href={`/products/${id}`} className="product">
      <div className="product-image">
        <Image src={src} fill alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p className="clamp">{desc}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
}

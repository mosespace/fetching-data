export default async function fetchProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
}

export default async function productsByCat(id) {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/categories/1/products`
    );
    return await response.json();
  }
  
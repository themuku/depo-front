import { useEffect, useState } from "react";
import { columns } from "../product-table/Columns";
import { DataTable } from "../product-table/DataTable";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // if dep array [] is empty, it will only run once
    // if dep array has a variable, it will run every time the variable changes
    // if dep array is not provided, it will run every time the component renders

    fetch("https://depo-back.vercel.app/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="h-full p-6 rounded-xl border-[1px] border-gray-300 w-9/12">
      <h1 className="text-3xl font-bold">Products in stock</h1>
      <DataTable columns={columns} data={products} />
    </div>
  );
}

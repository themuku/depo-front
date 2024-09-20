import { useState } from "react";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";

export default function CreateProduct({ setTab }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [stockAmount, setStockAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      productName,
      price,
      stockAmount,
      description,
    };

    fetch("https://depo-back.vercel.app/products/add-one", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data) => {
        if (data) {
          toast.success("Product added successfully");

          setTimeout(() => {
            setIsLoading(false);
          }, 1000);

          setTab("stock");
        }
      })
      .catch((error) => {
        toast.error("Failed to add product");
        toast.error(res.statusText);
        setIsLoading(false);
      });
  }

  return (
    <div className="h-full p-6 rounded-xl border-[1px] border-gray-300 w-9/12">
      <h1 className="text-3xl font-bold mb-5">Add new product</h1>
      <form
        onSubmit={handleSubmit}
        className="w-2/4 mx-auto border-[1px] border-gray-400 p-7 rounded-lg flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="productName">Product name</label>
          <input
            onChange={(event) => setProductName(event.target.value)}
            className="px-4 py-2 outline-none border-[1px] border-gray-400 rounded-md"
            type="text"
            id="productName"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="price">Price</label>
          <input
            onChange={(event) => setPrice(+event.target.value)}
            className="px-4 py-2 outline-none border-[1px] border-gray-400 rounded-md"
            type="number"
            id="price"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="stockAmount">Stock amount</label>
          <input
            onChange={(event) => setStockAmount(+event.target.value)}
            className="px-4 py-2 outline-none border-[1px] border-gray-400 rounded-md"
            type="number"
            id="stockAmount"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="self-start" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className="px-4 py-2 outline-none border-[1px] border-gray-400 rounded-md"
            id="description"
            rows={10}
          />
        </div>

        {isLoading ? (
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Adding product...
          </Button>
        ) : (
          <Button>Add product</Button>
        )}
      </form>
    </div>
  );
}

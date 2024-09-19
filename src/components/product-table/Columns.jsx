import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const columns = [
  {
    accessorKey: "productName",
    Header: "Product Name",
    header: () => <div className="w-40">Product Name</div>,
    cell: ({ row }) => (
      <div className="font-semibold w-40">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "price",
    Header: "Price",
    header: () => <div className="w-24">Price</div>,
    cell: ({ row }) => (
      <div className="font-semibold w-24">$ {row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "stockAmount",
    Header: "Stock",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stock
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold w-12">{row.getValue("stockAmount")}</div>
    ),
  },
  {
    accessorKey: "description",
    Header: "Description",
    header: () => <div className="w-auto">Description</div>,
    cell: ({ row }) => (
      <div className="text-left font-semibold w-auto">
        {row.getValue("description")}
      </div>
    ),
  },
];

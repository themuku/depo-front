import { columns } from "../product-table/Columns";
import { DataTable } from "../product-table/DataTable";

const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    price: 25.99,
    stockAmount: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A sleek and responsive wireless mouse with ergonomic design for long hours of usage.",
  },
  {
    id: 2,
    productName: "Mechanical Keyboard",
    price: 79.99,
    stockAmount: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A high-quality mechanical keyboard with customizable RGB lighting and tactile switches.",
  },
  {
    id: 3,
    productName: "Gaming Headset",
    price: 59.99,
    stockAmount: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A noise-canceling gaming headset with surround sound for an immersive audio experience.",
  },
  {
    id: 4,
    productName: "USB-C Hub",
    price: 35.99,
    stockAmount: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A versatile USB-C hub with multiple ports including HDMI, USB 3.0, and SD card slots.",
  },
  {
    id: 5,
    productName: "Smartphone Stand",
    price: 15.99,
    stockAmount: 80,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "An adjustable smartphone stand, perfect for hands-free viewing and video calls.",
  },
  {
    id: 6,
    productName: "Bluetooth Speaker",
    price: 49.99,
    stockAmount: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A portable Bluetooth speaker with deep bass and waterproof design for outdoor use.",
  },
  {
    id: 7,
    productName: "External SSD 1TB",
    price: 99.99,
    stockAmount: 60,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A high-speed external SSD with 1TB capacity, ideal for quick data transfers and backups.",
  },
  {
    id: 8,
    productName: "Noise Cancelling Earbuds",
    price: 69.99,
    stockAmount: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "Wireless earbuds with active noise cancellation and long battery life for a distraction-free experience.",
  },
  {
    id: 9,
    productName: "Smartwatch",
    price: 199.99,
    stockAmount: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
  },
  {
    id: 10,
    productName: "4K Monitor",
    price: 299.99,
    stockAmount: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A 27-inch 4K UHD monitor with vibrant colors and a fast refresh rate for smooth visuals.",
  },
  {
    id: 11,
    productName: "Portable Power Bank",
    price: 29.99,
    stockAmount: 75,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A 10,000mAh portable power bank with fast charging capability for multiple devices.",
  },
  {
    id: 12,
    productName: "Smart LED Light Bulb",
    price: 19.99,
    stockAmount: 150,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A smart LED light bulb with voice control and customizable colors via mobile app.",
  },
  {
    id: 13,
    productName: "Electric Kettle",
    price: 39.99,
    stockAmount: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A stainless steel electric kettle with fast boiling technology and automatic shut-off.",
  },
  {
    id: 14,
    productName: "Air Purifier",
    price: 89.99,
    stockAmount: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A HEPA air purifier with multiple filtration stages for clean and fresh indoor air.",
  },
  {
    id: 15,
    productName: "Coffee Grinder",
    price: 45.99,
    stockAmount: 55,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A high-performance coffee grinder with adjustable grind settings for perfect coffee.",
  },
  {
    id: 16,
    productName: "Wireless Charger",
    price: 24.99,
    stockAmount: 90,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A sleek wireless charger compatible with all Qi-enabled devices for hassle-free charging.",
  },
  {
    id: 17,
    productName: "HD Webcam",
    price: 49.99,
    stockAmount: 35,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A high-definition webcam with autofocus and built-in microphone for crisp video calls.",
  },
  {
    id: 18,
    productName: "Smart Thermostat",
    price: 129.99,
    stockAmount: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A smart thermostat with mobile app control and energy-saving features for your home.",
  },
  {
    id: 19,
    productName: "Action Camera",
    price: 149.99,
    stockAmount: 18,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "A 4K action camera with image stabilization and waterproof housing for adventure photography.",
  },
  {
    id: 20,
    productName: "Electric Toothbrush",
    price: 59.99,
    stockAmount: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
    description:
      "An electric toothbrush with multiple cleaning modes and long-lasting battery life.",
  },
];

export default function Main() {
  return (
    <div className="h-full p-6 rounded-xl border-[1px] border-gray-300 w-9/12">
      <h1 className="text-3xl font-bold">Products in stock</h1>
      <DataTable columns={columns} data={products} />
    </div>
  );
}

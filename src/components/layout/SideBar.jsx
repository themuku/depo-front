import { IoMdExit } from "react-icons/io";
import { Button } from "@/components/ui/button.jsx";
import { cn } from "@/lib/utils";

export default function SideBar({ isLoggedIn = false, tab, setTab }) {
  return (
    <div className="flex h-full p-6 rounded-xl border-[1px] border-gray-300 w-3/12">
      <menu className="flex flex-col gap-3 w-full">
        <li
          onClick={() => setTab("stock")}
          className={cn(
            "text-xl font-semibold hover:bg-slate-200 w-full py-2 px-4 rounded-md transition duration-100 cursor-pointer",
            tab === "stock" ? "bg-slate-200" : ""
          )}
        >
          Stock
        </li>
        <li
          onClick={() => setTab("add-product")}
          className={cn(
            "text-xl font-semibold hover:bg-slate-200 w-full py-2 px-4 rounded-md transition duration-100 cursor-pointer",
            tab === "add-product" ? "bg-slate-200" : ""
          )}
        >
          Add product
        </li>
        <li
          onClick={() => setTab("settings")}
          className={cn(
            "text-xl font-semibold hover:bg-slate-200 w-full py-2 px-4 rounded-md transition duration-100 cursor-pointer",
            tab === "settings" ? "bg-slate-200" : ""
          )}
        >
          Settings
        </li>
        {isLoggedIn && (
          <li className="mt-auto self-end text-xl">
            <Button
              size="lg"
              variant="destructive"
              className="flex items-center gap-2 text-lg"
            >
              <IoMdExit /> <span>Logout</span>
            </Button>
          </li>
        )}
      </menu>
    </div>
  );
}

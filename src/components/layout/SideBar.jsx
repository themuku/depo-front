import { IoMdExit } from "react-icons/io";
import { Button } from "@/components/ui/button.jsx";

export default function SideBar({ isLoggedIn = false }) {
  return (
    <div className="flex h-full p-6 rounded-xl border-[1px] border-gray-300 w-3/12">
      <menu className="flex flex-col gap-3 w-full">
        <li className="text-xl font-semibold hover:bg-slate-200 w-full py-2 px-4 rounded-md transition duration-100 cursor-pointer">
          Stock
        </li>
        <li className="text-xl font-semibold hover:bg-slate-200 w-full py-2 px-4 rounded-md transition duration-100 cursor-pointer">
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

import SideBar from "@/components/layout/SideBar";
import Main from "@/components/layout/Main";
import CreateProduct from "./components/layout/CreateProduct";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("stock");
  let app;

  if (tab === "stock") {
    app = <Main />;
  } else if (tab === "add-product") {
    app = <CreateProduct setTab={setTab} />;
  }

  return (
    <div className="flex h-[100vh] p-6 gap-4">
      <SideBar isLoggedIn tab={tab} setTab={setTab} />
      {app}
    </div>
  );
}

export default App;

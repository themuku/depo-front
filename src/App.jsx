import SideBar from "@/components/layout/SideBar";
import Main from "@/components/layout/Main";

function App() {
  return (
    <div className="flex h-[100vh] p-6 gap-4">
      <SideBar isLoggedIn />
      <Main />
    </div>
  );
}

export default App;

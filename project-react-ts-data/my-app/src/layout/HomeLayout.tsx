import { Outlet } from "react-router-dom";
import MainNav from "../UI/MainNav";

export default function HomeLayout() {
  return (
   <>
    
    <MainNav/>
      <main className="lg:h-screen lg:overflow-y-hidden">
          <div className="md:flex-1 md:h-screen md:overflow-y-scroll pt-10  pb-32 px-10">
              <Outlet/>
          </div> 
          <aside className="md:w-96 md:h-screen md:overflow-y-scroll pt-10 pb-32 px-5 bg-white">
          </aside>
      </main>
    </>
  )
}

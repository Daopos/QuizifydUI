import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Home from "@/pages/Home";

const HomeLayout = () => {

    return (
        <div className=" bg-slate-950">
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger className="bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white" />
                    <section className="p-5 ">
                        <Home />
                    </section>
                </main>
            </SidebarProvider >
        </div>

    )

}

export default HomeLayout;
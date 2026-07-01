import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { FileText, Home, Play } from "lucide-react"
import { Link } from "react-router-dom"


export function AppSidebar() {
    return (
        <Sidebar >
            <SidebarHeader>
                <div className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm font-semibold text-slate-500 shadow-sm ">
                    <div className="mb-1 text-lg">Quizifyd</div>
                    <div className="text-xs text-slate-500">
                        Start your quiz journey
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-500">Navigation</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="group hover:bg-slate-900 hover:text-white">
                                <Link to="/home" className="flex items-center gap-2 text-white ">
                                    <Home className="h-4 w-4 text-slate-400" />
                                    Home
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="group hover:bg-slate-900 hover:text-white">
                                <Link to="/addarticle" className="flex items-center gap-2 text-white group-hover:text-white ">
                                    <FileText className="h-4 w-4 text-slate-400" />
                                    Article
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="group hover:bg-slate-900 hover:text-white">
                                <Link to="/quiz" className="flex items-center gap-2 text-white ">
                                    <Play className="h-4 w-4 text-slate-400" />
                                    Quiz
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="rounded-3xl  border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-500">
                    Minimal palette for clean focus.
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
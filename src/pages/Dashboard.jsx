import TopNav from "../components/TopNav";
import DashNav from "../components/DashNav"

export default function Dashboard() {
    window.document.title = 'Wink - Dashboard';
    return(
        <>
            <DashNav />
            <TopNav />
        </>
    )
}
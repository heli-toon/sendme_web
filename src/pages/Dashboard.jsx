import DashNav from "../components/DashNav"
import TopNav from "../components/TopNav";

export default function Dashboard() {
    window.document.title = 'SendMe - Dashboard';
    return(
        <>
            <DashNav />
            <TopNav />
        </>
    )
}
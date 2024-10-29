import TopNav from "../components/TopNav";
import DashNav from "../components/DashNav"

export default function Post() {
    window.document.title = 'Wink - Post';
    return(
        <>
            <DashNav />
            <TopNav />
        </>
    )
}
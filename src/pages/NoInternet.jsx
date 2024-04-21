export default function NoInternet() {
    window.document.title = 'SendMe | No Internet';
    return(
        <>
            <section className="error-page min-vh-100 d-flex flex-column align-items-center justify-content-center" id="nointernet">
                <h1>No Internet</h1>
                <h2>You&apos;re not connected. And the web just isn&apos;t the same without you. Let&apos;s get you back online!</h2>
                <a className="btned" href="#">Refresh</a>
                <img src="/images/error-page.png" className="img-fluid py-5" alt="Page Not Found" />
            </section>
        </>
    )
}
export default function error404() {
  window.document.title = 'SendMe | Page Not Found'
  return (
    <>
      <section className="error-page min-vh-100 d-flex flex-column align-items-center justify-content-center" id="404">
        <h1>404</h1>
        <h2>The page you are looking for doesn&apos;t exist at all.</h2>
        <a className="btned" href="/">
          Back to home
        </a>
        <img
          src="/images/error-page.png"
          className="img-fluid py-5"
          alt="Page Not Found"
        />
      </section>
    </>
  );
}

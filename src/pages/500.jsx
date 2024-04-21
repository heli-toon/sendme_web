export default function error500() {
  window.document.title = 'SendMe | Server Error'
  return (
    <>
      <section className="error-page min-vh-100 d-flex flex-column align-items-center justify-content-center" id="500">
        <h1>500</h1>
        <h2>There was an internal server error.</h2>
        <a className="btned" href="/">
          Back to home
        </a>
        <img
          src="/images/error-page.png"
          className="img-fluid py-5"
          alt="Internal Server Error"
        />
      </section>
    </>
  );
}

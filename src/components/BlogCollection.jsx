import verba from "../assets/images/hero-fullscreen-bg.jpg";
export default function BlogCollection() {
  return (
    <>
      <section id="recent-blog-posts" class="recent-blog-posts">
        <div class="container">
          <div class="section-header">
            <h2>Blog</h2>
            <p>Recent posts form my Blog</p>
          </div>
          <div class="row">
            <div class="col-lg-4 my-4">
              <div class="post-box">
                <div class="post-img">
                  <img src={verba} class="img-fluid" alt="" />
                </div>
                <div class="meta">
                  <span class="post-date">Tue, December 12</span>
                </div>
                <h3 class="post-title">
                  Eum ad dolor et. Autem aut fugiat
                </h3>
                <p>
                  Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel
                  omnis laudantium. Asperiores eum ipsa est officiis. Modi
                  cupiditate exercitationem qui magni...
                </p>
                <a href="blog-details.html" class="readmore btned">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 my-4">
              <div class="post-box">
                <div class="post-img">
                  <img
                    src={verba}
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="meta">
                  <span class="post-date">Fri, September 05</span>
                </div>
                <h3 class="post-title">
                  Et repellendus molestiae qui est sed
                </h3>
                <p>
                  Voluptatem nesciunt omnis libero autem tempora enim ut ipsam
                  id. Odit quia ab eum assumenda. Quisquam omnis aliquid
                  necessitatibus tempora...
                </p>
                <a href="blog-details.html" class="readmore btned">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 my-4">
              <div class="post-box">
                <div class="post-img">
                  <img
                    src={verba}
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="meta">
                  <span class="post-date">Tue, July 27</span>
                </div>
                <h3 class="post-title">
                  Quia assumenda est et veritatis aut quae
                </h3>
                <p>
                  Quia nam eaque omnis explicabo similique eum quaerat similique
                  laboriosam. Quis omnis repellat sed quae consectetur magnam
                  veritatis...
                </p>
                <a href="blog-details.html" class="readmore btned">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

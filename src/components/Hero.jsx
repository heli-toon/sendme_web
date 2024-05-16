import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
export default function Hero() {
    return(
        <>
            <section id="hero" className="hero-fullscreen d-flex align-items-center">
                <div className="container d-flex flex-column align-items-center position-relative">
                    <h2>The <span>Ultimate</span> Tasks <em>Marketplace</em></h2>
                    <p>
                        Do you need help with a task? Are you looking for a way to make money doing tasks for others? 
                        SendMe is the perfect solution. Post a task or take on a task.
                    </p>        
                    <div className="d-flex justify-content-lg-between btns">
                        <a href="#waitlist" className="btned btn-get-started scrollto">Join Us</a>
                        <a href="#about" className="btn-learn scrollto">Learn More</a>
                    </div>
                </div>
            </section>
        </>
    )
}
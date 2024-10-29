import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import logo from "../assets/logo.png";

export default function Login() {
  window.document.title = "Wink | Login";
  const onboardingRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = onboardingRef.current;
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
  };
  return (
    <>
      <section className="login min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="/landing" className="logo d-flex align-items-center w-auto">
                  <img src={logo} alt="" />
                  <span className="d-none d-lg-block">Wink</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="onboarding card-body">
                  <div className="pt-2 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to Wink
                    </h5>
                  </div>
                  <form className="row g-3 needs-validation" ref={onboardingRef} onSubmit={handleSubmit} noValidate>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Your Email
                      </label>
                      <input type="email" name="email" placeholder="Email" className="form-control" id="yourEmail" required />
                      {validated && (
                        <div className="invalid-feedback">
                          Please enter a valid Email adddress!
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        placeholder="Password"
                        required
                      />
                      {validated && (
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      )}
                    </div>
                    <div className="pt-2 pb-2">
                      <div className="or">OR</div>
                      <a
                        href="alot"
                        className="enterwgooogle d-flex align-items-center justify-content-center"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="4" />
                          <g clipPath="url(#clip0_710_6227)">
                            <path
                              d="M29.6 20.2273C29.6 19.5182 29.5364 18.8364 29.4182 18.1818H20V22.05H25.3818C25.15 23.3 24.4455 24.3591 23.3864 25.0682V27.5773H26.6182C28.5091 25.8364 29.6 23.2727 29.6 20.2273Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M20 30C22.7 30 24.9636 29.1045 26.6181 27.5773L23.3863 25.0682C22.4909 25.6682 21.3454 26.0227 20 26.0227C17.3954 26.0227 15.1909 24.2636 14.4045 21.9H11.0636V24.4909C12.7091 27.7591 16.0909 30 20 30Z"
                              fill="#34A853"
                            />
                            <path
                              d="M14.4045 21.9C14.2045 21.3 14.0909 20.6591 14.0909 20C14.0909 19.3409 14.2045 18.7 14.4045 18.1V15.5091H11.0636C10.3864 16.8591 10 18.3864 10 20C10 21.6136 10.3864 23.1409 11.0636 24.4909L14.4045 21.9Z"
                              fill="#FBBC04"
                            />
                            <path
                              d="M20 13.9773C21.4681 13.9773 22.7863 14.4818 23.8227 15.4727L26.6909 12.6045C24.9591 10.9909 22.6954 10 20 10C16.0909 10 12.7091 12.2409 11.0636 15.5091L14.4045 18.1C15.1909 15.7364 17.3954 13.9773 20 13.9773Z"
                              fill="#E94235"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_710_6227">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(10 10)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Continue with Google
                      </a>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btned w-100" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Don&apos;t have account?{" "}
                        <a
                          className="text-decoration-underline"
                          href="/register"
                        >
                          Create an account
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

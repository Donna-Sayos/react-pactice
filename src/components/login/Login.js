import { useRef } from "react";
import DIAMOND from "../../assets/diamond.png";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";

export default function Login() {
  const btnRef = useRef(null);

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="form-container card p-2 mb-5">
              <div className="card-body p-5 text-center">
                <img src={DIAMOND} width={80} height={60} alt="diamond" />
                <h3 className="sign-in mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    ref={btnRef}
                  />
                  <label className="inp form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                  />
                  <label className="inp form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" />
                  <label
                    className="checkbox form-check-label mx-1"
                    htmlFor="checkbox"
                  >
                    {" "}
                    Remember password{" "}
                  </label>
                </div>
                <button
                  className="login btn btn-lg"
                  type="submit"
                  onClick={() => btnRef.current.focus()}
                >
                  Login
                </button>
                <hr className="my-4" />{" "}
                {/* This creates a line divider between the buttons */}
                <button
                  className="google btn btn-lg btn-block mb-2 m-1"
                  type="submit"
                >
                  <IoLogoGoogle className="goo-logo" size={25} />
                </button>
                <button
                  className="facebook btn btn-lg btn-block mb-2 m-1"
                  type="submit"
                >
                  <IoLogoFacebook className="fa-logo" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

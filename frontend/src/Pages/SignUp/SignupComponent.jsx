import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { CgCopyright } from "react-icons/cg";
import "./signUp.css";
import { useDispatch } from "react-redux";
import { SignupReq } from "../../Redux/Auth/action";
const initialState = {
  email: "",
  username: "",
  password: "",
};

const SignupComponent = () => {
  const [data, setData] = useState(initialState);
  // const [signUpData, setSignUpData] = useState({});
  const Dispatch = useDispatch();
  const navigate=useNavigate()
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSignUp = (e) => {
    e.preventDefault();
    // setSignUpData({...signUpData, data});
   
    Dispatch(SignupReq(data)).then((res)=>{
      if(res.payload==='Signup Sucessfully'){
        alert(res.payload);
        navigate("/login")
      }else{
        alert(res.payload)
      }
    })
    setData(initialState);
  };

  return (
    <>
      <div className="signUp-container">
        <div>
          <img
            className="logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
          <p className="suggestion">
            Sign up to see photos and videos from your friends.
          </p>
          <div className="loginToFacebookBtn">
            <AiFillFacebook className="icon" />
            <span className="facebookDes">Log in with Facebook</span>
          </div>

          <div className="orPart">
            <hr className="hrTag me-3" />
            <p>or</p>
            <hr className="hrTag ms-3" />
          </div>
        </div>

        <form className="signUp-form" onSubmit={handelSignUp}>
          <input
            type="text"
            placeholder=" Email"
            name="email"
            value={data.email}
            onChange={handelInputChange}
            required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={handelInputChange}
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={DataTransfer.password}
            onChange={handelInputChange}
            required
          />

          <div>
            <p className="info mt-1">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <span className="learn-more">Learn More</span>
            </p>

            <p className="info mt-1">
              By signing up, you agree to our{" "}
              <span className="learn-more">
                {" "}
                Terms , Privacy Policy and Cookies Policy .
              </span>
            </p>
          </div>

          <div className="SignUpBtn">
            <button>Sign up</button>
          </div>
        </form>
      </div>

      <div className="log-account">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>

      <div className="get-app">
        <p>Get the app.</p>
        <div>
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Get it on Google Play"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Get it from Microsoft"
          />
        </div>
      </div>

      <div className="some-link">
        <div>
          <Link>Meta</Link>
        </div>
        <div>
          <Link>About</Link>
        </div>
        <div>
          <Link>Blog</Link>
        </div>
        <div>
          <Link>Jobs</Link>
        </div>
        <div>
          <Link>Help</Link>
        </div>
        <div>
          <Link>API</Link>
        </div>
        <div>
          <Link>Privacy</Link>
        </div>
        <div>
          <Link>Terms</Link>
        </div>
        <div>
          <Link>Top Accounts</Link>
        </div>
        <div>
          <Link>Locations</Link>
        </div>
        <div>
          <Link>Instagram Lite</Link>
        </div>
        <div>
          <Link>Contact Uploading & Non-Users</Link>
        </div>
        <div>
          <Link>Meta Verified</Link>
        </div>
      </div>

      <div className="copyRight">
        <CgCopyright /> <span>2023 Instagram from Meta</span>
      </div>
    </>
  );
};

export default SignupComponent;

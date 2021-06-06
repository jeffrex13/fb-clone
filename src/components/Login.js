import { Button } from "@material-ui/core";
import React from "react";
import "../Login.css";
import { auth, provider } from "../firebase"
import { actionTypes } from "../reducer"
import { useStateValue } from "./StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue(); //allows to pull information from the data layer

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user, //pushes user inside the data layer
            })
            console.log(result)
        }).catch(error => alert(error.message)) //shows error as an alert
    }

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
          Sign In
      </Button>
    </div>
  );
};

export default Login;

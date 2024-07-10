import React, { useEffect } from "react";

import login from "./assets/kvLogin.jpeg";
import logo from "./assets/kvLogo.png";
import Button from "./components/Button";
import FormTextItem from "./components/FormTextItem";
import "./loginStyle.css";

const LoginEmployee = ({ handleSubmit }) => {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });
    console.log(formData);

    const usernameRef = React.useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <div className="d-flex">
            <section className="login-page-img">
                <div className="login-page-img-container">
                    <img src={login} alt="login page image" />
                </div>
            </section>
            <section className="login-section">
                {/* <!-- <div className="login-area"> --> */}
                <form action="" method="get">
                    <div className="logo-container">
                        <img src={logo} alt="keyvalue logo" />
                    </div>

                    <FormTextItem
                        ref={usernameRef}
                        name="username"
                        label="Username"
                        isModernLabel={true}
                        changeState={(username) => {
                            if (username.length <= 10)
                                setFormData({ ...formData, username });
                        }}
                        errorText={
                            formData.username.length >= 10
                                ? "Username can have a max of 10 letters"
                                : undefined
                        }
                        value={formData.username}
                    />

                    <FormTextItem
                        name="password"
                        label="Password"
                        isModernLabel={true}
                        type="password"
                        changeState={(password) =>
                            setFormData({ ...formData, password })
                        }
                    />

                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        isPrimary={true}
                    >
                        Login
                    </Button>
                </form>
                {/* <!-- </div> --> */}
            </section>
        </div>
    );
};

export default LoginEmployee;

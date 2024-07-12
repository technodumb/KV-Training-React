import React, { useEffect } from "react";

import login from "../assets/kvLogin.jpeg";
import logo from "../assets/kvLogo.png";
import Button from "../components/Button";
import FormTextItem from "../components/FormTextItem";
import "./loginStyle.css";
import { useNavigate, useOutletContext } from "react-router-dom";

const LoginEmployee = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });
    console.log(formData);

    const usernameRef = React.useRef();

    useEffect(() => {
        const timeout = setTimeout(() => usernameRef.current.focus(), 1000);

        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = () => {
        if (
            formData.username === "alnaskabeer" &&
            formData.password === "abc123"
        ) {
            localStorage.setItem("token", "true");
        } else {
            localStorage.setItem("token", "false");
        }
        navigate("/employee");
    };

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
                            if (username.length <= 15)
                                setFormData({ ...formData, username });
                        }}
                        errorText={
                            formData.username.length >= 15
                                ? "Username can have a max of 15 letters"
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
                        type="button"
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

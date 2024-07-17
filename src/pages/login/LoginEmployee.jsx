import React, { useEffect, useState } from "react";

import loginImg from "../../assets/kvLogin.jpeg";
import logo from "../../assets/kvLogo.png";
import Button from "../../components/Button";
import FormTextItem from "../../components/FormTextItem";
import "./loginStyle.css";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./api";
import Snackbar from "../../modals/customToast";

const LoginEmployee = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });
    const [toastMessage, setToastMessage] = useState({
        active: false,
        status: "",
        message: "",
    });

    const usernameRef = React.useRef();

    const [login, { isSuccess, data, isError, error }] = useLoginMutation();

    useEffect(() => {
        const timeout = setTimeout(() => usernameRef.current.focus(), 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate("/employee");
        }
        if (isError) {
            console.log(error);
            setToastMessage({
                active: true,
                status: "error",
                message: error.data.error,
            });
            setTimeout(() => {
                setToastMessage((prev) => ({ ...prev, active: false }));
            }, 2000);
        }
    }, [data, error, isSuccess, isError, navigate]);

    const handleSubmit = async () => {
        const response = await login({
            email: formData.username,
            password: formData.password,
        });
        console.log(response);
    };

    return (
        <>
            <Snackbar
                active={toastMessage.active}
                status={toastMessage.status}
                message={toastMessage.message}
            />
            <div className="d-flex">
                <section className="login-page-img">
                    <div className="login-page-img-container">
                        <img src={loginImg} alt="login page image" />
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
                            changeState={(username) =>
                                setFormData({ ...formData, username })
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
        </>
    );
};

export default LoginEmployee;

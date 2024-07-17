import React, { useEffect } from "react";

import loginImg from "../../assets/kvLogin.jpeg";
import logo from "../../assets/kvLogo.png";
import Button from "../../components/Button";
import FormTextItem from "../../components/FormTextItem";
import "./loginStyle.css";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./api";
import Toast from "../../modals/customToast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addError } from "../../store/toastReducer";
import { v4 } from "uuid";

const LoginEmployee = () => {
    const toastMessages = useSelector((state) => state.toasts.errors);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
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
            dispatch(
                addError({
                    id: v4(),
                    status: "error",
                    active: true,
                    message: error.data.error,
                })
            );
        }
    }, [data, error, dispatch, isError, isSuccess, navigate]);

    const handleSubmit = async () => {
        const response = await login({
            email: formData.username,
            password: formData.password,
        });
        console.log(response);
    };

    return (
        <>
            <div className="toastContainer">
                {toastMessages && toastMessages.length
                    ? toastMessages.map((toastMessage) => (
                          <Toast
                              key={toastMessage.id}
                              id={toastMessage.id}
                              // active={toastMessage.active}
                              message={toastMessage.message}
                              status={toastMessage.status}
                          />
                      ))
                    : ""}
            </div>
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

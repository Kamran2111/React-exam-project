import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { fetchSignIn } from "../store/operations";
import { AppDispatch } from "../store/store";
import { Field, Form, Formik, ErrorMessage } from "formik";
import imgLogo from "../../assets/images/logo-img.png";
import imgDepos from "../../assets/images/auth-img.png";
import { ISignIn } from "../types/infoAuthTypes";
import * as Yup from "yup";
import CommonButton from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignInScheme = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must be less than 12 characters")
    .required("Required"),
});

const initialValues = { email: "", password: "" };

const SignInPage: React.FC = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();
  const handleSubmit = async (values: ISignIn) => {
    try {
      await dispatch(fetchSignIn(values));
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
    values.email = "";
    values.password = "";
  };
  const handleOpenSignUpPage = () => {
    navigate("/signup", {
      replace: true,
    });
  };
  const handleOpenDashboardPage = () => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <section className="flex items-center justify-center h-[100vh]">
      {isLoading && <h1>...Loading</h1>}
      {error && <h2>Error happened - {error}</h2>}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignInScheme}
      >
        <Form>
          <div className="flex justify-center items-center">
            <div className="mt-[50px] mr-[150px] mb-[84px] ml-[150px]">
              <div className="flex items-center justify-between ">
                <img src={imgLogo} alt="LOGO" />
                <button
                  onClick={handleOpenSignUpPage}
                  className="rounded-[10px] text-[14px] leading-[24px] font-normal border-solid p-[10px] border-[2px] border-blue-500 text-blue-500"
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-[40px] mr-[70px] mb-[84px]">
                <p className="text-[14px] leading-[24px] font-normal">
                  Welcome back!!
                </p>
                <p className="text-[28px] leading-[38px] font-extrabold mb-[50px]">
                  Please Sign In
                </p>

                <div>
                  <label
                    className="text-[14px] leading-[24px] font-normal mb-[8px] block"
                    htmlFor={emailId}
                  >
                    Email address
                  </label>
                  <Field
                    className="rounded-[10px] border-solid border-[1px] w-[350px]   border-input-color p-[13px] text-gray-500"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    id={emailId}
                  />

                  <ErrorMessage
                    className="text-red-500 m-1 "
                    name="email"
                    component="p"
                  />
                </div>

                <div>
                  <label
                    className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                    htmlFor={passwordId}
                  >
                    Password
                  </label>
                  <Field
                    className="rounded-[10px] border-solid border-[1px] w-[350px]  border-input-color p-[13px] text-gray-500"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id={passwordId}
                  />
                  <ErrorMessage
                    className="text-red-500 m-1"
                    name="password"
                    component="p"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Field type="checkbox" id={rememberId} className="mr-2" />
                    <label htmlFor={rememberId} className="text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    I forgot my password
                  </p>
                </div>

                <CommonButton
                  type="submit"
                  onClick={handleOpenDashboardPage}
                  className="rounded-[10px] p-2.5 w-[350px] mt-[38px] flex items-center justify-center"
                  label="Sign in"
                />
              </div>
            </div>

            <img src={imgDepos} alt="Images" />
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default SignInPage;

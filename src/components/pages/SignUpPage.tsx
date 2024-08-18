import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStat } from "../store/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import imgLogo from "../../assets/images/logo-img.png";
import { ISignUp } from "../types/infoAuthTypes";
import CommonButton from "../common/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../store/operations";

const SignUpScheme = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must be less than 12 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "The passwords do not match")
    .required("Required"),
});

const initialValues: ISignUp = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  avatar: "",
};

const SignUpPage: React.FC = () => {
  const { isLoading, error } = useSelector((state: RootStat) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (values: ISignUp) => {
    try {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        navigate("/signin", { replace: true });
      } else {
        console.error("Ошибка входа:", resultAction.payload);
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  const emailId = useId();
  const passwordId = useId();
  const confirmPassword = useId();

  const handleOpenSignInPage = () => {
    navigate("/signin", {
      replace: true,
    });
  };

  return (
    <section className="flex items-center justify-center h-[100vh]">
      {isLoading && (
        <h1 className="text-[50px] text-black] mr-[50px]">...Loading</h1>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignUpScheme}
      >
        <Form>
          <div className="flex items-center justify-between">
            <img src={imgLogo} alt="LOGO" />
            <button
              onClick={handleOpenSignInPage}
              className="rounded-[10px] text-[14px] leading-[24px] font-normal border-solid p-[10px] border-[2px] border-blue-500 text-blue-500"
            >
              Sign In
            </button>
          </div>
          <div className="mt-[50px] mr-[150px] mb-[84px] ml-[150px]">
            <div>
              <p className="text-[14px] leading-[24px] font-normal">
                Welcome back!!
              </p>
              <p className="text-[28px] leading-[38px] font-extrabold mb-[50px]">
                Please Sign Up
              </p>
            </div>

            <div>
              <label
                className="text-[14px] leading-[24px] font-normal mb-[8px] block"
                htmlFor={emailId}
              >
                Email address
              </label>
              <Field
                className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                type="email"
                name="email"
                placeholder="Enter email address"
                id={emailId}
              />
              <ErrorMessage
                className="text-red-500 m-1"
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
                className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
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

            <div>
              <label
                className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                htmlFor={confirmPassword}
              >
                Confirm Password
              </label>
              <Field
                className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                id={confirmPassword}
              />
              <ErrorMessage
                className="text-red-500 m-1"
                name="confirmPassword"
                component="p"
              />
            </div>
            <CommonButton
              type="submit"
              className="rounded-[10px] p-2.5 w-[350px] mt-[38px] flex items-center justify-center"
              label="Sign Up"
            />
          </div>
        </Form>
      </Formik>
      {error && (
        <h2 className="text-20px text-red-500">Error happened - {error}</h2>
      )}
    </section>
  );
};

export default SignUpPage;

import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { fetchSignUp } from "../store/operations";
import { AppDispatch } from "../store/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import imgLogo from "../../assets/images/logo-img.png";
import { ISignUp } from "../types/infoAuthTypes";
import CommonButton from "../common/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const initialValues: ISignUp = { email: "", password: "", confirmPassword: "" };

const SignUpPage: React.FC = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (values: ISignUp) => {
    try {
      await dispatch(fetchSignUp(values));
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
    (values.email = ""), (values.password = ""), (values.confirmPassword = "");
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
      {isLoading && <h1>...Loading</h1>}
      {error && <h2>Error happened - {error}</h2>}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={SignUpScheme}
      >
        <Form>
          <div>
            <div className="flex items-center justify-between">
              <img src={imgLogo} alt="LOGO" />
              <button
                onClick={handleOpenSignInPage}
                className="rounded-[10px] text-[14px] leading-[24px] font-normal border-solid p-[10px] border-[2px] border-blue-500 text-blue-500"
              >
                Sign In
              </button>
            </div>
            <div>
              <div>
                <p className="text-[14px] leading-[24px] font-normal">
                  Welcome back!!
                </p>
                <p className="text-[28px] leading-[38px] font-extrabold mb-[50px]">
                  Please Sign In
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
                  placeholder="Enter your password"
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
                label="Sign In"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpPage;

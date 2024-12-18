import { useState } from "react";

// material-ui
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

// third party
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { Formik } from "formik";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ButtonAuth from "../ButtonAuth";
import { stylesMui } from "./styles";

// ============================||  Auth Login ||============================ //

const recaptchaKey = import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY;

const AuthForgot = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
            >
              <Typography sx={stylesMui.inputLabel}>Email</Typography>
              <TextField
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Your Email"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1rem" }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
            >
              <Typography sx={stylesMui.inputLabel}>Password</Typography>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                placeholder="Enter your password"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <Visibility
                          sx={{ color: "#D0D0D0", fill: "#D0D0D0" }}
                        />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ ...stylesMui.inputField, mb: "1.5rem" }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            >
              <Typography sx={stylesMui.inputLabel}>
                Confirm Password
              </Typography>
              <OutlinedInput
                id="outlined-adornment-confirmPassword-login"
                type={showConfirmPassword ? "text" : "Password"}
                value={values.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm your password"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showConfirmPassword ? (
                        <Visibility
                          sx={{ color: "#D0D0D0", fill: "#D0D0D0" }}
                        />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ ...stylesMui.inputField, mb: "1.5rem" }}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-confirmPassword-login"
                >
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </FormControl>

            <div className="mb-[0.62rem]" id="captcha">
              <ReCAPTCHA
                sitekey={recaptchaKey}
                onChange={(value) => {
                  console.log("reCAPTCHA value:", value);
                }}
              />
            </div>

            <div className="mt-4">
              <ButtonAuth labelText="Reset" />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthForgot;

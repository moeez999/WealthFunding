import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonAuth from "../ButtonAuth";
import { stylesMui } from "./styles";
import { toast } from "react-toastify";
import useCreateUser from "../../hooks/useCreateUser";

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: createUser, isLoading } = useCreateUser();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    fisrtName: "",
    LastName: "",
    email: "",
    password: "",
  };

  // Separate submit function
  const handleSubmitForm = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    try {
      createUser(values, {
        onSuccess: () => {
          setStatus({ success: true });
          toast.success("User created successfully");
          navigate("/auth/login");
        },
        onError: (error) => {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          toast.error(error.response.data.message);
        },
        onSettled: () => {
          setSubmitting(false);
        },
      });
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        fisrtName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={handleSubmitForm} // Call the new function here
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
          <div className="gap-4 flex flex-col" id="input-fields">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <FormControl
                fullWidth
                error={Boolean(touched.fisrtName && errors.fisrtName)}
              >
                <Typography sx={stylesMui.inputLabel}>First Name</Typography>
                <OutlinedInput
                  id="outlined-adornment-fisrtName-register"
                  value={values.fisrtName}
                  name="fisrtName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                />
                {touched.fisrtName && errors.fisrtName && (
                  <FormHelperText error>{errors.fisrtName}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.lastName && errors.lastName)}
              >
                <Typography sx={stylesMui.inputLabel}>Last Name</Typography>
                <OutlinedInput
                  id="outlined-adornment-lastName-register"
                  value={values.lastName}
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                />
                {touched.lastName && errors.lastName && (
                  <FormHelperText error>{errors.lastName}</FormHelperText>
                )}
              </FormControl>
            </div>

            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
            >
              <Typography sx={stylesMui.inputLabel}>Email</Typography>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
            >
              <Typography sx={stylesMui.inputLabel}>Password</Typography>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                placeholder="Enter your password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="mt-1">
            <ButtonAuth labelText="Sign Up" disabled={isLoading} />
          </div>

          <Typography sx={stylesMui.redirectText}>
            Have an account?{" "}
            <Link to="/auth/login">
              <span style={{ color: "#00BE64" }}>Log In</span>
            </Link>
          </Typography>
        </form>
      )}
    </Formik>
  );
};

export default AuthRegister;

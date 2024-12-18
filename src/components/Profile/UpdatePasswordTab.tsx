import { useState } from "react";
import { Typography } from "@mui/material";

const UpdatePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === "oldPassword") {
      setOldPassword(value);
    } else if (field === "newPassword") {
      setNewPassword(value);
    } else if (field === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleResetPassword = () => {
    // Basic validation
    const newErrors = {
      oldPassword: oldPassword === "" ? "Old Password is required." : "",
      newPassword:
        newPassword === ""
          ? "New Password is required."
          : newPassword.length < 6
          ? "Password must be at least 6 characters long."
          : "",
      confirmPassword:
        confirmPassword === ""
          ? "Confirm New Password is required."
          : confirmPassword !== newPassword
          ? "Passwords do not match."
          : "",
    };

    setErrors(newErrors);

    // If there are no errors, proceed with resetting the password
    if (Object.values(newErrors).every((error) => error === "")) {
      // Your logic to reset the password goes here
      console.log("Password reset logic");
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4 lg:flex-row">
      <div className="w-full lg:w-1/2 bg-[#212330] p-4 md:p-6 lg:p-9 rounded-[10px] ">
        {/* ... (other code) */}

        <label className="font-semibold text-base text-white md:text-lg">
          Old Password
        </label>
        <input
          type="password"
          placeholder="Enter old password"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
          value={oldPassword}
          onChange={(e) => handleInputChange(e, "oldPassword")}
        />
        {errors.oldPassword && (
          <Typography variant="caption" color="error" className="mb-2 block">
            {errors.oldPassword}
          </Typography>
        )}

        <label className="font-semibold text-base text-white md:text-lg">
          New Password
        </label>
        <input
          type="password"
          placeholder="Enter new password"
          className={`w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3 ${
            errors.newPassword && "border-red-500"
          }`}
          value={newPassword}
          onChange={(e) => handleInputChange(e, "newPassword")}
        />
        {errors.newPassword && (
          <Typography variant="caption" color="error" className="mb-2 block">
            {errors.newPassword}
          </Typography>
        )}

        <label className="font-semibold text-base text-white md:text-lg">
          Confirm New Password
        </label>
        <input
          type="password"
          placeholder="Confirm New Password"
          className={`w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3 ${
            errors.confirmPassword && "border-red-500"
          }`}
          value={confirmPassword}
          onChange={(e) => handleInputChange(e, "confirmPassword")}
        />
        {errors.confirmPassword && (
          <Typography variant="caption" color="error" className="mb-2 block">
            {errors.confirmPassword}
          </Typography>
        )}

        <div className="flex justify-end w-full pt-4">
          <button
            onClick={handleResetPassword}
            className="rounded-[4px] cursor-pointer h-10 bg-[#BEC0C9] px-4 font-bold text-black text-base"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordTab;

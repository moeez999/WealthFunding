import { Box, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import useFetchDataUser from "../../hooks/useFetchDataUser";
const AccountTab = () => {
  const [previewImage, setPreviewImage] = useState<string>(
    "/Icons/profileMain.svg"
  );
 
  const { data } = useFetchDataUser();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col  gap-3 mt-4 lg:flex-row">
      <div className="w-full lg:W-1/2 bg-[#212330] p-4 md:p-6 lg:p-9 rounded-[10px] ">
        <Typography
          sx={{
            fontWeight: 700,
            color: "#BEC0C9",
            fontSize: { xs: 24, md: 30 },
          }}
        >
          Contact Info
        </Typography>
        <div className="relative ">
          <img
            className="pt-8 pb-5 lg:h-32"
            src={previewImage}
            alt="Profile"
            style={{ borderRadius: "50%" }} // Apply border-radius for circular shape
          />
          <label htmlFor="profileImageInput">
            <Box
              sx={{
                position: "absolute",
                top: 70,
                left: 50,
              }}
            >
              <img
                className="cursor-pointer"
                src="/Icons/profileButton.svg"
                alt="Upload Button"
              />
            </Box>
          </label>
          <input
            type="file"
            id="profileImageInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <label className="font-semibold text-base text-white md:text-lg mt-8">
          User Name
        </label>
        <input
          placeholder="Enter Username"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="font-semibold text-base text-white md:text-lg ">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          placeholder="Enter name"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
          value={data?.firstName + " " + data?.lastName}
        />
        <label className="font-semibold text-base text-white md:text-lg mt-8">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          placeholder="Enter email"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
          value={data?.email}
        />
      </div>

      <div className="w-full lg:W-1/2 bg-[#212330] p-4 md:p-6 lg:p-9 rounded-[10px] ">
        <Typography
          sx={{
            fontWeight: 700,
            color: "#BEC0C9",
            fontSize: { xs: 24, md: 30 },
          }}
        >
          Personal Info
        </Typography>

        <label className="font-semibold text-base text-white md:text-lg mt-8">
          Address
        </label>
        <input
          placeholder="Enter address"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="font-semibold text-base text-white md:text-lg ">
          City
        </label>
        <input
          placeholder="Enter city"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="font-semibold text-base text-white md:text-lg mt-8">
          Zip Code/Postal Code
        </label>
        <input
          placeholder="Enter zip code"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="font-semibold text-base text-white md:text-lg mt-8">
          Country
        </label>
        <input
          placeholder="Enter Country"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="font-semibold text-base text-white md:text-lg mt-8">
          State/Province
        </label>
        <input
          placeholder="Enter Province"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
      </div>
    </div>
  );
};

export default AccountTab;

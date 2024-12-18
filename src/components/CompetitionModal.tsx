import { Modal, Box, IconButton, useTheme } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import React, { useState } from "react";

interface CompetitionModalProps {
  handleClose: () => void;
  open: boolean;
}

interface FormData {
  remainingTime: string;
  prize: string;
  contestants: string;
  pastChallenges: string;
}

const initialFormData: FormData = {
  remainingTime: "",
  prize: "",
  contestants: "",
  pastChallenges: "",
};

const CompetitionModal: React.FC<CompetitionModalProps> = ({
  handleClose,
  open,
}) => {
  const theme = useTheme();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor:
              theme.palette.mode === "light"
                ? "background.paper"
                : "Background",
            border: "2px solid #000",
            boxShadow: 24,
            width: { xs: 300, sm: 500, lg: 600 },
            p: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <div className="flex justify-between items-center mt-4">
            <div className="font-[Montserrat] text-[34px] font-semibold mb-6 text-black">
              Competition
            </div>
            <div className="flex flex-row items-center gap-1 sm:gap-3">
              <IconButton>
                <RemoveIcon sx={{ color: "#0F0B19" }} />
              </IconButton>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ color: "#0F0B19" }} />
              </IconButton>
              <IconButton>
                <FullscreenIcon sx={{ color: "#0F0B19" }} />
              </IconButton>
            </div>
          </div>
          <form
            className="bg-white shadow-md rounded px-2 sm:px-4 xl:px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="remainingTime"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Remaining Time
              </label>
              <input
                type="text"
                name="remainingTime"
                value={formData.remainingTime}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF8F1F]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="prize"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Prize
              </label>
              <input
                type="text"
                name="prize"
                value={formData.prize}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF8F1F]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contestants"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Amount of contestants
              </label>
              <input
                type="text"
                name="contestants"
                value={formData.contestants}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF8F1F]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="pastChallenges"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Winner of Past Challenges
              </label>
              <input
                type="text"
                name="pastChallenges"
                value={formData.pastChallenges}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF8F1F]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FF8F1F] hover:bg-purple-600 font-[Montserrat] text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CompetitionModal;

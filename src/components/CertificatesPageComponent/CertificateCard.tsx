import { stylesMui } from "./styles";
import { Box, Typography } from "@mui/material";

interface CertificateCardProps {
  certificateId: string;
  certificateTitle: string;
  certificateDescription: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  certificateId,
  certificateTitle,
  certificateDescription,
}) => {
  return (
    <Box sx={stylesMui.cardBox}>
      <div
        className="w-[4.375rem] h-[4.375rem] flex items-center justify-center bg-gray-800 rounded-full"
        id="header"
      >
        <Typography sx={stylesMui.cardTitle}>{certificateId}</Typography>
      </div>

      <div id="body">
        <Typography sx={stylesMui.cardText}>{certificateTitle}</Typography>
      </div>

      <div id="footer">
        <Typography sx={stylesMui.cardFooter}>
          {certificateDescription}
        </Typography>
      </div>
    </Box>
  );
};

export default CertificateCard;

import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const TestTable = () => {
  const data = [
    ["Wealth Funding", "Phase 1", "Phase 2", "Funded"],
    ["Virtual Profit Days", "Unlimited", "Unlimited", "Unlimited"],
    ["Virtual Profit Target*", "12%", "12%", "12%"],
    ["Virtual Performance Test", "N/A", "$160.52", "$160.52"],
    ["Max Drawdown", "8%", "8%", "8%"],
    ["Max Daily Drawdown", "8%", "8%", "8%"],
    ["Max Virtual Capital Growth", "$2,000,000", "$2,000,000", "$2,000,000"],
    ["Minimum Trading Days", "N/A", "N/A", "N/A"],
    ["0% Commission", "YES", "YES", "YES"],
    ["Trade Through News", "YES", "YES", "YES"],
    ["Hold Over The Weekend", "YES", "YES", "YES"],
    ["Account Price", "$107", "$207", "$307"],
  ];

  return (
    <div className="flex justify-center overflow-x-auto">
      <table className="w-[90vw] table-auto border border-black">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-black border-opacity-20 py-5 px-8 ${
                    cellIndex === 0 ? "text-left" : "text-center"
                  }`}
                  colSpan={
                    cellIndex === 3 && rowIndex === data.length - 1 ? 3 : 1
                  }
                >
                  {cell === "Phase 1" ||
                  cell === "Phase 2" ||
                  cell === "Funded" ? (
                    <div
                      className="bg-[#00BE64] text-white py-4 px-6 rounded"
                      style={{
                        minWidth: "100%",
                      }}
                    >
                      <Typography sx={stylesMui.testTableColumns}>
                        {cell}
                      </Typography>
                    </div>
                  ) : (
                    <div
                      className="text-white py-4 px-6 rounded-[0.625rem]"
                      style={{
                        minWidth: "100%",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        background: "rgba(255, 255, 255, 0.02)",
                      }}
                    >
                      <Typography sx={stylesMui.testTableColumns}>
                        {cell}
                      </Typography>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;

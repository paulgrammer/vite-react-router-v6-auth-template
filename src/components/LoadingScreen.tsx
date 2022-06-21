import { Box } from "@mui/material";
import NProgress from "nprogress";
import type { FC } from "react";
import { useEffect } from "react";

const LoadingScreen: FC = () => {
  useEffect(() => {
    NProgress.start();

    return (): void => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        minHeight: "100%",
      }}
    />
  );
};

export default LoadingScreen;

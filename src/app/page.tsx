"use client";
import { useCallback, useState } from "react";
import { useFipeContextProvider } from "@/Context";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "@/theme/theme";

export default function Page() {
  const { step } = useFipeContextProvider();
  /* Gerenciador de Step, caso tenha alguma att no context, com o campo step, ele ira atualizar o callback*/
  const StepComponent = useCallback(() => {
    if (step === 0) {
      return <StepOne />;
    }
    if (step === 1) {
      return <StepTwo />;
    }
  }, [step]);
  const themeColors = createTheme({
    palette: {
      primary: {
        main: theme.colors.purple,
      },
    },
  });
  return (
    <ThemeProvider theme={themeColors}>
      <StepComponent />
    </ThemeProvider>
  );
}

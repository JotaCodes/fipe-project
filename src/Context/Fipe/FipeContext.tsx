"use client";
import React, { createContext, useContext, useState } from "react";
import { FipeType } from "./fipe";

const FipeContext = createContext<FipeType | undefined>(undefined);

export const FipeProvider = ({ children }: any) => {
  const [model, setModel] = useState();
  const [car, setCar] = useState();
  const [year, setYear] = useState<any>();
  const [valueCar, setValueCar] = useState();
  const [step, setStep] = useState(0);
  return (
    <FipeContext.Provider
      value={{ model, setModel, car, setCar, year, setYear, setValueCar, valueCar, step, setStep }}
    >
      {children}
    </FipeContext.Provider>
  );
};

export function useFipeContextProvider(): FipeType {
  const context = useContext(FipeContext);
  if (!context) {
    throw new Error("useFipe deve ser usado dentro de um FipeProvider");
  }
  return context;
}

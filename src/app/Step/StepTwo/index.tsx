import * as React from "react";
import { useFipeContextProvider } from "@/Context";
import { Chip, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "@/theme/theme";

const StepTwoStyled = styled.div`
  background-color: ${theme.colors.green_light};
  height: 100vh;
  min-height: 100vh;
`;
const ItemsTwoStyled = styled.div`
  .text {
    color: ${theme.colors.white};
    width: 13%;
    height: 50;
    font-size: ${theme.fontSize.md};
    font-weight: 700px;
  }
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function StepTwo() {
  /* Chamando nosso Context para pegar os dados do carro*/
  const { valueCar } = useFipeContextProvider();

  return (
    <StepTwoStyled>
      <br />
      <ItemsTwoStyled>
        <Typography component="h1" variant="h5" fontWeight={700}>
          Tabela Fipe: {valueCar?.Marca} {valueCar?.Modelo}{" "}
          {valueCar?.AnoModelo}
        </Typography>
        <br />
        <Chip color="success" className="text" label={valueCar?.Valor} />
        <br />
        <Typography component="p">Este é o preço de compra</Typography>
      </ItemsTwoStyled>
    </StepTwoStyled>
  );
}

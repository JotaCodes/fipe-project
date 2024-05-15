import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  getCarsByModel,
  getModels,
  getValueCarByYear,
  getYearCarByModel,
} from "@/api/api";
import { useFipeContextProvider } from "@/Context";

export default function StepOne() {
  const [listCar, setListCar] = React.useState([]);
  const [listModels, setListModels] = React.useState([]);
  const [listYears, setListYears] = React.useState([]);
  const { car, setCar, model, setModel, year, setYear, setValueCar, setStep } =
    useFipeContextProvider();

  /* Func para chamar a nossa req que vem da folder api, onde temos nosso data-fetching separado por requisicao */
  const changeCar = (car: any) => {
    setCar(car);
    async function getData() {
      const data = await getCarsByModel(car.codigo);
      setListModels(data.modelos);
    }
    getData();
  };

  const nextStep = () => {
    async function getData() {
      const data = await getValueCarByYear(car.codigo, model.codigo, year.codigo);
      setValueCar(data);
    }
    getData();
    setStep(1);  // Aqui eu atualizo nosso step, para apresentar a pagina seguinte.
  };

  const changeYears = (modelCar: any) => {
    setModel(modelCar);
    async function getData() {
      const data = await getYearCarByModel(car.codigo, modelCar.codigo);
      setListYears(data);
    }
    getData();
  };

  React.useEffect(() => {
    async function getData() {
      const data = await getModels();
      setListCar(data);
    }
    getData();
  }, []);

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Tabela Fipe
        </Typography>
        <Typography component="h4">
          Consulte o valor de um veiculo de forma gratuita
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <InputLabel id="marca">Marca</InputLabel>
          <Select
            labelId="marca"
            label="Marca"
            className="select"
            fullWidth
            onChange={(e) => changeCar(e.target.value)}
          >
            {listCar.map((item: any) => (
              <MenuItem value={item}>{item.nome}</MenuItem>
            ))}
          </Select>
          <InputLabel id="modelo">Modelo</InputLabel>
          <Select
            labelId="modelo"
            label="Modelo"
            className="select"
            fullWidth
            onChange={(e) => changeYears(e.target.value)}
          >
            {listModels.map((item: any) => (
              <MenuItem value={item}>{item.nome}</MenuItem>
            ))}
          </Select>
          {model != null && (
            <React.Fragment>
              <InputLabel id="ano">Ano</InputLabel>
              <Select
                labelId="ano"
                label="Ano"
                fullWidth
                className="select"
                onChange={(e) => setYear(e.target.value)}
              >
                {listYears.map((item: any) => (
                  <MenuItem value={item}>{item.nome}</MenuItem>
                ))}
              </Select>
            </React.Fragment>
          )}
          <Button
            className="buttonStyled"
            type="submit"
            onClick={() => nextStep()}
            disabled={year == null ? true : false}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Consultar Preço
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

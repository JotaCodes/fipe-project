export async function getModels() {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getCarsByModel(idModel: number) {
  const res = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idModel}/modelos`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getYearCarByModel(idModel: number, idCar: number) {
  const res = await fetch(
    ` https://parallelum.com.br/fipe/api/v1/carros/marcas/${idModel}/modelos/${idCar}/anos`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getValueCarByYear(
  idModel: number,
  idCar: number,
  year: string
) {
  const res = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idModel}/modelos/${idCar}/anos/${year}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

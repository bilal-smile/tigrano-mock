type Vehicle = {
  brand: string;
  model: string;
  id: number;
  price: number;
  state: string;
  delivery_time: string;
  delivery_infos: string;
  seats: number;
  beds: number;
  stock: number;
  configurations: Array<Configuration>;
};

type Configuration = {
  name: string;
  id: number;
};

export { Vehicle, Configuration };

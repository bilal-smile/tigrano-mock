import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiclesService {
  private readonly vehicles = [
    {
      brand: 'Volvo',
      id: 1,
      description: 'Volvo 2021 Road Line',
      model: '451 P',
      price: 55000,
      state: 'available',
      delivery_time: '18/12/2023',
      delivery_infos: '',
      seats: 4,
      beds: 2,
      stock: 2,
      configurations: [
        {
          name: 'conf2',
          id: 1,
        },
      ],
    },
    {
      brand: 'Mercedes',
      id: 2,
      description: 'Mercedes 2021 Road Line',
      model: 'X55',
      price: 89000,
      state: 'available_factory',
      delivery_time: '18/12/2023',
      delivery_infos: '',
      seats: 4,
      beds: 2,
      stock: 3,
      configurations: [
        {
          name: 'conf2',
          id: 1,
        },
      ],
    },
    {
      brand: 'Renault',
      id: 3,
      description: 'Renault 2021 Road Line',
      model: 'X55',
      price: 89000,
      state: 'to_configure',
      delivery_time: '18/12/2023',
      delivery_infos: '',
      seats: 4,
      beds: 2,
      stock: 4,
      configurations: [
        {
          name: 'conf1',
          id: 1,
        },
        {
          name: 'conf2',
          id: 2,
        },
      ],
    },
  ];

  findAll() {
    return this.vehicles;
  }
}

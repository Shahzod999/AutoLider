export const car = {
  name: 'Chevrolet malibu',
  price: 500000000,
  MinimumPay: "500000",
  information: {
    Volume: 2.0,
    Box: 'Automatic',
    DriveUnit: 'Full',
    Fuel: 'Diesel',
    Body: 'Sedan',
    Year: 'Year',
  },
  scroll: {
    AnInitialFee: 5000000,
    Term: 12,
  },
  standartEquipment: {
    engine: {
      WorkingVolume: 995,
      MaximumTorque: '33 / 175 - 1750',
      MaximumPower: '150/400',
      NumberOfCylinders: '2/2',
    },
    RunningQuality: {
      MaximumSpeed: 210,
      AccelerationTime: 0.2,
    },
    FuelConsumption: {
      CombinedCycle: 20,
      ExtraUrbanCycle: 1.2,
      UrbanCycle: '15 / 400 - 400',
      CO2Emissions: '1 / 2',
    },
    weight: {
      UnladenWeight: 1000,
      PermissibleTotalWeight: 1000,
    },
  },
  SPECIFICATIONS: {
    engine: {
      WorkingVolume: 195,
      MaximumTorque: '30 / 170 - 170',
      MaximumPower: '10/400',
      NumberOfCylinders: '1/2',
    },
    RunningQuality: {
      MaximumSpeed: 20,
      AccelerationTime: 1.2,
    },
    FuelConsumption: {
      CombinedCycle: 20,
      ExtraUrbanCycle: 1.2,
      UrbanCycle: '15 / 400 - 400',
      CO2Emissions: '4 / 1',
    },
    weight: {
      UnladenWeight: 150,
      PermissibleTotalWeight: 180,
    },
  }
}

export const category = {
  Brand: ["All", "Chery", "Geely", "Chevrolet", "BMW", "Hyundai", "Volkswagen", "Toyota", "Mercedes-Benz"],
  Model: {
    Chery: ["Tiggo 7 pro", "Tiggo 7 pro", "Tiggo 7 pro", "Tiggo 4 pro"],
    "Mercedes-Benz": ["CLA", "A-class", "C-class", "C-class coupe", "CLS", "G-class", "AMG GT Roadster", "GLA", "GLS AMG", "Maybach", "S-class Cabrio", "X-class"],
  },
  Body: ["All", "Sedan", "Station wagon", "Hatchback", "Liftback", "Coupe", "SUV"],
  Engine: ["All", "Hybrid engine", "Gas engine", "Rotary engine"],
  Transmission: ["All", "Mechanical", "Automatic"],
  "Drive unit": ["All", "Front", "Rear", "Full"],
  "Type of fuel": ["All", "Petrol", "Diesel", "Biodiesel", "Propane"],
}
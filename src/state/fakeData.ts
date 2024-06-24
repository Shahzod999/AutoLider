import { Car, Category } from "./typesFakeData"
import img1 from '../../public/1.png'
import img2 from '../../public/2.png'
import img3 from '../../public/3.png'
import img4 from '../../public/4.png'

export const car: Car = {
  name: 'Chevrolet malbu',
  price: 500000000,
  MinimumPay: "500000",
  img: [img1.src, img2.src, img3.src, img4.src,
  ],
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
  specifications: {
    engine: {
      WorkingVolume: 95,
      MaximumTorque: '30 / 170 - 170',
      MaximumPower: '10/400',
      NumberOfCylinders: '1/2',
    },
    RunningQuality: {
      MaximumSpeed: 320,
      AccelerationTime: 1.4342,
    },
    FuelConsumption: {
      CombinedCycle: 7720,
      ExtraUrbanCycle: 18.2,
      UrbanCycle: '175 / 4070 - 4070',
      CO2Emissions: '4 / 1',
    },
    weight: {
      UnladenWeight: 1550,
      PermissibleTotalWeight: 1850,
    },
  }
}


export const category: Category = {
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
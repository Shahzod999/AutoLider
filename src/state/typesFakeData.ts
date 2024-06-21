export interface Car {
  name: string;
  price: number;
  MinimumPay: string;
  img: string[];
  information: {
    Volume: number;
    Box: string;
    DriveUnit: string;
    Fuel: string;
    Body: string;
    Year: string;
  };
  scroll: {
    AnInitialFee: number;
    Term: number;
  };
  standartEquipment: {
    engine: {
      WorkingVolume: number;
      MaximumTorque: string;
      MaximumPower: string;
      NumberOfCylinders: string;
    };
    RunningQuality: {
      MaximumSpeed: number;
      AccelerationTime: number;
    };
    FuelConsumption: {
      CombinedCycle: number;
      ExtraUrbanCycle: number;
      UrbanCycle: string;
      CO2Emissions: string;
    };
    weight: {
      UnladenWeight: number;
      PermissibleTotalWeight: number;
    };
  };
  specifications: {
    engine: {
      WorkingVolume: number;
      MaximumTorque: string;
      MaximumPower: string;
      NumberOfCylinders: string;
    };
    RunningQuality: {
      MaximumSpeed: number;
      AccelerationTime: number;
    };
    FuelConsumption: {
      CombinedCycle: number;
      ExtraUrbanCycle: number;
      UrbanCycle: string;
      CO2Emissions: string;
    };
    weight: {
      UnladenWeight: number;
      PermissibleTotalWeight: number;
    };
  };
}



export interface Category {
  Brand: string[];
  Model: { [key: string]: string[] };
  Body: string[];
  Engine: string[];
  Transmission: string[];
  "Drive unit": string[];
  "Type of fuel": string[];
}
export type Car = {
    id: string;
    make: string;
    name: string;
    engines: Engine[]; 
    offers: Offer[]; 
  };  

export type Engine = {
    id: string;
    name: string;
    displacement: string;
    hp: number;
    tq: number;
    cars: Car[]; 
  };
  
  export type Offer = {
    id: string;
    title: string;
    desc: string;
    user: User; 
    userId: string;
    car: Car; 
    carId: string;
    price: number;
    mileage: number;
    year: number;
    createdAt: Date;
  };
  
  export type User = {
    id: string;
    offers: Offer[]; 
  };
  
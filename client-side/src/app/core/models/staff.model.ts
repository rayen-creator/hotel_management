export enum Role {
    Housekeeping = 'Housekeeping',
    Concierge = 'Concierge',
    Maintenance = 'Security'
  }
  
  export interface Staff {
    idStaff?: number;
    firstName: string;
    lastName: string;
    role: Role;
    phone: number;
    hireDate: Date;
    email: string;
    
  }
  
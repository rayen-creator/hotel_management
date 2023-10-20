export enum Role {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT'
}

export class User {
  username: string;
  email: string;
  password: string;
  userType: Role;
}

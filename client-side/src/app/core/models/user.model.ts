export enum Role {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT'
}

export class User {
  id: string; // Unique identifier for the user
  username: string;
  email: string;
  password: string;
  userType: Role;
  createdAt: string; // Date when the user was created
  lastChangedAt: string; // Date when user data was last changed
}

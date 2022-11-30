export  interface UserInterface {
  id: number;
  uuid: string;
  username: string;
  phone: string | null;
  email: string | null;
  firstname: string;
  lastname: string | null;
  avatar: string | null;
  thumbnail: string | null;
}

export interface AuthUserInterface extends UserInterface {
  token: string;
}

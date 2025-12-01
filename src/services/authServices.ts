export interface UserLogin {
  email: string;
  password: string;
  access: string;
}

export interface UserRegister {
  id?: number;
  email: string;
  re_email: string;
  // password: string;
  first_name: string;
  last_name: string;
  username: string;
  pathner: number;
}

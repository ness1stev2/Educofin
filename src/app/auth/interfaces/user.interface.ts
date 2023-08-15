export interface User {
  _id:       string;
  email:     string;
  name:      string;
  apellidos: string;
  nSocio:    number;
  isActive:  boolean;
  roles:     string[];
}

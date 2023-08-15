import { User } from "./user.interface";

interface RegistrationResponse {
  success: boolean;
  user?: User;
  error?: any;
}

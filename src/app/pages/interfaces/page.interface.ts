// se creo una interface para la base de datos

export interface Usuario {
  id:         number;
  nombre:     string;
  apellidos:  string;
  nSocio:     number;
  email:      string;
  contraseña: string;
  telefono?:   string;
  domicilio?:  Domicilio[];
  foto?:       string;
}

export interface Domicilio {
  calle:        string;
  numero:       string;
  colonia:      string;
  municipio:    string;
  codigoPostal: string;
  estado:       string;
}

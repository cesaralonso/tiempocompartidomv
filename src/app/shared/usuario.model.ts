
export class Usuario {
  constructor(
        public id?: string,
        public user?: string,
        public email?: string,
        public telefono?: string,
        public celular?: string,
        public nombre?: string,
        public apellidos?: string,
        public pais?: string,
        public estado?: string,
        public ciudad?: string,
        public lenguajes?: string,
        public status?: string,
        public acceso?: string,
        public tipo?: string,
        public fecha?: string,
        public perfil?: boolean,
        public informacion?: string,
        public destinos?: string,
        public tipo_usuario?: string
  ) { }
}
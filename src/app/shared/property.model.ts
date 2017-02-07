import { Imagen } from '../shared/imagen.model';
import { Usuario } from '../shared/usuario.model';
import { Coordenadas } from '../shared/coordenadas.model';

export class Property {
  constructor(
		public idMem?: string,
		public enlace?: string,
		public enlace_des?: string,
		public club?: string,
		public informacion?: string,
		public dormitorios?: string,
		public cap_max?: string,
		public ciudad?: string,
		public pais?: string,
		public venta?: boolean,
		public renta?: boolean,
		public intercambio?: boolean,
		public precio_venta?: string,
		public precio_renta?: string,
		public moneda_venta?: string,
		public moneda_renta?: string,
		public destino_inter?: string,
		public imagen?: Imagen,
		public estado?: string,
		public afiliado?: string,
		public caracteristicas?: String[],
		public info_adicional_ingles?: string,
		public url?: string,
		public tipo_semana_bool?: true,
		public tipo_semana?: string,
		public tipo_unidad?: string,
		public tipo_unidad_ing?: string,
		public lock_off?: string,
		public sala?: string,
		public banos?: string,
		public tipo_cocina?: string,
		public cap_privacidad?: string,
		public res_num_sem?: string,
		public res_freq_sem?: string,
		public importe_compra?: string,
		public ocultar_importe?: string,
		public fecha_compra?: string,
		public ocultar_fecha?: string,
		public caducidad_compra?: string,
		public sin_caducidad?: string,
		public anos_restantes?: string,
		public importe_mantenimiento?: string,
		public entrada_renta?: string,
		public salida_renta?: string,
		public ubicacion?: string,
		public capacidad_inter?: string,
		public diferencia_inter?: string,
		public status?: string,
		public tel_contacto?: string,
		public fecha?: string,
		public fecha_actualizacion?: string,
		public especial?: string,
		public num_pais?: string,
		public num_estado?: string,
		public moneda_cuota?: string,
		public fija_datos?: string,
		public puntos_datos?: string,
		public noches_datos?: string,
		public flotante_datos?: string,
		public destacar?: string,
		public fecha_destacado?: string,
		public hasta_inter?: string,
		public precio_neg_renta?: string,
		public precio_neg_venta?: string,
		public usuario?: Usuario,
		public comentarios?: String[],
		public googlemaps?: Coordenadas
  ) { }
}
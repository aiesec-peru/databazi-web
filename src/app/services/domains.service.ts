import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

	constructor() { }

	getWorkExperienceDomainsGE(){
		return [
			{ id: '0', name: 'No tengo' },
			{ id: '1', name: 'Menos de 3 meses' },
			{ id: '2', name: 'Menos de 6 meses' },
			{ id: '3', name: 'Más de 6 meses' }
		];
	}

	getWorkExperienceDomainsGT(){
		return [
			{ id: '0', name: 'No tengo' },
			{ id: '1', name: 'Más de 6 meses' },
			{ id: '2', name: 'Más de 1 año' },
		];
	}

	getTravelDomains(){
		return [
			{ id: '0', name: 'Lo antes posible' },
			{ id: '1', name: 'Dentro de 3 meses' },
			{ id: '2', name: 'En el próximo semestre' },
			{ id: '3', name: 'Sólo quiero información' }
		];
	}


	getReferralTypes(){
		return [
			{ id : 1, value: 'Facebook' },
      { id : 2, value: 'Instagram' },
      { id : 7, value: 'Blog' },
			{ id : 3, value: 'Sugerido por Amigos o Familiares' },
			{ id : 4, value: 'Evento en mi Universidad' },
			{ id : 5, value: 'Publicidad Visual en mi Universidad' },
			{ id : 6, value: 'Otros' },
		];
	}

	getScholarityDomains(){
		return [
			{ id: '0', name: 'Primaria completa' },
			{ id: '1', name: 'Secundaria completa' },
			{ id: '2', name: 'Estudiante de pregrado' },
			{ id: '3', name: 'Universidad Completa' },
			{ id: '4', name: 'Instituto Técnico Completo' },
			{ id: '5', name: 'Estudiante de Postgrado' }
		];
	}

  getCities(department){
  	return [
			{ name : 'CHACHAPOYAS ', department: 'AMAZONAS' },
			{ name : 'BAGUA', department: 'AMAZONAS' },
			{ name : 'BONGARA', department: 'AMAZONAS' },
			{ name : 'CONDORCANQUI', department: 'AMAZONAS' },
			{ name : 'LUYA', department: 'AMAZONAS' },
			{ name : 'RODRIGUEZ DE MENDOZA', department: 'AMAZONAS' },
			{ name : 'UTCUBAMBA', department: 'AMAZONAS' },
			{ name : 'ANCASH', department: 'ANCASH' },
			{ name : 'HUARAZ', department: 'ANCASH' },
			{ name : 'AIJA', department: 'ANCASH' },
			{ name : 'ANTONIO RAYMONDI', department: 'ANCASH' },
			{ name : 'ASUNCION', department: 'ANCASH' },
			{ name : 'BOLOGNESI', department: 'ANCASH' },
			{ name : 'CARHUAZ', department: 'ANCASH' },
			{ name : 'CARLOS FERMIN FITZCARRALD', department: 'ANCASH' },
			{ name : 'CASMA', department: 'ANCASH' },
			{ name : 'CORONGO', department: 'ANCASH' },
			{ name : 'HUARI', department: 'ANCASH' },
			{ name : 'HUARMEY', department: 'ANCASH' },
			{ name : 'HUAYLAS', department: 'ANCASH' },
			{ name : 'MARISCAL LUZURIAGA', department: 'ANCASH' },
			{ name : 'OCROS', department: 'ANCASH' },
			{ name : 'PALLASCA', department: 'ANCASH' },
			{ name : 'POMABAMBA', department: 'ANCASH' },
			{ name : 'RECUAY', department: 'ANCASH' },
			{ name : 'SANTA', department: 'ANCASH' },
			{ name : 'SIHUAS', department: 'ANCASH' },
			{ name : 'YUNGAY', department: 'ANCASH' },
			{ name : 'ABANCAY', department: 'APURIMAC' },
			{ name : 'ANDAHUAYLAS', department: 'APURIMAC' },
			{ name : 'ANTABAMBA', department: 'APURIMAC' },
			{ name : 'AYMARAES', department: 'APURIMAC' },
			{ name : 'COTABAMBAS', department: 'APURIMAC' },
			{ name : 'CHINCHEROS', department: 'APURIMAC' },
			{ name : 'GRAU', department: 'APURIMAC' },
			{ name : 'AREQUIPA', department: 'AREQUIPA' },
			{ name : 'CAMANA', department: 'AREQUIPA' },
			{ name : 'CARAVELI', department: 'AREQUIPA' },
			{ name : 'CASTILLA', department: 'AREQUIPA' },
			{ name : 'CAYLLOMA', department: 'AREQUIPA' },
			{ name : 'CONDESUYOS', department: 'AREQUIPA' },
			{ name : 'ISLAY', department: 'AREQUIPA' },
			{ name : 'LA UNION', department: 'AREQUIPA' },
			{ name : 'HUAMANGA', department: 'AYACUCHO' },
			{ name : 'CANGALLO', department: 'AYACUCHO' },
			{ name : 'HUANCA SANCOS', department: 'AYACUCHO' },
			{ name : 'HUANTA', department: 'AYACUCHO' },
			{ name : 'LA MAR', department: 'AYACUCHO' },
			{ name : 'LUCANAS', department: 'AYACUCHO' },
			{ name : 'PARINACOCHAS', department: 'AYACUCHO' },
			{ name : 'PAUCAR DEL SARA SARA', department: 'AYACUCHO' },
			{ name : 'SUCRE', department: 'AYACUCHO' },
			{ name : 'VICTOR FAJARDO', department: 'AYACUCHO' },
			{ name : 'VILCAS HUAMAN', department: 'AYACUCHO' },
			{ name : 'CAJAMARCA', department: 'CAJAMARCA' },
			{ name : 'CAJABAMBA', department: 'CAJAMARCA' },
			{ name : 'CELENDIN', department: 'CAJAMARCA' },
			{ name : 'CHOTA ', department: 'CAJAMARCA' },
			{ name : 'CONTUMAZA', department: 'CAJAMARCA' },
			{ name : 'CUTERVO', department: 'CAJAMARCA' },
			{ name : 'HUALGAYOC', department: 'CAJAMARCA' },
			{ name : 'JAEN', department: 'CAJAMARCA' },
			{ name : 'SAN IGNACIO', department: 'CAJAMARCA' },
			{ name : 'SAN MARCOS', department: 'CAJAMARCA' },
			{ name : 'SAN PABLO', department: 'CAJAMARCA' },
			{ name : 'SANTA CRUZ', department: 'CAJAMARCA' },
			{ name : 'CUSCO', department: 'CUSCO' },
			{ name : 'ACOMAYO', department: 'CUSCO' },
			{ name : 'ANTA', department: 'CUSCO' },
			{ name : 'CALCA', department: 'CUSCO' },
			{ name : 'CANAS', department: 'CUSCO' },
			{ name : 'CANCHIS', department: 'CUSCO' },
			{ name : 'CHUMBIVILCAS', department: 'CUSCO' },
			{ name : 'ESPINAR', department: 'CUSCO' },
			{ name : 'LA CONVENCION', department: 'CUSCO' },
			{ name : 'PARURO', department: 'CUSCO' },
			{ name : 'PAUCARTAMBO', department: 'CUSCO' },
			{ name : 'QUISPICANCHI', department: 'CUSCO' },
			{ name : 'URUBAMBA', department: 'CUSCO' },
			{ name : 'HUANCAVELICA', department: 'HUANCAVELICA' },
			{ name : 'ACOBAMBA', department: 'HUANCAVELICA' },
			{ name : 'ANGARAES', department: 'HUANCAVELICA' },
			{ name : 'CASTROVIRREYNA', department: 'HUANCAVELICA' },
			{ name : 'CHURCAMPA', department: 'HUANCAVELICA' },
			{ name : 'HUAYTARA', department: 'HUANCAVELICA' },
			{ name : 'TAYACAJA', department: 'HUANCAVELICA' },
			{ name : 'HUANUCO', department: 'HUANUCO' },
			{ name : 'AMBO', department: 'HUANUCO' },
			{ name : 'DOS DE MAYO', department: 'HUANUCO' },
			{ name : 'HUACAYBAMBA', department: 'HUANUCO' },
			{ name : 'HUAMALIES', department: 'HUANUCO' },
			{ name : 'LEONCIO PRADO', department: 'HUANUCO' },
			{ name : 'MARAÑON', department: 'HUANUCO' },
			{ name : 'PACHITEA', department: 'HUANUCO' },
			{ name : 'PUERTO INCA', department: 'HUANUCO' },
			{ name : 'LAURICOCHA', department: 'HUANUCO' },
			{ name : 'YAROWILCA', department: 'HUANUCO' },
			{ name : 'ICA', department: 'ICA' },
			{ name : 'CHINCHA', department: 'ICA' },
			{ name : 'NAZCA', department: 'ICA' },
			{ name : 'PALPA', department: 'ICA' },
			{ name : 'PISCO', department: 'ICA' },
			{ name : 'HUANCAYO', department: 'JUNIN' },
			{ name : 'CONCEPCION', department: 'JUNIN' },
			{ name : 'CHANCHAMAYO', department: 'JUNIN' },
			{ name : 'JAUJA', department: 'JUNIN' },
			{ name : 'JUNIN', department: 'JUNIN' },
			{ name : 'SATIPO', department: 'JUNIN' },
			{ name : 'TARMA', department: 'JUNIN' },
			{ name : 'YAULI', department: 'JUNIN' },
			{ name : 'CHUPACA', department: 'JUNIN' },
			{ name : 'TRUJILLO', department: 'LA LIBERTAD' },
			{ name : 'ASCOPE', department: 'LA LIBERTAD' },
			{ name : 'BOLIVAR', department: 'LA LIBERTAD' },
			{ name : 'CHEPEN', department: 'LA LIBERTAD' },
			{ name : 'JULCAN', department: 'LA LIBERTAD' },
			{ name : 'OTUZCO', department: 'LA LIBERTAD' },
			{ name : 'PACASMAYO', department: 'LA LIBERTAD' },
			{ name : 'PATAZ', department: 'LA LIBERTAD' },
			{ name : 'SANCHEZ CARRION', department: 'LA LIBERTAD' },
			{ name : 'SANTIAGO DE CHUCO', department: 'LA LIBERTAD' },
			{ name : 'GRAN CHIMU', department: 'LA LIBERTAD' },
			{ name : 'VIRU', department: 'LA LIBERTAD' },
			{ name : 'CHICLAYO', department: 'LAMBAYEQUE' },
			{ name : 'FERREÑAFE', department: 'LAMBAYEQUE' },
			{ name : 'LAMBAYEQUE', department: 'LAMBAYEQUE' },
			{ name : 'LIMA', department: 'LIMA' },
			{ name : 'CALLAO', department: 'LIMA' },
			{ name : 'BARRANCA', department: 'LIMA' },
			{ name : 'CAJATAMBO', department: 'LIMA' },
			{ name : 'CANTA', department: 'LIMA' },
			{ name : 'CAÑET', department: 'LIMA' },
			{ name : 'HUARAL', department: 'LIMA' },
			{ name : 'HUAROCHIRI', department: 'LIMA' },
			{ name : 'HUAURA', department: 'LIMA' },
			{ name : 'OYON', department: 'LIMA' },
			{ name : 'YAUYOS', department: 'LIMA' },
      { name : 'IQUITOS', department: 'LORETO' },
			{ name : 'MAYNAS', department: 'LORETO' },
			{ name : 'ALTO AMAZONAS', department: 'LORETO' },
			{ name : 'LORETO', department: 'LORETO' },
			{ name : 'MARISCAL RAMON CASTILLA', department: 'LORETO' },
			{ name : 'REQUENA', department: 'LORETO' },
			{ name : 'UCAYALI', department: 'LORETO' },
			{ name : 'TAMBOPATA', department: 'MADRE DE DIOS' },
			{ name : 'MANU', department: 'MADRE DE DIOS' },
			{ name : 'TAHUAMANU', department: 'MADRE DE DIOS' },
			{ name : 'MARISCAL NIETO', department: 'MOQUEGUA' },
			{ name : 'GENERAL SANCHEZ CERRO', department: 'MOQUEGUA' },
			{ name : 'ILO', department: 'MOQUEGUA' },
			{ name : 'PASCO', department: 'PASCO' },
			{ name : 'DANIEL ALCIDES CARRION', department: 'PASCO' },
			{ name : 'OXAPAMPA', department: 'PASCO' },
			{ name : 'PIURA', department: 'PIURA' },
			{ name : 'AYABACA', department: 'PIURA' },
			{ name : 'HUANCABAMBA', department: 'PIURA' },
			{ name : 'MORROPON', department: 'PIURA' },
			{ name : 'PAITA', department: 'PIURA' },
			{ name : 'SULLANA', department: 'PIURA' },
			{ name : 'TALARA', department: 'PIURA' },
			{ name : 'SECHURA', department: 'PIURA' },
			{ name : 'PUNO', department: 'PUNO' },
			{ name : 'AZANGARO', department: 'PUNO' },
			{ name : 'CARABAYA', department: 'PUNO' },
			{ name : 'CHUCUITO', department: 'PUNO' },
			{ name : 'EL COLLAO', department: 'PUNO' },
			{ name : 'HUANCANE', department: 'PUNO' },
			{ name : 'LAMPA', department: 'PUNO' },
			{ name : 'MELGAR', department: 'PUNO' },
			{ name : 'MOHO', department: 'PUNO' },
			{ name : 'SAN ANTONIO DE PUTINA', department: 'PUNO' },
			{ name : 'SAN ROMAN', department: 'PUNO' },
			{ name : 'SANDIA', department: 'PUNO' },
			{ name : 'YUNGUYO', department: 'PUNO' },
			{ name : 'JULIACA', department: 'PUNO' },
			{ name : 'MOYOBAMBA', department: 'SAN MARTIN' },
			{ name : 'BELLAVISTA', department: 'SAN MARTIN' },
			{ name : 'EL DORADO', department: 'SAN MARTIN' },
			{ name : 'HUALLAGA', department: 'SAN MARTIN' },
			{ name : 'LAMAS', department: 'SAN MARTIN' },
			{ name : 'MARISCAL CACERES', department: 'SAN MARTIN' },
			{ name : 'PICOTA', department: 'SAN MARTIN' },
			{ name : 'RIOJA', department: 'SAN MARTIN' },
			{ name : 'SAN MARTIN', department: 'SAN MARTIN' },
			{ name : 'TOCACHE', department: 'SAN MARTIN' },
			{ name : 'TARAPOTO', department: 'SAN MARTIN' },
			{ name : 'TACNA', department: 'TACNA' },
			{ name : 'CANDARAVE', department: 'TACNA' },
			{ name : 'JORGE BASADRE', department: 'TACNA' },
			{ name : 'TARATA', department: 'TACNA' },
			{ name : 'TUMBES', department: 'TUMBES' },
			{ name : 'CONTRALMIRANTE VILLAR', department: 'TUMBES' },
			{ name : 'ZARUMILLA', department: 'TUMBES' },
			{ name : 'CORONEL PORTILLO', department: 'UCAYALI' },
			{ name : 'ATALAYA', department: 'UCAYALI' },
			{ name : 'PADRE ABAD', department: 'UCAYALI' },
			{ name : 'PURUS', department: 'UCAYALI' }
  	].filter(city => city.department == department.name);
  }

  getDepartments(){
  	return [
  		{ name : 'AMAZONAS' },
			{ name : 'ANCASH' },
			{ name : 'APURIMAC' },
			{ name : 'AREQUIPA' },
			{ name : 'AYACUCHO' },
			{ name : 'CAJAMARCA' },
			{ name : 'CUSCO' },
			{ name : 'HUANCAVELICA' },
			{ name : 'HUANUCO' },
			{ name : 'ICA' },
			{ name : 'JUNIN' },
			{ name : 'LA LIBERTAD' },
			{ name : 'LAMBAYEQUE' },
			{ name : 'LIMA' },
			{ name : 'LORETO' },
			{ name : 'MADRE DE DIOS' },
			{ name : 'MOQUEGUA' },
			{ name : 'PASCO' },
			{ name : 'PIURA' },
			{ name : 'PUNO' },
			{ name : 'SAN MARTIN' },
			{ name : 'TACNA' },
			{ name : 'TUMBES' },
			{ name : 'UCAYALI' }
	  ];
  }

  getReasonsOptionsGV(){
  	return [
  		{
  			value: 'Desarrollo personal y profesional',
  			id: 0
  		},
  		{
  			value: 'Viajar y conocer nuevas culturas',
  			id: 1
  		},
  		{
  			value: 'Impacto social',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };

  getReasonsOptionsGE(){
  	return [
  		{
  			value: 'Mejorar mis oportunidades de empleo',
  			id: 0
  		},
  		{
  			value: 'Viajar y conocer nuevas culturas',
  			id: 1
  		},
  		{
  			value: 'Internacionalizar mis conocimientos',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };

  getReasonsOptionsGT(){
  	return [
  		{
  			value: 'Tener mejores oportunidades de vida',
  			id: 0
  		},
  		{
  			value: 'Ampliar mis horizontes professionales',
  			id: 1
  		},
  		{
  			value: 'Viajar y hacer networking professional',
  			id: 2
  		},
  		{
  			value: 'Otra',
  			id: 3
  		}
  	];
  };
}

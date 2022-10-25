export default {
  global: {
    componenteFormativo:
      'Monitoreo de programas de sanidad y reproducción animal',
    descripcionCurso:
      'En este componente, el aprendiz se capacitará en lo relacionado con aspectos teórico-prácticos del monitoreo en procesos de las unidades productivas pecuarias, en especial aquellos relacionados con la sanidad, la reproducción y el cumplimiento de la normativa asociada a este importante sector. Fortalecerá sus conocimientos en elementos como la bioseguridad, manejo de residuos y la salud de los trabajadores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Bioseguridad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Control de plagas y vectores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Limpieza y desinfección',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Manual de bioseguridad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programa de reproducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Reproductores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Celo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Monta natural',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Inseminación artificial',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Interpretación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de riesgo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elementos de protección',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Prevención de accidentes, incidentes y enfermedades laborales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Condiciones inseguras',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Primeros auxilios',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Recolección y clasificación de residuos sólidos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manejo e inactivación de residuos sólidos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Transporte y disposición de residuos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Acciones preventivas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Acciones correctivas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Registros y documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Tipos',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Formatos',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Inventarios',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Listas de chequeo',
            hash: 't_7_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.5',
            titulo: 'Técnica de diligenciamiento',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Agudelo Gómez, D. (2016).',
      link:
        'http://repository.lasallista.edu.co/dspace/bitstream/10567/1920/1/Manual_registros_tecnicos_LaSalada.pdf',
    },
    {
      referencia: 'ARL Colmena. (2013). Guardián de seguridad.',
      link:
        'https://www.colmenaseguros.com/arl/gestion-conocimiento/material-educativo/Boletines/JUNIO-2013-GUARDIANES-DE-SEGURIDAD.pdf',
    },
    {
      referencia:
        'ARL Sura (2018). Accidentes e incidentes de trabajo, importancia de la investigación de ambos.',
      link:
        'https://www.arlsura.com/index.php/component/content/article/59-centro-de-documentacion-anterior/gestion-de-la-salud-ocupacional-/326--sp-27016',
    },
    {
      referencia: 'ARL Sura. (2021). Actos inseguros.',
      link:
        'https://www.positivacomunica.com/wp-content/uploads/2018/10/Condiciones-inseguras-mail.html',
    },
    {
      referencia: 'ARL Sura. (2021). Condiciones de trabajo inseguras.',
      link:
        'https://www.positivacomunica.com/wp-content/uploads/2018/10/Condiciones-inseguras-mail.html',
    },
    {
      referencia: 'Carder (2017). Normatividad de residuos peligrosos.',
      link:
        'https://www.unilibre.edu.co/pereira/images/gaga/residuos-peligrosos.pdf',
    },
    {
      referencia:
        'Dirección de prevención y Atención de Emergencias (2009). Guía para elaborar planes de emergencia y contingencias.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14249/Gu%c3%ada para elaborar planes de emergencia.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'FAO (2007). Buenas prácticas en la alimentación animal.',
      link:
        'https://www.ica.gov.co/getattachment/1dbd9a0e-d689-4ac0-98bc-a82953c99f62/Publicacion-31.aspx',
    },
    {
      referencia:
        'FAO (2010). La situación de los recursos zoogenéticos mundiales para la alimentación y la agricultura. ',
      link: 'https://www.fao.org/3/a1250s/a1250s.pdf',
    },
    {
      referencia:
        'FAO (2010). La situación de los recursos zoogenéticos mundiales para la alimentación y la agricultura. ',
      link: 'https://www.fao.org/3/a1250s/a1250s.pdf',
    },
    {
      referencia:
        'FAO (2021). Buenas Prácticas Agropecuarias (BPA) en la producción de ganado de doble propósito bajo confinamiento con caña panelera como parte de la dieta.',
      link: 'https://www.fao.org/3/a1564s/a1564s03.pdf',
    },
    {
      referencia:
        'Fenavi (2021). Por medio de la cual se establecen medidas sanitarias diferenciadas para el control y erradicación de la enfermedad de Newcastle notificable en Colombia.',
      link:
        'https://fenavi.org/documentos/resolucion-30292-de-2017/#:~:text=Por%20medio%20de%20la%20cual,de%20Newcastle%20notificable%20en%20Colombia',
    },
    {
      referencia:
        'ICA (2007). Condiciones sanitarias y de inocuidad en la producción primaria de ganado porcino.',
      link: 'https://www.porkcolombia.co/resolucion-ica-2640-de-2007/',
    },
    {
      referencia:
        'ICA (2007). Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino.',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      referencia:
        'Metodología para el análisis de riesgos según ISO 9001. (s.f.).',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2019/04/metodologia-para-el-analisis-de-riesgos-segun-iso-9001/',
    },
    {
      referencia: 'Ministerio de Salud de Colombia (2021).',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/RiesgosLaborales/Paginas/enfermedad-laboral.aspx',
    },
    {
      referencia:
        'Ministerio de trabajo (2016). Sistema de gestión de la seguridad y salud en el trabajo (SG-SST).',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
  ],
  glosario: [
    {
      termino: 'Anatomopatológicos',
      significado:
        'Residuos provenientes de amputaciones, extirpaciones y otros tipos de escenarios.',
    },
    {
      termino: 'Chimball',
      significado:
        'Dispositivo que se coloca en la cabeza del animal (macho calentador o hembra androgenizada) para que identifique las hembras que están en celo.',
    },
    {
      termino: 'Filtros sanitarios',
      significado:
        'Puntos de control de ingreso o dentro de la unidad productiva donde se toman medidas para erradicar el virus mediante el lavado de  pies y manos.',
    },
    {
      termino: 'Guardianes',
      significado:
        'Recipientes de plástico debidamente rotulados en los que se empacan residuos cortopunzantes.',
    },
    {
      termino: 'Patógenos',
      significado:
        'Organismos microscópicos con la capacidad de producir enfermedades.',
    },
    {
      termino: 'Pendulantes',
      significado:
        'Que tienen movimiento oscilatorio o bien movimiento de péndulo.',
    },
    {
      termino: 'Profiláctico',
      significado:
        'Es toda medida que se emplea antes de que el problema parezca.',
    },
  ],
  complementario: [
    {
      tema: 'Plan sanitario',
      referencia:
        'Resolución 2341 de 2007. [Instituto Colombiano Agropecuario ICA].   Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. 23 de agosto de 2007.',
      tipo: 'Resolución ICA',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      tema: 'Protocolos',
      referencia:
        'Resolución 2640 de 2007. [Instituto Colombiano Agropecuario ICA]. Por la cual se reglamenta las Condiciones sanitarias y de inocuidad en la producción primaria de ganado porcino destinado al sacrificio para consumo humano. 28 de septiembre de 2007.',
      tipo: 'Resolución ICA',
      link: 'https://www.porkcolombia.co/resolucion-ica-2640-de-2007/',
    },
    {
      tema: 'Control de plagas y vectores',
      referencia:
        'Federación Nacional de Avicultores, Ministerio de Agricultura y Desarrollo Rural. (2016). Control de plagas en granjas avícolas (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BImTIOu3rQo',
    },
    {
      tema: 'Control de plagas y vectores',
      referencia:
        'Asociación Colombiana de Porcicultores, Fondo Nacional de la Porcicultura. (2017). Control de plagas en granjas porcícolas [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cOguzwS1yyA',
    },
    {
      tema: 'Inseminación artificial',
      referencia:
        'TvAgro. (2018). Cómo realizar el proceso de inseminación artificial en bovinos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=13Y-oGONdBA',
    },
    {
      tema: 'Elementos de protección',
      referencia:
        'Elearning group. (2017). Equipo de protección personal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=B0SFi5WxWPs',
    },
    {
      tema: 'Prevención de accidentes, incidentes y enfermedades laborales',
      referencia: 'LTeam Formación Virtual. (2018). Ciclo PHVA [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jE5gx6NLP68',
    },
    {
      tema: 'Lista de chequeo',
      referencia:
        'Instituto Colombiano Agropecuario ICA. (2019). Lista de chequeo para predios productores de porcinos con destino al sacrificio.',
      tipo: 'PDF',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-519-lista-de-chequeo-predios-productores-d.aspx',
    },
    {
      tema: 'Comunicaicón',
      referencia:
        'González P. (2021). ¿Cuáles son los elementos de la comunicación?',
      tipo: 'Página Web',
      link:
        'https://www.unprofesor.com/lengua-espanola/cuales-son-los-elementos-de-la-comunicacion-2447.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja – Espinal Tolima.',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander – Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

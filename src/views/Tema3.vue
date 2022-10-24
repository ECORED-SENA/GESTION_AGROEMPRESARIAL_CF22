<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Normativa Seguridad y Salud en el Trabajo

    p.mb-4(data-aos="fade-right") Uno de los aspectos que es transversal a la producción pecuaria y que por lo tanto debe ocupar buena parte de la atención del equipo de trabajo de la granja es el de la <b>Seguridad y Salud en el Trabajo (SST)</b>, pues <b>todas las actividades que se desarrollan deben tener en cuenta la normatividad y las recomendaciones que existen</b> en este sentido. 

    .row.mb-4(data-aos="fade-up")
      .col-md-12.col-12
        .bloque-texto-g.color-verde2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El creciente interés de las empresas y las instituciones <b> <FONT COLOR="#A3314F"> del Estado por formalizar las explotaciones productivas ha llevado a que algunos protocolos relacionados con la protección de la salud y el bienestar de los trabajadores sean de obligatorio cumplimiento, </FONT> </b> con lo cual se contribuye a disminuir los accidentes, minimizar los riesgos y reducir las afectaciones al personal que labora en este tipo de industrias.
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1.	Interpretación

    p.mb-4(data-aos="fade-right") <b>La normativa relacionada con la SST en Colombia es bastante amplia y abarca una gran cantidad de leyes, decretos y resoluciones donde se destaca como principal referente el Código Sustantivo del Trabajo el cual se ha convertido en un documento que regula las relaciones entre empleados y empleadores. </b> La legislación relacionada con la SST en Colombia se puede agrupar de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade")
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.justify-content-center.align-items-center(titulo="Códigos")
          .col-lg-1.col-md-2.col-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/vec1.svg', alt='')
          .col-lg-9.col-md-8.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Código sustantivo del trabajo. 1951. Regulación de las relaciones laborales.

        .row.justify-content-center(titulo="Resoluciones")
          .col-lg-1.col-md-2.col-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/vec2.svg', alt='')
          .col-lg-9.col-md-8.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Resolución 2400 1979 por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.
              li 
                i.fas.fa-check
                | Resolución 2013 1986 por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.
              li 
                i.fas.fa-check
                | Resolución 1792 1990 por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.
              li 
                i.fas.fa-check
                | Resolución 1401 2007 por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.
              li 
                i.fas.fa-check
                | Resolución 2346 2007 por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.
              li 
                i.fas.fa-check
                | Resolución 2646 2008 por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.
              li 
                i.fas.fa-check
                | Resolución 0652 2012 por la cualquier se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas y se di tan otros disposiciones.
              li 
                i.fas.fa-check
                | Resolución 1409 2012 por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.
              li 
                i.fas.fa-check
                | Resolución 0312 2019 por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.

        .row.justify-content-center.align-items-center(titulo="Decretos")
          .col-lg-1.col-md-2.col-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/vec3.svg', alt='')
          .col-lg-9.col-md-8.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Decreto-Ley 1295 1994 por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
              li 
                i.fas.fa-check
                | Decreto 1072 2015 Decreto Único Reglamentario del Sector Trabajo.
        
        .row.justify-content-center.align-items-center(titulo="Leyes")
          .col-lg-1.col-md-2.col-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/vec4.svg', alt='')
          .col-lg-9.col-md-8.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Ley 1010 2006 por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.
    p.mb-4(data-aos="fade-right") <b>En lo relacionado con la legislación sobre SST es posible identificar elementos importantes como la resolución 1792 de 1990 que regula lo referente a la exposición al ruido, o la 2646 de 2008 que se enfoca en el riesgo psicosocial, el cual hasta ese entonces no se registraba dentro de los factores de riesgo. </b> Al analizar en detalle cada una de las normas existentes es posible establecer que estas se han presentado como respuesta a problemáticas expuestas por los trabajadores las cuales a través de ejercicios de participación ciudadana y legislación se han logrado reglamentar para el bienestar de empleadores y empleados. 
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2.	Tipos de riesgo

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        .tarjeta.fondo.p-5
          p.mb-0 Uno de los elementos primordiales de la Seguridad y Salud en el Trabajo es el de los riesgos, en este caso laborales, ya que todas las actividades humanas sin importar su carácter implican algún tipo de riesgo durante su ejecución. Así las cosas, un riesgo se define como la combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por éstos (Ministerio de trabajo, 2016). Teniendo en cuenta el riesgo como un factor que hace parte de la vida, la SST se encarga de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo. 
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='')

    p.mb-4(data-aos="fade-right") <b>La normatividad vigente en materia de SST identifica 5 clases de riesgo</b> los cuales definen el valor de la cotización que el trabajador debe pagar a la aseguradora de riesgos laborales (ARL). 
    p.mb-4(data-aos="fade-right") Estas 5 clases de riesgo son las siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12(data-aos="fade")
        .tabla-a.color-acento-botones 
          table
            caption Nota. FAO (2010).
            thead
              tr
                th.text-white.anch4 Clase de riesgo
                th.text-white.anch4 Tarifa
                th.text-white Actividades
            tbody
              tr
                td I
                td 0,522 %
                td Financieras, trabajos de oficina, administrativos, centros educativos, restaurantes. 
              tr
                td II
                td 1,044 %
                td Algunos procesos manufactureros como fabricación de tapetes, tejidos, confecciones.  
              tr
                td III
                td 2,436 %
                td Procesos manufactureros como la fabricación de agujas, alcoholes y artículos de cuero. 
              tr
                td IV
                td 4,350 %
                td Fabricación de aceites, cervezas, vidrios, procesos de galvanización y transportes. 
              tr
                td V
                td 6,960 %
                td Areneras, manejo de asbesto, bomberos, manejo de explosivos, construcción y explotación petrolera. 
    p.mb-4(data-aos="fade-right") Como en todo proceso con empresas aseguradoras, <b>los mayores niveles de riesgo implican mayor monto en el pago de las pólizas.</b> Es por esto que los trabajadores de las áreas del petróleo, los explosivos o la construcción deben cancelar pólizas que equivalen al 6,960 % de su ingreso base de cotización (IBC), mientras que un empleado de riesgo I (trabajos de oficina, administrativos) paga sobre el 0,522 % de su IBC. 
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3.	Elementos de protección

    p.mb-4(data-aos="fade-right") <b>Una parte esencial de la SST es la protección de la salud de los trabajadores frente a los posibles riesgos asociados con su labor,</b> por lo que la identificación de los riesgos y la gestión necesaria para su mitigación se constituye en su esencia. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/vec5.png', alt='')
      .col-md-9(data-aos="fade-left")
        .tarjeta.color-rosa1.p-4.mb-4
          p.mb-0 Dentro de la gestión de los riesgos se toman medidas de todo tipo, las cuales se enfocan en evitar que ocurran accidentes que puedan afectar a los trabajadores y demás personal presente en las instalaciones. <b>Estas medidas pueden significar la eliminación de un peligro, su sustitución, la implementación de controles de ingeniería, los controles administrativos o la utilización de los EPP (elementos de protección personal). </b>
        p.mb-0 <b>En esencia los EPP son equipos llevados o sujetados por el trabajador para encontrar protección frente a uno o varios riesgos, </b> así como cualquier complemento o accesorio destinado a tal fin. Los EPP no evitan el accidente o el contacto con elementos agresivos, pero ayudan a que la lesión sea menos grave. 
    p.mb-4 Los elementos de protección personal más utilizados en los procesos productivos agropecuarios son los siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12(data-aos="fade-right")
        h4.text-center Equipo de protección personal
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-md-6(data-aos="fade-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Casco con barbuquejo
                p.mb-0 Casco de seguridad dieléctrico tipo i y ii clase e, con ajuste de rachet, tafilete en nylon, 4 apoyos, incluye barbuquejo de 4 apoyos, no ventilado especial para trabajo en alturas. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Guantes de nitrilo
                p.mb-0 Guantes de material sintético para labores delicadas. Protección frente a agentes externos. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Tapabocas desechables termosellado
                p.mb-0 Buenas propiedades mecánicas y repelencia a los líquidos. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Tapabocas Kn95
                p.mb-0 Cómodo, plegable y ergonómico, 5 capas de filtración reforzada. Fibra de polipropileno termosellado. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Tapabocas industrial con doble filtro
                p.mb-0 Especial para aplicación de sustancias desinfectantes y plaguicidas. Ajustable con filtros removibles al terminar su vida útil.  
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/6.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Overol de seguridad ignífugo
                p.mb-0 Resistencia garantizada contra la llama. Protección contra el calor convectivo y radiante. Cinta reflectante para mayor seguridad. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Guantes tipo vaqueta
                p.mb-0 Guante corto reforzado en palma para anticorte. Especial para trabajos en soldadura e industria. Manipulación de herramientas, equipos y cuerdas. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Traje fitosanitario
                p.mb-0 Ideal para aplicación de productos desinfectantes y plaguicidas. Material: tejido microporoso. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Delantal industrial en PVC
                p.mb-0 Protección frente a la humedad. Liviano, fácil de llevar. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris
                  
          .col-md-6(data-aos="fade-left")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Gafas de seguridad
                p.mb-0 Elaboradas en policarbonato, con filtro UV. Protegen contra impactos moderados, ideales para la operación de maquinaria agrícola y la realización de labores manuales donde exista riesgo de partículas voladoras.
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Botas de seguridad punteras
                p.mb-0 Suela en poliuretano, cuello impermeable, puntera de seguridad, dieléctrica. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Protector auditivo
                p.mb-0 Diadema acolchada. Diseñado para aislar los oídos del usuario de las fuentes de ruido. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Careta para esmerilar
                p.mb-0 Visor en policarbonato con suspensión escualizable de ajuste. Banda anti – sudor.
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/14.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Careta para guadañar
                p.mb-0 especial para la protección del trabajador frente a partículas sólidas voladoras. Casquete en polietileno liviano. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/15.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Arnés de seguridad
                p.mb-0 Equipo de protección para prevenir la caída del personal que labora en alturas. Obligatorio para trabajos como poda de árboles, reparaciones locativas y mantenimiento de infraestructura. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/16.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Guantes de caucho - látex
                p.mb-0 Protección para la realización de diversas labores de aseo y desinfección de áreas. Manipulación de animales enfermos. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-4.col-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/17.svg', alt='Texto que describa la imagen')
              .col-lg-10.col-md-8.col-12
                h5.mb-4 Bota de caucho
                p.mb-0 Especial para proteger del agua y el lodo. Liviana, flexible. Caña alta. 
            .row.justify-content-center
              .col-md-12
                hr.lineagris

    p.mb-5(data-aos="fade-right") Cada uno de los elementos empleados en la actividad productiva, dentro de sus manuales de operación o fichas técnicas, definen el tipo de protección personal que se debe usar para hacer una manipulación segura. Es importante identificar las hojas de seguridad o etiquetas informativas sobre las formas de uso y el equipo de protección personal que se debe utilizar en determinadas faenas. 
    .titulo-principal1.color-acento-contenido(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h4.mb-0 Elementos de protección colectiva

    p.mb-4(data-aos="fade-right") <b> <FONT COLOR="#A3314F"> Así como existen elementos para la protección personal, es decir, para cada individuo, en la gestión de riesgos también es posible emplear elementos de protección colectiva, </FONT> </b> los cuales se encargan de proteger de forma simultánea a varios trabajadores frente a algún determinado riesgo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10(data-aos="fade")
        .tarjeta.color-amarillo.px-5
          .row 
            .col-lg-12
              p.text-center.my-4 Entre los elementos de protección colectiva más comúnmente empleados se encuentran los siguientes:
          .row.justify-content-center.align-items-end
            .col-lg-7
              figure.mb-4
                img.mb-0(src='@/assets/curso/tema3/vec6.svg', alt='Texto que describa la imagen')
            .col-lg-5
              ul.lista-ul--color.mx-2
                li 
                  i.fas.fa-check
                  | Escaleras y pasamanos.
                li 
                  i.fas.fa-check
                  | Barreras de protección contra el calor.
                li 
                  i.fas.fa-check
                  | Redes para caídas.
                li 
                  i.fas.fa-check
                  | Extintores de incendios.
                li 
                  i.fas.fa-check
                  | Vallas contra caída de objetos.
                li 
                  i.fas.fa-check
                  | Sistemas de aireación de áreas.
                li 
                  i.fas.fa-check
                  | Sistemas de insonorización.
                li 
                  i.fas.fa-check
                  | Delimitación de áreas - cercos perimetrales.
                li 
                  i.fas.fa-check
                  | Señalizaciones e indicativos.
    .row.justify-content-center.align-items-center.mb-4
      .col-md-10(data-aos="fade-up")
        .tarjeta.color-naranja.p-4
          p.mb-0 Parte de la gestión de riesgos consiste en la identificación de los riesgos colectivos y en el desarrollo de las acciones necesarias para minimizar estas situaciones en los ambientes de trabajo. Igualmente, estas actividades deben combinarse con la capacitación a los trabajadores y la inducción y reinducción permanente sobre las medidas de autocuidado. 
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.4. Prevención de accidentes, incidentes y enfermedades laborales

    p.mb-4(data-aos="fade-right") Para identificar los métodos de prevención de accidentes, incidentes y enfermedades laborales es primordial identificar cada uno de estos conceptos.

    .row.mb-4
      .col-md-12(data-aos="fade")
        TabsA.color-acento-contenido
          .tarjeta.clr-paleYellow.p-4(titulo="Accidente")
            h4 Accidente
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2.col-4
                figure
                  img.mb-2(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen')
              .col-lg-10.col-md-9.col-12
                p Suceso repentino no deseado que produce consecuencias negativas ya sea en las personas, las instalaciones, las máquinas o el proceso.

          .tarjeta.clr-paleYellow.p-4(titulo="Incidente")
            h4 Incidente
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2.col-4
                figure
                  img.mb-2(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
              .col-lg-10.col-md-9.col-12
                p Es un suceso repentino no deseado que ocurre por las mismas causas que se presentan los accidentes, sólo que por cuestiones del azar no desencadena lesiones en las personas, daños a la propiedad, al proceso o al ambiente.
            
          .tarjeta.clr-paleYellow.p-4(titulo="Enfermedad laboral")
            h4 Enfermedad laboral
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2.col-4
                figure
                  img.mb-2(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
              .col-lg-10.col-md-9.col-12
                p Es enfermedad laboral la contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar.
    p.mb-4(data-aos="fade-right") En vista de que tanto accidentes como incidentes son sucesos repentinos, no hay forma de predecir su ocurrencia, pero sí es posible tomar las precauciones necesarias para prevenirlos, esto quiere decir, identificar los riesgos y actuar en consecuencia para mitigarlos, teniendo en cuenta el ciclo de mejora continua o ciclo PHVA (Planear - Hacer - Verificar - Actuar).
    p.mb-4(data-aos="fade-left") A continuación, algunas recomendaciones para la prevención de accidentes, incidentes y enfermedades laborales.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-12
        h4.text-center Recomendaciones para la prevención de accidentes, incidentes y enfermedades laborales

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-6.col-md-10.mb-4
        .rosa.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/tema3/avatar1.svg' alt='AvatarTop')
          h5.text-center Prevención de accidentes
          p.text-center Realizar jornadas de capacitación e inducción al personal sobre temas de SST. Conocer los manuales de operación y fichas técnicas de equipos, herramientas e insumos. Utilizar los equipos de protección personal de manera correcta. Identificar los riesgos potenciales.  Contar con personal capacitado para el desarrollo de determinadas labores técnicas (electricidad, plomería, trabajo en altura). 

      .col-lg-6.col-md-10.mb-4
        .rosa.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/tema3/avatar2.svg' alt='AvatarTop')
          h5.text-center Prevención de incidentes
          p.text-center Identificar puntos críticos y posibles riesgos para la integridad de las personas. Apegarse a los protocolos establecidos para el desarrollo de actividades dentro de la empresa pecuaria. Generar una cultura de la seguridad y la responsabilidad. Realizar jornadas de inducción y reinducción al personal en temas de SST. 

      .col-lg-6.col-md-10.mb-4
        .rosa.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/tema3/avatar3.svg' alt='AvatarTop')
          h5.text-center Prevención de enfermedades laborales
          p.text-center Evitar malas posturas en el desarrollo de la actividad laboral. Evitar movimientos repetitivos. Realizar pausas activas. Utilizar equipos de protección personal. Acudir periódicamente a los chequeos médicos de rutina. Seguir protocolos de bioseguridad. Informar a sus superiores sobre condiciones inseguras en el puesto de trabajo o en áreas de la empresa pecuaria. 
    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.5.	Condiciones inseguras

    p.mb-4(data-aos="fade-right") En las actividades laborales, indistintamente del sector económico, existen lo que se conoce como <b> <FONT COLOR="#A3314F"> condiciones inseguras las cuales se definen como aquellas situaciones que se presentan en el lugar de trabajo y se caracterizan por la presencia de riesgos no controlados que pueden generar accidentes. </FONT> </b> Igualmente, además de las condiciones inseguras, existen los actos inseguros como los que se encuentran a continuación, los cuales son acciones u omisiones cometidas por las personas; estas posibilitan que se produzcan accidentes y se hacen por: impericia, imprudencia o negligencia. (ARL Positiva, 2018). 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal.py-5
          .row.align-items-center
            .col-lg-3.col-md-3
              figure.mb-4
                img(src='@/assets/curso/tema3/vec7.svg' alt='AvatarTop').img1
            .col-lg-9.col-md-9
              .row.align-items-center 
                .col-md-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Falta de equipos de protección.
                    li 
                      i.fas.fa-check
                      | Daños en equipos o herramientas.
                    li 
                      i.fas.fa-check
                      | Daños en instalaciones locativas.
                    li 
                      i.fas.fa-check
                      | Problemas eléctricos, exposición de cables o instalaciones.
                    li 
                      i.fas.fa-check
                      | Restricciones de espacio para los trabajadores.
                .col-md-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Falta de ventilación y aireación.
                    li 
                      i.fas.fa-check
                      | Atmósferas concentradas.
                    li 
                      i.fas.fa-check
                      | Falta de equipos de protección colectiva.
                    li 
                      i.fas.fa-check
                      | Desorden y suciedad en el entorno de trabajo. 

    p.mb-4(data-aos="fade-right") <b>Es deber del trabajador reportar estas condiciones inseguras al empleador a fin de que se tomen las medidas correspondientes. </b> Igualmente, se deben reportar los actos inseguros ya que la combinación de estos dos elementos puede resultar en situaciones extremadamente peligrosas para el trabajador, sus compañeros y la integridad de la unidad productiva. 

    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.6. Primeros auxilios

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12(data-aos="fade-right")
        .tarjeta.color-rosa1.p-4.mb-4
          p.mb-0 Dentro de las unidades productivas pecuarias es normal que se presenten accidentes, pues a pesar de hacer una muy buena gestión de riesgos <b> <FONT COLOR="#A3314F"> riesgos existen situaciones fortuitas que pueden afectar la salud de los trabajadores, por lo que es necesario contar con programas y políticas empresariales dedicadas a la atención de estas emergencias, </FONT> </b> como es la atención en primeros auxilios. 
      .col-lg-6.col-md-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png' alt='AvatarTop')
    p.mb-4(data-aos="fade-right") Para el personal de la empresa pecuaria, es fundamental el conocimiento sobre cómo actuar frente a determinadas situaciones, ya que las acciones que se tomen en esos primeros segundos tras la ocurrencia del accidente pueden significar la diferencia entre la vida y la muerte. En este orden de ideas, es absolutamente recomendable desarrollar un programa de capacitación en primeros auxilios que contenga como mínimo los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12(data-aos="fade")
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon1.svg' alt='Alimentación')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Botiquín
                p.mb-0 Elementos que se deben tener en el botiquín y modo de empleo. 

          
          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon2.svg' alt='Mejoramiento genético')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Signos vitales
                p.mb-0 Identificación de signos vitales: pulso, temperatura, frecuencia respiratoria, presión arterial.

          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon3.svg' alt='Equipamiento')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Reanimación cardiopulmonar RCP
                p.mb-0 Utilidad, cuándo emplearla, métodos de aplicación, manejo de desfibrilador automático.

          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon4.svg' alt='Sanidad animal')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Obstrucción de vías aéreas
                p.mb-4 Identificación de obstrucciones, aplicación de maniobra Heimlich.


          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon5.svg' alt='Instalaciones')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Infarto
                p.mb-0 Cómo identificarlo, qué hacer, cómo actuar frente a un infarto. 

          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon6.svg' alt='Equipamiento')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Hemorragias
                p.mb-0 Tipos de hemorragias, tratamiento, aplicación de torniquetes. 

          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon7.svg' alt='Sanidad animal')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Heridas, quemaduras y fracturas
                p.mb-4 Identificación. Manejo, inmovilización.

          .tarjeta-avatar
            img(src='@/assets/curso/tema3/icon8.svg' alt='Instalaciones')
            .tarjeta.color-tarjeta
              .text-black.p-4
                h5.text-center Intoxicaciones 
                p.mb-0 Identificación de sustancias tóxicas, manejo

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

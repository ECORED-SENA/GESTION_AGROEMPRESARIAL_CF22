<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Plan sanitario

    p(data-aos="fade-right") <b> <FONT COLOR="#A3314F"> Buena parte del éxito de la explotación pecuaria depende del manejo preventivo de los problemas sanitarios,</FONT> </b> pues es más eficiente y menos costoso hacer un manejo profiláctico de los problemas que tomar medidas curativas.

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10
        .row.justify-content-center.align-items-center.mb-4
          .col-md-6
            figure.mb-4
              img(src='@/assets/curso/tema1/img1.png', alt='')
          .col-md-6
            .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
              p.mb-0 Dado esto, es importante contar con los mecanismos necesarios para evitar el ingreso y la propagación de las enfermedades, la implementación de medidas de bioseguridad y el desarrollo de protocolos para mantener libres de contaminación las instalaciones, equipos, herramientas y demás elementos con que tienen contacto los animales. 

    p.mb-4(data-aos="fade-right") <b> El plan sanitario pecuario se constituye en el documento que contiene todas las medidas para la prevención, manejo o erradicación de los problemas sanitarios </b> que se puedan presentar en el sistema productivo y que puedan llegar a afectar la productividad y el bienestar de los animales. 
              
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1.	Bioseguridad

    p.mb-4 Indistintamente el tipo de explotación pecuaria y la especie animal, es importante mantener las medidas de bioseguridad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-6
        .tarjeta.color-rosa1.p-4.mb-4
          p.mb-0 Según el Instituto Colombiano Agropecuario <b>(ICA) consiste en el conjunto de medidas para evitar, evaluar, prevenir, mitigar, manejar y/o controlar los posibles riesgos sanitarios</b> y sus efectos directos o indirectos en la salud humana, el medio ambiente, la biodiversidad, la productividad y producción agropecuaria. 
        p.mb-4 Una granja biosegura es aquella en la que existe un <b>un plan para contrarrestar las amenazas ligadas a los problemas que puedan afectar la salud de los animales, del personal y del entorno natural en el que se desarrolla la actividad productiva</b> por lo que es un elemento clave dentro del plan sanitario preventivo. 
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='')
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2.	Protocolos

    p.mb-4(data-aos="fade-right") <b>Para la implementación de las medidas de bioseguridad del plan sanitario es importante desarrollar protocolos, </b> los cuales son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-12.col-12(data-aos="fade-right")
        .tarjeta.color-rosa1.p-4.mb-4
          p.mb-4 <b> Conjunto de instrucciones o procedimientos que indican la manera correcta de llevar a cabo determinadas tareas</b> , de forma que se evite la improvisación y la utilización de criterios personales. <b>Estos protocolos se deben seguir con rigurosidad e igualmente es recomendable revisarlos y actualizarlos con frecuencia,</b> ya que están sujetos a procesos de mejora continua. 
          p.mb-0 <b>En la explotación pecuaria es necesario tener protocolos para todas las tareas de tipo operativo,</b> bien sean de limpieza y desinfección, control de plagas y vectores, alimentación, ingreso de animales, ordeño o de cualquier otro tipo, siempre y cuando contengan, por lo menos, los siguientes elementos que se invita a conocer a continuación.
      .col-lg-7.col-md-9.col-10(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/vec1.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-8(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema1/img3.png', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Encabezado") 
            .col-md-12
              p Se especifica la empresa, el año, la vigencia del protocolo, quién lo elaboró y quién lo aprobó.

          .row.align-items-center(numero="2" titulo="Objeto")
            .col-md-12
              p Se debe especificar el objetivo principal del protocolo. Qué se espera con su implementación. 

          .row.align-items-center(numero="3" titulo="Alcance")
            .col-md-12
              p Generalmente se establece el área en la cual se aplicará el protocolo, es decir, si se implementará en una instalación, en toda la granja o en un sector particular. 

          .row.align-items-center(numero="4" titulo="Definiciones") 
            .col-md-12
              p Debe contener un glosario con los términos que requieran una explicación un poco más amplia. 

          .row.align-items-center(numero="5" titulo="Condiciones generales")
            .col-md-12
              p Son las disposiciones que se deben seguir para garantizar el cumplimiento del objeto del protocolo. Además, es necesario incluir en cada protocolo qué elementos se deben utilizar, cómo se usan y qué medidas de protección personal se requieren para desarrollar las tareas con seguridad. 

          .row.align-items-center(numero="6" titulo="Contenido") 
            .col-md-12
              p Se desglosan paso a paso los procedimientos necesarios para cumplir el protocolo. Esto se hace de manera secuencial y detallada. 

          .row.align-items-center(numero="7" titulo="Control de cambios ")
            .col-md-12
              p Se indican los cambios que ha tenido el documento desde su creación hasta la fecha: responsables, fechas de ajustes y qué versión del protocolo se está manejando. 
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3.	Control de plagas y vectores

    p.mb-4(data-aos="fade-up") En las unidades productivas pecuarias es común la presencia de plagas y vectores, los cuales pueden causar daño a los animales, instalaciones e insumos. <b>Las plagas básicamente consisten en poblaciones de animales, a menudo insectos o roedores, que pueden deteriorar la calidad de las instalaciones (termitas) o alimentarse de los insumos que son para uso de los animales (ratones, cucarachas, aves).</b> Por su parte, los vectores <b>vectores son animales que transportan, alojados dentro de sus órganos o estructuras, enfermedades o agentes contaminantes como ocurre con las moscas, zancudos y tábanos entre otros.</b> Cualquiera que sea la situación, desde el punto de vista sanitario es necesario implementar medidas que permitan reducir las poblaciones de estos organismos a través de distintas alternativas de control, tales como:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10.col-md-12.col-12
        .row.justify-content-center
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/avatar1.svg' alt='AvatarTop')
              .tarjeta.color-rosa
                .p-5
                  h4.text-center Control químico
                  p.text-center Uso de productos de síntesis química (insecticidas, raticidas) que actúan por ingestión o por contacto. Emplear siempre productos con registro sanitario ICA. 

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/avatar2.svg' alt='AvatarTop')
              .tarjeta.color-rosa
                .p-5
                  h4.text-center Control biológico
                  p.text-center Empleo de enemigos naturales para control de poblaciones de plagas (depredadores, parasitoides, repelentes naturales).

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/avatar3.svg' alt='AvatarTop')
              .tarjeta.color-rosa
                .p-5
                  h4.text-center Control etológico
                  p.text-center Se utilizan los comportamientos de las plagas en su contra. Atrayentes, trampas, cebos tóxicos.

    p.mb-4(data-aos="fade-right") En el manejo de plagas y enfermedades no existen fórmulas definitivas, sino que por el contrario se recurre al uso de medidas de todo tipo, las cuales se ajustan de acuerdo con las condiciones de cada unidad productiva. Esto es lo que se conoce como manejo integrado de plagas. 
    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4.	Limpieza y desinfección

    .tarjeta.color1.p-4.mb-4(data-aos="fade-right")
      p.mb-0 <b>Otro de los procesos que requiere especial atención</b> dentro del plan sanitario preventivo es el de <b>la limpieza y desinfección de las instalaciones y equipos.</b> Cuando no se tiene especial cuidado en estos procesos se generan condiciones propicias para la propagación de agentes patógenos que pueden afectar el bienestar de los animales y las personas.

    p.mb-4(data-aos="fade-right") Como se aprecia continuación, para una correcta limpieza y desinfección de equipos es necesario tener en cuenta lo siguiente:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10(data-aos="fade")
        .tarjeta.tarjeta-slyder.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-5.col-md-12.col-12.mb-4.mb-md-0
                h5.mb-5 Protocolo de limpieza y desinfección
                p Establecer un protocolo de limpieza y desinfección que sea acorde con las condiciones y características de cada área, que explique de manera detallada cómo realizar los procedimientos, qué productos emplear, qué concentraciones utilizar, la frecuencia con la que se deben realizar y los responsables. 

              .col-lg-7.col-md-8.col-10
                figure
                  img(src='@/assets/curso/tema1/1.png', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-lg-5.col-md-12.col-12.mb-4.mb-md-0
                h5.mb-5 Fichas técnicas de los equipos 
                p Revisar las fichas técnicas de los equipos para identificar cómo se debe hacer su limpieza y desinfección, con qué frecuencia y con qué productos desinfectantes.

              .col-lg-7.col-md-8.col-10
                figure
                  img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-lg-5.col-md-12.col-12.mb-4.mb-md-0
                h5.mb-5 Limpieza y Desinfección 
                p Siempre la limpieza va antes de la desinfección pues muchas de las sustancias desinfectantes no son efectivas en ambientes con alto contenido de materia orgánica. Es importante elegir productos de limpieza acordes con las condiciones de cada área, equipo o utensilio.

              .col-lg-7.col-md-8.col-10
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-lg-5.col-md-12.col-12.mb-4.mb-md-0
                h5.mb-5 Condiciones de almacenamiento 
                p Verificar las condiciones de almacenamiento de las sustancias para la limpieza y desinfección para prevenir accidentes o deterioro de los insumos. 

              .col-lg-7.col-md-8.col-10
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-lg-5.col-md-12.col-12.mb-4.mb-md-0
                h5.mb-5 Fichas y registros 
                p El diligenciamiento de fichas y registros de limpieza y desinfección es necesario para llevar un control detallado de las actividades realizadas y los responsables. 

              .col-md-7.col-md-8.col-10
                figure
                  img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.5.	Manual de bioseguridad

    p.mb-0(data-aos="fade-up-right") Todas las actividades relacionadas con la prevención, mitigación, manejo y/o control de enfermedades al interior de la unidad productiva pecuaria se deben especificar en un manual el cual generalmente se construye con base en la normatividad aplicable a cada sector productivo, bien sea avícola, porcícola o bovino.
    p.mb-4(data-aos="fade-up-right") Como se aprecia a continuación, en la construcción de un manual de bioseguridad es necesario incluir los siguientes aspectos.
    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/7FochOXxCDM" title="Monitoreo de programas de sanidad y reproducción animal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade-up-left") Un buen proceso de limpieza y desinfección parte de la correcta elección de los productos empleados para estas labores, pues no todas las áreas, instalaciones o equipos se pueden tratar con los mismos elementos. 
    p.mb-4(data-aos="fade-up-left") De acuerdo con la resolución del ICA 30292 de 2017 algunos de los productos que se emplean en la limpieza y desinfección en explotaciones avícolas para el manejo de problemas sanitarios son los siguientes:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-6
        h4 Principales grupos de productos desinfectantes en la industria avícola

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12(data-aos="fade")
        .tabla-a.color-acento-botones 
          table
            caption Nota.  Resolución 30292 ICA. (2017).
            thead
              tr
                th.text-white.anch4 Grupo desinfectante
                th.text-white.anch5 Código
                th.text-white Producto
                th.text-white Presentación
            tbody
              tr(style='background-color: #F6F6F6')
                td Jabones y detergentes
                td.text-center 1
                td Jabón y detergente comercial
                td Sólida o líquida
              tr
                <td rowspan="3">Agentes oxidantes</td>
                td.text-center 2a
                td Hipoclorito de sodio NaOCl
                td Líquida 
              tr(style='background-color: #F6F6F6')
                td.text-center 2b
                td Hipoclorito de calcio Ca(OCl)2
                td Sólida
              tr
                td.text-center 2c
                td Virkon® Bis (peroximonosulfato) bis (sulfato) de Pentapotasio
                td Polvo
              tr(style='background-color: #F6F6F6')
                <td rowspan="3">Álcalis</td>
                td.text-center 3a
                td Hidróxido de sodio (soda cáustica)
                td Pellets
              tr
                td.text-center 3b
                td Carbonato de sodio Na2CO3
                td Polvo
              tr(style='background-color: #F6F6F6')
                td 
                td Carbonato de sodio decahidratado Na2CO3.10H2O
                td Cristales
              tr
                <td rowspan="2">Ácidos</td>
                td.text-center 4a
                td Ácido clorhídrico 
                td Concentración ácida
              tr(style='background-color: #F6F6F6')
                td.text-center 4b
                td Ácido cítrico
                td Polvo
              tr
               <td style='background-color: #F6F6F6' rowspan="3">Aldehídos</td> 
                td.text-center 5a
                td Glutaraldehído
                td Concentración en la solución
              tr(style='background-color: #F6F6F6')
                td.text-center 5b
                td Formalina
                td 40 % Formaldehído
              tr
                td.text-center 5c
                td Gas formaldehído
                td Se requiere una generación específica

    p.mb-4(data-aos="fade-right") Respecto a los usos de estas sustancias, se tiene que estos se emplean en la desinfección de alojamientos, equipos, personas, equipos eléctricos, viviendas, maquinaria y vehículos, ropa e instalaciones. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-md-5
        h4 Usos recomendados para las sustancias desinfectantes

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12(data-aos="fade")
        .tabla-a.color-acento-botones 
          table
            caption Nota. Resolución 30292 ICA. (2017).
            thead
              tr.altoceldas
                <th style="color:#ffffff" class="anch" colspan="2">Producto desinfectante</th>
                th.anch3.text-white Alojamiento de animales 
                th.anch1.text-white Equipos
                th.anch2.text-white Seres humanos
                th.anch2.text-white Equipo eléctrico
                th.anch2.text-white Vivienda humana
                th.anch3.text-white Maquinaria y vehículos
                th.anch1.text-white Ropa
                th.anch3.text-white Instalaciones
            tbody
              tr(style='background-color: #F6F6F6')
                td 1 
                td Jabón y detergente comercial
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
              tr
                td 2a 
                td Hipoclorito de sodio NaOCl
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
              tr(style='background-color: #F6F6F6')
                td 2b 
                td Hipoclorito de calcio Ca(OCl)2
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
              tr
                td 2c 
                td Virkon® Bis (peroximonosulfato) bis (sulfato) de Pentapotasio
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
              tr(style='background-color: #F6F6F6')
                td 3a 
                td Hidróxido de sodio (soda cáustica)
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
              tr
                <td rowspan="2">3b</td>
                td  Carbonato de sodio Na2CO3
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                td 
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
              tr(style='background-color: #F6F6F6')
                td Carbonato de sodio decahidratado Na2CO3.10H2O
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td 
                td 
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
              tr
                td 4a
                td  Ácido clorhídrico 
                td 
                td 
                td
                td
                td
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
              tr(style='background-color: #F6F6F6')
                td 4b 
                td Ácido cítrico
                td 
                td 
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
              tr
                td 5a 
                td Glutaraldehído
                td 
                td 
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
              tr(style='background-color: #F6F6F6')
                td 5b 
                td Formalina
                td 
                td 
                td
                td
                td
                td
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
              tr
                td 5c 
                td 12Gas formaldehído
                td 
                td 
                td
                td
                  figure
                    img.fle(src='@/assets/curso/tema1/flecha.png', alt='Texto que describa la imagen')
                td
                td
                td
                td
    p.mb-4(data-aos="fade-right") En todos los protocolos de limpieza y desinfección es necesario contar con las fichas técnicas y las hojas de seguridad de cada uno de los productos, ya que estas dan orientaciones generales sobre los modos de uso, los equipos de protección que se deben emplear para su aplicación y las medidas en caso de accidentes o intoxicaciones. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {
    ///
  },
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

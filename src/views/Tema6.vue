<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1  Plan de contingencia

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5
        .tarjeta.fondo2.p-5
          p.mb-2 <b>Una contingencia se define como un fenómeno que puede ocurrir o no en determinadas circunstancias y que puede afectar en diferentes grados al proyecto productivo. </b> Debido a que las contingencias pueden ser de diferente índole y que representan una amenaza constante, es necesario permanecer enfocados en la prevención.
          p.mb-0 Para conseguir identificar las contingencias es necesario en primera instancia realizar un análisis de riesgos, el cual consiste en la caracterización de los problemas potenciales a los que está expuesto el sistema productivo y la estimación de la probabilidad de que esos fenómenos afectan su normal funcionamiento. Para el desarrollo de un análisis de riesgos es recomendable lo siguiente:
      .col-md-7
        figure
          img(src='@/assets/curso/tema6/img1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-4 
      .col-md-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/vec1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-blanca.p-3(x="26.1%" y="52%" numero="")
            .h5.mb-2 Identificar los riesgos:
            p se pueden emplear reuniones, lluvias de ideas, encuestas o consultorías especializadas para lograr esta primera fase.   

          .tarjeta.color-blanca.p-3(x="34.5%" y="28.5%" numero="")
            .h5.mb-2 Determinar qué tan crítico es el riesgo:
            p asignar un valor numérico basados en la severidad del daño, la probabilidad de que ocurra y la posibilidad de detección. 

          .tarjeta.color-blanca.p-3(x="52.3%" y="22.8%" numero="")
            .h5.mb-2 Clasificar los riesgos:
            p se decide qué riesgos se pueden aceptar y qué riesgos definitivamente no.

          .tarjeta.color-blanca.p-3(x="70%" y="51.5%" numero="")
            .h5.mb-2 Definir acciones:
            p se definen las actividades preventivas que se llevarán a cabo para evitar las situaciones ya identificadas.
    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        .tarjeta.color-rosa1.p-5
          p.mb-0 De acuerdo con la Cámara de Comercio de Bogotá, <b>un plan de contingencia, en el ámbito de los desastres naturales, permite prevenir y mitigar riesgos y atender los eventos con la suficiente eficacia, minimizando los daños a la comunidad y al ambiente.</b> En el entorno productivo el plan de contingencia igualmente permite prever las situaciones que puedan poner en riesgo el sistema y generar los procedimientos necesarios para evitar que sus efectos sean catastróficos. 
      .col-md-6
        figure
          img(src='@/assets/curso/tema6/img2.png', alt='Texto que describa la imagen')
    separador 

    #t_6_1.titulo-segundo.color-acento-contenido
      .h4 6.1. Tipos

    p.mb-4 Los planes de contingencia se pueden enfocar en varias alternativas para hacer frente a los problemas potenciales dependiendo de la clasificación de los riesgos, los cuales se pueden:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5
        figure
          img(src='@/assets/curso/tema6/vec2.svg', alt='Texto que describa la imagen')
      .col-md-7
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Eliminar") 
            .col-md-12
              p implica tomar medidas para evitar por completo la amenaza. Por ejemplo, ante el riesgo de inundación en una zona del predio se decide trasladar el alojamiento a un área elevada no inundable.  

          .row.align-items-center(numero="2" titulo="Mitigar su impacto")
            .col-md-12
              p implica desarrollar acciones para que en caso de que se presente la contingencia se puedan reducir los daños. Por ejemplo, en una zona inundable se pueden hacer construcciones elevadas para evitar daños a la infraestructura.  

          .row.align-items-center(numero="3" titulo="Tolerar")
            .col-md-12
              p consiste en aceptar cierto nivel de riesgo teniendo en cuenta que de llegarse a presentar la situación los daños no serán de consideración para el sistema productivo o para la seguridad de los animales y los trabajadores. Por ejemplo, una falla en el suministro de energía eléctrica en una explotación de especies menores. 

          .row.align-items-center(numero="4" titulo="Compartir") 
            .col-md-12
              p consiste en un proceso mediante el cual se comparten o se transfieren los daños que pueda ocasionar el suceso con otra organización o empresa. Las empresas de seguros son un claro ejemplo de este tipo de manejo de contingencias.  

    p.mb-4 Así las cosas, los planes de contingencia se pueden enfocar en eliminar, mitigar, tolerar o compartir el riesgo, a fin de disminuir las vulnerabilidades internas de la empresa pecuaria.   
    separador
   
    #t_6_2.titulo-segundo.color-acento-contenido
      .h4 6.2. Características

    p.mb-4 Con el desarrollo de <b> un adecuado análisis de riesgos es posible sentar las bases para la construcción de planes de contingencia sólidos y que realmente respondan a las situaciones que puedan llegar a presentarse en la unidad productiva. </b> Para que un plan de contingencias sea exitoso es necesario que cumpla con las siguientes características:

    .row 
      .col-md-7
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Análisis de riesgos") 
            .col-md-12
              p Se especifica la empresa, el año, la vigencia del protocolo, quién lo elaboró y quién lo aprobó. 

          .row.align-items-center(numero="2" titulo="Evaluar los riesgos")
            .col-md-12
              p Se debe especificar el objetivo principal del protocolo. Qué se espera con su implementación.  

          .row.align-items-center(numero="3" titulo="Identificar riesgos importantes:")
            .col-md-12
              p priorizar aquellos riesgos que tienen una alta gravedad y una alta probabilidad de ocurrencia. 

          .row.align-items-center(numero="4" titulo="Establecer planes de contingencia para los mayores riesgos") 
            .col-md-12
              p Debe contener un glosario con los términos que requieran una explicación un poco más amplia. 

          .row.align-items-center(numero="5" titulo="Validación")
            .col-md-12
              p Son las disposiciones que se deben seguir para garantizar el cumplimiento del objeto del protocolo. Además, es necesario incluir en cada protocolo qué elementos se deben utilizar, cómo se usan y qué medidas de protección personal se requieren para desarrollar las tareas con seguridad. 

          .row.align-items-center(numero="6" titulo="Verificación y análisis:") 
            .col-md-12
              p Se desglosan paso a paso los procedimientos necesarios para cumplir el protocolo. Esto se hace de manera secuencial y detallada. 
      .col-md-5
        figure
          img(src='@/assets/curso/tema6/img3.png', alt='Texto que describa la imagen')
    
</template>

<script>
export default {
  name: 'Tema6',
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

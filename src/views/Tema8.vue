<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Comunicación

    p.mb-4 Dentro de los procesos de monitoreo que se llevan a cabo en la unidad <b> <FONT COLOR="#A3314F"> productiva la comunicación juega un papel muy importante, ya que es allí donde culminan las actividades de evaluación, seguimiento, identificación de oportunidades de mejora y recolección de información. </FONT> </b> Si no se da un buen ejercicio de comunicación, las demás actividades desarrolladas carecerán de valor y se perderá la esencia del trabajo de monitoreo. 
    p.mb-4 <b>El proceso comunicativo cuenta con cinco (5) elementos fundamentales que son emisor, mensaje, receptor, canal y código.</b> Si alguno de estos elementos no está presente sencillamente no hay proceso comunicativo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        figure
          img(src='@/assets/curso/tema8/vec1.svg', alt='Texto que describa la imagen')
      .col-md-6
        p.mb-2 En el reporte de las novedades encontradas en el proceso de monitoreo pueden emplearse distintos canales para transmitir la información al receptor, bien sea de manera individual o simultánea. <b>Lo importante es que se transmita el mensaje que se quiere entregar y se deje la respectiva trazabilidad. Igualmente, al interior de la empresa agropecuaria existen canales formales para hacer circular la información y otros que son de tipo informal, por lo que es importante saber diferenciar en qué momento es propicio utilizar uno u otro canal.</b>
        figure
          img(src='@/assets/curso/tema8/img1.png', alt='Texto que describa la imagen')
    
    p.mb-4 Para el desarrollo de las actividades comunicativas en la unidad productiva es importante tener en cuenta las siguientes recomendaciones para procesos comunicativos.

    .row 
      .col-md-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
          .row.justify-content-center(titulo="Saber ¿A quién?")
            .col-md-11
              p Saber a quién se debe dirigir qué tipo de información. No todos deben saber de todo. 

          .row.justify-content-center(titulo="Dar un mensaje")
            .col-md-11
              p Dar un mensaje claro, sin ambigüedades y concreto.

          .row.justify-content-center(titulo="Dejar trazabilidad")
            .col-md-11
              p Dejar trazabilidad de las actividades en terreno para respaldar la información que se entregue en el proceso de monitoreo. 

          .row.justify-content-center(titulo="Usar los canales oficiales")
            .col-md-11
              p Es recomendable usar los canales oficiales de la empresa para trasmitir información relevante sobre las novedades y hallazgos.

          .row.justify-content-center(titulo="Utilizar los canales apropiados")
            .col-md-11
              p Utilizar los canales apropiados dependiendo de la situación. Hay informaciones que se deben entregar de forma personal, otras de manera escrita y otras por medios oficiales. 

          .row.justify-content-center(titulo="Ser prudente")
            .col-md-11
              p Ser prudente con el manejo de información sensible sobre situaciones que se presenten en la unidad productiva.

          .row.justify-content-center(titulo="Ser concreto")
            .col-md-11
              p Ser concreto frente a lo que se desea manifestar, hablar con claridad y expresar lo que se piensa asegurándose de que la contraparte está entendiendo el mensaje. 

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    ////
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

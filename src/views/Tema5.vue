<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Plan de mejoramiento

    p.mb-4(data-aos="fade-right") En la actualidad una de las principales herramientas que existe para la gestión al interior de las empresas en lo relacionado con la mejora continua es el <b>ciclo PHVA (planear, hacer, verificar, actuar)</b> el cual permite aprender de los errores y capitalizar las experiencias. 
    p.mb-4(data-aos="fade-right") Las cuatro fases que posee el ciclo PHVA son las siguientes:

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-5.col-md-10(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema5/img3.png', alt='Texto que describa la imagen')
      .col-lg-7.col-md-12(data-aos="fade-left")
        .tarjeta.color-amarillo2.p-4.mb-4
          p.mb-0 <b>Planear:</b> en esta fase se define la programación de las actividades, se estima la demanda de recursos y se establecen los pasos a seguir para la implementación del plan de mejora. Es importante contar con información suficientemente detallada para realizar un correcto proceso de planeación.
        .tarjeta.color-amarillo2.p-4.mb-4
          p.mb-0 <b>Hacer:</b> esta fase consiste en llevar a la práctica todo lo que se ha planeado, teniendo en cuenta la programación elaborada en el “planear”. En ella tiene lugar la materialización en la práctica de las ideas y propuestas. 
        .tarjeta.color-amarillo2.p-4.mb-4
          p.mb-0 <b>Verificar:</b> en esta fase se lleva a cabo la comprobación de los avances en el proceso de implementación del proyecto. Se utilizan indicadores para analizar las situaciones y tomar las medidas correspondientes basados en información veraz y confiable. Como producto de esta etapa se genera un plan de mejoramiento el cual debe ser implementado para corregir las fallas detectadas. 
        .tarjeta.color-amarillo2.p-4.mb-0
          p.mb-0 <b>Actuar: </b> en esta etapa del proceso se llevan a la práctica todas las recomendaciones contenidas en el plan de mejoramiento, de manera que se corrijan las situaciones encontradas y se logre avanzar hacia el logro de los objetivos de la empresa. En esta fase se abre nuevamente la posibilidad de encontrar fallas y de esta forma continuar con el ciclo de mejora continua.
    .row.mb-4(data-aos="fade-up")
      .col-md-12
        .tarjeta.color-naranja.p-4
          p.mb-0 De acuerdo con lo anterior, <b>el plan de mejoramiento es un resultado de la fase de verificación en el cual se establecen los componentes del sistema productivo que requieren especial atención y se fijan las metas para la implementación de acciones que permitan corregir las fallas.</b> En el caso de las explotaciones pecuarias, por ejemplo, en un plan de mejora es posible identificar factores que inciden en bajos rendimientos o baja productividad por unidad de área, por lo que es necesario implementar acciones que reviertan esas situaciones y que ataquen sus causas y no sus efectos. 
  
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.1 Acciones preventivas

    p.mb-4(data-aos="fade-right") Como resultado de un plan de mejoramiento se tienen una serie de recomendaciones las cuales se basan en las observaciones realizadas durante el proceso de auditoría interna o externa. <b>En el caso de las acciones preventivas, se busca evitar la ocurrencia de alguna situación que pueda poner en riesgo la integridad de las personas o lo animales, al interior de la unidad agropecuaria. </b>
    p.mb-4(data-aos="fade-right") Dentro de las acciones preventivas que se pueden dar después de un proceso de auditoría están los siguientes ejemplos, de acuerdo con el tipo de riesgo:

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-3.col-md-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema5/img4.png', alt='Texto que describa la imagen')
      .col-lg-9.col-md-12(data-aos="fade-left")
        .tabla-a.color-acento-botones 
          table
            caption Nota. FAO (2010).
            thead
              tr
                th.text-white.anch4 Situación de riesgo
                th.text-white Acción preventiva
            tbody
              tr
                td Caídas
                td Instalación de pasamanos, señalización, instalación de bandas antideslizantes, uso de calzado adecuado. 
              tr
                td Ataque de animales
                td Instalación de cercos perimetrales, capacitación en manejo de animales y métodos de inmovilización, adecuación de instalaciones de manejo animal.
              tr
                td Electrocución
                td Señalización, uso de equipo de protección personal, seguimiento e implementación de protocolos para manejo de componentes eléctricos. 
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.2 Acciones correctivas

    p.mb-4(data-aos="fade-right") Las acciones correctivas son aquellas que se toman para revertir una situación determinada o bien eliminar las causas potenciales y reales de un problema. Lo que se busca con su implementación es corregir algo que definitivamente no ha funcionado como se esperaba o ha tenido un resultado adverso para la empresa agropecuaria. 
    p.mb-4(data-aos="fade-right") Algunos ejemplos de medidas correctivas en un proceso productivo agropecuario son los siguientes:

    .row.align-items-center.mb-4
      .col-md-9(data-aos="fade-right")
        .tabla-a.color-acento-botones.mb-4
          table
            caption Nota. FAO (2010).
            thead
              tr
                th.text-white Situación identificada
                th.text-white Acción correctiva
            tbody
              tr
                td Contaminación del alimento para los animales almacenado en bodega. 
                td Uso de estibas, aseo general de la bodega, adecuación de puertas y ventanas en la bodega, jornada de manejo de vectores. 
              tr
                td Reducción del peso de los animales por uso de dieta no balanceada. 
                td Emplear una nueva dieta balanceada, suplementar alimentación, disponer de suficiente materia prima para elaboración de raciones. 
              tr
                td Falta de suministro de agua en galpón número 5 por daño en sistema de conducción. 
                td Cambio del sistema de conducción del galón número 5, revisión de sistema de conducción de los demás galpones, prueba de los sistemas de conducción de agua después de instalación.  
      .col-md-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img5.png', alt='Texto que describa la imagen')
    
</template>

<script>
export default {
  name: 'Tema5',
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

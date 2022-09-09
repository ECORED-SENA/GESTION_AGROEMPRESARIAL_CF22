<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Normativa Seguridad y Salud en el Trabajo
    
    #t_3_1.titulo-segundo.color-acento-contenido
      .h4 3.1.	Interpretación

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h4 3.2.	Tipos de riesgo

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h4 3.3.	Elementos de protección

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h4 3.4. Prevención de accidentes, incidentes y enfermedades laborales

    separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h4 3.5.	Condiciones inseguras

    separador

    #t_3_6.titulo-segundo.color-acento-contenido
      .h4 3.6. Primeros auxilios


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

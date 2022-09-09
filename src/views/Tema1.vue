<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Plan sanitario

  
    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h4 1.1.	Bioseguridad

    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h4 1.2.	Protocolos

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h4 1.3.	Control de plagas y vectores

    separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h4 1.4.	Limpieza y desinfección

    separador

    #t_1_5.titulo-segundo.color-acento-contenido
      .h4 1.5.	Manual de bioseguridad

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

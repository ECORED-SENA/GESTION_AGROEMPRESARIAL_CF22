<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Plan de mejoramiento

  
    separador


    #t_5_1.titulo-segundo.color-acento-contenido
      .h4 5.1. Acciones preventivas

    separador
   

    #t_5_2.titulo-segundo.color-acento-contenido
      .h4 5.2. Acciones correctivas

  

    
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

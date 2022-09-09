<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Normativa ambiental

    #t_4_1.titulo-segundo.color-acento-contenido
      .h4 4.1.	Recolección y clasificación de residuos sólidos

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h4 4.2.	Manejo e inactivación de residuos sólidos

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h4 4.3.	Transporte y disposición de residuos
    
   
</template>

<script>
export default {
  name: 'Tema4',
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

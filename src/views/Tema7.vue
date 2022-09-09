<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1  Registros y documentación

    separador 

    #t_7_1.titulo-segundo.color-acento-contenido
      .h4 7.1.	Tipos

    
    separador

    #t_7_2.titulo-segundo.color-acento-contenido
      .h4 7.2.	Formatos

    separador

    #t_7_3.titulo-segundo.color-acento-contenido
      .h4 7.3.	Inventarios

    separador

    #t_7_4.titulo-segundo.color-acento-contenido
      .h4 7.4.	Listas de chequeo

    separador

    #t_7_5.titulo-segundo.color-acento-contenido
      .h4 7.5.	Técnica de diligenciamiento

    
</template>

<script>
export default {
  name: 'Tema7',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Compensación laboral
    
    eparador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1.	Reproductores


    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2.	Celo

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h4 2.3.	Monta natural

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h4 2.4. Inseminación artificial

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ///
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
<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Normativa ambiental

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12(data-aos="fade-right")
        .tarjeta.fondo.p-5
          p.mb-0 <b> <FONT COLOR="#A3314F"> La aplicación de la normativa ambiental en los sistemas productivos pecuarios es transversal, ya que impacta todos los aspectos que tienen lugar en la explotación y se relaciona estrechamente con el manejo y disposición de los residuos que se producen como resultado de las actividades de manejo de los animales.  </FONT> </b> Es importante tener la capacidad de diferenciar los tipos de residuos que se generan para así mismo determinar el método de disposición más apropiado, pues cada tipo de residuo dependiendo de su peligrosidad y del impacto que tenga sobre el entorno tendrá un manejo distinto. 
      .col-lg-6.col-md-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.png', alt='')

    .row.justify-content-center.align-items-center.mb-4 
      .col-md-10(data-aos="fade-up")
        .tarjeta.colordescarga.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para aprender más revisa el siguiente recurso: <b>Normativa ambiental aplicable al manejo y disposición de residuos sólidos en explotaciones pecuarias</b>
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/normativaambientalaplicable.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.1.	Recolección y clasificación de residuos sólidos

    p.mb-4(data-aos="fade-right") <b> <FONT COLOR="#A3314F"> Los residuos sólidos producidos al interior de la unidad productiva se clasifican en cuatro grandes grupos principales: residuos reciclables, no reciclables, orgánicos y especiales. </FONT> </b> En este sentido, se tiene que el primer paso para la gestión integral de los residuos es su identificación, ya que existen algunos que tienen unas características altamente contaminantes por lo que requieren de un manejo distinto. Tipos de residuos sólidos que se producen en la unidad pecuaria.

    .row.justify-content-center.align-items-center.mb-4 
      .col-md-10(data-aos="fade-up")
        .tarjeta.rosa1.p-3
          .row.align-items-center.mb-0
            .col-lg-5.col-md-8
              .row.justify-content-end
                .col-md-9
                  figure
                    img(src='@/assets/curso/tema4/vec1.png', alt='')
            .col-lg-7.col-md-12.my-2
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p <b>Residuos reciclables: </b> son aquellos que mediante un proceso previo pueden volver a utilizarse para diferentes usos: cartón, papel, plástico, vidrio y metales. 
                li 
                  i.fas.fa-check
                  p <b>Residuos no reciclables: </b> son aquellos que no pueden ser utilizados nuevamente como las bombillas, el papel o el cartón contaminados con restos de comida.
                li 
                  i.fas.fa-check
                  p <b>Residuos orgánicos: </b> corresponden a todos los elementos que alguna vez estuvieron vivos. Allí se destacan plumas, huevos dañados, excretas, residuos vegetales.
                li 
                  i.fas.fa-check
                  p <b>Residuos especiales: </b> son residuos que requieren algún tipo de manejo especial como restos de medicamentos, agujas, empaques de plaguicidas.
    p.mb-4(data-aos="fade-right") Es importante que al interior de la unidad productiva se cuente con espacios suficientes para que el personal de la empresa disponga apropiadamente de los residuos sólidos y realice la selección en la fuente. 
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.2.	Manejo e inactivación de residuos sólidos

    p.mb-4(data-aos="fade-right") Para el manejo y disposición de los residuos sólidos existen diferentes alternativas, muchas de las cuales se pueden realizar dentro de la misma unidad productiva. Entre los tipos de manejo más frecuentes se encuentran los siguientes:

    .row.justify-content-center.align-items-center.mb-4 
      .col-md-10(data-aos="fade-up")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/vec1.svg', alt='Texto que describa la imagen')

          .tarjeta.rosa.p-4(x="6%" y="69.7%" numero="1")
            .h5.mb-2 Residuos no reciclables:
            p Estos tienen un cierto grado de peligrosidad, como en el caso de las bombillas, ya que algunos de sus componentes son altamente contaminantes o tóxicos. En este caso, es recomendable hacer una disposición parcial la cual consiste en separar estos elementos, almacenarlos en recipientes que eviten que las sustancias entren en contacto con el agua o el suelo y entregarlos a una empresa de aseo que cuente con la idoneidad necesaria para hacer la disposición final por cualquiera de los métodos disponibles.  

          .tarjeta.rosa.p-4(x="28.3%" y="12.5%" numero="2")
            .h5.mb-2 Residuos reciclables:
            p Para el manejo de estos elementos solamente basta con hacer la separación en la fuente, teniendo cuidado de evitar su contaminación con sustancias tóxicas o que puedan significar algún riesgo para el personal, como residuos de agroquímicos, fluidos corporales o restos de animales.

          .tarjeta.rosa.p-4(x="51.7%" y="69.5%" numero="3")
            .h5.mb-2 Residuos especiales:
            p Estos residuos por la complejidad de su manejo o por su peligrosidad requieren de condiciones especiales de almacenamiento a fin de evitar accidentes. En el caso de las agujas se recomienda la utilización de guardianes los cuales consisten en recipientes diseñados para proteger a quienes tengan contacto con residuos peligrosos cortopunzantes. Para los envases de agroquímicos, es necesario realizar el triple lavado, con el cual es posible eliminar la mayor parte de los agentes contaminantes, para posteriormente ser almacenados antes de su disposición final.

          .tarjeta.rosa.p-4(x="73.6%" y="13%" numero="4")
            .h5.mb-2 Residuos orgánicos: 
            p Estos elementos son los más comunes dentro de las explotaciones pecuarias y corresponden a elementos que alguna vez tuvieron vida, bien sea plantas o animales. Una de las formas más eficientes de dispones de estos residuos es el compostaje o la producción de lombricultivo, ya que estos métodos permiten la degradación de estas sustancias de una forma controlada para posteriormente incorporarlas en forma de abono orgánico. En las explotaciones pecuarias, merece especial atención el manejo y disposición de mortalidades y desechos anatomopatológicos. 
    .titulo-principal1.color-acento-contenido(data-aos="fade-right")
      .titulo-principal1__numero
        span 
      h4.mb-0 Desactivación de residuos
    .row.justify-content-center.align-items-center.mb-4 
      .col-md-12(data-aos="fade-right")
        .tarjeta.color-rosa1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-3.col-4
              figure.mb-3
                img(src='@/assets/curso/tema4/1.png', alt='Texto que describa la imagen')
            .col-lg-10.col-md-8
              p.mb-0 Esta se emplea en los residuos que puedan tener algún grado de peligrosidad por ser altamente infecciosos tanto para los animales como para las personas. <b> <FONT COLOR="#A3314F"> Los residuos sólidos producidos al interior de la unidad productiva se clasifican en cuatro grandes grupos principales: residuos reciclables, no reciclables, orgánicos y especiales. </FONT> </b> En estos casos la desactivación de los residuos se efectúa con métodos de baja eficiencia mediante la aspersión con alguna sustancia desinfectante como amonios cuaternarios, formaldehído, glutaraldehído, yodóforos, yodopovidona, peróxido de hidrógeno, hipoclorito de sodio y calcio, entre otros. Es importante que este tipo de residuos se almacenen en lugares especialmente acondicionados y los recipientes se rotulen conforme a lo exigido por la normatividad vigente. 
    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.3.	Transporte y disposición de residuos

    p.mb-4(data-aos="fade-right") En el manejo de los residuos sólidos al interior de la unidad productiva es necesario establecer las rutas que se deben seguir para evitar la contaminación cruzada y la diseminación de agentes infecciosos. <b>Los métodos de disposición de los residuos deben ser acordes con las capacidades del productor y de antemano conocer si se hará disposición final o parcial de los materiales de desecho.</b> En el caso de hacer disposición parcial, es importante conocer con qué empresa se realizará la disposición final y las condiciones en las que se entregarán los residuos. 
    
    .row.mb-4(data-aos="fade-up")
      .col-md-12
        figure
          img(src='@/assets/curso/tema4/img2.png', alt='Texto que describa la imagen')
    p.mb-4(data-aos="fade-right") Para la disposición de los residuos no peligrosos igualmente se deben definir rutas, protocolos y procedimientos de manera que se eviten problemas asociados a la mala disposición de estos elementos al interior de la unidad productiva.
   
</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
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

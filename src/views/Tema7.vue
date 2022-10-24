<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1  Registros y documentación

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7(data-aos="fade-right")
        .tarjeta.fondo3.p-3.mb-2
          p.mb-0 En las empresas pecuarias modernas <b> <FONT COLOR="#A3314F"> el manejo de los registros y la documentación se han convertido en pieza clave de todos los procesos de gestión administrativa. </FONT> </b> Igualmente, los avances tecnológicos en lo relacionado con el almacenamiento de información y la sistematización de los procesos han sido fundamentales para el desarrollo de unidades productivas más eficientes y con mayores facilidades para la toma de decisiones.
        .tarjeta.color-amarillo.p-3.mb-4
          p.mb-0 La función principal de los registros es entregar información vital al administrador sobre la producción de los animales, sus características, su crecimiento, el consumo de alimento y demás parámetros productivos, con lo cual es posible tomar decisiones respecto al manejo de la explotación. 
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/vec1.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="fade-up")
        .tarjeta.color-naranja.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-4.col-5
              figure.mb-4
                img(src='@/assets/curso/tema7/vec2.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-10
              p.mb-0 En cuanto a la documentación de la unidad productiva es importante señalar que esta hace referencia a los documentos necesarios para que la unidad productiva pueda funcionar cumpliendo con los requisitos normativos. Dentro de estos documentos están los documentos del predio, los planos de las instalaciones, los protocolos de las diferentes labores, fichas técnicas de maquinaria y equipos, certificaciones y permisos, documentos del personal, registros y archivo general de la empresa. 
    separador 

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 7.1.	Tipos

    p.mb-4(data-aos="fade-right") <b>Existe una gran diversidad de registros que se pueden manejar al interior de la unidad productiva, estos dependen del tipo de explotación, de la especie y de la raza con la que se esté trabajando.</b> Entre los principales tipos de registros que pueden manejarse dentro de la unidad pecuaria están los siguientes:

    .row.mb-4(data-aos="fade-up")
      .col-md-12
        TabsB.color-acento-contenido.fondo5
          .fondo4(titulo="Labores" :icono="require('@/assets/curso/tema7/icon1.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.mb-0.mb-md-0
                h4.mb-5.py-4 Labores
                .row.align-items-end
                  .col-lg-12
                    figure
                      img(src='@/assets/curso/tema7/tabs1.svg', alt='Texto que describa la imagen')
              .col-lg-4.col-md-5
                .row.justify-content-center
                  .col-lg-8
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-0 Fecha de labores.
                      li 
                        i.fas.fa-check
                        p.mb-0 Actividades realizadas.
                      li 
                        i.fas.fa-check
                        p.mb-0 Responsables.
                      li 
                        i.fas.fa-check
                        p.mb-0 Novedades.
                      li 
                        i.fas.fa-check
                        p.mb-0 Programación de labores.
                      li 
                        i.fas.fa-check
                        p.mb-0 Calendario productivo.

          .fondo4(titulo="Labores" :icono="require('@/assets/curso/tema7/icon1.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.mb-0.mb-md-0
                h4.mb-5.py-4 Parámetros productivos
                .row.justify-content-end.align-items-end
                  .col-lg-12
                    figure
                      img(src='@/assets/curso/tema7/tabs2.svg', alt='Texto que describa la imagen')
              .col-lg-4.col-md-5
                .row.justify-content-center
                  .col-lg-8
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-0 Registros de producción. 
                      li 
                        i.fas.fa-check
                        p.mb-0 Registros de pesaje de animales.
                      li 
                        i.fas.fa-check
                        p.mb-0 Registro de individuos.
                      li 
                        i.fas.fa-check
                        p.mb-0 Registros reproductivos.
                      li 
                        i.fas.fa-check
                        p.mb-0 Registros para ganadería de carne.

          .fondo4(titulo="Labores" :icono="require('@/assets/curso/tema7/icon1.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.mb-0.mb-md-0
                h4.mb-5.py-4 Infraestructura
                .row.align-items-end
                  .col-lg-12
                    figure
                      img(src='@/assets/curso/tema7/tabs3.svg', alt='Texto que describa la imagen')
              .col-lg-4.col-md-5
                .row.justify-content-center
                  .col-lg-8
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-0 Áreas disponibles.
                      li 
                        i.fas.fa-check
                        p.mb-0 Reparaciones locativas.
                      li 
                        i.fas.fa-check
                        p.mb-0 Disponibilidad de infraestructura.
                      li 
                        i.fas.fa-check
                        p.mb-0 Mantenimiento.
                      li 
                        i.fas.fa-check
                        p.mb-0 Planos  y diseños.
                      li 
                        i.fas.fa-check
                        p.mb-0 Planos de instalaciones sanitarias y eléctricas.
                  
          .fondo4(titulo="Labores" :icono="require('@/assets/curso/tema7/icon1.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.mb-0.mb-md-0
                h4.mb-5.py-4 Mantenimiento de maquinaria y equipos
                .row.align-items-end
                  .col-lg-12
                    figure
                      img(src='@/assets/curso/tema7/tabs4.svg', alt='Texto que describa la imagen')
              .col-lg-4.col-md-5
                .row.justify-content-center
                  .col-lg-8
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-0 Fichas técnicas de equipos.
                      li 
                        i.fas.fa-check
                        p.mb-0 Registro de mantenimientos.
                      li 
                        i.fas.fa-check
                        p.mb-0 Factura de compra de repuestos.
                      li 
                        i.fas.fa-check
                        p.mb-0 Responsables de mantenimiento.
                      li 
                        i.fas.fa-check
                        p.mb-0 Mantenimientos programados.

          .fondo4(titulo="Labores" :icono="require('@/assets/curso/tema7/icon1.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.mb-0.mb-md-0
                h4.mb-5.py-4 Inventarios
                .row.justify-content-end.align-items-end
                  .col-lg-12
                    figure
                      img(src='@/assets/curso/tema7/tabs5.svg', alt='Texto que describa la imagen')
              .col-lg-4.col-md-5
                .row.justify-content-center
                  .col-lg-8
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-0 Inventario de animales.
                      li 
                        i.fas.fa-check
                        p.mb-0 Inventario de equipos y herramientas.
                      li 
                        i.fas.fa-check
                        p.mb-0 Inventario de recursos.
    separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 7.2.	Formatos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        .tarjeta.rosa.p-4.mb-4
          .row
            .col-md-12
              h5.text-center Para la elaboración de los formatos de captura de información es importante antes de empezar revisar lo siguiente:
            .col-md-12
              .tarjeta.blanca.p-2.mb-4
                .row.align-items-center.justify-content-center.mb-0
                  .col-md-3.col-5
                    figure.mb-4
                      img(src='@/assets/curso/tema7/vec4.svg', alt='Texto que describa la imagen')
                  .col-md-3.col-5
                    figure.mb-4
                      img(src='@/assets/curso/tema7/vec5.svg', alt='Texto que describa la imagen')
                  .col-md-3.col-5
                    figure.mb-4
                      img(src='@/assets/curso/tema7/vec6.svg', alt='Texto que describa la imagen')
                  .col-md-3.col-5
                    figure.mb-4
                      img(src='@/assets/curso/tema7/vec7.svg', alt='Texto que describa la imagen')
            .col-md-12
              .tarjeta.blanca.p-2
                .row.align-items-center.mb-0
                  .col-md-12
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 <b> <FONT COLOR="#A3314F"> Qué se va a registrar: </FONT> </b>  tener claridad sobre los datos que se quieren registrar, qué parámetros se van a medir y cómo pueden ser de utilidad para la administración de la unidad productiva.  
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 <b> <FONT COLOR="#A3314F"> Cómo se hará la captura de la información: </FONT> </b>  establecer la forma como se registrarán los datos, bien sea mediante una encuesta, mediciones directas, muestreos o utilización de tecnologías de la información.
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 <b> <FONT COLOR="#A3314F"> Qué se va a registrar: </FONT> </b>  tener claridad sobre los datos que se quieren registrar, qué parámetros se van a medir y cómo pueden ser de utilidad para la administración de la unidad productiva.  
      .col-lg-6(data-aos="fade-left")
        .tarjeta.rosa.p-4
          .row
            .col-md-12
              h5.text-center Las principales condiciones que debe cumplir un formato de captura de información son las siguientes:
            .col-md-12
              .tarjeta.blanca.p-2
                .row.align-items-center.mb-0
                  .col-md-12
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 <b> <FONT COLOR="#A3314F"> Preguntas concretas </FONT> </b>  sin lugar a interpretaciones ni opiniones. Ejemplo: cantidad de animales, peso de las novillas, número de potreros, presencia de instalaciones. 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 El formulario debe tener una <b> <FONT COLOR="#A3314F"> secuencia lógica relacionada </FONT> </b>  con el sistema productivo y no cambiar de temas abruptamente. 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 <b> <FONT COLOR="#A3314F"> Aplicables </FONT> </b>  en cualquier zona independientemente de los contextos particulares. 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 Obtener <b> <FONT COLOR="#A3314F"> respuestas concretas </FONT> </b>  donde se mencionan principalmente cifras y datos, no opiniones ni percepciones. 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 Hacer <b> <FONT COLOR="#A3314F"> preguntas cerradas </FONT> </b>  que no den la opción de interpretaciones subjetivas. 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        p.mb-2 Se deben formular <b> <FONT COLOR="#A3314F"> preguntas de fácil comprensión </FONT> </b> tanto para quien diligencia el formato como para quien lo sistematiza.
    p.mb-4(data-aos="fade-right") Además de lo anterior es fundamental incluir dentro de los registros los siguientes datos: nombre de la finca, fecha de aprobación del formato, responsable de aprobación del formato, fecha de diligenciamiento, nombre y cargo de quien diligencia la información.
    separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 7.3.	Inventarios

    p.mb-4(data-aos="fade-right") Un inventario esencialmente <b>es una relación esquematizada y detallada de los recursos de los que se dispone al interior de la empresa pecuaria, de manera que se pueda conocer de antemano su cantidad, estado, disponibilidad y costo aproximado. </b>
    p.mb-4(data-aos="fade-right") Al interior de la unidad productiva pecuaria es posible encontrar las siguientes clases de inventarios:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade")
      .tarjeta.color-gris.p-3
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema7/avatar1.svg' alt='AvatarTop')
        h5.text-center Inventario de materias primas e insumos.

      .tarjeta.color-gris.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema7/avatar2.svg' alt='AvatarTop')
        h5.text-center.mb-4 Inventario de animales.

      .tarjeta.color-gris.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema7/avatar3.svg' alt='AvatarTop')
        h5.text-center.mb-4 Inventario de cobertura del suelo.

      .tarjeta.color-gris.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema7/avatar4.svg' alt='AvatarTop')
        h5.text-center.mb-4 Inventario de equipos y herramientas.

      .tarjeta.color-gris.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema7/avatar5.svg' alt='AvatarTop')
        h5.text-center.mb-4 Inventario de instalaciones.

    p.mb-4(data-aos="fade-right") Para construir un buen formato de inventario es necesario revisar los siguientes aspectos:
    .row.mb-4
      .col-md-12(data-aos="fade-up")
        .tarjeta.color-naranja2.p-4
          .row.justify-content-center.align-items-center
            .col-md-2.col-5
              figure.mb-4
                img(src='@/assets/curso/tema7/vec8.svg', alt='Texto que describa la imagen')
            .col-md-10
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-1 Incluir un número prudente de columnas en las que se pregunte el número del ítem, la descripción, la unidad, la cantidad, la referencia, el sitio donde se encuentra almacenado.
                li 
                  i.fas.fa-check
                  p.mb-1 Incluir una celda donde se indique la fecha del último inventario realizado. 
                li 
                  i.fas.fa-check
                  p.mb-1 Dejar una celda para observaciones. 
                li 
                  i.fas.fa-check
                  p.mb-1 De ser posible establecer dentro del formato una clasificación para los elementos del inventario (herramienta, equipo, maquinaria, insumo, etc.).
                li 
                  i.fas.fa-check
                  p.mb-1 Establecer códigos para los elementos que se encuentren en el inventario y marcarlos debidamente.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .row.mb-4
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema7/avatar6.svg' alt='AvatarTop')
              .tarjeta.color-avatarb
                .p-4
                  p.mb-0 <b>Inventario de materias primas e insumos:</b> se organiza la información relacionada con este tipo de productos dentro de la unidad productiva. Además de las cantidades y la descripción es importante señalar las fechas de vencimiento o caducidad de los productos. 

          .col-lg-12
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema7/avatar7.svg' alt='AvatarTop')
              .tarjeta.color-avatarb
                .p-4
                  p.mb-0 <b>Inventario de animales:</b> se debe señalar la edad de los animales, su sexo, raza, edad y peso. Igualmente, es importante tener datos adicionales sobre su procedencia y comportamiento productivo. 

          .col-lg-12
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema7/avatar8.svg' alt='AvatarTop')
              .tarjeta.color-avatarb
                .p-4
                  p.mb-0 <b>Inventario de coberturas del suelo:</b> identificar el número de potreros de la unidad productiva y establecer las especies vegetales que allí se encuentran. Se puede combinar con aforos para medir la disponibilidad de alimento para los animales en pastoreo. 

          .col-lg-12
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema7/avatar9.svg' alt='AvatarTop')
              .tarjeta.color-avatarb
                .p-4
                  p.mb-0 <b>Inventario de equipos y herramientas:</b> establecer qué tipo de herramientas se tienen en la unidad productiva, su estado y su disponibilidad. En el caso de los equipos también se debe registrar en el inventario si cuentan o no con accesorios y manuales de operación. 

          .col-lg-12
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema7/avatar10.svg' alt='AvatarTop')
              .tarjeta.color-avatarb
                .p-4
                  p.mb-0 <b>Instalaciones:</b> en este inventario es importante señalar qué tipo de instalaciones se tienen, su estado actual y las fechas en las que han recibido mantenimiento. Dentro de su estado actual es importante aprovechar para señalar qué tipo de reparaciones locativas o actividades de mantenimiento se requieren.
      .col-lg-4.col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img1.png', alt='Texto que describa la imagen')
    separador

    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 7.4.	Listas de chequeo

    p.mb-4(data-aos="fade-right") Una lista de chequeo es un mecanismo de control que funciona muy bien para verificar que se han cumplido cada uno de los pasos de un proceso o de una actividad en particular. <b>Estas listas de chequeo se emplean regularmente para evitar errores en la realización de tareas que son repetitivas y que requieren del desarrollo de acciones paso a paso de manera secuencial.</b> Igualmente, tienen una excelente aplicabilidad en procesos de monitoreo, seguimiento o auditoría ya que permiten verificar uno a uno los ítems a evaluar. 

    .row.mb-4
      .col-md-12.col-12(data-aos="fade-up")
        .bloque-texto-g.color-verde2.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Al igual que los demás formatos que <b> <FONT COLOR="#A3314F"> se emplean con frecuencia en la unidad productiva, estas listas llevan un encabezado en el que se recoge información como la fecha de diligenciamiento, la ubicación, el nombre del predio, los datos de la unidad productiva y el propósito de la verificación. </FONT> </b> Un ejemplo clásico de este tipo de documento es el que presenta el Instituto Colombiano Agropecuario denominado “Lista de chequeo para predios productores de porcinos con destino al sacrificio”. 
    
    p.mb-4(data-aos="fade-right") A diferencia de otro tipo de formatos, <b>las listas de chequeo solo permiten respuestas cortas como “sí”, “no” o “cumple”, “no cumple”</b> ya que se emplean principalmente para procesos de evaluación o verificación. 
    separador

    #t_7_5.titulo-segundo.color-acento-contenido
      .h2 7.5.	Técnica de diligenciamiento

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5(data-aos="fade-right")
        p.mb-4 <b>Aparentemente el diligenciamiento de una lista de chequeo</b> es una tarea sencilla ya que este es un formato que contiene preguntas concretas que dan cuenta de la realización de determinados procesos o actividades. Sin embargo, a pesar de su sencillez, su diligenciamiento conlleva una gran responsabilidad debido a que a menudo estas son empleadas para la verificación del cumplimiento de tareas que resultan esenciales para la unidad productiva.
        figure.mb-4
          img(src='@/assets/curso/tema7/img2.png', alt='Texto que describa la imagen')
      .col-md-7(data-aos="fade-left")
        .tarjeta.rosa3.p-4
          p.mb-4 <b>Para el correcto diligenciamiento de la lista de chequeo,</b> dada su aparente sencillez, se recomienda lo siguiente:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p.mb-1 Estar enfocado en el proceso de verificación para evitar la omisión de alguno de los pasos de la lista de comprobación. 
            li 
              i.fas.fa-check
              p.mb-1 Conocer de antemano el paso a paso de los procesos para identificar la secuencia lógica en la que se diligencia la lista. 
            li 
              i.fas.fa-check
              p.mb-1 Responder de manera clara, concreta y veraz si se cumple o no con determinado criterio. 
            li 
              i.fas.fa-check
              p.mb-1 Tener precaución de marcar adecuadamente cada uno de los ítems verificados.
            li 
              i.fas.fa-check
              p.mb-1 No saltarse alguno de los pasos o las preguntas de la lista de verificación. 
            li 
              i.fas.fa-check
              p.mb-1 Ante alguna duda en la comprobación de algún criterio solicitar una segunda opinión.
    p.mb-0(data-aos="fade-right") En procesos como el montaje o instalación de equipos las listas de comprobación se convierten en herramientas que salvan vidas y evitan altos costos por daños en los implementos. Algunos de los protocolos al interior de la unidad productiva se basan en listas de comprobación puesto que evitan recurrir a la memoria humana la cual, en ocasiones, no es confiable. 

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

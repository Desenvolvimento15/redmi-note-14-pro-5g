$(document).ready(function(){
  // Limpa os dots existentes antes de inicializar o slider

  // Inicializa o Slick Slider
  $('.slider-1').slick({
      slidesToShow: 1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: true, // Exibe os indicadores de navegação personalizados
      arrows: false, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      appendDots: $('btn-box'), // Usa o container personalizado para os dots
      customPaging: function(slider, i) {
          // Usa o texto dos spans como labels para os dots
          var labels = $(".btn-box span").map(function() {
              return $(this).text(); // Usa o texto dos spans
          }).get();
          return '<span class="xm-text split_text2559 f-medium">' + labels[i] + '</span>';
      },
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2 // Exibe 2 slides em telas maiores
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1 // Exibe 1 slide em telas menores
              }
          }
      ]
  });

  // Adiciona um evento de clique nos spans para navegar pelos slides
  $('.box-center span').on('click', function() {
      var index = $(this).index(); // Obtém o índice do span clicado
      $('.slider-2').slick('slickGoTo', index); // Navega para o slide correspondente
  });

});

$(document).ready(function(){
  // Inicializa o Slick Slider
  $('.slider-2').slick({
      slidesToShow: 3,  // Exibe 1 slide por vez
      slidesToScroll: 3, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: true, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      prevArrow: '<picture class="xm-picture slick-arrow slick-prev"><img alt="Redmi Note 14" style="display:block" class="xm-img lazy" data-id="8buo9n6t9r" src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-14/pc/img/ai-left.png" data-loaded="true"></picture>',
      nextArrow: '<picture class="xm-picture slick-arrow slick-next"><img alt="Redmi Note 14" style="display:block" class="xm-img lazy" data-id="nf4q73s465" src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-14/pc/img/ai-right.png" data-loaded="true"></picture>',
  });
});
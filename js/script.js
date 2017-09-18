$(document).ready(function() {
  $( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
    
    $('.ui-state-default:contains("20")').addClass('notification');
    $('.ui-state-default:contains("22")').addClass('notification');
    $('.ui-state-default:contains("28")').addClass('notification');
  
    $('.validity').datepicker({
      range: 'period'
      
    });
  });
  
  (function() {
    if (!String.prototype.trim) {
      (function() {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
          return this.replace(rtrim, '');
        };
      })();
    }
    
    [].slice.call( document.querySelectorAll( 'input.input_field' ) ).forEach( function( inputEl ) {
      if( inputEl.value.trim() !== '' ) {
        classie.add( inputEl.parentNode, 'input-filled' );
      }
      inputEl.addEventListener( 'focus', onInputFocus );
      inputEl.addEventListener( 'blur', onInputBlur );
    } );
    function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input-filled' );
    }
    function onInputBlur( ev ) {
      if( ev.target.value.trim() === '' ) {
        classie.remove( ev.target.parentNode, 'input-filled' );
      }
    }
  })();
  $('.select').selectize({
    create: true,
  });
  
  var heightR = $("main").outerHeight();
  $('aside').css({'height':heightR}); 
  
  $('.tooltip').tooltip();
  
  $('.hint_block').mouseover(function(){
    $(this).addClass('active');
  })
  $('.hint_block').mouseout(function(){
    $(this).removeClass('active');
  })
  

});


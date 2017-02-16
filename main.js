$(function() {
  //grid
  $('div').css('height', '100px');
  $('div').css('width', '100px');
  $('div').css('position', 'absolute');
  $('div').css('box-sizing', 'border-box');
  $('div').css('border-radius','30px');

  $('.square').css('border', 'solid purple 4px');
  $('#y3x3').css('border-top', 'solid purple 4px');
  $('#y3x3').css('border-right', 'solid purple 4px');
  $('#y1x1').css('border-bottom', 'solid purple 4px');
  $('#y1x1').css('border-left', 'solid purple 4px');
  $('#y3x1').css('border-left', 'solid purple 4px');
  $('#y3x1').css('border-top', 'solid purple 4px');
  $('#y1x3').css('border-right', 'solid purple 4px');
  $('#y1x3').css('border-bottom', 'solid purple 4px');

  $('main').css('position', 'relative');
  $('main').css('margin', 'auto');
  $('main').css('margin-top', '40%');
  $('main').css('height', '320px');
  $('main').css('width', '320px');

  $('#y3x2').css('left','96px');
  $('#y3x3').css('left','192px');
  $('#y2x2').css('left','96px');
  $('#y2x3').css('left','192px');
  $('#y1x2').css('left','96px')
  $('#y1x3').css('left','192px');
  $('#y2x1').css('top','100px');
  $('#y2x2').css('top','100px');
  $('#y2x3').css('top','100px');
  $('#y1x1').css('top','200px');
  $('#y1x2').css('top','200px');
  $('#y1x3').css('top','200px');

  $('#y1x2').css('border-top','0px');
  $('#y3x2').css('border-bottom','0px');

  $('div').css('text-align', 'center')
  $('div').css('font-family', 'sans-serif')
  $('div').css('font-size', '40px')
  $('div').css('padding-top', '6%')

  $('div').text(' ');

  //populate boxes

  var x = 0;
  var o = 0;

  $('div').on('click', function(){
    if (x === o){
      if ($(this).text() === ' '){
        $(this).text('X');
        x++;
      }
    } else {
      if ($(this).text() === ' '){
        $(this).text('O');
        o++;
      }
    }
  });

  //rules
    // function winner(){//call this method every turn
    //   var horiz =
    //   $('#y3x1').text() + $('#y3x2').text() + $('#y3x3').text() + $('#y2x1').text() + $('#y2x2').text() + $('#y2x3').text() + $('#y1x1').text() + $('#y1x2').text() + $('#y1x3').text();
    //
    //   var vert =
    //   $('#y3x1').text() + $('#y2x1').text() + $('#y1x1').text() + $('#y3x2').text() + $('#y2x2').text() + $('#y1x2').text() + $('#y3x3').text() + $('#y2x3').text() + $('#y1x3').text();
    //
    //   var diag1 =
    //   $('#y3x1').text() + $('#y2x2').text() + $('#y1x3').text();
    //
    //   var diag2 =
    //   $('#y3x3').text() + $('#y2x2').text() + $('#y1x1').text();
    //
    //   if (horiz.includes('XXX') || vert.includes('XXX') ||
    //      diag1.includes('XXX') || diag2.includes('XXX')){
    //        //X wins
    //      }
    //
    //   else if (horiz.includes('OOO') || vert.includes('OOO') ||
    //      diag1.includes('OOO') || diag2.includes('OOO')){
    //       //O wins
    //      }
    //   else if (){//board is full
    //       //Draw
    //   }
    //   //make another div the same dimensions and position as main; fade out main and fade in new box explaining results
    // }

});

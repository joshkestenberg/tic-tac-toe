$(function() {
  //grid
  $('div').css('height', '30%');
  $('div').css('width', '30%');
  $('div').css('position', 'absolute');
  $('div').css('box-sizing', 'border-box');
  $('div').css('border-radius','30px');

  $('.square').css('border', 'solid purple 0.2em');
  $('#y3x3').css('border-top', 'solid purple 0.3em');
  $('#y3x3').css('border-right', 'solid purple 0.3em');
  $('#y1x1').css('border-bottom', 'solid purple 0.3em');
  $('#y1x1').css('border-left', 'solid purple 0.3em');
  $('#y3x1').css('border-left', 'solid purple 0.3em');
  $('#y3x1').css('border-top', 'solid purple 0.3em');
  $('#y1x3').css('border-right', 'solid purple 0.3em');
  $('#y1x3').css('border-bottom', 'solid purple 0.3em');

  $('main').css('position', 'relative');
  $('main').css('margin', 'auto');
  $('main').css('margin-top', '20%');
  $('main').css('height', '30em');
  $('main').css('width', '50%');
  $('main').css('max-width', '550px');
  $('main').css('max-width', '550px');

  $('#gameover').css('position', 'relative');
  $('#gameover').css('margin', 'auto');
  $('#gameover').css('margin-top', '20%');
  $('#gameover').css('height', '35em');
  $('#gameover').css('width', '60%');
  $('#gameover').css('display', 'none');
  $('#gameover').css('text-align', 'center');
  $('#gameover').css('box-shadow', '10px 10px grey');
  $('#gameover').css('font-family', 'sans-serif');
  $('#gameover').css('font-size', '40px');
  $('#gameover').css('font-weight', 'bold');

  $('#y3x2').css('left','33%');
  $('#y3x2').css('top', '2px')
  $('#y3x3').css('left','66%');
  $('#y2x2').css('left','33%');
  $('#y2x3').css('left','66%');
  $('#y1x2').css('left','33%')
  $('#y1x3').css('left','66%');
  $('#y2x1').css('top','33%');
  $('#y2x2').css('top','33%');
  $('#y2x3').css('top','33%');
  $('#y1x1').css('top','66%');
  $('#y1x2').css('top','66%');
  $('#y1x3').css('top','66%');

  $('#y1x2').css('border-top','0px');
  $('#y3x2').css('border-bottom','0px');

  $('div').css('text-align', 'center');
  $('div').css('box-shadow', '10px 10px grey');
  $('div').css('font-family', 'sans-serif');
  $('div').css('font-size', '40px');
  $('div').css('font-weight', 'bold');
  $('div').css('padding-top', '9%');

  $('div').text(' ');

  function play(){

    var x = 0;
    var o = 0;
    //rules
    function winner(){

    var horiz1 =
    $('#y3x1').text() + $('#y3x2').text() + $('#y3x3').text();

    var horiz2 =
    $('#y2x1').text() + $('#y2x2').text() + $('#y2x3').text();

    var horiz3 =
    $('#y1x1').text() + $('#y1x2').text() + $('#y1x3').text();

    var vert1 =
    $('#y3x1').text() + $('#y2x1').text() + $('#y1x1').text();

    var vert2 =
    $('#y3x2').text() + $('#y2x2').text() + $('#y1x2').text();

    var vert3 =
    $('#y3x3').text() + $('#y2x3').text() + $('#y1x3').text();

    var diag1 =
    $('#y3x1').text() + $('#y2x2').text() + $('#y1x3').text();

    var diag2 =
    $('#y3x3').text() + $('#y2x2').text() + $('#y1x1').text();

    function checkLine(line){
      if (line === "XXX")
        return "X"
      else if (line === 'OOO')
        return "O"
      else
        return false
    }

    function checkLines(){
      var gameWinner

      var lines = [horiz1, horiz2, horiz3, vert1, vert2, vert3, diag1, diag2];

      lines.forEach(function(line){
        // console.log(line);
        if (!gameWinner) {
          gameWinner = checkLine(line)
          // console.log(gameWinner);
        }
      })
      return gameWinner;
    }

    var win = checkLines();

    if (win){
      $('#gameover').text(win + ' wins!')
      $('#gameover').fadeIn(200);
      $('div').text(' ');
      $('#gameover').delay(600).fadeOut(200);
      x = 0;
      o = 0;
    } else if ((horiz1+horiz2+horiz3).includes(" ") === false){
      $('#gameover').text("Draw: you're both trash!")
      $('#gameover').fadeIn(200);
      $('div').text(' ');
      $('#gameover').delay(600).fadeOut(200);
      x = 0;
      o = 0;
    }


      // if
      // (horiz1.includes('XXX') || horiz2.includes('XXX') || horiz3.includes('XXX') || vert1.includes('XXX') || vert2.includes('XXX') || vert3.includes('XXX') ||
      // diag1.includes('XXX') || diag2.includes('XXX')){
      //  $('#gameover').text('X wins!')
      //  $('#gameover').fadeIn(200);
      //  $('div').text(' ');
      //  $('#gameover').delay(600).fadeOut(200);
      //  x = 0;
      //  o = 0;
      // }
      // else if
      // (horiz1.includes('OOO') || horiz2.includes('OOO') || horiz3.includes('OOO') || vert1.includes('OOO') || vert2.includes('OOO') || vert3.includes('OOO') ||
      // diag1.includes('OOO') || diag2.includes('OOO')){

      // }

      // else if
      // ((horiz1.includes(' ') && horiz2.includes(' ') && horiz3.includes(' ') && vert1.includes(' ') && vert2.includes(' ') && vert3.includes(' ') &&
      // diag1.includes(' ') && diag2.includes(' ')) === false){
      //   $('#gameover').text('Draw!')
      //   $('#gameover').fadeIn(200);
      //   $('div').text(' ');
      //   $('#gameover').delay(600).fadeOut(200);
      //   x = 0;
      //   o = 0;
      // }
    }

    //gameplay
    $('div').on('click', function(){
      if (x === o){
        if ($(this).text() === ' '){
          $(this).css('color', 'black');
          $(this).text('X');
          x++;
        }
      } else {
        if ($(this).text() === ' '){
          $(this).css('color', 'darkgrey')
          $(this).text('O');
          o++;
        }
      }
      winner();
    });
  }

  play();

});

$(document).ready(function(){
  
  $('#yesbutton').click(function() {
    $('#mainme').fadeOut(500, function(){
      $('#five').css("opacity", "0");
      $('#four').css("opacity", "0");
      $('#three').css("opacity", "0");
      $('#two').css("opacity", "0");
      $('#one').css("opacity", "0");
      $('#mainme').css("display", "none");
      $('#mainabout').css("display", "inline");
      $('#one').animate({opacity: 1}, 100, function () {
        $('#two').animate({opacity: 1}, 100, function () {
          $('#three').animate({opacity: 1}, 100, function () {
            $('#four').animate({opacity: 1}, 100, function () {
              $('#five').animate({opacity: 1}, 100);
            }); 
          }); 
        });        
      }); 
    }); 
  });

  $('#backbutton').click(function() {
    $('#five').animate({opacity: 0}, 100, function () {
      $('#four').animate({opacity: 0}, 100, function () {
        $('#three').animate({opacity: 0}, 100, function () {
          $('#two').animate({opacity: 0}, 100, function () {
            $('#one').animate({opacity: 0}, 100, function () {
              $('#mainabout').css("display", "none");
              $('#mainme').fadeIn(1000, function() {
                $('#mainme').css("display", "block-inline");
              });
            });
          });
        });
      });
    });
  });

  $("#MyImage").mouseover(function() { $("#MyImage").attr("src","images/meAsDevil.png"); });
  $("#MyImage").mouseleave(function() { $("#MyImage").attr("src","images/me.png"); });

  $("#picOne").mouseover(function() { $("#picOne").attr("src","images/resumeOver.png"); });
  $("#picOne").mouseleave(function() { $("#picOne").attr("src","images/avatar.png"); });

  $("#picTwo").mouseover(function() { $("#picTwo").attr("src","images/linkedinOver.png"); });
  $("#picTwo").mouseleave(function() { $("#picTwo").attr("src","images/linkedin.png"); });

  $("#picThree").mouseover(function() { $("#picThree").attr("src","images/githubOver.png"); });
  $("#picThree").mouseleave(function() { $("#picThree").attr("src","images/github.png"); });

  $("#picFour").mouseover(function() { $("#picFour").attr("src","images/AIOver.png"); });
  $("#picFour").mouseleave(function() { $("#picFour").attr("src","images/star.png"); });

  $("#picFive").mouseover(function() { $("#picFive").attr("src","images/contactOver.png"); });
  $("#picFive").mouseleave(function() { $("#picFive").attr("src","images/mail.png"); });


  
});
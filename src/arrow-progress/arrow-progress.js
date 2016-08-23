$( document ).ready(function() {
    
  var back =$(".prev");
  var next = $(".next");
  var steps = $(".step");
  
  var arrow_steps = $(".arrow-steps .step");
  $('#arrow-steps-prev').on("click", goToPrevState.bind(this, arrow_steps));
  $('#arrow-steps-next').on('click', goToNextState.bind(this, arrow_steps));

  var arrow_steps_short = $(".arrow-steps-short .step");
  $('#arrow-steps-short-prev').on("click", goToPrevState.bind(this, arrow_steps_short));
  $('#arrow-steps-short-next').on('click', goToNextState.bind(this, arrow_steps_short))

  function goToNextState(list) {
    $.each(list, function( i ) {
      if (!$(list[i]).hasClass('current') && !$(list[i]).hasClass('done')) {
        $(list[i]).addClass('current');
        $(list[i - 1]).removeClass('current').addClass('done');
        $(list[i - 1]).find('span').text('Done');
        return false;
      }
    })
  }

  function goToPrevState(list) {
    $.each( list, function( i ) {
      if ($(list[i]).hasClass('done') && $(list[i + 1]).hasClass('current')) {
        $(list[i + 1]).removeClass('current');
        $(list[i]).removeClass('done').addClass('current');
        return false;
      }
    });
  }


  next.bind("click", function() { 
    $.each( steps, function( i ) {
      if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
        $(steps[i]).addClass('current');
        $(steps[i - 1]).removeClass('current').addClass('done');
        $(steps[i - 1]).find('span').text('Done');
        return false;
      }
    })
  });
  back.bind("click", function() { 
    $.each( steps, function( i ) {
      if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
        $(steps[i + 1]).removeClass('current');
        $(steps[i]).removeClass('done').addClass('current');
        return false;
      }
    })    
  });
})
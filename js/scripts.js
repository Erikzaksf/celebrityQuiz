$(document).ready(function(event) {
  $("form#celebrity").submit(function(event) {
  event.preventDefault();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var pref = $("select#pref").val();

    if (age >= 50 && gender === 'male' && pref === 'night'){   //over 50 night//
      $(".kane").show();
    }
    if (age >= 50 && gender === 'female' && pref === 'night'){
      $(".jackson").show();
    }
    if (age < 50 && gender === 'male' && pref === 'night'){  //under 50 night//
      $(".ritter").show();
    }
    if (age < 50 && gender === 'female' && pref === 'night'){
      $(".pratt").show();
    }
    if (age >= 50 && gender === 'male' && pref === 'day'){   //over 50 day//
      $(".white").show();
    }
    if (age >= 50 && gender === 'female' && pref === 'day'){
      $(".stewart").show();
    }
    if (age < 50 && gender === 'male' && pref === 'day'){  //under 50 day//
      $(".browning").show();
    }
    if (age < 50 && gender === 'female' && pref === 'day'){
      $(".cho").show();
    }
  });
});

$('.cal').click(function() {
  let damage = Number($('.d').val()) / 100 || 0
  let rate = Number($('.cri').val()) / 100 || 0

  let value = (1 - rate) * 1 + rate * (1 + damage);
  $("#res")[0].innerHTML += '<br/> ' + value * 100 + '%'

})
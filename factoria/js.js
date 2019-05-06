$(function () {
  for (let i = 0; i < data.namelist.length; i++) {
    $('.list')[0].innerHTML += '<div class="item">' + data.namelist[i] + '</div>'
  }
})

$('.clear').on('click', function (e) {
  $('.selected').html('')
})
$('.search').on('click', function (e) {
  $('.block')
})
$('.left').on('click', '.item', function (e) {
  $('.selected').html(e.target.innerHTML)
})


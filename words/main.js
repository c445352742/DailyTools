
$(function () {
  key = {
    down: 40,
    up: 38,
    left: 37,
    right: 39,
  }
  var index = [];
  var time = 500;
  var flag = 'up';
  var enable = true;
  down('init');

  $(document).keydown(function (e) {
    if (!enable) { return; }
    enable = false
    switch (e.keyCode) {
      case key.up:
        up();
        break;
      case key.down:
        down();
        break;
      case key.left:
        left();
        break;
      case key.right:
        left();
        break;
      default: return;
    }
  })
  function down(p) {
    clean();
    if (p !== 'init') {
      $('.card').addClass('rollup');
    }
    setTimeout(function () {
      $('.card').prop('class', '').prop('class', 'card');
      enable = true;
    }, time)
    setTimeout(function () {
      r();
      $('.line1').html(top100[index[0]].word)
    }, time / 2)
    flag = 'up'
  }
  function up() {
    clean();
    $('.card').addClass('rollup');
    setTimeout(function () {
      $('.card').prop('class', '').prop('class', 'card');
      enable = true;
    }, time)
    setTimeout(function () {
      index.shift()
      $('.line1').html(top100[index[0]].word)
    }, time / 2)
    flag = 'up'
  }
  function left() {
    clean();
    $('.card').addClass('rollleft');
    setTimeout(function () {
      $('.card').prop('class', '').prop('class', 'card');
      enable = true;
    }, time)
    setTimeout(function () {
      flag == 'up' ? $('.line1').html(top100[index[0]].word) : ($('.line1').html(top100[index[0]].phonetic),
        $('.line2').html(top100[index[0]].meaning))
    }, time / 2)
    turnOver();
  }
  function clean() {
    $('.line1').html('')
    $('.line2').html('')
  }
  function r() {
    var num = Math.floor(Math.random() * 3);
    index.unshift(num);
    index.length = 10;
  }
  function turnOver() {
    flag = flag == 'up' ? 'down' : 'up'
  }
})

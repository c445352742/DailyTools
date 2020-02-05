
$(function () {
  key = {
    down: 40,
    up: 38,
    left: 37,
    right: 39,
  }
  var index = -1;
  var time = 300;
  var flag = 'up';
  var enable = true;
  var lib = JSON.parse(JSON.stringify(top100));
  var libname = 'top100'
  r();
  down('init');

  $('.btn').click(function () {
    if (libname == 'top100') {
      lib = JSON.parse(JSON.stringify(all))
      libname = 'all'
      index = -1
      $('.lib').html('all')
      r();
      down();
    } else {
      lib = JSON.parse(JSON.stringify(top100))
      index = -1
      libname = 'top100'
      $('.lib').html('top100[' + lib.length + ']')
      r();
      down();
    }
  })

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
      default:
        enable = true
        return;
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
      index++;
      index = index % lib.length
      $('.page').html(index + 1)
      $('.line1').html(lib[index].word)
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
      index--;
      $('.page').html(index + 1)
      index = (index+lib.length) % lib.length
      $('.line1').html(lib[index].word)
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
      flag == 'up' ? $('.line1').html(lib[index].word) : ($('.line1').html(lib[index].phonetic.trim()),
        $('.line2').html(lib[index].meaning))
    }, time / 2)
    turnOver();
  }
  function clean() {
    $('.line1').html('')
    $('.line2').html('')
  }
  function turnOver() {
    flag = flag == 'up' ? 'down' : 'up'
  }
  function r() {
    var i = 0;
    var num = 0;
    var arr = [];
    var length = lib.length

    for (i = 0; i < length; i++) {
      num = Math.floor(Math.random() * lib.length)
      arr.push(lib[num])
      lib.splice(num, 1)
    }
    lib = arr;
    console.log(lib)
  }
})

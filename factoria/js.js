$(function () {
  for (let i = 0; i < data.namelist.length; i++) {
    $('.list')[0].innerHTML += '<div class="item">' + data.namelist[i] + '</div>'
  }
})

$('.clear').on('click', function (e) {
  $('.selected').html('')
  $('.main').html('<div class="block"></div>')
})

$('.left').on('click', '.item', function (e) {
  $('.selected').html(e.target.innerHTML)
})

$('.search').on('click', function () {
  let target = $('.selected').html()
  $('.main>.item').eq(0).html(target)
  // $('.main .row').html(target)
  let obj = {};
  let c = 0;
  let row = ''

  function rec(buff) {// object name string
    for (let i = 0; i < buff.material.length; i++) {
      obj[buff] = {

      }
      c++;
      if (c > 20) return;
      rec(data[buff.material[i].name]);
    }
  }
  // let str = '';
  // for (let i = 0; i < buff.material.length; i++) {
  //   // arr[buff.material[i].name] = data[buff.material[i].name].name;
  //   if (i === 0) {
  //     str = '<div class="block"><div class="line"><div class="time">' +
  //       'Time:' + (buff.time || '') + 's' + '</div><div class="amount">' +
  //       'Amount:' + (buff.material[i].amount || '') + '</div></div><div class="item">' +
  //       buff.material[i].name + '</div></div>' + str;
  //   } else {
  //     str = '<div class="block"><div class="line"><div class="amount">' +
  //       'Amount:' + (buff.material[i].amount || '') + '</div></div><div class="item">' +
  //       buff.material[i].name + '</div></div>' + str;
  //   }
  //   c++;
  //   if (c > 20) return;
  //   rec(data[buff.material[i].name]);
  // }
  // $('.main')[0].innerHTML += '<div class="row">' + str + '</div>';

  rec(data[target]);
  console.log(obj)
})




















// 刚 5 
// 电炉 5红板 10转 10刚
// 转 2
// 1齿轮 2铁板
// 硫酸 5硫磺1铁
// 硫磺 30气
// 1管道 1铁板
// 电动机 1内燃机 15游 2绿版
// 内燃机 1刚 1齿轮 2管道 10s
// 处理器 2红板20绿板5硫酸
// ic 2绿板2塑料4铜线
// 塑料 1煤20气
// 紫包 1电动机 1电炉
// 黄包 1电池 1处理器 1插件 30铜线
// 军包 1穿甲弹 1手雷 1机枪塔
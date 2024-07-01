let data = {
  button1: {
    name: "Mango",
    nit: 40,
    pho: 70,
    pot: 36,
  },
  button2: {
    name: "Apple",
    nit: 20,
    pho: 90,
    pot: 46,
  },
  button3: {
    name: "Orange",
    nit: 29,
    pho: 65,
    pot: 89,
  },
};


$('.dot').on('click', function(e) {
    let btn = $(this).data('attr');
    
    $('.nit-value').text(data[btn].nit + '%');
    $('.pho-value').text(data[btn].pho + '%');
    $('.pot-value').text(data[btn].pot + '%');

});




  Circles.create({
    id: 'circles-1',
    radius: 60,
    value: 95,
    maxValue: 100,
    width: 10,
    text: function(value){return value + '%';},
    colors: ['#e6e6e6', '#28a745'],
    duration: 1000,
    wrpClass: 'circle-wrp',
    textClass: 'circle-text',
    styleWrapper: true,
    styleText: true
  });

  Circles.create({
    id: 'circles-2',
    radius: 60,
    value: 30,
    maxValue: 100,
    width: 10,
    text: function(value){return value + '%';},
    colors: ['#e6e6e6', '#f0ad4e']
  });

  Circles.create({
    id: 'circles-3',
    radius: 60,
    value: 60,
    maxValue: 100,
    width: 10,
    text: function(value){return value + '%';},
    colors: ['#e6e6e6', '#28a745']
  });

  Circles.create({
    id: 'circles-4',
    radius: 60,
    value: 50,
    maxValue: 100,
    width: 10,
    text: function(value){return '-' + value + '%';},
    colors: ['#e6e6e6', '#dc3545']
  });

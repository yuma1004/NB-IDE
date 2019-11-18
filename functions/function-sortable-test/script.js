$(function() {

Sortable.create($('.list')[0]);

});

Sortable.create($('.list')[0], {
    animation: 110  // ミリ秒で指定

  });


changesortable = function(object){
  Sortable.create(object);
};
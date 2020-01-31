$(document).ready(function(){

$.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data){
      printData(data.response);
    },
    error: function(request, state, errors){
      alert('Si è verificato un error' + errors)
    }
  }
);

function printData(listaDischi){
// console.log(data);
for (var i = 0; i < listaDischi.length; i++) {
  var disco = listaDischi[i];
  console.log(disco);

  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {disco};
  var html = template(disco);

  $('.cds-container').append(html);
}
}
});

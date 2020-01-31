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

function printData(data){
// console.log(data);
for (var i = 0; i < data.length; i++) {
  var disco = data[i];
  console.log(disco);
}
}
});

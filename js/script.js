$(document).ready(function(){

$.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(){

    },
    error: function(richiesta, stato, errore){
      alert('Si è verificato un error' + errore)
    }
  }
);
});

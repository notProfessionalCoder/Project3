$(document).ready(function(){
    document.getElementById("key1").addEventListener("click", function(event){
     event.preventDefault()
   });
    document.getElementById("key2").addEventListener("click", function(event){
     event.preventDefault()
   });
    var apiBase = "http://statenweb.mockable.io/conversions/";
    axios.get(apiBase).then(function(response){
        var a = response.data.feetInInch;
        var b = response.data.inchesInFoot;
        var c = response.data.centimetersInInch;
        var d = response.data.inchesInCm;
        $('#key1').on('click',function(){
            var result;
            var input = $('#IC').val();
            if(isNaN(input)){
                $("#result1").html("your enter is not a number");
            }
            else{
                result = input * c;
            $("#result1").html(result + " Centimeter");
            }
           
        })
        $('#key2').on('click',function(){
            var result;
            var input = $('#CI').val();
            if(isNaN(input)){
                $("#result2").html("your enter is not a number");
            }
            else{
                result = input * d;
            $("#result2").html(result+" Inch");
            }
            
        })

    })

})

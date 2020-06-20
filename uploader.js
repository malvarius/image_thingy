let count = 0;
if($('img').attr("src")==="#"){
    $(this).hide()
}
window.addEventListener('load', function() {
    $('input[type=file]').on('change',function(){
        if (this.files && this.files[0]) {
            $(".showMe").show()
            $(".showMe").append(`<br><div class="showMe" style="justify-content: center;"><img id="myImg${count+1}" src=""  class="img-fluid d-block mx-auto"></div><br>`)
            $(`#myImg${count}`).attr("src", URL.createObjectURL(this.files[0]))
            console.log(URL.createObjectURL(this.files[0]))
            count++
        }
    });
  });
  
  function imageIsLoaded() { 
    alert(this.src);  // blob url
    // update width and height ...
  }
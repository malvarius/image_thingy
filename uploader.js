//The image hide is simply to keep the blank image from showing until it is populated in the even listener function
if($('img').attr("src")==="#"){
    $(this).hide()
}
//Function on file load to take the blank image tag and set src to the bubble URl from file upload so you can see the image you are converting
window.addEventListener('load', function() {
    $('input[type=file]').on('change',function(){
        if (this.files && this.files[0]) {
            const url = URL.createObjectURL(this.files[0])
            $(".showMe").show()
            $(`#myImg`).attr("src", url)
            convertToBase64(this.files[0])
        }
    });
  });
  //function that takes in the file (labeled as info) and reads the bubble URL to convert to base64
  function convertToBase64(info) {
    var readMe = new FileReader();
    readMe.readAsDataURL(info);
    readMe.onload = function () {
      $("#base").val(readMe.result)
    };
    readMe.onerror = function (error) {
      return "There was an error with your file"
    };
 }
//Function to allow easier copying by simply clicking the copy button at top of text area
 $("#copyButton").on('click', function(){
   const value = $("#base").val();
   navigator.clipboard.writeText(value)

 })
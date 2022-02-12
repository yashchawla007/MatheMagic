var btn = $("#btn");
var para = $("#content");
para.css("display", "none");
// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#content").slideToggle("slow");
//     });
//   });
$(document).ready(function(){
    btn.click(function(){
        para.slideDown("slow");
        if(para = para.slideDown){
        btn.text("Hide");
         }
        para.slideUp("slow");
        if(para = para.slideUp){
             para.slideUp("slow");
             btn.text("Show")
        }
    });
  });
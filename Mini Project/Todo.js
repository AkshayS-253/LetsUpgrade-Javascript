
//Todo
$(document).ready(function () {

    var clip = $("#clip");
    var list = $("#list");
    var cal = 1;

    clip.click(function () {

        var inp = $("#inp").val();
        
        if (inp != "") {

            if (cal == 1) {
                list.append("<li class='item'><span>" + inp + "</span><br><input type='button' value='Remove'></li>");
                        cal = 2;
            }

            else if (cal == 2) {
                list.append("<li class='item'><span>" + inp + "</span><br><input type='button' value='Remove'></li>");
                        cal = 1;
            }
                    
            $("#inp").val("");

            $("input[value='Remove']").on("click", function () {
                $(this).parent().remove();
                $(".item:even").css("background-color", "#D7EE8C");
                $(".item:odd").css("background-color", "#f0efee");
                $(".item:even > input").css({"background-color" : "#D7EE8C", "border-width" : "1px"});
                $(".item:odd > input").css({"background-color" : "#f0efee", "border-width" : "1px"});
            })
            $(".item:even").css("background-color", "#D7EE8C");
            $(".item:odd").css("background-color", "#f0efee");
            $(".item:even > input").css({"background-color" : "#D7EE8C", "border-width" : "1px"});
            $(".item:odd > input").css({"background-color" : "#f0efee", "border-width" : "1px"});
        }
    })
})

//Time 
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

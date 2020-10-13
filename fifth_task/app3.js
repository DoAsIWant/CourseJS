let element = document.querySelector("div");
element.onmousemove = function(e){
    element.style.position = "absolute";
    move(e);

    function move(e){
        element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
        element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
      }

         element.onmouseup = function() {
         document.onmousemove = null;
         element.onmouseup = null;
      }
      element.ondragstart = function() {
        return false;
      };
      
}
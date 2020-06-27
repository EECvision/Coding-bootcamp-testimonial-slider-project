
    let johnImage = "images/image-john.jpg"
    let johnText = (" \" if you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\" ");
    let johnName = ("John Tarkpor Junior front-end developer");

    let tanyaImage = "images/image-tanya.jpg";
    let tanyaText = " \" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.\" ";
    let tanyaName = "Tanya Sinclair Ux Engineer";

    document.addEventListener("keydown",
    function checkKey(e) {
      e = e || window.event;
  
      if (e.keyCode == '37') {
         swap();
      }
      else if (e.keyCode == '39') {
         swap();
      }
  })
  
    curr = 0;
    next = 1;
    prev = 2;

function swap(){
    prev = curr;
    curr = next;
    next = prev;
    let image = document.getElementById("author-image");
    let text = document.getElementById("text");
    let name = document.getElementById("name");

    if (curr === 0){
        image.src = johnImage;
        text.innerHTML = johnText
        name.innerHTML = johnName;
    }else {
        image.src = tanyaImage;
        text.innerHTML = tanyaText;
        name.innerHTML = tanyaName;
    }
}










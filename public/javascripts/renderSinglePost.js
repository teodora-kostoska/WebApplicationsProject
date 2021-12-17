if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }
  
  function initializeCode() {
    for(let e of document.getElementsByClassName("render")){
        e.addEventListener("click", getSingle); //Add event listener on all elements with class name render, which is the span that contains the header of the post
    }
}

function getSingle(event){
    event.preventDefault();
    const postId = event.target.id; //Get the id of the span, the id is same as the post _id, this will then be used to fetch the correct post from the database
    window.location.href ="/users/singlePost/" + postId; //relocate to the singlePost page by sending postId as param
}
document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

 
  // ADD CODE HERE!
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft"){
      addMove("left")
    }
    else if (e.key === "ArrowRight"){
      addMove("right")
    }
    else if (e.key === "ArrowUp"){
      addMove("up")
    }
    else if (e.key === "ArrowDown"){
      addMove("down")
    }
  })


  button = document.querySelector('#move-button')
  
  // button.addEventListener('click', function()
  //   const moveContainer = document.querySelector("#moves-container")
  //   const moveDirection = moveContainer.querySelector("li:first-child")
  //     move(moveDirection.textContent)
  //     moveDirection.remove()
  // })

  // with intervals
  button.addEventListener('click', function(){ 
    setInterval(function(){
      const moveContainer = document.querySelector("#moves-container")
      const moveDirection = moveContainer.querySelector("li:first-child")
      if (moveDirection) {
        move(moveDirection.textContent)
        moveDirection.remove()}}, 500)
  })


});




function addMove(direction){
  const moveContainer = document.querySelector("#moves-container")
  const newLI = document.createElement('li')
  newLI.classList.add ('move')
    newLI.textContent = direction
    moveContainer.append(newLI)
}
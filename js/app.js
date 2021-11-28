const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart" , dragStart);
fill.addEventListener("dragend" , dragEnd);

// DragOver every empty card
empties.forEach(emptyElem => {
    emptyElem.addEventListener("dragover" , dragOver);
    emptyElem.addEventListener("dragenter" , dragEnter);
    emptyElem.addEventListener("dragleave" , dragLeave);
    emptyElem.addEventListener("drop" , dragDrop);
});

// DragStart function
function dragStart(){
    this.classList.add("hold");
    setTimeout(() => {
        this.classList.add("hide");
    },0);
}

// DragEnd function
function dragEnd(){
    this.classList.remove("hold" , "hide");
}

// DragOver function
function dragOver(e){
    e.preventDefault();
}

// DragEnter function
function dragEnter(e){
    this.classList.add("hovered");
}

// dragLeave function
function dragLeave(){
    this.classList.remove("hovered");
}

// dragDrop function
function dragDrop(){
    this.classList.remove("hovered");
    this.append(fill);
}
const inputBox = document.getElementById("field-input")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value //* innerHTML must mean the space between open & close of a tag
        listContainer.appendChild(li)
        let cross = document.createElement("span")
        cross.innerHTML = '\u00d7'
        li.appendChild(cross)
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    } 
}, false);


//note early stage data storage and recallation

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function reloadData(){
    listContainer.innerHTML = localStorage.getItem("data",)
}

reloadData();







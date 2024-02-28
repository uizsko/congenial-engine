
//first book - 1
document.getElementById("renamefr").addEventListener("click", function () {
    document.getElementById("name1").style.display = "none";
    document.getElementById("inpr1").style.display = "block";
    document.getElementById("ap1").style.display = "block";
})
document.getElementById("ap1").addEventListener("click", function () {
    let newName = document.getElementById("inpr1").value;
    document.getElementById("name1").innerHTML = newName;

    document.getElementById("inpr1").style.display = "none";
    document.getElementById("ap1").style.display = "none";
    document.getElementById("name1").style.display = "block";
})


//second book - 2
document.getElementById("renamefr2").addEventListener("click", function () {
    document.getElementById("name2").style.display = "none";
    document.getElementById("inpr2").style.display = "block";
    document.getElementById("ap2").style.display = "block";
})
document.getElementById("ap2").addEventListener("click", function () {
    let newName = document.getElementById("inpr2").value;
    document.getElementById("name2").innerHTML = newName;

    document.getElementById("inpr2").style.display = "none";
    document.getElementById("ap2").style.display = "none";
    document.getElementById("name2").style.display = "block";
})


//third book - 3
document.getElementById("renamefr3").addEventListener("click", function () {
    document.getElementById("name3").style.display = "none";
    document.getElementById("inpr3").style.display = "block";
    document.getElementById("ap3").style.display = "block";
})
document.getElementById("ap3").addEventListener("click", function () {
    let newName = document.getElementById("inpr3").value;
    document.getElementById("name3").innerHTML = newName;

    document.getElementById("inpr3").style.display = "none";
    document.getElementById("ap3").style.display = "none";
    document.getElementById("name3").style.display = "block";
})

//fourth book - 4
document.getElementById("renamefr4").addEventListener("click", function () {
    document.getElementById("name4").style.display = "none";
    document.getElementById("inpr4").style.display = "block";
    document.getElementById("ap4").style.display = "block";
})
document.getElementById("ap4").addEventListener("click", function () {
    let newName = document.getElementById("inpr4").value;
    document.getElementById("name4").innerHTML = newName;

    document.getElementById("inpr4").style.display = "none";
    document.getElementById("ap4").style.display = "none";
    document.getElementById("name4").style.display = "block";
})

//fifth book - 5
document.getElementById("renamefr5").addEventListener("click", function () {
    document.getElementById("name5").style.display = "none";
    document.getElementById("inpr5").style.display = "block";
    document.getElementById("ap5").style.display = "block";
})
document.getElementById("ap5").addEventListener("click", function () {
    let newName = document.getElementById("inpr5").value;
    document.getElementById("name5").innerHTML = newName;

    document.getElementById("inpr5").style.display = "none";
    document.getElementById("ap5").style.display = "none";
    document.getElementById("name5").style.display = "block";
})


document.getElementById("addBook").addEventListener("click", function () {
    alert("works");
    let div = document.createElement("div");
    div.className = "wrap";
    div.id = "new1";
    document.getElementById("bookList").appendChild(div);

    let input = document.createElement("input");
    input.type = "text";
    input.className = "InpRename";
    input.id = "inprn1";
    input.style.display = "block"
    document.getElementById("new1").appendChild(input);

    let buttonA = document.createElement("button");
    buttonA.className = "apply";
    buttonA.id = "applyn1";
    buttonA.innerHTML = "Apply";
    buttonA.style.display = "block";
    document.getElementById("new1").appendChild(buttonA);

    let buttonR = document.createElement("button");
    buttonR.className = "rename";
    buttonR.id = "renamefrn1";
    buttonR.innerHTML = "Rename";
    document.getElementById("new1").appendChild(buttonR);

    let buttonD = document.createElement("button");
    buttonD.className = "delete";
    buttonD.id = "deleten1";
    buttonD.innerHTML = "Delete";
    document.getElementById("new1").appendChild(buttonD);
})

document.getElementById("addBook").addEventListener("click", function () {
    for (let i = 0; i++) {
        alert("works");
        let div i = document.createElement("div")

    }
})













































// function GetDelete() {
//     alert("works")
//     document.getElementsByClassName("firstBook").remove();

// }


// document.getElementById("delete").addEventListener("click", function getDelete() {
//     alert("works")
//     for (i = 1, i <= )
//         document.getElementById("1").remove();
// })


// document.querySelector('#books').oninput = function () {
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('.elastic li');
//     if (val != "") {
//         elasticItems.forEach(function (elem) {
//             if (elem.innerText.search(val) == -1) {
//                 elem.classList.add('hide');
//             }
//             else {
//                 elem.classList.remove("hide");

//             }

//         });
//     }
// }





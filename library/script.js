


// function renameanything(oldName, newName) {
//     window[newName] = window[oldName];
//     delete window[oldName];
// }

//renameanything('lol', 'loltest1');




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





let newBookName;




document.getElementById("addBook").addEventListener("click", function () {
    document.getElementById("addBook").style.display = "none";
    document.getElementById("bookList").style.marginTop = "41px";




    let div = document.createElement("div");
    div.className = "wrap1";
    div.style.display = "inline-block";
    div.id = "wrap";
    div.style.width = "498px";
    div.style.border = "1px solid black";
    div.style.marginTop = "0";
    div.style.marginBottom = "-4px";
    document.getElementById("bookList").appendChild(div);

    let input = document.createElement("input");
    // let input = div.innerHTML = "<input type='text' class='InpRename firstBook'id='inpr1'>"

    let sapchik = document.createElement("span")
    sapchik.innerHTML = "123123";
    document.getElementById("wrap").appendChild(sapchik);


    input.type = "text";
    input.style.paddingLeft = "0";
    input.className = "InpRename";
    input.id = "inprn1";
    input.style.display = "inline-block";
    input.style.width = "171px";
    document.getElementById("wrap").appendChild(input);





    let buttonA = div.innerHTML = "<button class='apply' onclick='applyData(this)' >Apply</button>";

    let btnwrp1 = document.createElement("div");
    btnwrp1.className = "btnwrp";
    document.getElementById("wrap").appendChild(btnwrp1);

    let buttonR = btnwrp1.innerHTML = "<button class='rename' onclick='editData(this)'>Rename</button>"

    let buttonD = btnwrp1.innerHTML = "<button class='delete' onclick='deleteData(this)'>Delete</button>";

    let parent = document.querySelector('.wrap1');
    let child = parent.querySelector(".rename")
    console.log(child)


    // buttonD.onclick = function deleteData(button) {
    //     // Get the parent row of the clicked button 
    //     let row = button.parentNode.parentNode;

    //     // Remove the row from the table 
    //     row.parentNode.removeChild(row);

    // };

    // function bluify(e) {
    //     console.log(this === e.currentTarget);

    //     console.log(this === e.ta)
    // }

    function applyData(e) {

        let newBookName = document.createElement("span");
        newBookName.style.display = "none";
        newBookName.id = "newBookNameid";
        newBookName.className = "books";
        document.getElementById(e.target.parentNode.id).appendChild(newBookName);

        newBookName.innerHTML = document.getElementById("inprn1").value;
        console.log(inprn1.value);
        input.style.display = "none";
        newBookName.style.display = "inline-block";
        buttonA.style.display = "none";
        div.id = "wrap" + document.getElementById("inprn1").value;
        newBookName.id = "newBookName" + document.getElementById("inprn1").value;
        buttonA.id = "buttonApply" + document.getElementById("inprn1").value;
        // buttonR.id = "buttonRename" + document.getElementById("inprn1").value;
        // buttonD.id = "buttonDelete" + document.getElementById("inprn1").value;

        // renameanything("div", "div" + document.getElementById("inprn1").value);
        // renameanything("buttonA", "buttonA" + document.getElementById("inprn1").value);
        // renameanything("buttonR", "buttonR" + document.getElementById("inprn1").value);
        // renameanything("buttonD", "buttonD" + document.getElementById("inprn1").value);
        // renameanything("input", "input" + document.getElementById("inprn1").value);

        document.getElementById("addBook").style.display = "block";
        document.getElementById("bookList").style.marginTop = "20px";




        input.id = "inputName" + document.getElementById("inprn1").value;
        hideBlock(input.id);
        copyValue(input.id);

    }
}
);

function hideBlock(id) {
    console.log("indide hideBlock()");
    document.getElementById("buttonRename" + document.getElementById(id).value).addEventListener("click", function (e) {
        console.log("---------------------------");
        console.log(e.target.parentNode);
        document.getElementById("newBookName" + document.getElementById(id).value).style.display = "none";
        document.getElementById(id).style.display = "inline-block";
        document.getElementById("buttonApply" + document.getElementById(id).value).style.display = "inline-block";
        // input.style.display = "inline-block";
        // buttonA.style.display = "inline-block";
    });
    console.log("outside hideBlock()");
}

function copyValue(id) {
    console.log("inside copyValue()");
    document.getElementById("buttonApply" + document.getElementById(id).value).addEventListener("click", function () {
        let newBookRename = document.getElementById(id).value;
        document.getElementById("newBookName" + document.getElementById(id).value).innerHTML = getElementById(id).value;
    });
    console.log("outside copyValue()");
}





// document.getElementById("delete").addEventListener("click", function getDelete() {
//     document.getElementById("bwrap1").remove();
//     document.getElementById("name1").remove();
//     document.getElementById("inpr1").remove();
//     document.getElementById("ap1").remove();
//     document.getElementById("btnwrp1").remove();
//     document.getElementById("renamefr").remove();
//     document.getElementById("delete").remove();

// })




// document.getElementById("delete2").addEventListener("click", function getDelete() {
//     document.getElementById("name2").remove();
//     document.getElementById("bwrap2").remove();
//     document.getElementById("inpr2").remove();
//     document.getElementById("ap2").remove();
//     document.getElementById("btnwrp2").remove();
//     document.getElementById("renamefr2").remove();
//     document.getElementById("delete2").remove();

// })
// document.getElementById("delete").addEventListener("click", function () {


//     for (let i = 0; i < test.length; i++) {
//         test[i].outerHTML = "";
//     }
// })

function deleteData(button) {

    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode;

    // Remove the row from the table 
    row.parentNode.removeChild(row);
}






























// document.getElementById("addBook").addEventListener("click", function () {
//     for (let i = 0; i++) {
//         alert("works");
//         let div i = document.createElement("div")

//     }
// })













































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





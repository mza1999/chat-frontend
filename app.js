


function attach_event(){
    let chats = document.querySelectorAll(".chat");
    for(let i = 0; i < chats.length;i++){
        if(chats[i].id != "listening"){
            chats[i].id = "listening";
            chats[i].addEventListener('click', function(){
                let selected = document.querySelectorAll(".selected-chat");
                if(selected[0] != undefined){
                    selected[0].classList.remove("selected-chat");
                }
                chats[i].classList.add("selected-chat");
                openChat(chats[i]);
            })
        }
    }
}

function openChat(chat){
    let chatBarImg = document.querySelector(".chat-bar-image");
    let chatBarName = document.querySelector(".chat-bar-name");
    chatBarImg.src = chat.dataset.imgurl;
    chatBarName.children[0].innerText = chat.dataset.name;
}





function loadchats(){
    let chats = document.getElementById('chats');
    let names = [
        "micheal",
        "franklen",
        "joeseph",
        "winston",
        "jasmin",
    ];

    for(let i = 0; i < 5;i++){
        
        let html = `
        <div style="display: flex;" data-name="${names[i]}" data-imgurl="https://i.pravatar.cc/150?img=${i}" data-user="m10z30" class="chat" id="2">
            <div class="photo">
                <img src="https://i.pravatar.cc/150?img=${i}" class="chat-image" alt="">
            </div>
            <div class="chat-name">
                <p>${names[i]}</p>
            </div>
        </div>
        `
        chats.innerHTML += html;
    }
    attach_event();
}






loadchats()

let display = true;

window.resize = event => {
    console.log("resized")
  };
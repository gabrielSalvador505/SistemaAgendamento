function alterModal(type, alter) {
    const modal = document.getElementById("modal");
    if (modal.classList.contains(alter));
        modal.classList.remove('ini');
        modal.classList.remove(alter);
        modal.classList.add(type);
};

function startModal(show){
    const modal = document.getElementById('modal');
    modal.classList.add(show);
    modal.addEventListener('click', function(exit) {
        if (exit.target.id == 'modal')
            modal.classList.remove(show)
    })
};

function pullList(gatilho, lista, icone){
    const trigger = document.getElementById(gatilho)
    const list = document.getElementById(lista)
    const icon = document.getElementById(icone)

    if (trigger.classList.contains('hidden')) {
        list.style.animation = "hiddenList 0.6s";
        list.style.maxHeight = "1px"
        trigger.classList.remove("hidden")
        icon.style.animation = "downAngle 0.5s"
        icon.style.transform = "rotate(0)"
    } else {
        list.style.animation = "useList 0.5s";
        list.style.height = "auto"
        list.style.maxHeight = "200px"
        trigger.classList.add("hidden")
        icon.style.animation = "upAngle 0.5s"
        icon.style.transform = "rotate(180deg)"
    }
};  

/*
function pullFunc(itemValue, item, card) {
    var value = document.getElementById(itemValue).value;
    var funcionario = document.getElementById(card)
    var item = document.getElementById(item)
    if (funcionario.classList.contains(value)) {
        console.log("oi")
    } else {
        console.log("mersdasd")
    }
}
*/
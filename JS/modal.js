function alterModal(type, alter) {
    const modal = document.getElementById("modal");
    if (modal.classList.contains(alter));
        modal.classList.remove('ini');
        modal.classList.remove(alter);
        modal.classList.add(type);
};

function startModal(show){
    const modal = document.getElementById("modal");
    modal.classList.add(show);
    modal.addEventListener('click', function(exit) {
        if (exit.target.id == 'modal')
            modal.classList.remove(show)
    })
};

function useList() {
    const lista = document.getElementById("serv-list")
    const trigger = document.getElementById("trigger")
    

    trigger.addEventListener('click', callList(),{

        if (.classList.contains("")) {
            
        }
    })
}
// Procurar o botão
document.querySelector("#add-time").
addEventListener('click', cloneField)
// Quando clicar no botão

// execultar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const NewFieldContainer=document.querySelector(".schedule-item").cloneNode(true)
    // Limpar os campos. Que campos?
    const fields = NewFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(
        field => field.value = ""
    )

    // colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(NewFieldContainer)

}



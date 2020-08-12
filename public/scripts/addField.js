//procurar o botão
document.querySelector("#add-time")

//Quando clicar o botão
.addEventListener('click', cloneField)

//executar uma função
function cloneField( ) {
    //duplicar os campos. que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    //pegar os campos. que campo?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ""
    })

    //colocar na página. em q parte??
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
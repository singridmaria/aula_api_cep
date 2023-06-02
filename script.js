const buscarEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => response.json())
    .then((json) => {

        //console.log(json)

        let inputEstado = document.getElementById('estado')

        
        let estados = ''
        json.forEach(estado => 
            estados += `<option value=${estado.sigla}> ${estado.nome}</option>`
            
    );

    inputEstado.innerHTML = estados
        console.log(estados)
    })

}
buscarEstados()
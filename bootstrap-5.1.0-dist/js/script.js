

// function chamaValores(){
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status == 200){
    //         document.getElementById("valores").innerHTML = this.responseText;
    //     }
    // };
    // xhttp.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", true)
    // xhttp.send();
// }


// console.log(xhttp)

// var obj = null
// const valores = document.getElementById("valores")
// var form = document.querySelector("form")
// var realMoeda = document.querySelector('#real')
// var selecionaMoeda = document.querySelector('select')

// fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function(response){
//     return response.json().then(function(json){
//         // var obj = JSON.parse(json)
       
//         // for(var i = 0; i < xhttp.responseText.length; i++ ){
//         for(let i in json){
//             var option = document.createElement('option')
//             option.textContent = json[i].name + ' (' + json[i].code + ')' //[i].nome + ' (' + json[i].code + ')'
//             option.value = json[i].high //[i].high
//             selecionaMoeda.appendChild(option)
//         }
//         // }
//         console.log(json)

//         // form.onsubmit = function(event){
//         //     event.preventDefault()
//         //     if(selecionaMoeda.value == json.high){
//         //         document.getElementById("valores").innerHTML = (realMoeda * json.high)
//         //     }
//         // }
//         document.querySelector('button').addEventListener('click', function(){
//             // alert('FUI CLICADO')
//             var numeroFormatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
//             var valorSelecionado = parseFloat(selecionaMoeda.value)
//             var valorReal = parseFloat(realMoeda.value)
//             // alert(valorReal, valorSelecionado)
//             for(let i in json){
//                 if(valorSelecionado == json[i].high){
//                     // alert(valorReal * json[i].high)
//                     // document.createElement("p") .appendChild(`${numeroFormatado.format(valorReal * json[i].high)}`)
//                     // valores.appendChild(`${numeroFormatado.format(valorReal * json[i].high)} `)
//                     // valores.appendChild(`<li> ${numeroFormatado.format(valorReal * json[i].high)} </li>`)
//                     alert(`${numeroFormatado.format(valorReal * json[i].high)}`)
                    
//                 }
//             }
//         })
        
//     });
// })
// let btn = document.querySelectorAll(".btn-outline-primary")[0]
// btn.style.marginTop = '15px'


// fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
// .then(json => {
//     // return response.json().then(function(json){
//         // var obj = JSON.parse(json)
       
//         // for(var i = 0; i < xhttp.responseText.length; i++ ){
//         for(let i in json){
//             var option = document.createElement('option')
//             option.textContent = json[i].name + ' (' + json[i].code + ')' //[i].nome + ' (' + json[i].code + ')'
//             option.value = json[i].bid //[i].high
//             selecionaMoeda.appendChild(option)
//         }
//         // }
//         console.log(json)

//         let selected = document.querySelectorAll("select")
//         let texto = document.querySelectorAll('.mb-3 .form-label')


//         texto[0].innerHTML = selected[0].options[selected[0].options.selectedIndex].text.split("/")[0]

//         selected[0].addEventListener("click", function(evento) {
//             // alert(evento.target.text.split("/")[0])
//             console.log(evento.target.text)
//             if(texto[0].innerHTML != selected[0].options[selected[0].options.selectedIndex].text.split("/")[0]){
//                 texto[0].innerHTML = evento.target.text.split("/")[0]    //.options[selected[0].options.selectedIndex].text.split("/")[0]
//             }	


//         })

//         // form.onsubmit = function(event){
//         //     event.preventDefault()
//         //     if(selecionaMoeda.value == json.high){
//         //         document.getElementById("valores").innerHTML = (realMoeda * json.high)
//         //     }
//         // }
//         document.querySelector('button').addEventListener('click', function(){
//             // alert('FUI CLICADO')
//             var numeroFormatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
//             var valorSelecionado = parseFloat(selecionaMoeda.value)
//             var valorReal = parseFloat(realMoeda.value)
//             // alert(valorReal, valorSelecionado)
//             for(let i in json){
//                 if(valorSelecionado == json[i].high && (selecionaMoeda.children[selecionaMoeda.selectedIndex].textContent).search(json[i].code) != -1){
//                     // alert(valorReal * json[i].high)
//                     // document.createElement("p") .appendChild(`${numeroFormatado.format(valorReal * json[i].high)}`)
//                     // valores.appendChild(`${numeroFormatado.format(valorReal * json[i].high)} `)
//                     // valores.appendChild(`<li> ${numeroFormatado.format(valorReal * json[i].high)} </li>`)
//                     alert(`${numeroFormatado.format(valorReal * json[i].high)}`)
//                     // valores.appendChild(`${numeroFormatado.format(valorReal * json[i].high)}`) //.textContent = `${numeroFormatado.format(valorReal * json[i].high)}`
//                     valores.innerText = `${numeroFormatado.format(valorReal * json[i].high)}` 
//                 }
//             }
//         })
        
//     // });
// }).catch(console.error)







const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

const valores = document.getElementById("valores")
var form = document.querySelector("form")
var realMoeda = document.querySelector('#real')
var selecionaMoeda = document.querySelector('select')

let btn = document.querySelectorAll(".btn-outline-primary")[0]
btn.style.marginTop = '15px'

const resposta = async () => {
    let payload = await fetch(URL).then(response => response.json()).catch(error => console.log(error.message))
    console.log(payload)
    return await payload

}

        // console.log(resposta().then(resp => resp))
        resposta().then(function(respostaEspera) {

        
            for(let i in respostaEspera){
                var option = document.createElement('option')
                option.textContent = respostaEspera[i].name + ' (' + respostaEspera[i].code + ')' //[i].nome + ' (' + json[i].code + ')'
                option.value = respostaEspera[i].ask //[i].high
                selecionaMoeda.appendChild(option)
            }

            let selected = document.querySelectorAll("select")
            let texto = document.querySelectorAll('.mb-3 .form-label')

            texto[0].innerHTML = selected[0].options[selected[0].options.selectedIndex].text.split("/")[0]

            selected[0].addEventListener("click", function(evento) {
                // alert(evento.target.text.split("/")[0])
                console.log(evento.target.text)
                if(texto[0].innerHTML != selected[0].options[selected[0].options.selectedIndex].text.split("/")[0]){
                    texto[0].innerHTML = evento.target.text.split("/")[0]    //.options[selected[0].options.selectedIndex].text.split("/")[0]
                }	

            })

            document.querySelector('button').addEventListener('click', function(){
                // alert('FUI CLICADO')
                let numeroFormatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                let valorSelecionado = parseFloat(selecionaMoeda.value)
                let valorReal = parseFloat(realMoeda.value)
                // alert(valorReal, valorSelecionado)
                for(let i in respostaEspera){
                    if(valorSelecionado == respostaEspera[i].ask && (selecionaMoeda.children[selecionaMoeda.selectedIndex].textContent).search(respostaEspera[i].code) != -1){

                        alert(`${numeroFormatado.format(valorReal * respostaEspera[i].ask)}`)
                        valores.innerText = `${numeroFormatado.format(valorReal * respostaEspera[i].ask)}` 
                    }
                }
            })
        }).catch(error => console.log(error.message))

        
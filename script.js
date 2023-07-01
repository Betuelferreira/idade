function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano ){
        alert("Verifique os dados e tene novamente")
    }else {
        var res2 = document.getElementById("res2")
        var fsex = document.getElementsByName("txtsexo")
        var idade = ano-fano.value
        var genero = ""
        var imge = document.getElementById("foto")
       /*  var imge = document.createElement("img") */ //cria img dinamicamente 
        // imge.setAttribute("id", "foto"), cria o id
        if (fsex[0].checked){
            genero = "Homem"
            if (idade>=0 && idade <12){
                imge.setAttribute("src", "./imagens/homem-criança.png")
            }else if (idade>12 && idade<=21){
                imge.setAttribute("src", "./imagens/homem-jovem.png")
            }else if (idade > 21 && idade <= 40 ){
                imge.setAttribute("src", "./imagens/homem-adulto.png")
            }else if(idade > 50 && idade<=130){
                imge.setAttribute("src", "./imagens/homem-idoso.png")
            }else{
                imge.setAttribute("src", "./imagens/dead.png")
            }

        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade>=0 && idade<=12){
                imge.setAttribute("src", "./imagens/mulher-criança.png")
            }else if (idade>12 && idade<=21){
                imge.setAttribute("src", "./imagens/mulher-jovem.png")
            }else if (idade > 21 && idade <= 40 ){
                imge.setAttribute("src", "./imagens/mulher-adulta.png")
            }else if(idade > 50 && idade<=130){
                imge.setAttribute("src", "./imagens/mulher-idosa.png")
            }else{
                imge.setAttribute("src", "./imagens/dead.png")
            }
        }
        res.innerHTML = `Detectamos um ${genero} de ${idade}`
        res2.appendChild(imge)
    }
}
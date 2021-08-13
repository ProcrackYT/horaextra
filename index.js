
function calcular(porce) {
    // O salario do cliente
    var salario = Number(document.getElementById("salario").value)
    // Horas mensais do cliente
    var horasMensais = Number(document.getElementById("horasMensais").value)
    // Total de horas extras (100%) do cliente
    var horaExtra100 = Number(document.getElementById("horaExtra100").value);
    // Total de horas extras (50%) do cliente
    var horaExtra50 = Number(document.getElementById("horaExtra50").value)

    // Calculo do valor por cada hora trabalhada do cliente
    var valorHora = salario/horasMensais;
    
    if (salario == 0 ||horasMensais == 0 )  {
        alert("[Erro!] Tente preencher todos os dados")
    }
    else {
        if (horaExtra100 == 0){
            var valorHoraExtra100 = 0
        }
        else {
            var valorHoraExtra100 = valorHora*2
        }
        if (horaExtra50 == 0){
            var valorHoraExtra50 = 0
        }
        else {
            
            var valorHoraExtra50 = valorHora*1.5
        }


        
       
        var total100 = (valorHoraExtra100*horaExtra100)
        var total50 = (valorHoraExtra50*horaExtra50)

        //O que vai aparecer no html

        window.document.getElementById("salarioRes").innerHTML= 'R$' + salario.toFixed(2)
        window.document.getElementById('horaTrabalhoRes').innerHTML= 'R$' + valorHora.toFixed(2)
        window.document.getElementById('horaExtra50Res').innerHTML= 'R$'+total50.toFixed(2)
        window.document.getElementById('horaExtra100Res').innerHTML= 'R$'+total100.toFixed(2)
        window.document.getElementById('valorTotalExtra').innerHTML= 'R$'+(total100+total50).toFixed(2)

        var visibilidade = true;
        
        
            document.getElementById("imprimir").style.display = "block";
        
    }
    

    
    }


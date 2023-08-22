function validar(){
    var valor = document.getElementById("txtValor").value;
    var pInfo = document.getElementById("info");
    if( valor.length == 0 ){
        pInfo.innerHTML = "O campo valor deve ser preenchido!";
        pInfo.style.background = "#f00";
        return false;
    }else if( isNaN( valor ) ){
        pInfo.innerHTML = "Digite números";
        pInfo.setAttribute("style", "background: blue; color:white" );
        return false;
    }else if( valor <= 0 || valor > 10){
        pInfo.innerHTML = "Valor Inválido!";
        return false;
    }else{
        return true;
    }
}


function calcular(){
    valor01 = document.getElementById("txtValor01").value;
    valor02 = document.getElementById("txtValor02").value;

    if( valor01 != "" && valor02.length > 0 ){
        v1 = parseFloat( valor01 );
        v2 = parseFloat( valor02 );
        var numero = { 
            n1 : v1 ,
            n2 : v2 ,
            somar : function(){
                return this.n1 + this.n2;
            } ,
            subtrair : function(){
                return this.n1 - this.n2;
            }
        };

        document.getElementById("pResult").innerHTML = 
            "Soma: " + numero.somar() + 
            "<BR>Subtração: " + numero.subtrair();
    }
}
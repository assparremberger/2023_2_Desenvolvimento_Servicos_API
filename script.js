function calcular(){
    valor01 = document.getElementById("txtvalor01").value;
    valor02 = document.getElementById("txtvalor02").value;

    if( valor01 != "" && valor02.length > 0){
            v1 = parseFloat(valor01)
            v2 = parseFloat(valor02)
            var numero = { 
                n1 : v1 , 
                n2 : v2 ,
                somar : function(){
                    return this.n1 + this.n2;
                },
                subtrair : function(){
                    return this.n1 - this.n2;
                }
            };
            document.getElementById("pResult").innertHTML = 
            "Soma: " + numero.somar() + "<br>SUbtração: " + numnero.subtrair
    }
}
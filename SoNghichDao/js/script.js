$(document).ready(function() {

});

function UCLN(a,b) {  
    if (a == 0 || b == 0){
        return a + b;
    }
    while (a != b){
        if (a > b){
            a -= b;
        }else{
            b -= a;
        }
    }
    return a;
}

function ZnSao(N) {  
    var Ar = []
    for (let i = 0; i < N; i++) {
        if(i > 0 && UCLN(i,N)==1)
        {
            Ar.push(i)
        }
    }
    return Ar
}

function PhanTuNghichDao(a, N) {
    var Zsao = ZnSao(N)
    for (let i = 0; i < Zsao.length; i++) {
        if((a*Zsao[i])%N ==1)
        {
            console.log('Số '+a+' tồn tại phần tử nghịch đảo trong tập Z'+N)
            console.log('Phần tử nghịch đảo là :'+Zsao[i])
        }
    }
}

PhanTuNghichDao(3,26)


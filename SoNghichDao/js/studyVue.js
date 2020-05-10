new Vue({
    el:'#app',
    data:{
        a:'',
        N:''
    },
    methods: {
        ZnSao(N) {  
            var Ar = []
            for (let i = 0; i < N; i++) {
                if(i > 0 && UCLN(i,N)==1)
                {
                    Ar.push(i)
                }
            }
            return Ar
        }
        ,UCLN(a,b) {  
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
        ,PhanTuNghichDao(a, N) {
            var Zsao = ZnSao(N)
            for (let i = 1; i < Zsao.length-1; i++) {
                if((a*Zsao[i])%N ==1 && Zsao[i] == a)
                {
                    return 'Không tồn tại'
                }
                if((a*Zsao[i])%N ==1)
                {
                    return Zsao[i]
                }
            }
        }
    },
})
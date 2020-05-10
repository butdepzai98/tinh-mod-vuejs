new Vue({
    el:'#app',
    data:{
        a:'515',
        x:'307',
        N:'517'
    },
    methods: {
        SoLe(x) {  
            if(x%2 ==1)
                return true
            else
                return false
        },

        Mod(a,x,N){  
            let d =1
            while (x > 0) {
                if(this.SoLe(x)==true)
                {   
                    d = (d*a)%N
                    x = parseInt(x/2)
                    a = Math.pow(a,2)%N
                }
                else
                {
                    x = parseInt(x/2)
                    a = Math.pow(a,2)%N
                }
            }
            return d
        }
    },
});
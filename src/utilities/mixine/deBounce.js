
export default {

    data (){
        return{
            textSetTimeOut: "",
        }    
    },

    methods: {
        deBounce(text, wait = 1000){

            clearTimeout(this.textSetTimeOut);
            this.textSetTimeOut = setTimeout(text, wait);
       }
    }
}
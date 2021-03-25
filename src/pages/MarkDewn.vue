<template>
    <div class="flex flex-wrap w-full">
      <h1 class="w-full text-center font-bold my-3">MarkDown App</h1>

    <section class="w-10/12 m-auto h-screen flex">
       <article class="w-1/2 border h-screen">
        <textarea class="h-full w-full" :value="text" @input="update"></textarea>
       </article>
       <article class="w-1/2 border h-screen bg-blue-200"
       v-html="computeText"
       >
       </article>
    </section>
    </div>
</template>
<script>
import marked from "marked";
import deBounce from "../utilities/mixine/deBounce";
export default {

  mixins:[deBounce],
  data() {
    return{
      text: "",
      textSetTimeOut : "",
    }
  },

  
  computed: {
    computeText(){
      return marked(this.text);
    }
  },

  methods: {
    update(e){
      const eText = () => (this.text = e.target.value)
      this.deBounce(eText, 500)
    },


  }
}

</script>

<style>

</style>
<template>
  <div class="m-auto mt-5">
          <h1 class="text-center font-bold">Animals Are {{ countAnimal }} </h1>

          <p>{{ fullName }}</p>
          <p>{{ lname }}</p>
          <p>{{ fname }}</p>
          <ul class="pt-2">
              <li class="flex justify-between" :key="name.name" v-for="(name, index) in animals"> 
                
              <div >{{ name.name }}  </div>

              <button class="bg-red-600 m-1 border rounded text-white p-1 outline-none" @click="removAnimal(index)">x</button>
                
              </li>


          </ul>
        <form @submit.prevent="onSubmit()" class="mt-5">
          <input class="border rounded border-black outline-none" v-model.lazy="newAnimal"/>
          <button class="border rounded ml-2 bg-gradient-to-r from-red-700 to-gray-500 text-white p-1" type="submit" >Add New</button>
        </form>
      
      </div>
</template>

<script>
export default {
computed:{
    countAnimal(){
      return this.animals.length;
    },

    fullName: {
      get(){
        return `Full name is ${this.fname} ${this.lname}`
      },
      set(fullName){
        
       const name =  fullName.split(" ");
       return this.fname = name[0], this.lname = name[1];
      }
    }
  },

  data(){
    return {
      fname: "Md",
      lname: "Safiullah",
      newAnimal: "gfdgdfg",
      isDisabled: false,
      animals: 
        [{name: "tiger"},
        {name: "Cat"},
        {name: "manky"},
        {name: "cow"}]
      
    }},
    methods:{
      onSubmit(){
        if(this.newAnimal != ''){
            this.animals.unshift({name: this.newAnimal})
        }
          
            this.newAnimal = ''
          },
      
      removAnimal(index){
        this.animals = this.animals.filter((animal,i) => i != index )
      }
    }

}
</script>

<style>

</style>
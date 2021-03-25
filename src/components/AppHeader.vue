<template>
  <div>
      <nav class="bg-gradient-to-r from-blue-900 to-purple-500 text-white px-4 py-2">
          <router-link class="mx-2" v-for="item in list" :key="item.to" v-bind:to="item.to">{{ item.title }}</router-link>
          
      </nav>
  </div>
</template>

<script>
export default {

  data(){
    return{
      list: [
        {title:"Home", to:"/"},
        {title:"Animals", to:"/animals"},
        {title:"Calander", to:"/calander"},
        {title:"MarkDown", to:"/markdown"},
        
      ],
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="m-auto">
      <h1 class="text-center my-2"> Calculator App </h1>

    <section class="flex justify-between mx-2">
        <h2> {{ currentMonthName }} </h2>
        <h2> {{ currentYear }} </h2>
    </section>

      <section class="flex">
          <p class="text-center my-2" style="width:14.28%;" v-for="day in days" :key="day"> {{ day }} </p>
      </section>

      <section class="flex flex-wrap"> 
           <p class="text-center" style="width:14.28%;" v-for="num in startDay()" :key="num"> </p>
          <p class="text-center" style="width:14.28%;" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)"> {{ num }} </p>
      </section>

      <section class="flex justify-between my-4">
          <button @click="prev" class="px-2 border rounded outline-none">Prev</button>
          <button @click="next" class="px-2 border rounded outline-none">Next</button>
      </section>
  </div>
</template>

<script>
export default {

    data(){
      return{
          
          
          currentMonth: new Date().getMonth(),
          currentYear: new Date().getFullYear(),
          
          days:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Set"]
      }
    },

      methods: {

          daysInMonth() {

              return new Date(this.currentYear,this.currentMonth+1, 0 ).getDate();
          },

          startDay() {
              return new Date(this.currentYear, this.currentMonth, 1).getDay();
          },

          prev() {
              if(this.currentMonth === 0){
                  this.currentYear--
                  this.currentMonth = 11
              }else{
                  this.currentMonth--
              }
          },

        next() {
            if(this.currentMonth === 11){
                this.currentYear++
                this.currentMonth = 0
            }else{
                this.currentMonth++
            }
        },

        currentDateClass (num) {
            
            const currentDatebyday = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentCalender = new Date().toDateString();
           
            return currentDatebyday === currentCalender ? "text-blue-900 font-bold" : '';
        }

      },

      computed: {

          currentMonthName () {
              return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month:"long"})
          }
      }
}
</script>

<style>

</style>
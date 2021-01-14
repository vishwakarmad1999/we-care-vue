<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Sofia', cursive;
  color: #2c3e50;
}

.fas {
  padding: 10px;
}
  
.btn {
  width: 300px;
  margin: 10px;
}

.coach, .user {
  margin: 20px;
  background-color: tomato;
  width: 400px;
  height: 400px;
}

.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: cornflowerblue;
  padding: 50px;
}

.cursor {
  cursor: pointer;
}

.bookings-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.booking {
  background-color: cadetblue;
  padding: 10px;
  margin: 10px;
  width: 280px;
}
</style>

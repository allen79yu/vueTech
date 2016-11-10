<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <h2>toggle transition</h2>
      <button @click="showb">ckick</button>
      <transition>
        <div id="bus" v-bind:class="{'show':show}">Hello</div>
      </transition>
    </div>
    <router-link to="/first">simple</router-link>
    <router-link to="/second">ajax</router-link>
    <router-link to="/third/adxdt">params routing</router-link>
    <router-link to="/four">nav menu</router-link>
    <router-link to="/fifth">notifications</router-link>
    <router-link to="/sixth">keyframe</router-link>
    <router-link to="/seven">vuex</router-link>
    <router-view class="view" msg="test"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bn: "tt",
      show: true
    }
  },
  methods:{
    isTrue:function(){
      alert("true");
    },
    showb:function(){
      this.show = !this.show;
    }
  }
}
</script>

<style>
@import 'assets/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.show-enter-active, .show-leave-active{
  border:solid 2px #000;
  transition: 2s ease;
}
.show-leave-active,.show-enter{
  border:solid 2px #000;
}
#bus{
  transition:border 2s ease;
}
.show{
  border: #000 solid 5px;
}
</style>

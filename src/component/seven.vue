<template>
	<div>
		<button @click="adding">click</button>
	</div>
</template>
<script>
import store from './store'

export default {
  methods: {
    adding () {
      store.dispatch('increment');
      console.log(store.state.counter);
    }
  }
}
</script>
<style>
	
</style>
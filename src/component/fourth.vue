<template>
	<div>
		<button @click="hideNav">nav</button>
		<div id="nav" v-bind:class="{hide}" class="s">
			<ul>
				<li>HOME</li>
				<li>WIKI</li>
				<li>Logout</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				msg:'text',
				hide:true
			}
		},
		methods:{
			hideNav:function(){
				this.hide = !this.hide;
			}
		}
	}
</script>
<style>
#nav{
	background: rgba(0,0,0,0.3);
	height: 250px;
	width: 250px;
}
.hide{
	margin-left: -100%;
}
.s{
	transition:margin-left .8s ease;
}
</style>
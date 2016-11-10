<template>
	<div>
		<div class="item" v-for="item in items">{{item}}<button @click="dismiss(item)">X</button></div>
	</div>
</template>
<script>
	export default{
		data (){
			return{
				items:["first notification","2 222","33333","4444","wdvwgwg"],
			}
		},
		methods:{
			dismiss:function(i){

				this.items.splice(this.items.indexOf(i),1);vue
			}
		}
	}
</script>
<style lang="sass">
.item{
	button{
		color: green;
	}
}
.item{
	width: 150px;
	height: 150px;
	background: rgba(0,0,0,0.7);
	color: #fff;
	margin: 15px;
	transition:.6s ease;
}
.leave{
	margin-left:-100%;
}
</style>
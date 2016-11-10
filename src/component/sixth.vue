<template>
	<div>
		<div @click="test">wwww</div>
		<div class="roll"></div>
	</div>
</template>
<script>
	export default{
		data (){
			return {
				text:'test',
			}
		},
		methods:{
			test() { alert(1); 
				console.log(2); 
			}
		}
	}
</script>
<style>
.roll{
	width: 200px;
	height: 200px;
	background: #000;
}
.roll:hover{
	animation-name: mymove;
    animation-duration: 4s;
}
@keyframes mymove {
    0%   {margin-top: 0px;}
    25%  {margin-top: 200px;}
    50%  {margin-top: 100px;}
    75%  {margin-top: 200px;}
    100% {margin-top: 0px;}
}
</style>
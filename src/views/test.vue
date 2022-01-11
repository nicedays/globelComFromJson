<template>
	<div class="my_main">
		<button type="button" @click="myClick('cp1')">1</button>
		<button type="button" @click="myClick('cp2')">2</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			myClick(com){
				this.$myPop(com,{isShow:true})
			}
		}
	}
</script>

<style>
	.my_main{
		width: 150px;
		height: 50px;
		justify-content: space-between;
		display: flex;
		margin: auto auto;
		
	}
	button{
		width: 50%;
	}
</style>

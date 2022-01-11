<template>
	<div v-if="isShow" @click="myClick" class="myClas">我是组件1
		<div class="myClas2" @click="myClick">确定</div>
	</div>
</template>

<script>
	export default{
		name:'components1',
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			myClick(){
				// 点击隐藏组件
				this.isShow=false
			}
		}
	}
</script>

<style>
	.myClas{
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 999;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 5px #ccc;
	}
	.myClas2{
		margin-top: 10px;
		padding-top: 5px;
		text-align: center;
		font-size: 8px;
		border-top: solid 1px #CCCCCC;
	}
</style>

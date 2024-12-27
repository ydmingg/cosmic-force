<script setup>
	import { ref, onMounted, onUpdated, onUnmounted } from "vue";

	// 响应式状态
	const count = ref(0);

	// 用来修改状态、触发更新的函数
	function increment() {
		count.value++;
    }
    
</script>

<template>
	<div @click="increment">Setup 调用方式：{{ count }}</div>
</template>

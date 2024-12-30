
<script setup lang="ts">
    import { ElButton } from 'element-plus'
    import Sfc from '@/components/Sfc.vue'
    import Api from '@/components/Api.vue'
    import Setup from '@/components/Setup.vue'  
    
</script>

<template>
	<main>
		<div class="">首页</div>
        <ElButton>Button</ElButton>
        <Sfc />
        <Api />
        <Setup />

	</main>
</template>

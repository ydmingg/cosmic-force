<template>
	<button class="" @click="count++">{{ count }}</button>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    // 定义导出数据类型
    interface Data {
        count: number;
    }

	export default defineComponent({
		data(): Data {
			return {
				count: 0,
			};
		},
	});
</script>

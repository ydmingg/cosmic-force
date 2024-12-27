<script>
export default {
    data() { 
        return {
            count: 0
        }
    },
    // 定义方法
    methods: {  
        increment() { 
            this.count++
        }
    }
}
</script>

<template>
    <div @click="increment">Api 调用方式：{{count}}</div>
</template>

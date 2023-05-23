<template>
    <header class="header">
        <div class="logo">
            <img src="//src/assets/logo.png" alt="logo" />
        </div>
        <h1 class="title">{{ title }}</h1>
        <div class="search">
            <!-- Đặt component Search của bạn ở đây -->
        </div>
        <div class="time">
            <!-- Đặt component Time của bạn ở đây -->
        </div>
    </header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f2f2f2;
}

.logo {
    /* CSS cho logo */
}

.title {
    /* CSS cho title */
}

.search {
    /* CSS cho search component */
}

.time {
    /* CSS cho time component */
}
</style>

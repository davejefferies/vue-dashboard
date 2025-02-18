<template>
    <AppHeader />
    <div class="main-container">
        <app-sidebar></app-sidebar>
        <app-main></app-main>
    </div>
</template>

<script setup>
    import AppHeader from './components/AppHeader.vue'
    import AppMain from './components/AppMain.vue'
    import AppSidebar from './components/AppSidebar.vue'
</script>

<style lang="scss">
    * {
        font-family: 'Roboto', sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
    }

    .main-container {
        display: flex;
    }
</style>

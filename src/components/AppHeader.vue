<template>
    <div class="header">
        <div class="logo"></div> <!-- Placeholder for logo, could be replaced with an actual logo or text -->
        <!-- Display loading message while user data is being fetched -->
        <div v-if="loading" class="loading">Loading user data...</div>
        <!-- Display user information once loading is complete -->
        <div v-else class="user">
            <div class="name">{{ user.name }}</div>
            <div class="image">{{ user.initials }}</div>
        </div>
    </div>
</template>
  
<script setup>
    // Importing the useDashboard composable to retrieve user data and loading state
    import { useDashboard } from '@/composables/useDashboard'

    // Destructuring loading state and user data from useDashboard composable
    const { loading, user } = useDashboard()
</script>
  
<style lang="scss" scoped>
    .header {
        height: 70px;
        padding: 20px 50px;
        background-color: rgb(1, 38, 69);
        color: #fff;
        display: flex;
        justify-content: space-between;
        box-shadow: 5px 5px 5px #939393;

        .loading {
            padding-top: 20px;
        }

        .logo {
            font-weight: bold;
            font-size: 20px;
        }

        .user {
            display: flex;
            align-items: center;
            font-weight: bold;

            .image {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid #fff;
                background-color: rgb(11, 107, 185);
                margin-left: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
        }
    }
</style>
  
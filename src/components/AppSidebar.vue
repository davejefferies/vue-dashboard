<template>
    <!-- Sidebar container with dynamic class for expanded/collapsed state -->
    <div class="sidebar" :class="{'expanded' : isSidebarOpen}">
        <!-- Sidebar toggle button to open/close the sidebar -->
        <button class="sidebar-toggle-btn" @click="toggleSidebar">
            <Fa v-if="isSidebarOpen" :icon="faArrowLeft"></Fa>
            <Fa v-else :icon="faArrowRight"></Fa>
            <i :class="isSidebarOpen ? 'fas fa-arrow-left' : 'fas fa-arrow-right'"></i>
        </button>
        <!-- Sidebar navigation items -->
        <div class="nav-items">
            <div v-for="item in items" class="nav-item" :title="item.title" :key="item.title" @click="addWidget" :class="{'exceeded' : exceededWidgets}">
                <Fa :icon="item.icon"></Fa>
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import Fa from 'vue-fa'
    import {
        faArrowLeft,
        faArrowRight,
        faDashboard
    } from '@fortawesome/free-solid-svg-icons'
    import { useDashboard } from '@/composables/useDashboard'

    // Destructuring methods and states from the useDashboard composable
    const { addWidget, isSidebarOpen, toggleSidebar, exceededWidgets } = useDashboard()

    // List of sidebar items with their corresponding icons
    const items = [
        {
            title: 'Add Widget',
            icon: faDashboard
        }
    ]
</script>
  
<style lang="scss" scoped>
    .sidebar {
        position: relative;
        width: 50px;
        min-width: 30px;
        min-height: calc(100vh - 70px);
        background-color: #113c60;
        color: #fff;
        box-shadow: 5px 5px 5px #939393;
        transition: all 0.3s ease-in-out;
        flex-shrink: 0;

        &.expanded {
            width: 250px !important;
            min-width: 130px !important;
        }

        .sidebar-toggle-btn {
            position: absolute;
            top: 5px;
            right: -17px;
            background-color: #1c7dde;
            border: none;
            color: #fff;
            padding: 10px 12px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1001;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        
            &:hover {
                background-color: #4c92d8;
            }
        }

        .nav-items {
            padding-top: 20px;

            .nav-item {
                white-space: nowrap;
                overflow: hidden;
                padding: 25px 12px;
                cursor: pointer;

                &.exceeded {
                    cursor: default;
                }

                &:hover {
                    background-color: rgb(1, 38, 69);
                }

                .vue-fa {
                    margin-right: 20px;
                    font-size: 22px;
                }

                span {
                    display: inline;
                    @media only screen and (max-width: 1300px) {
                    display: none;
                    }
                }
            }
        }
    }
</style>
  
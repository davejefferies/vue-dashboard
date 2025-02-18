<template>
    <div class="main">
        <!-- Draggable container for widgets -->
        <draggable :list="widgets">
            <template #item="{ element }">
                <!-- Renders each widget component and passes its data -->
                <app-widget :data="element"></app-widget>
            </template>
        </draggable>
    </div>
</template>
  
<script setup>
    import { useDashboard } from '@/composables/useDashboard'
    import draggable from 'vuedraggable'
    import AppWidget from './AppWidget.vue'

    // Retrieve the widgets array from the useDashboard composable
    const { widgets } = useDashboard()
</script>
  
<style lang="scss" scoped>
    .main {
        padding: 30px;
        display: flex;
        flex-flow: row wrap;
        flex-shrink: 0;

        & > div {
            width: 100%;
        }
    }
</style>
  
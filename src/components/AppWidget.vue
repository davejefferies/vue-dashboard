<template>
    <div class="widget">
        <div class="header">
            <div class="title">{{ props.data.title }}</div>
            <span class="close" @click="removeWidget(props.data.id)">&times;</span>
        </div>
        <div class="content">{{ props.data.content }}</div>
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue'
    import { useDashboard } from '@/composables/useDashboard'
    
    const { removeWidget } = useDashboard()

    // Defining props for the widget component
    // This expects a `data` prop containing widget details (title, content, id, etc.)
    const props = defineProps(['data'])
</script>
  
<style lang="scss" scoped>
    .widget {
        display: inline-block;
        width: 300px;
        margin: 15px;
        border: solid 1px #e1e2e1;
        height: 300px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px #bdbdbd;
        cursor: move;

        .header {
            padding: 2px 16px;
            background-color: #e1e2e1;
            position: relative;
            height: 40px;
            padding: 0;
            
            .title {
                font-size: 28px;
                text-align: center;
                height: 40px;
                line-height: 40px;
            }

            .close {
                position: absolute;
                top: 0;
                right: 10px;
                float: right;
                font-size: 28px;
                font-weight: bold;
                text-align: center;
                height: 40px;
                line-height: 40px;
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
        }

        .content {
            padding: 10px;
        }
    }
</style>
  
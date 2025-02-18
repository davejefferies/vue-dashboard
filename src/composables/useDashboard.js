import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '@/store/dashboard'

export function useDashboard() {
    // Access the dashboard store using Pinia
    const dashboardStore = useDashboardStore()
    // Extracting reactive state variables from the store
    const { widgets, isSidebarOpen, user, loading, maxWidgets } = storeToRefs(dashboardStore)
    // Extracting actions from the store
    const { addWidget, removeWidget, toggleSidebar, fetchUser } = dashboardStore

    // Fetch user data when the component is mounted if it hasn't been loaded
    onMounted(() => {
        if (!user.value)
            fetchUser()
    })

    // Function to check if the maximum number of widgets has been reached
    const exceededWidgets = () => {
        return widgets.value.length === maxWidgets.value
    }

    // Expose state and functions for use in components
    return {
        addWidget,
        isSidebarOpen,
        loading,
        removeWidget,
        toggleSidebar,
        user,
        widgets,
        exceededWidgets
    }
}

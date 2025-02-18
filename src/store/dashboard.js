import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        isSidebarOpen: true, // Controls whether the sidebar is open or closed
        loading: true, // Indicates whether user data is being loaded
        user: null, // Stores user information (name, initials, etc.)
        widgets: [], // List of widgets on the dashboard
        maxWidgets: 4 // Maximum number of widgets allowed
    }),
    actions: {
        // Adds a new widget if the max limit is not exceeded
        addWidget() {
            if (this.widgets.length < this.maxWidgets)
                this.widgets.push({
                    id: new Date(),
                    title: Math.random().toString(36).substring(2,7),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                })
        },
        // Removes a widget from the list based on its ID
        removeWidget(id) {
            this.widgets = this.widgets.filter(widget => widget.id !== id)
        },
        // Toggles the sidebar open or closed
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen
        },
        // Simulates fetching user data (mock API call with a delay)
        async fetchUser() {
            this.loading = true;
            setTimeout(() => {
                this.user = {
                    name: 'David Jefferies',
                    initials: 'DJ'
                }
                this.loading = false
            }, 1500);
        },
    },
    // Getters (currently empty, but can be used for computed properties)
    getters: {}
})
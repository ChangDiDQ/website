export default [
    {
        path: '/maintenance',
        name: 'maintenanceTargetView',
        component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
        children:[
            {
                path: '',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
            },
            {
                path: 'test',
                name: 'maintenanceTarget_test',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test.md',
                },
            },
            {
                path: 'test2',
                name: 'maintenanceTarget_test2',
                component: ()=>import('@/views/maintenanceTargetView/maintenanceTargetView.vue'),
                meta:{
                    markdownRelativePath: 'test2.md',
                },
            }
        ],
    }
]
export type MaintenanceListTargets ={
    targets:{
        title:string,
        description:string,
        imagePath:string,
        routeName:string,
    }[],
}

const maintenanceListTargets:MaintenanceListTargets={
    targets:[
        {
            title: '标题',
            description: '描述',
            imagePath: '图像路径',
            routeName: 'maintenanceTarget_test'
        },
        {
            title: '标题2',
            description: '描述2',
            imagePath: '图像路径2',
            routeName: 'maintenanceTarget_test2',
        }
    ]
}

export default maintenanceListTargets;
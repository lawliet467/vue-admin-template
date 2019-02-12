let menuList = [
	{
        name: 'home',
        displayName: '首页',
        url: '/',
        icon: 'el-icon-menu'
    },
    /*用户管理*/
    {
        name: 'user',
        displayName: '用户管理',
        url: '/user',
        icon: 'el-icon-menu',
        children: [
            {
                name: 'user-special',
                displayName: '特殊用户',
                url: '/user/special'
            },
        ]
    },
    
    /*后台管理*/
    {
        name: 'admin',
        displayName: '后台管理',
        url: '/admin',
        icon: 'el-icon-menu',
        children: [
            {
                name: 'admin-setting',
                displayName: '用户设置',
                url: '/admin/setting'
            },
        ]
    },
]

export default menuList

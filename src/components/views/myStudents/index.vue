<template>
    <div class="myStudentsGsx">
        <input type="search" placeholder="请输入你想输入的东西">
        <case-bar
        :tagList = 'tagList'
        >
        </case-bar>
        <Tabs @on-click="addActive" v-model="tabValue">
            <TabPane label="最近更新" name="0">最近更新</TabPane>
            <TabPane label="服务中" name="1">服务中</TabPane>
            <TabPane label="已交接" name="2">已交接</TabPane>
	    </Tabs>
        <table-gsx :columns="columns1" :data="data1" top='200'>
        </table-gsx>
        
    </div>
</template>

<script>
    import caseBar from '../../modules/caseBar'
    import tableGsx from '../../modules/tableGsx'
    export default {
        data() {
            return {
                tagList: ['不限', '+ 筛选'],
                tabValue: 0,
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {   
                        align: 'left',
                        title: '学生',
                        key: 'name'
                    },
                    {   
                        align: 'center',
                        title: '服务阶段',
                        key: 'age'
                    },
                    {
                        align: 'center',
                        title: '入学季节',
                        key: 'address'
                    },
                    {
                        align: 'center',
                        title: '规划状态',
                        key: 'address',
                    },
                    {
                        align: 'center',
                        title: '接案时间',
                        key: 'address',
                    },
                    {   
                        align: 'left',
                        title: '任务进度',
                        render: (h, params) => {
                            return h('div', [
                                h('Progress', {
                                    props: {
                                        percent: params.row.age,
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                }),
                                h('Tooltip', {
                                    props: {
                                        content: params.row.age,
                                        transfer: true,
                                        placement: 'top-start',
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display:'inline-block',
                                        width: '24px',
                                        height: '20px',
                                        position: 'absolute',
                                        right: '36px',
                                        top: '12px',
                                        cursor: 'pointer',
                                    },
                                }),
                                
                            ]);
                        }
                    },
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]

            }
        },

        components: {
            caseBar,
            tableGsx
        },

        methods: {
            addActive() {

            }

        }

    }
</script>

<style lang = 'less'>
    .myStudentsGsx {

    }

</style>

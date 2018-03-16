<template>
    <div class="caseManageGsx">
        <input type="search" placeholder="请输入你想输入的东西">
        <case-bar
        :tagList = 'tagList'
        >
        </case-bar>
         <case-bar
        :tagList = 'tagList1'
        > 
        </case-bar>
        <Tabs @on-click="addActive" v-model="tabValue">
            <TabPane label="最近更新" name="0"></TabPane>
            <TabPane label="未结案" name="1"></TabPane>
            <TabPane label="服务中" name="2"></TabPane>
            <TabPane label="已结案" name="3"></TabPane>
	    </Tabs>
        <table-gsx :columns="columns1" :data="data1">
        </table-gsx>
        <!-- <div class="contentAro" v-for="(item, index) in data1" :style="{top:230+index*135+'px'}" :key="index">
            <p class="contentTitle"><span class="title">中美方</span><span class="title">中美方</span><a class="titleRight">进入服务组 ></a></p>
            <div class="tableContent">
                <span v-for="(item, index) in tagNum" :key="index">
                    <a>{{item.count}}</a> <br>
                    <i>{{item.detail}}</i>
                </span>
            </div>
        </div> -->
       
    </div>
</template>

<script>
    import caseBar from '../../modules/caseBar'
    import tableGsx from '../../modules/tableGsx'
    export default {
        data() {
            return {
                tagList: ['张晓红', '李晓明', '大家好', '好大家', '张晓红', '李晓明', '大家好', '好大家'],
                tagList1: ['不限', '+ 筛选'],
                tabValue: '0',
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
            addActive(val) {
                this.tabValue = val
            }
        }
    }
</script>

<style lang="less">
    .caseManageGsx {
        position: relative;
        .contentAro {
            position: absolute;
            width: 100%;
            height: 100px;
            .tableContent {
                width: 95%;
                height: 60px;
                margin: 0 auto;
                box-shadow: 0 0 5px #999;
                padding: 12px  0;
                display: flex;
                justify-content: space-around;
                span {
                    display: block;
                    border-right: 1px solid #e5e5e5;
                    text-align: center;
                    width: 100%;
                }
                
            }
            .contentTitle {
                padding-left: 50px;
                margin-bottom: 15px;
                .titleRight {
                    float: right;
                    margin-right: 36px;
                }
                .title {
                    display: inline-block;
                    padding: 0px 12px   ;
                    border-radius: 2px;
                    color: #fff;
                    background-color: #d0d0d0;
                    margin-right: 10px;
                }
            }
        }
        .ivu-table-row {
            position: relative;
            left: 0px;
            height: 135px;
            .ivu-table-cell {
                position: relative;
                padding-top: 13px;
            }
            .ivu-table-column-center,.ivu-table-column-left {
                vertical-align: top;
            }
        }

    }
</style>

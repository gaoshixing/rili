<template>
    <div class="conectCheckGsx">
        <Tabs @on-click="addActive" v-model="tabValue">
            <TabPane label="待审批" name="0"></TabPane>
            <TabPane label="已审批" name="1"></TabPane>
	    </Tabs>
        <input type="text" placeholder="请输入学生姓名/手机号/EC/规划老师姓名">
        <p>{{planType}} <i>{{planNum}}</i></p>
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabValue: 0,
            planType: '待审核',
            planNum: 0,
            columns1: [
                {
                    title: '学生姓名',
                    align: 'center',
                    key: 'name'
                },
                {
                    title: '申请阶段',
                    align: 'center',
                    key: 'age'
                },
                {
                    title: '规划老师',
                    align: 'center',
                    key: 'address'
                },
                {
                    title: '提交时间',
                    key: 'address'
                },
                {
                    title: '操作',
                    align: 'center',
                    render: (h, params) => {
                            return h("a",{
                                on:{
									click: () => {
										this.$router.push({
											name: "connectCheckDetail",
											query: {
												id: params.row.id
											}
										});
									}
								}
                            },
							'审批交际表')
                        }
                }
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

    methods: {
        addActive(val) {
            this.tabValue = val
            this.planType = val == 0 ? '待审核' : '已审批'
        }
    }
}
</script>

<style lang='less'>
    .conectCheckGsx {
        i {
            font-size: 18px;
            color: red;
            font-style: normal;
        }
    }

</style>

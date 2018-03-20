<template>
    <div class="conectCheckGsx">
        <Tabs @on-click="addActive" v-model="tabValue">
            <TabPane label="待审批" name="0"></TabPane>
            <TabPane label="已审批" name="1"></TabPane>
	    </Tabs>
        <input type="text" placeholder="请输入学生姓名/手机号/EC/规划老师姓名">
        <p>{{planType}} <i>{{planNum}}</i></p>
        <Table v-if="tabValue != 1" :columns="columns1" :data="data1"></Table>
        <Table v-if="tabValue != 0" :columns="columns2" :data="data2"></Table>
        <Modal
        v-model="modal1"
        title="查看结果"
        @on-ok="ok"
        width= '728'
        @on-cancel="cancel">
        <div class="baseInfo" style="over-float: hidden">
            <div style="width: 50%;float:left"><p>交接人：{{user.name}}</p><p>规划老师：{{user.name}}</p></div>
            <div style="width: 50%;float:left"><p>申请阶段：{{user.stage}}</p><p>交接申请提交时间：{{user.stage}}</p></div>
        </div>
        <div class="comment" style="over-float: hidden;margin: 10px 15px;">
            <div style="width: 20%; float:left">备注：
            </div>
            <div style="width: 80%; float:left">
                {{user.comment}}
            </div>
        </div>
        <div class="result">
            <p>审批结果:{{user.state}}</p>
            <p>{{user.reason}}</p>
        </div>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '刘晓华',
                stage:' 2017.1.1',
                comment: '54对阿塞拜疆快点吧几十块的把控大陆上的蜡不舍得都比较卡舍不得看见爱上别的空间大空间上的比较卡舍不得卡死博大科技不断加快三点加设备科技大傻逼就看到',
                state: '驳回',
                reason: '长得丑'
            },
            tabValue: 0,
            planType: '待审核',
            planNum: 0,
            modal1: false,
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
            ],
            columns2: [
                {
                    title: '学生姓名',
                    align: 'center',
                    key: 'name'
                },
                {
                    title: '规划老师',
                    align: 'center',
                    key: 'age'
                },
                {
                    title: '审批结果',
                    align: 'center',
                    key: 'address'
                },
                {
                    title: '审批时间',
                    key: 'address'
                },
                {
                    title: '操作',
                    align: 'center',
                    
                    render: (h, params) => {
						return h("div", [
                            h("a",{
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
                            }, '查看交接表'),
                             h("a",{
                                style: {
                                    marginLeft: '15px' 
                                },
                                on:{
									click: () => {
                                        this.modal1 = true
									}
                    			}
                            }, '查看结果')
                        ])
                    }
                }
            ],
            data2: [
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
            ],  
        }
    },

    methods: {
        addActive(val) {
            this.tabValue = val
            console.log(val)
            this.planType = val == 0 ? '待审核' : '已审批'
        },
        cancel() {

        },
        ok() {

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
        .baseInfo {
            overflow: hidden;
           .left {
               width: 50%;
               float: left;
           }
        }
        .comment {
            overflow: hidden;
            margin: 10px 0 15px;
            .left {
                width: 20%;
                float: left;
            }
            .right {
                width: 80%;
                float: left;
            }
        }
    }

</style>

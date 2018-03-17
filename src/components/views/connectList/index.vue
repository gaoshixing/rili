<template>
    <div class="connectListGsx">
        <Tabs @on-click="addActive" v-model="tabValue">
            <TabPane label="最近更新" name="0">最近更新</TabPane>
            <TabPane label="待完成" name="1">服务中</TabPane>
            <TabPane label="已完成" name="2">已交接</TabPane>
	    </Tabs>
        <input type="search" placeholder="请输入你想输入的东西">
        <case-bar
        :tagList = 'tagList'
        >
        </case-bar>
        <div class="connect" v-for="(item, index) in studentList" :key="index">
            <div class="left">
                <a>{{item.name}}</a><br/>
                <span class="stType">本科</span>
                <span class="stType">本科</span>
                <span class="stType">本科</span>
                <div class="statusZhang">
                    <i :class="{'iconfont':true, 'icon-zhang':true, 'agree': item.status == 'agree', 'reject':item.status == 'reject','waiting':item.status == 'waiting'}" ></i>
                    <span class="textZhang">{{item.text}}</span>
                </div>
            </div>
            <div class="center" v-if='item.reason.length'>
                <div class="aro">
                    <div class="hideDiv">
                        <p>{{item.reason}}</p>
                    </div>
                    <div class="aaa">
                        <p class="centerContent" v-if="arr[index]">
                            <Tooltip placement="top">
                                <p class="more">{{item.reason}}</p >
                                <div slot="content">
                                    {{item.reason}}
                                </div>
                            </Tooltip>
                        </p>
                        <p v-else class="centerContent">{{item.reason}}</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <a>查看交接表</a>
            </div>
        </div>
    </div>
</template>

<script>
    import caseBar from '../../modules/caseBar'
    export default {
        data() {
            return {
                tabValue: 0,
                tagList: [123,333],
                arr: [],
                arr1: [],
                studentList: [
                    {name: '我是谁', text: '通过', status: 'agree', reason: 'w家家好大ssssssssssssssssss家好大好lhok你FSLKH大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家好家好好大家好大家好好好好大家好大家大家好好大家好大家好大家好大'},
                    {name: '我是谁', text: '驳回', status: 'reject', reason: 'w家家好大ssssssssssssssssss家好大好lhok你FSLKH大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家好家好好大家好大家家大家大家大家大家大'},
                    {name: '我是谁', text: '待审核', status: 'waiting', reason: 'w家家好大ssssssssssssssssss家好大好lhok你FSLKH大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家大家好家好好大家好大家家大家大家大家大家大家大'},
                    {name: '我是谁', text: '通过', status: 'agree', reason: 'w家家好好好大家好大家大家大家大家大家大家大'},
                    {name: '我是谁', text: '通过', status: 'agree', reason: 'w家家好好好大家好大家家大家大家大家大家大'},
                ]
            }
        },

        components: {
            caseBar
        },
        mounted() {
          this.addActive()
          this.wResize()
            window.onresize= () => {
                this.wResize()
            }
        },
        methods: {
            addActive() {
            },

            wResize() {
                let allAro = this.$el.querySelectorAll('.aro')
                let allCenterContent = this.$el.querySelectorAll('.hideDiv')
                for(let i = 0; i < allAro.length; i++) {
                    console.log(allCenterContent[i].clientHeight)
                    if(allCenterContent[i].clientHeight > 65) {
                        this.$set(this.arr, i, i+1)
                    }else {
                        this.$set(this.arr, i, 0)
                    }
                }
            }
        }
    }
</script>

<style lang = 'less'>
    .connectListGsx {
        .connect {
            overflow: hidden;
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-bottom: 1px solid #e5e5e5;
            .left,.center,.right {
                float: left;
                height: 61px;
            }
            .left {
                width: 44%;
                padding: 16px 20px;
                position: relative; 
                .stType {
                    padding: 1px 16px;
                    color: #fff;
                    background-color: #d0d0d0;
                    margin-right: 10px;
                    border-radius: 3px;
                }
                .statusZhang {
                    position: absolute;
                    right: 20px;
                    top: -1px;
                }
                .textZhang {
                    font-size: 10px;
                    display: inline-block;
                    width: 45px;
                    text-align: center;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    color: #fff;
                    transform: translate(-50%, -50%) rotate(-21deg);
                }
                .icon-zhang {
                    font-size: 45px;
                }
                .agree {
                    color: #a1dddb;
                }
                .reject {
                    color: #eaacb7;
                }
                .waiting {
                    color: #fbe8b5;
                }
            }
            .center {
                width: 40%;
                padding: 12px 55px;
                .hideDiv {
                    padding: 12px 55px;
                    width: 40%;
                    position:absolute;
                    left: 0;
                    top: 0;
                    visibility: hidden;
                }
                .centerContent {
                    
                }
                p {
                    line-height: 1.1em;
                }
                .more {
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:3;  
                }
            }
            .right {
                width: 16%;
                text-align: center;
                line-height: 61px;
            }
        }
    }
</style>

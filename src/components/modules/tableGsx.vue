<template>
    <div class="tableGsx">
        <p class = 'tableTittle'>
            <span>当前学生数</span>
            <i class="count"> {{studentNum}} </i>
            <!-- <Dropdown trigger="click" style="border: 1px solid #ccc; padding: 2px 5px; float: right;margin-right: 20px">
                <a href="javascript:void(0)">
                    列表自定义选项
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown> -->
        </p>
        <Table :columns="columns" :data="data">
        </Table>
        <div class="contentAro" v-for="(item, index) in data" :style="{top:top/1+index*135+'px'}" :key="index">
            <p class="contentTitle"><span class="title">中美方</span><span class="title">中美方</span><a class="titleRight">进入服务组 ></a></p>
            <div class="tableContent">
                <span v-for="(item, index) in tagNum" :key="index">
                    <a>{{item.count}}</a> <br>
                    <i>{{item.detail}}</i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        studentNum: {
            type: String,
            default: 0
        },
        top: {
            type: String,
            default: 230
        },
        columns: {
            type: Array,
            default: () => {
                return []
            }
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },

    data() {
        return {
            tagNum: [{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'},{count: 3/2, detail: 'GPA'}],

        }
    }
}
</script>

<style lang='less'>
    .tableGsx {
        .tableTittle {
            font-size: 12px;
            .count {
                color: red;
                font-size: 18px;
                font-style: normal;
            }
        }
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

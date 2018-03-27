<template>
  <div class="connectCheckDetail">
        <div class="detailSelect">
            <p>
                <Button type="primary">通过</Button>&nbsp;&nbsp;&nbsp;<Button type="primary">驳回</Button>
            </p>
        </div>
        <div class="contentInfo">
            <ul>
                <li><span>交接人: </span>{{userInfo.joinName}}</li>
                <li><span>交接对象: </span>{{userInfo.joinObj}}</li>
                <li><span>交接时间: </span>{{userInfo.joinTime}}</li>
                <li><span>交接材料: </span> <a @click="routerGo('routerName')">学生档案</a>
                    <ul>
                        <li v-for="(item, index) in studentMaterialList" :key="index">
                            <i></i> <span>{{item.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="contentTable">
            <p style="margin: 20px 0">交接表：</p>
            <ul class="tableUl">
                <li class="tableLi" v-for="(item, index) in tableList" :key="index">
                    <span class="tableLeft">{{item.name}}</span><span class="tableRight">{{item.val}}</span>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return  {
            userInfo: {
                joinName: 'Cherr(上海--销售)',
                joinObj: 'liyu',
                joinTime: '20186855'
            },
            studentMaterialList: [
                {name: 'qudkjabdj'},
            ],
            tableList: [
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
                {name: '1212', val: '46546'},
            ]
        }
    },

    methods: {
        routerGo(routerName) {
            this.$router.push({
                name: routerName
            })
        }
    }
}
</script>

<style lang='less'>
    .connectCheckDetail {
        .detailSelect p {
            text-align: right;
            margin: 20px 0;
        }
        .contentTable {
            .tableLi {
                border-bottom: 1px solid #d9d9d9;
                background-color: #e6e6e6;
                .tableLeft, .tableRight {
                    width: 30%;
                    display: inline-block;
                    text-align: center;
                    padding: 11px 35px;
                }
                .tableRight {
                    width: 70%;
                    background-color: #f1f1f1;
                }
            }
        }
    }
</style>


<template>
    <div class="tagManageGsx">
        <div class="content">
            <div class="tagLeft">
                <div class="title">
                    <p>标签管理 <a href="javascript:;">创建分组</a></p>
                </div>
                <!-- :class="{active:state.item.id == item.id}" -->
                <div class="asideList">
                    <p v-for="(item, index) in tagList" :key='index' class="res-item" draggable="true" @dragenter="handleDragEnter($event,item)" @dragend.prevent="handleDragEnd($event,item)">
                        <span :style="{backgroundColor:item.color}" class="ball"></span>{{item.text}}<span @click.stop="loadMore(index)" class="more">..点击..</span>
                    </p>
                </div>
            </div>
            <div class="tagRight">
                <div class="contentTitle">
                    <p>客户管理</p>
                </div>
                <div class="contentTag">
                    <p class="addTag"><a href="javascript:;">添加标签</a><Checkbox v-model="single" @on-change="allow">允许这组标签多选</Checkbox></p>
                    <div class="littleTag">
                        <tag-module
                        :littleTag='littleTag'
                        >
                        </tag-module>
                    </div>
                </div>
            </div>
        </div>
        <div ref="moreList" v-show="isShow" class="moreList">
            <p @click="hiddenMore" v-for="item in moreList">{{item}}</p>
        </div>
    </div>
</template>

<script>
import tagModule from './tagModule'
export default {
    data() {
        return {
            isSelf: NaN,
            state: {
                item: {},
                dragHoverItem: {}
            },
            isShow: false,
            littleTag: ['hidahd','hidahd','hidahd','hidahd','hidahd','hidahd','hidahd','hidahd','hidahd','hidahd','hidahd', 'ssada', 'dadad', 'dadsa'],
            tagList: [
                {color:'red', text: '任务1'},
                {color:'red', text: '任务2'},
                {color:'red', text: '任务3'},
                {color:'red', text: '任务4'},
                {color:'red', text: '任务5'},
                {color:'red', text: '任务6'},
                {color:'red', text: '任务7'},
            ],
            moreList: ['你好世界', '你好世界','你好世界','你好世界','你好世界','世界你好'],
            single: '',
        }
    },

    components: {
        tagModule,
    },

    watch: {
       
    },

    computed: {
       
    },

    mounted() {
        document.addEventListener("click", this.hiddenMore, false);
    },

    methods: {
        addClick() {
            document.addEventListener("click", this.hideMenu, false);
        },

        hiddenMore() {
            this.isShow = false
        },

        allow() {
            
        },

        loadMore(index) {
            this.isShow = index +1 > 0 ? true :false
            this.$refs.moreList.style.top = `${100+ index*46}px`
        },

        handleDragEnter(e, item) {
            this.state.dragHoverItem = item;
        },

        handleDragEnd(e, item) {
            let resList = this.tagList.concat([]);
            let index = this.getItemIndex(resList, this.state.dragHoverItem);
            let rindex = this.getItemIndex(resList, item);
            resList.splice(rindex, 1);
            resList.splice(index, 0, item);

            let menuList = [];
            resList.forEach((item, i) => {
                menuList.push({ id: item.text, sort: i+1 });
            });
            console.log(menuList)
            // sortMenu(JSON.stringify(menuList))
            //     .then(valid.call(this))
            //     .then(res => {
            //     if (res.ok) {
            //         this.$store.dispatch('portal/updateAppMenu');
            //     }
            //     })
            //     .catch(errors.call(this));
            },
        getItemIndex(arr,item) {
            for(let i in arr){
                if(arr[i].text==item.text){
                    return i;
                }
            }
            return -1;
        }
    },       
}
</script>

<style lang='less'>
    .tagManageGsx {
        .content {
            overflow: hidden;
        }
        box-shadow: 0 0 8px gray;
        font-size: 14px;
        position: relative;
        .tagLeft {
            float: left;
            width: 25%;         
            border-right: 1px solid #e0e0e0;
            .title {
                padding: 0 13px 0 20px;
                border-bottom: 1px solid #e0e0e0;
                line-height: 50px;
                font-weight: 800;
                a {
                    float: right;
                }
            }
            .asideList {
                padding: 32px 0;
                p { 
                    padding: 0 20px;
                    height: 44px;
                    line-height: 44px;
                }
                p:hover {
                    background-color: #daf2f1;
                    .more {
                        display: block;
                    }
                }
                .active {
                    background-color: #daf2f1;
                }
                .ball {
                    float: left;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    margin-right: 10px;
                    margin-top: 13px;
                }
                .more {
                    display: none;
                    font-weight: 500;
                    float: right;
                    cursor: pointer;
                }
                
            }
        }
        .tagRight {
            width: 75%;
            float: left;
            .contentTitle {
                line-height: 50px;
                padding-left: 20px;
                border-bottom: 1px solid #e0e0ee;
                
            }
            .contentTag {
                .addTag {
                    padding: 19px 20px;
                    a {
                        margin-right: 33px;
                    }
                }
                .littleTag {
                    padding: 10px 20px;
                }
            }

        }
        .moreList {
            width: 148px;
            padding: 15px 5px;
            position: absolute;
            left: 23%;
            top: 0;
            z-index: 3;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0 0 3px gray;
            p {
                line-height: 32px;
                cursor: pointer;
            }
        }
    }
</style>


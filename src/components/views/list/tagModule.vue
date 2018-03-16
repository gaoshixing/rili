<template>
   <ul ref="oBox" class="boxGsx">  
            <li @dragenter="handleDragEnter($event,item)"  draggable="true"  @dragend.prevent="handleDragEnd($event,item)" v-for="(item, index) in littleTag" :key="index">
                <Button style="width:118px;height:34px;" type="ghost">
					<span class="tagText">{{item}}</span>
                    <Dropdown transfer style="float:right">
                        <a href="javascript:void(0)">
                            <Icon style="" type="chevron-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>修改名称</DropdownItem>
                            <DropdownItem>修改标签</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
				</Button>
            </li>  
        </ul>  
</template>

<script>
export default {
    props: {
        littleTag: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            oBoxWidth: '',
             state: {
                item: {},
                dragHoverItem: {}
            },
        }
    },

    mounted() {
    },
    methods: {
        handleDragEnter(e, item) {
            this.state.dragHoverItem = item
        },

        handleDragEnd(e, item) {
            let resList = this.littleTag.concat([]);
            let index = this.getItemIndex(resList, this.state.dragHoverItem);
            let rindex = this.getItemIndex(resList, item);
            resList.splice(rindex, 1);
            resList.splice(index, 0, item);
            let menuList = [];
            resList.forEach((item, i) => {
                menuList.push({ id: item, sort: i+1 });
            });
            console.log(menuList)
        },

         getItemIndex(arr,item) {
            for(let i in arr){
                if(arr[i].text==item.text){
                    return i;
                }
            }
            return -1;
        },
    }
}
</script>

<style lang='less'>
        .boxGsx{  
            width: 100%;  
            height: 100%;  
            list-style: none;  
            position: relative;
            .tagText {
                display: inline-block;
                width: 70px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space:nowrap;
                text-align: left;
            }
            .active{  
                background: #44bcb7;
                color: #fff;
            }
            li {
                display: inline-block;
                margin-left: 10px;
                width: 118px;
                height: 34px;
                margin-top: 10px;
            }  
        }  
</style>

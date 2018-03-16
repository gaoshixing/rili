<style lang="less">
.analyseBar {
    line-height: 32px;
        .titleBar {
        font-size: 12px;
        span {
            padding: 5px 10px;
            cursor: pointer;
            margin-right: 5px;
        }
        span:first-child {
            cursor: auto;
            color: #b8b8b8;
			padding: 0;
			margin-right: 15px;
        }
        .active {
            background-color: #44bcb6;
            color: white;
        }
   }
}
</style>
<template>
    <div class="analyseBar">
       <div class="titleBar">
         <p><span style="margin-right:15px;">{{title}}：</span><span  v-for="(item, index) in tagList" :class="{active:num === index}" @click="addAcitve(index)">{{item}} </span></p>
       </div>
     </div>
</template>
<script>
export default {
  	props: {
		title: {
			type: String,
			default: '中方顾问'
		},

		tagList: {
			type: Array,
			default: function() {
				return [];
			}
		}
  	},
  	data() {
		return {
            num: 0,
        };
  	},
	methods: {
		addAcitve(index) {
            this.num = index
			this.$emit('getIndex', index)
		}
	}
};
</script>



<style lang='less'>
	.leaderIndex {
		.title {
			line-height: 50px;
			color: white;
			background: gold;
			text-align: center;
		}
		.leaderList {
			
			p {
				padding: 0 15px;
				line-height: 30px;
				border-bottom: 1px solid #ccc;
			}
			ul,li {
				list-style: none;
				margin: 0;	
				padding: 0 10px;
			}
			li {
				overflow: hidden;
				span {
					display: inline-block;
					border-bottom: 1px solid #ccc;
					vertical-align: middle;
				}
				.touxiang {
					width: 50px;
					height: 50px;
					margin-top: 10px;
					border-radius: 50%;
					background-color: pink;
				}
				.doColor {
					width: 15px;
					border-radius: 50%;
					height: 15px;
					margin-left: 20%;
				}
				.tel {
					line-height: 62px;
					float: right;
				}
			}
		}
		.loadmore {
			float: right;
		}
	}
</style>
<template>
    <div class="leaderIndex">
		<div class="title">
			<p>首页</p>
		</div>
		<div class="leaderList">
			<p>高管列表<span @click="addMore" class="loadmore">点击展开</span></p>
			<ul v-if="isShow">
				<li v-for="item in leaderList">
					<span class="touxiang">
<!-- 						<img :src="item.src" alt="">
 -->					</span>
					<span class="name">
						{{item.name}}<br/>
						<span>{{item.job}}</span>
					</span>
					<span class="doColor" :style="{background:item.color}">
					</span>
					<span class="do">{{item.do}}</span>
					<span class="tel">
						<a :tel="item.tel" :style="{color:item.status}">电话</a>
					</span>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
    data() {
		return {
			isShow: true,
			leaderList: [
				{name: '老大', job: 'ceo', img: '', color: 'red', do: '出差', tel: '18649445258', status: 'red'},
				{name: '老大', job: 'ceo', img: '', color: 'red', do: '出差', tel: '18649445258', status: 'red'},
				{name: '老大', job: 'ceo', img: '', color: 'red', do: '出差', tel: '18649445258', status: 'red'},
				{name: '老大', job: 'ceo', img: '', color: 'red', do: '出差', tel: '18649445258', status: 'red'},
				{name: '老大', job: 'ceo', img: '', color: 'red', do: '出差', tel: '18649445258', status: 'red'}
				
			]
		}
	},
	components: {
	},

	methods: {
		addMore() {
			this.isShow = !this.isShow
		}
	} 
}
</script>



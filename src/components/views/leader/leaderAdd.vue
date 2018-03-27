<style lang='less'>
	.leaderAdd {
		.content {
			padding: 0 15px;
			position:relative;
			.left {
				position:absolute;
				left: 15px;
				top: 0;
				width: 40px;
				line-height: 1.2em;
				p {
					margin: 18px 0;
				}
				.tel {
					margin-top: 46px;
				}
			}
			.right {
				width: 100%;
				padding-left: 40px;
				select {
					margin-top: 6px;
					width: 100%;
					height: 30px;
					border-radius: 3px;
				}
				input {
					margin-top: 5px;
					height: 30px;
					width: 100%;
					border: none;
					border-radius: 3px;
					outline: none;
					border: 1px solid #666;
				}
				.time {
					width: 40%;
				}
			}
		}
		.isAgree {
			position:absolute;
			bottom: 50px;
			width: 100%;
			.btn {
				text-align: center;
				button {
					width: 100px;
					height: 50px;
					margin: 5px;
					line-height: 50px;
					border-radius: 25px;
					border: none;
				}
				.submit {
					color: white;
					background-color: gold;
				}
			}
			
		}
	}
</style>
<template>
    <div class="leaderAdd">
		<title-bar></title-bar>
		<div class="content">
			<div class="left">
				<p v-for="item in contentTittleList">{{item}}</p>
				<p class="tel">电话</p>
			</div>
			<div class="right">
				<input type="text" v-model="infoC" placeholder="请输入报备信息"><br/>
				<input type="date" v-model="startTime" class="time"> -- <input class="time" type="date" v-model="endTime" placeholder="结束时间"> <br/>
				<select v-model="name">
					<option v-for="item in optionList" :value="item">{{item}}</option>
					
				</select>
				<input type="text" placeholder="请填写其他交接人">
				<p style="font-size:10px;color:gold;min-height:36px">
					如果在'交接人'选项中没有您要的选择,请在'其他联系人'中手动输入
				</p>
				<input type="tel" placeholder="请填写电话">
			</div>
		</div>
		<div class="isAgree">
			<p class="btn">
				<button @click="cancel">取消</button>
				<button @click="onSubmit" class='submit'>确定</button>
			</p>
		</div>
    </div>
</template>
<script>
    import titleBar from './titleBar.vue'
export default {
    data() {
		return {
			contentTittleList: ['内容', '时间', '交接人', '其他交接人'],
			optionList: ['老大', '老二', '老三', '老四'],
			name: '老大'
		}
	},
	components: {
		titleBar,
	},

	methods: {
		onSubmit() {
			this.$router.push({
				name: 'leaderIndex'
			})
		}
	}
}
</script>



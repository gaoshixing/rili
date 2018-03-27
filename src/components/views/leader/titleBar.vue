<style>
	.title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #ccc;
		padding-left: 15px;
	}
</style>
<template>
    <div class="title">
      {{titleContent}}
    </div>
</template>
<script>
export default {
    props: {
      titleContent: {
		  type: String,
		  default: '报备事项'
	  }
    }
}
</script>



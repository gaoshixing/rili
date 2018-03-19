<template>
    <div class="schedule-calendar">
        <button @click="go('tag')">tag</button>
        <button @click="go('case')">case</button>
        <button @click="go('myStudents')">myStudents</button>
        <button @click="go('connectList')">connectList</button>
        <button @click="go('connectCheck')">connectCheck</button>
        <car-header
        :year='year'
         :month="month"
        @updateValue="updateView"
        >
        </car-header>
        <car-body
        :year="year"
        :month="month"
        :startWeek="startWeek"
        :direction="direction"
        :data="keepData">
        </car-body>
    </div>
</template>
<script>
    import carHeader from './carHeader'
    import { EventBus } from './utils'
    import carBody from './carBody'

export default {
    name: 'schedule-calendar',
    components: {
        carHeader,
        carBody
    },
    props: {
        originData: {
            type: Array,
            default: function() { return [
                {
                    date: '2018-03-13',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-13',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-13',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-13',
                    text: '那你很棒哟'
                },
                {
                    date: '2018-03-13',
                    text: '我表示很无奈'
                },
                {
                    date: '2018-03-9',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-9',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-9',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-9',
                    text: '那你很棒哟'
                }, {
                    date: '2018-03-13',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-13',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-13',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-13',
                    text: '那你很棒哟'
                },
                {
                    date: '2018-03-13',
                    text: '我表示很无奈'
                },
                {
                    date: '2018-03-9',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-9',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-9',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-9',
                    text: '那你很棒哟'
                }, {
                    date: '2018-03-13',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-13',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-13',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-13',
                    text: '那你很棒哟'
                },
                {
                    date: '2018-03-13',
                    text: '我表示很无奈'
                },
                {
                    date: '2018-03-9',
                    text: '老铁，扎心了'
                },
                {
                    date: '2018-03-9',
                    text: '来啊，互相伤害'
                },
                {
                    date: '2018-03-9',
                    text: '这个人好会装逼'
                },
                {
                    date: '2018-03-9',
                    text: '那你很棒哟'
                },
                {
                    date: '2018-03-9',
                    text: '我表示很无奈'
                }
            ]}
        }
    },
    data() {
        return {
            startMonth: '',
            startWeek: 1,
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            direction: 'Left',
            keepData: [...this.originData],
            dragItem: null
        }
    },
    watch: {
        originData: function (data) {
            if (data.length) {
                this.keepData = [...data]
            }
        }
    },
    methods: {
        go(val) {
            this.$router.push({
                name: val
            })
        },
        updateView({ year, month, direction }) {
            console.log(year, month+1)
            this.year = year
            this.month = month
            this.direction = direction
        },
        cellDragenter(e, date, type, index) {
            console.log(88 ,e, item, data, type )
        },
        itemDragstart(e, item, date, type) {
            console.log(e, item, data, type )
            this.dragItem = item
        },
        itemDrop(e, date, type, index) {
            if (!this.dragItem) return
            this.keepData.find(item => item.id === this.dragItem.id).date = date
        }
    },
    created() {
        EventBus.$on('cell-dragenter', this.cellDragenter)
        EventBus.$on('item-dragstart', this.itemDragstart)
        EventBus.$on('item-drop', this.itemDrop)
    }
}
</script>
<style lang="less">
@import './variables.less';
body,html {
    height: 100%;
}
.schedule- {
    &calendar {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        color: @sc-base-color;
        font-size: @sc-base-font-size;
        box-shadow: @sc-box-shadow;

        *,
        *::before,
        *::after {
            box-sizing: border-box
        }

        button {
            border: 0;
            outline: none;
            cursor: pointer;
            background: transparent;
        }
    }
}
</style>

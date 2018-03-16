import { httpCommon as http } from "./request";

// GET /a/ws/sys/sysNotification/listUserNotify
export const NEWS = {
    message(params){
        return http.get('/sysNotification/listUserNotify', {
            params
        })
    },

    // 标记已读() POST /a/ws/sys/sysNotification/markRead
    markRead(params){
        return http.post('/sysNotification/markRead', 
            params
        )
    },

    // 带通过驳回的详情 http://localhost:8080/a/ws/sys/sysNotification/
    noticeDetailCheck(params) {
        return http.get('/sysNotification/formNotify', {
            params
        })
    },

    // 通过驳回消息 /a/ws/sys/sysNotification/handleNotify
    isAgree(params) {
        return http.post('/sysNotification/handleNotify', 
            params
        )
    },

   
}
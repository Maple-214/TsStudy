/**
 * 
 * 
 * enum 声明 默认0开始
 */
enum Status {
    Code,
    Message,
}

// 值从1开始
enum Status2 {
    Code=1,
    Message,
}

(_status)=>{
    switch (_status) {
        case Status.Code:
            return 200
        case Status.Message:
            return 'message'
        default:
            return null
    }
}
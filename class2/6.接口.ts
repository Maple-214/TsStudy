/**
 * 
 * 
 * 1.用interface 关键字 声明
 * 2.同一个作用域下可以多次声明同一个接口，但接口内的属性不能重复冲突，不能使用时会判断多次声明后的所有值
 * 3.接口内的属性不能给予值类型，不能直接给予实值
 */

interface Props {
    age: number
}

interface Props {
    sex: number
}



const Person: Props = { age: 23, sex: 1 }

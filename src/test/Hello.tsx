import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { Button } from 'antd'
import {GET_EMPLOYEE_URL} from '../constants/api'
import {get} from '../request'

const Hello = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')
    useEffect(() => {
        if(count > 5){
            setText('该休息一下了')
            get(GET_EMPLOYEE_URL,{})
        }
    },[count])
    return (
        <div>
            <Button onClick={() => {setCount(count + 1)}} type={'primary'}>点击次数{count}{!_.isEmpty(text) ? text:''}</Button>
        </div>
    )
}

export default Hello
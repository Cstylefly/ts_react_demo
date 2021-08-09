import React,{useEffect,useState} from 'react';
import './App.less';
import _ from 'lodash'
import {Menu, MenuTheme} from 'antd'

interface menuType{
    name:string,
    id:string,
    children?:menuType[]
}

const meunList:menuType[] = [
  {
    name:'首页',
    id:'sy'
  },
  {
    name:'管理员',
    id:'gly'
  },
  {
    name:'普通用户',
    id:'ptyh',
    children:[
      {
        name:'张三',
        id:'ptyh-1'
      },
      {
        name:'李四',
        id:'ptyh-2'
      }
    ]
  }
]

const App = () => {
  const [menuTheme,setTheme] = useState('light' as MenuTheme)

  useEffect(() => {
    setTheme('dark')
  },[menuTheme])

  return (
    <div className="App">
      <Menu 
        mode={'horizontal'}
        theme={menuTheme}
        defaultSelectedKeys={[meunList[0].id || '']}
      >
        {
          meunList.map((it,index) => {
            if(_.isUndefined(it.children)){
              return (
                <Menu.Item key={it.id || index}>{it.name || ''}</Menu.Item>
              )
            }else{
              return (
                <Menu.SubMenu key={it.id || index} title={it.name || ''}>
                  {
                    (it.children || []).map((its,indexs) => {
                      return (
                        <Menu.Item key={its.id || indexs}>
                          {its.name || ''}
                        </Menu.Item>
                      )
                    })
                  }
                </Menu.SubMenu>
              )
            }
          })
        }
      </Menu>
    </div>
  );
}

export default App;

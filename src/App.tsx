import React,{useEffect,useState} from 'react';
import './App.less';
import _ from 'lodash'
import {Menu, MenuTheme} from 'antd'
import {Switch,Route, Link} from 'react-router-dom'
import HomePage from './page/HomePage'
import ManagePage from './page/ManagePage'

interface menuType{
    name:string,
    id:string,
    routeName?:string,
    children?:menuType[]
}

const meunList:menuType[] = [
  {
    name:'首页',
    id:'sy',
    routeName:'home'
  },
  {
    name:'管理员',
    id:'gly',
    routeName:'manage'
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

  const goToPage = (routeName:string):void => {
    if(_.isEmpty(routeName)){
      return
    }else{
      if(routeName === 'home'){
        console.log()
      }else{

      }
    }
  }

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
                <Menu.Item 
                    key={it.id || index}
                    // onClick={() => {
                    //   goToPage(it.routeName || '')
                    // }}
                >
                  <Link to={`/${it.routeName && it.routeName}`}>{it.name || ''}</Link>
                </Menu.Item>
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
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/home' exact component={HomePage}/>
        <Route path='/manage' exact component={ManagePage}/>
      </Switch>

    </div>
  );
}

export default App;

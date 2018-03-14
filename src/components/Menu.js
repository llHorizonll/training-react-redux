import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;
/**
 * 
 * @param {*} menu 
 * TODO: theme
 */
const Menus = (app) => {
  //recursive menu
  // const recursiveMenu = (menuTree) => {
  //   return submenu.sort((a, b) => a.Seq > b.Seq).map((item) => {
  //     if (item.Item) {
  //       return (
  //         <SubMenu
  //           key={item.Seq}
  //           title={<span><Icon type="team" /><span>{item.Name}</span></span>}
  //         >
  //           {getMenus(item.Item)}
  //         </SubMenu>
  //       )
  //     }
  //     return (
  //       <Menu.Item key={item.Seq}>
  //         <Link to={item.Url || '#'}>
  //           <Icon type="desktop" />
  //           <span>{item.Name}</span>
  //         </Link>
  //       </Menu.Item>
  //     )
  //   })
  // }

  const getSubMenus = (submenu) => {
    return submenu.sort((a, b) => a.Seq > b.Seq).map((item) => {
      return (
        <Menu.Item key={item.Seq}>
          <Link to={item.Name || '#'}>
            <Icon type="user" />
            <span>{item.Name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  const getMenus = (menuTree = []) => {
    if (menuTree.length > 0) {
      return menuTree.sort((a, b) => a.Seq > b.Seq).map((item) => {
        return (
          <SubMenu
            key={item.Seq}
            title={<span><Icon type="team" /><span>{item.Name}</span></span>}
          >
            {getSubMenus(item.Item)}
          </SubMenu>
        )
      })
    }
  }

  const menuItems = getMenus(app.menu)

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !app.navOpenKeys.includes(key))
    const latestCloseKey = app.navOpenKeys.find(key => !openKeys.includes(key))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys.push(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys.push(latestCloseKey)
    }

    if (openKeys.length === 0) {
      app.changeOpenKeys(openKeys)
    } else {
      app.changeOpenKeys(nextOpenKeys)
    }
  }

  let menuProps;
  if (app.side === 'left') {
    menuProps = !app.siderFold ? {
      onOpenChange,
      openKeys: app.navOpenKeys,
    } : {}
  } else {
    menuProps = {}
  }

  return (
    <Menu
      {...menuProps}
      theme={app.darkTheme ? 'light' : 'dark'}
      //defaultSelectedKeys={['1']}
      //selectedKeys={defaultSelectedKeys}
      mode={app.siderFold ? 'vertical' : 'inline'}
    >
      {menuItems}
    </Menu>
  )
}
export default Menus;
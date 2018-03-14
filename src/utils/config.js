// const wcfURL = `http://${window.location.hostname}/genex.wcf`;
// const localhost = `http://localhost/genex.wcf`;
let wcfURL;
(process.env.NODE_ENV === 'production')
  ? wcfURL = `http://192.168.10.5/genex.wcf`
  : wcfURL = `http://localhost/genex.wcf`;
module.exports = {
  name: '',
  prefix: 'blueledger',
  footerText: '',
  logo: '../logo.svg',
  CORS: [],
  openPages: ['/login'],
  api: {
    userAuthen: `${wcfURL}/SYS/Authen.svc/Json/Login`,
    menuList: `${wcfURL}/MENU/Menu.svc/Json/G/MENULIST`,
    // userLogout: `${APIV1}/user/logout`,
  },
}

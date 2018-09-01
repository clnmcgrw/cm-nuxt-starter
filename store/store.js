
export const store = {


  state: {
    siteLoaded: false,
    currentPage: null,
    didScroll: false,
    thisScroll: 0,
    lastScroll: 0,

    screenHeight: null,
    screenWidth: null,

    mousePos: {x:0 , y:0}
  },


  getters: {
    siteLoaded: state => state.siteLoaded,
    currentPage: state => state.currentPage,
    didScroll: state => state.didScroll,
    thisScroll: state => state.thisScroll,
    lastScroll: state => state.lastScroll,
    mousePos: state => state.mousePos
  },


  mutations: {
    setSiteLoaded(state, value) { state.siteLoaded = value; },
    setCurrentPage(state, pagename) { state.currentPage = pagename; },
    setDidScroll(state, value) { state.didScroll = value; },
    setThisScroll(state, value) { state.thisScroll = value; },
    setLastScroll(state, value) { state.lastScroll = value; },
    setMousePos(state, value) { state.mousePosX = value; }
  },


  //async only
  actions: {}
};
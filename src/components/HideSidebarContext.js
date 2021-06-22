import React from 'react';

const HideSidebarContext = React.createContext({
  showSidebar:false,
  setShowSidebar:()=>{}
});

export default HideSidebarContext;

import React from 'react';

const ShowSidebarContext = React.createContext({
  showSidebar:false,
  setShowSidebar:()=>{}
});

export default ShowSidebarContext;

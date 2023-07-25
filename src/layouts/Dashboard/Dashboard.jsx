import React, {useEffect, useState, useMemo} from 'react';
import SideNavbar from '../../components/SideNavbar/SideNavbar';

const Dashboard = () => {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('userData')));
  // }, []);
  
  return (
    <>
      <SideNavbar />
      {user && <h2 style={{textAlign:"center"}}>{user?.msg}</h2>}
    </>
  );
};

export default Dashboard;

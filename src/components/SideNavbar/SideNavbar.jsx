import React, { useState } from 'react';
import './styles.scss';
import { IoHome } from 'react-icons/io5';
import { MdBorderColor } from 'react-icons/md';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { SlSupport } from 'react-icons/sl';
import { SiBurgerking } from 'react-icons/si';

const SideNavbar = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [activeTab, setActiveTab] = useState({
    home: true,
    orders: false,
    products: false,
    support: false,
  });

  const onClickTabChangeHandler = (val) => {
    switch (val) {
      case 'home':
        setActiveTab({
          home: true,
          orders: false,
          products: false,
          support: false,
        });
        break;

      case 'orders':
        setActiveTab({
          home: false,
          orders: true,
          products: false,
          support: false,
        });
        break;

      case 'products':
        setActiveTab({
          home: false,
          orders: false,
          products: true,
          support: false,
        });
        break;

      case 'support':
        setActiveTab({
          home: false,
          orders: false,
          products: false,
          support: true,
        });
        break;

      default:
        break;
    }
  };

  console.log(activeTab, 'activetab');
  return (
    <div>
      <div className="sideNavBarMainWrapper">
        <SiBurgerking className="burgerBtn" />
        <div className="sideNavBarOptions">
          <div
            className={`navOption ${currentTab === 'home' && 'navOptionActive'}`}
            onClick={() => {
              onClickTabChangeHandler('home');
              setCurrentTab('home');
            }}
          >
            <IoHome />
            Home
          </div>
          <div
            className={`navOption ${
              currentTab === 'orders' && 'navOptionActive'
            }`}
            onClick={() => {
              onClickTabChangeHandler('orders');
              setCurrentTab('orders');
            }}
          >
            <MdBorderColor />
            Orders
          </div>
          <div
            className={`navOption ${
              currentTab === 'products' && 'navOptionActive'
            }`}
            onClick={() => {
              onClickTabChangeHandler('products');
              setCurrentTab('products');
            }}
          >
            <BiSolidShoppingBagAlt />
            Products
          </div>
          <div
            className={`navOption ${
              currentTab === 'support' && 'navOptionActive'
            }`}
            onClick={() => {
              onClickTabChangeHandler('support');
              setCurrentTab('support');
            }}
          >
            <SlSupport />
            Support
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideNavbar;

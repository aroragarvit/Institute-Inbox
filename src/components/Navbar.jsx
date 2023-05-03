import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const name = "Vishwas"
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor:"white", display: "flex" }}>
      <Text className='text-lg'>Welcome {name}!! </Text>
      <div className="user">
        <img src="https://picsum.photos/200" alt="user" />
        <span>Username</span>
        <button>Logout</button>
      </div>
    </Header>
  );
};
export default Navbar;

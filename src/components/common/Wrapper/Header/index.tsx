'use client'
import React from 'react';
import { Layout, Menu  } from 'antd/lib';
import Link from 'next/link';

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        defaultSelectedKeys={['2']}
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        theme="dark"
      >
        <Menu.Item key="1"><Link href="/"></Link></Menu.Item>
        <Menu.Item key="2"><Link href="/home">Home</Link></Menu.Item>
        <Menu.Item key="3"><Link href="/toplist">Top List</Link></Menu.Item>
        <Menu.Item key="4"><Link href="/review">Review</Link></Menu.Item>
        <Menu.Item key="5"><Link href="/login">Login</Link></Menu.Item>
      </Menu>
    </Header>

  );
}

export default Header;

import { Layout, Menu, Tag } from 'antd';
import 'antd/dist/reset.css';

import MemoryGame from './Components/MemoryGame';

const { Header, Footer, Content } = Layout;

const App = () => {
  const menuItems = [
    {
      key: '1',
      label: (
        <>
          Leaderboards <Tag color="red">Coming Soon</Tag>
        </>
      ),
      disabled: true,
    },
  ];
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div
          className="logo"
          style={{
            float: 'left',
            color: 'white',
            fontSize: '20px',
            paddingRight: '20px',
          }}
        >
          Rememory
        </div>
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          <MemoryGame />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Rememory ©2024 Created by @mrtongkatali
      </Footer>
    </Layout>
  );
};

export default App;

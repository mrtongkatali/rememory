import { Layout, Menu, Tag } from 'antd';
import 'antd/dist/reset.css';

import MemoryGame from './Components/MemoryGame';

const { Header, Footer, Content } = Layout;

const defaultLayoutStyle = {
  minHeight: '100vh',
};

const defaultHeaderStyle = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
};

const defaultLogoStyle = {
  float: 'left',
  color: 'white',
  fontSize: '20px',
  paddingRight: '20px',
};

const defaultContentStyle = {
  padding: '0 20px',
  marginTop: 64,
};

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
    <Layout style={defaultLayoutStyle}>
      <Header style={defaultHeaderStyle}>
        <div className="logo" style={defaultLogoStyle}>
          Rememory
        </div>
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </Header>
      <Content style={defaultContentStyle}>
        <div className="content-wrapper">
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

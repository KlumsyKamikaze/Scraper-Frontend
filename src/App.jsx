import AuthComponent from "./AuthComponent";
import "antd/dist/antd.css";
import { Layout, Row, Tabs, Typography } from "antd";
import { useState } from "react";
import TableComponent from "./TableComponent";
const { Content, Header } = Layout;
const Title = Typography;
const { TabPane } = Tabs;
function App() {
  const [data, setData] = useState([]);
  return (
    <Layout>
      <Header>
        <Title style={{ color: "white" }}>
          View Grades Web Scraper Platform
        </Title>
      </Header>
      <Layout style={{ marginTop: "5rem" }}>
        <Content style={{ marginBottom: "2rem" }}>
          <Row justify="center">
            <AuthComponent setData={setData} />
          </Row>
          <Row justify="center" style={{ width: "70%", marginInline: "auto" }}>
            <Tabs defaultActiveKey="0" style={{ width: "100%" }} centered>
              {data?.map((semesterData, index) => (
                <TabPane tab={semesterData.semester} key={index}>
                  <TableComponent key={index} semesterData={semesterData} />
                </TabPane>
              ))}
            </Tabs>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

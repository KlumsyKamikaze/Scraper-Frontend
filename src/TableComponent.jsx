import { Col, Table, Tag, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const gradesMap = {
  S: "purple",
  A: "green",
  P: "green",
  B: "green",
  C: "yellow",
  D: "yellow",
  E: "volcano",
  U: "volcano",
  W: "black",
};

function TableComponent({ semesterData }) {
  const columns = [
    {
      title: "Course Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Course Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "credits",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: (grade) => {
        let color = gradesMap[grade];
        return (
          <>
            <Tag color={color} key={grade}>
              {grade.toUpperCase()}
            </Tag>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Col span={24}>
        <Table
          pagination={false}
          columns={columns}
          dataSource={semesterData.courses}
        />
      </Col>
      <Col span={24}>
        <Title
          level={3}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "right",
          }}
        >
          <span style={{ opacity: "60%" }}>
            CGPA at the end of the semester:
          </span>{" "}
          {semesterData.CGPA}
        </Title>
      </Col>
    </>
  );
}

export default TableComponent;

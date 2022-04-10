import React, { useState } from "react";
// Components
import { Tabs, Tab, Container } from "react-bootstrap";
import TaskItem from "../TaskItem";

const Tasks = ({ data }) => {
  const [key, setKey] = useState(data[0].eventKey);
  return (
    <Container fluid className="p-0">
      <Tabs
        fill
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(item) => setKey(item)}
      >
        {data.map((item, itemIdx) => {
          return (
            <Tab
              className="text-dark bg-white"
              key={itemIdx}
              eventKey={item.eventKey}
              title={item.title}
            >
              <TaskItem title={item.title} desc={item.desc} img={item.img} />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Tasks;

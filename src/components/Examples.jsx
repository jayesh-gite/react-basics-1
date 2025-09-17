import Section from "./Section";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import { useState } from "react";

export default function Examples() {
  const [selectedtopic, setSelectedtopics] = useState(0);
  function handleSelect(selectedButton) {
    setSelectedtopics(selectedButton);
  }

  let tabContent = <p>Please select a Topic.</p>;
  if (selectedtopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedtopic].title}</h3>
        <p>{EXAMPLES[selectedtopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedtopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedtopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

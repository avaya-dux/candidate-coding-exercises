import React from "react";
import ButtonComponent from "./ButtonComponent";
const DiffTypeofButn = () => {
  return (
    <>
      <div>
        <p>
          Primary:
          <ButtonComponent label="default" status="default" variant="primary" />
        </p>
        <p>
          Secondary:
          <ButtonComponent
            label="default"
            status="default"
            variant="secondary"
          />
        </p>
        <p>
          tertiary:
          <ButtonComponent
            label="default"
            status="default"
            variant="tertiary"
          />
        </p>
        <p>
          disabled:
          <ButtonComponent
            label="default"
            status="default"
            variant="primary"
            disabled
          />
        </p>
        <p>
          icon:
          <ButtonComponent
            label="Primary icon left"
            status="default"
            variant="primary"
            icon="settings"
            iconPosition="right"
          />
        </p>
        <p>
          animation:
          <ButtonComponent
            label="Submit"
            animation="spinner"
            status="default"
            variant="primary"
          />
        </p>
        <p>
          wide:
          <ButtonComponent
            label="Button"
            size="wide"
            status="default"
            variant="primary"
            icon="chat"
          />
        </p>
        <p>
          compact button:
          <ButtonComponent
            label="Button"
            size="compact"
            status="default"
            variant="primary"
            icon="error"
          />
        </p>
        <p>
          Circular button
          <ButtonComponent
            aria-label="DESCRIPTION OF ICON/ACTION"
            icon="settings"
            shape="circle"
            status="success"
            variant="primary"
          />
        </p>
        <p>
          Square button:
          <ButtonComponent
            aria-label="DESCRIPTION OF ICON/ACTION"
            icon="settings"
            shape="square"
            status="success"
            variant="primary"
          />
        </p>
      </div>
    </>
  );
};

export default DiffTypeofButn;

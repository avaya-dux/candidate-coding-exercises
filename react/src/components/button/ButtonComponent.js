import React from "react";
import { Button, IconButton } from "@avaya/neo-react";

const ButtonComponent = (props) => {
  const {
    label,
    status_prop,
    variant,
    disabled,
    icon,
    iconPosition,
    animation,
    size,
    shape,
  } = props;

  if (disabled) {
    return (
      <Button
        data-testid="button"
        label={label}
        status={status_prop}
        variant={variant}
        disabled
      />
    );
  }

  if (animation) {
    return (
      <Button
        label={label}
        status={status_prop}
        variant={variant}
        animation={animation}
      />
    );
  }
  if (iconPosition) {
    return (
      <Button
        label={label}
        iconPosition={iconPosition}
        status={status_prop}
        variant={variant}
        icon={icon}
      />
    );
  }

  if (size && icon) {
    return (
      <Button
        label={label}
        size={size}
        status={status_prop}
        variant={variant}
        icon={icon}
      />
    );
  }

  if (icon && !shape) {
    return (
      <Button
        label={label}
        status={status_prop}
        variant={variant}
        icon={icon}
      />
    );
  }
  if (shape) {
    return (
      <IconButton
        aria-label={props["aria-label"]}
        icon={icon}
        shape={shape}
        status={status_prop}
        variant={variant}
      />
    );
  }

  return (
    <Button
      data-testid="button"
      label={label}
      status={status_prop}
      variant={variant}
    />
  );
};

export default ButtonComponent;

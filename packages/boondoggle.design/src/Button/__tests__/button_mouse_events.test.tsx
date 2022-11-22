/** @jest-environment jsdom */
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { ButtonProps } from "..";
import { Button } from "..";

afterEach(cleanup);

/**
 * ONCLICK EVENTS
 */

describe("onClick events", () => {
  test("Given an enabled button, when clicking, it should call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        onClick={onClick}
      />
    );

    (component as HTMLButtonElement).click();
    expect(onClick).toHaveBeenCalled();
  });

  test("Given a readonly button,  when clicking, it should call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        readOnly
        onClick={onClick}
      />
    );

    (component as HTMLButtonElement).click();
    expect(onClick).toHaveBeenCalled();
  });

  test("Given a disabled button, when clicking, it should not call onClick", () => {
    const onClick = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        disabled
        onClick={onClick}
      />
    );

    (component as HTMLButtonElement).click();
    expect(onClick).not.toHaveBeenCalled();
  });
});

/**
 * MOUSEOVER EVENTS
 */

describe("mouseOver events", () => {
  test("Given an enabled button, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        onMouseOver={onMouseOver}
      />
    );

    fireEvent.mouseEnter(component as HTMLButtonElement);
    expect(onMouseOver).toHaveBeenCalled();
  });

  test("Given a readonly button, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        readOnly
        onMouseOver={onMouseOver}
      />
    );

    fireEvent.mouseEnter(component as HTMLButtonElement);
    expect(onMouseOver).toHaveBeenCalled();
  });

  test("Given a disabled button, when hovering, it should call onMouseOver", () => {
    const onMouseOver = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        disabled
        onMouseOver={onMouseOver}
      />
    );

    fireEvent.mouseEnter(component as HTMLButtonElement);
    expect(onMouseOver).toHaveBeenCalled();
  });
});

/**
 * MOUSELEAVE EVENTS
 */

describe("mouseLeave events", () => {
  test("Given an enabled button, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLButtonElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("Given a readonly button, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        readOnly
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLButtonElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("Given a disabled button, when leaving, it should call onMouseLeave", () => {
    const onMouseLeave = jest.fn();

    const { component } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        color="primary"
        disabled
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseLeave(component as HTMLButtonElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });
});

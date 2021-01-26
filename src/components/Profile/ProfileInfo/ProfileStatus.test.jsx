import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Test status");
  });
  test("after creating input  should be null", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    // const input = root.findByType("input");
    expect(()=>{
      const input = root.findByType("input");
    }).toThrow();
  });
  test("after creating span with  status should be displayed", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creating span   status should be correct", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe('Test status');
  });
  test("input displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe('Test status');
  });
});

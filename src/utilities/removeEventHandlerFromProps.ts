export function removeEventHandlerFromProps(
  props: React.HTMLAttributes<HTMLElement>
) {
  delete props.onClick;
  delete props.onClickCapture;
  delete props.onKeyDown;
  delete props.onKeyDownCapture;
  delete props.onKeyPress;
  delete props.onKeyPressCapture;
  delete props.onKeyUp;
  delete props.onKeyUpCapture;
}

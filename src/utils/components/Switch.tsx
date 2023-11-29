interface ISwitchProps {
  children: JSX.Element[];
  condition?: boolean | string | number | null;
}

const Switch = ({ children: [Element, ...otherElement], condition = true }: ISwitchProps): JSX.Element => {
  const props = Element?.props || {};

  if (props['data-defaultswitch'] || props['data-caseswitch'] === condition || !Element) {
    return Element || null;
  }
  return <Switch {...{ children: otherElement, condition }} />;
};
export default Switch;

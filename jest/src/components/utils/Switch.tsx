interface ISwitchProps {
  children: JSX.Element[];
  condition?: boolean | string | number | null;
}

const Switch = ({ children, condition = true }: ISwitchProps): JSX.Element => {
  const MatchingCase = (): JSX.Element | null =>
    // eslint-disable-next-line react/prop-types
    children.find(({ props }) => props['data-defaultswitch'] || props['data-caseswitch'] === condition) || null;

  return <MatchingCase />;
};
export default Switch;

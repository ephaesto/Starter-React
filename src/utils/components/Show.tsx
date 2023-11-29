interface IShowProps<Is> {
  show: JSX.Element;
  is: Is;
}

const Show = <Is,>({is, show: ShowElement }: IShowProps<Is>): JSX.Element | null => {
  if(is){
    return ShowElement
  }
  return null
};
export default Show;

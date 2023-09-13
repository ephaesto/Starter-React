export type DefaultProps<Props> = Partial<Props> & {
  children: React.ReactNode;
};

export type ContainerType<Props> = (props: DefaultProps<Props>) => JSX.Element;

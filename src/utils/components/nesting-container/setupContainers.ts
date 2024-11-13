import { ContainerType } from "./NestingContainerType"

export const setupContainers = <Containers, ContainerProps = {}>(containers:Record<keyof Containers, ContainerType<ContainerProps>>):[Record<keyof Containers, ContainerType<ContainerProps>>,(keyof Containers)[]] => {
  return [containers, Object.keys(containers) as (keyof Containers)[]]
}

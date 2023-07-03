import { RouteObjectType } from 'router/Router';
import { DefaultPagesObjectType } from './DefaultPagesObjectType';
import { DefaultRootObjectType } from './DefaultRootObjectType';
import { DefaultWrapperPropsObjectType } from './DefaultWrapperPropsObjectType';

export type RootObjectType = RouteObjectType extends { root: unknown }
  ? RouteObjectType['root']
  : DefaultRootObjectType;
export type PagesObjectType = RouteObjectType extends { pages: unknown }
  ? RouteObjectType['pages']
  : DefaultPagesObjectType;
export type LayoutsObjectType = RouteObjectType extends { layouts: unknown }
  ? RouteObjectType['layouts']
  : Record<string, never>;
export type SwitchesObjectType = RouteObjectType extends { switches: unknown }
  ? RouteObjectType['switches']
  : Record<string, never>;
export type WrappersObjectType = RouteObjectType extends { wrappers: unknown }
  ? RouteObjectType['wrappers']
  : Record<string, never>;
export type WrapperPropsObjectType = RouteObjectType extends { wrapperProps: unknown }
  ? RouteObjectType['wrapperProps']
  : DefaultWrapperPropsObjectType;

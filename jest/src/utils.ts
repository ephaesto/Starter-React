const isObject = (item: unknown): item is object => !!item && typeof item === 'object' && !Array.isArray(item);

const recDeepMerge = (target: unknown, source: unknown): unknown => {
  // eslint-disable-next-line prefer-object-spread
  const output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    (Object.keys(source) as (keyof typeof source)[]).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          Object.assign(output, { [key]: recDeepMerge(target[key], source[key]) });
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export const deepMerge = <TypeObject>(target: TypeObject, source?: TypeObject): TypeObject =>
  recDeepMerge(target ?? {}, source ?? {}) as TypeObject;

const isObject = (item: unknown): item is object => !!item && typeof item === 'object' && !Array.isArray(item);

/**
 * `recDeepMerge` is a recursive function to merge two object.
 *
 * It does not affect object params.
 * @param target first object, its properties may be overwritten
 * @param source secont object, properties will be assign to target
 * @returns an object of source assign to target. If one of source or target is not an object, it returns target as object.
 */
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

/**
 *  `recDeepMergeAll` is a recursive function to merge multiple objects.
 *
 * It does not affect object params.
 *
 * Params order count, more it is far from target less its properties will be overwritten.
 * Therefore default options will be set as target and others options will followed, ordered as they are more specific.
 * @param target first object, its properties may be overwritten
 * @param source secont object, properties will be assign to target
 * @param others all others object to be assign recursively to target.
 * @returns a deep merge of all objects assign recursively from last params to target object
 */
export const recDeepMergeAll = <TObject>(target: unknown, source?: unknown, ...others: unknown[]): TObject =>
  others?.length
    ? (recDeepMergeAll(recDeepMerge(target ?? {}, source ?? {}), ...others) as TObject)
    : (recDeepMerge(target ?? {}, source ?? {}) as TObject);

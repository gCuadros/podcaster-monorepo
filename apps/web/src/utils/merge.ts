import { isArray, mergeWith } from "lodash";

const overrideArrays = (objValue: any, srcValue: any) => {
  if (isArray(objValue)) {
    return isArray(srcValue) ? srcValue : objValue;
  }
};

export const merge = <T>(defaultParams: T, override: any): T =>
  mergeWith({}, defaultParams, override, overrideArrays);

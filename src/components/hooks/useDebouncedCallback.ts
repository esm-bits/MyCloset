import _ from 'lodash';
import { useCallback } from 'react';

export default function useDebouncedCallback<F extends Function>(
  callback: F,
  options: {
    callbackWillInvoke?: Function | null;
    callbackDidInvoke?: Function | null;
    wait?: number;
    maxWait?: number;
  } = {},
  dependencyList: unknown[] = [],
) {
  const debouncedCb = useCallback(
    _.debounce(
      async (...args: unknown[]) => {
        try {
          await callback(...args);
        } finally {
          options.callbackDidInvoke?.();
        }
      },
      options.wait ?? 300,
      { maxWait: options.maxWait ?? 1000 },
    ),
    [...dependencyList],
  );
  const callDebouncedCb = (useCallback(
    (...args: unknown[]) => {
      options.callbackWillInvoke?.();
      debouncedCb(...args);
    },
    [debouncedCb, options],
  ) as unknown) as F;
  return callDebouncedCb;
}

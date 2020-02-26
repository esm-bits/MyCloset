import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';

export default function MCButton(props: {} & ButtonProps) {
  const [loading, setLoading] = useState(false);
  const debouncedOnPress = useCallback(
    _.debounce(
      async (event: GestureResponderEvent) => {
        try {
          await props.onPress?.(event);
        } finally {
          setLoading(false);
        }
      },
      500,
      { maxWait: 2000 },
    ),
    [],
  );
  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      setLoading(true);
      debouncedOnPress(event);
    },
    [debouncedOnPress],
  );
  return <Button {...props} onPress={onPress} loading={loading} />;
}

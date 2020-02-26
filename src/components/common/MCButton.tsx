import _ from 'lodash';
import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';

import useDebouncedCallback from '../hooks/useDebouncedCallback';

export default function MCButton(props: {} & ButtonProps) {
  const [loading, setLoading] = useState(false);

  const onPress = useDebouncedCallback(
    (event: GestureResponderEvent) => {
      props.onPress?.(event);
    },
    {
      callbackWillInvoke: () => setLoading(true),
      callbackDidInvoke: () => setLoading(false),
      wait: 200,
      maxWait: 500,
    },
    [props.onPress, setLoading],
  );
  return <Button {...props} onPress={onPress} loading={loading} />;
}

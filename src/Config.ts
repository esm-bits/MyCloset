import Config from 'react-native-config';

const YES = 'yes';

export default {
  get isLoggingEnabled() {
    return Config.LOGGING_ENABLED === YES;
  },
};

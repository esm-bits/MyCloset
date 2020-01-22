/**
 * アプリを再起動する
 * device.reloadReactNativeが不安定なときに使う
 * @returns {Promise<void>}
 */
exports.relaunchApp = async (opts = {}) => {
  await device.terminateApp();
  await device.launchApp({
    permissions: {
      notifications: 'YES',
      camera: 'YES',
    },
    languageAndLocale: {
      language: 'ja-JP',
      locale: 'ja-JP',
    },
    // newInstanceは書き換えられないようにしておく
    ...opts,
    newInstance: true,
  });
};

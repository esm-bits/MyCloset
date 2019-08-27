# MyCloset

## 開発

### 必要な環境

- Node.js >= 10
- Ruby (cocoapods 用)

※iOS のビルドをするなら Mac が必要。

### How to 開発

#### アプリの依存ライブラリのインストール＆起動

- インストール

```sh
yarn
# Macでiosのビルドをする場合は下記も実行する
sudo gem install bundler
yarn pod-install
```

- 起動

```sh
# ios
yarn react-native run-ios
# android
yarn react-native run-android
```

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

- 開発用起動

```sh
# ios
yarn ri:develop
yarn ri:staging
yarn ri:production

# android
yarn ra:develop
yarn ra:staging
yarn ra:production
```

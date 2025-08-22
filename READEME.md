## Task App Docker

環境構築を学習するためのタスク管理アプリです。

#### 使用技術一覧

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| nginx                | 1.23.4     |
| Docker               | 28.0.4,    |
| Laravel              | 12.0       |
| MySQL                | 8.0        |
| Vue                  | 7.1.1      |
| Vite                 | 3.5.18     |

#### プロジェクト構成

```
task-app-docker
    └── api
        (laravelプロジェクト)
    └── client
        (Vue3プロジェクト)
    └── docker
        └── api
            └── Dockerfile
        └── client
            └── Dockerfile
        └── nginx
            └── default.conf
    └── docker-compose.yml
    └── package.json

```

## 開発環境構築方法

#### 前提

**Docker Desktop がインストールされていること**
</br>
ない場合は以下からダウンロード ↓↓↓</br>
https://www.docker.com/

#### 1.リポジトリのクローン

```

git clone https://github.com/take-env/task-app-docker.git
cd task-app-docker


```

#### 2.Docker コンテナの起動

```

docker compose up -d --build


```

#### 3.環境構築ファイルの作成

```
#ディレクトリの移動
cd api

#apiコンテナに入る
docker compose exec api sh

# .env ファイルのコピー、keyの生成
cp .env.example .env
php artisan key:generate

```

#### 4.laravel の依存関係をインストール

```

#composerインストール
composer install

```

#### 5.DB マイグレーション

```

# DB マイグレーション
php artisan migrate
exit

```

##### 6.Vue の依存関係をインストール

```

#ディレクトリの移動
cd ..//client

#clientコンテナに入る
docker compose exec client bash

#依存関係インストール
npm install
exit

```

#### 7.アクセス確認

- **フロントエンド**
  http://localhost:3000

- **バックエンド**
  http://localhost:3000/api/tasks

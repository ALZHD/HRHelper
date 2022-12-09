
## Как запустить server

1) Установить все пакеты - ``npm install``

2) Заполнить и переименовать файл `.env.sample` в `.env`
Пример файла .env:
```bash
COOKIE_SECRET=catdog
COOKIE_NAME=authorisation
PORT=5555
DB_HOST=localhost
DB_USERNAME=alex
DB_USER_PASSWORD=null
DB_NAME=hrhelper
DB_PORT=5432
DB_DIALECT=postgres
```
3) Cделать миграцию - `npx sequelize-cli db:migrate`
4) Запустить проект - `npm run start`


## Как запустить client

1) Установить все пакеты - `npm install`,
2) Заполнить и переименовать файл `.env.sample` в `.env`
Пример файла .env:
```bash
REACT_APP_HOST=http://localhost:5555
```
3) Запустить проект - `npm run start`


## Закодироть ссылку

https%3A%2F%2Feva.ai

## clientID

78r7hsgb4hjimg

## ClientSecret

OZkFGyq0rDT0RCwS


https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=1&scope=r_liteprofile&client_id=78r7hsgb4hjimg&redirect_uri=https%3A%2F%2Feva.ai


https://eva.ai/?code=AQS1pfLxN1GIRQfjHQPHK8M6m13tbS9zlCAjzX6kn6gM3QE5WQfS-q_74NKe3DNIzCwVQqQQM5GISmAD3u99HdvxQDPu8GrC0WKPQgv7y3uxEFPg-QWXX4ZiZdyVNePAJi24vqPWhP83DNTGoz2tvvPeHxNZwux8jjTd23cwjqsK6Q_lBuG1NqUivfoboHsKJXCpWjNa4xZHFNqM440&state=1

AQS1pfLxN1GIRQfjHQPHK8M6m13tbS9zlCAjzX6kn6gM3QE5WQfS-q_74NKe3DNIzCwVQqQQM5GISmAD3u99HdvxQDPu8GrC0WKPQgv7y3uxEFPg-QWXX4ZiZdyVNePAJi24vqPWhP83DNTGoz2tvvPeHxNZwux8jjTd23cwjqsK6Q_lBuG1NqUivfoboHsKJXCpWjNa4xZHFNqM440


curl request
curl -ik -X POST https://www.linkedin.com/oauth/v2/accessToken \
-d grant_type=authorization_code \
-d code=AQS1pfLxN1GIRQfjHQPHK8M6m13tbS9zlCAjzX6kn6gM3QE5WQfS-q_74NKe3DNIzCwVQqQQM5GISmAD3u99HdvxQDPu8GrC0WKPQgv7y3uxEFPg-QWXX4ZiZdyVNePAJi24vqPWhP83DNTGoz2tvvPeHxNZwux8jjTd23cwjqsK6Q_lBuG1NqUivfoboHsKJXCpWjNa4xZHFNqM440 \
-d redirect_uri=https%3A%2F%2Feva.ai \
-d client_id=78r7hsgb4hjimg \
-d client_secret=OZkFGyq0rDT0RCwS

curl https://api.linkedin.com/v2/me/ -H  "Authorization: Bearer AQXAJmnSpU3Uz6Sjx6OrCM5zdzAiaiiqQlrFGsMFJXPTVVJjfqY45IX3PB8xcCP1mrHQ43_n02BqNI7ouvkBJFrdbcjb2hh-E2zFlAi2D0Bk6G_7mxoTq6wBcfqDA0sPCEiGAYzFyjsGlQT2Ac8oh6Z0K-8wYATKF8xV0ah9zMqwNptv-m1HsZ8aFnrdmxDsjLpk0y42LkEIsDMGtjMTHnfQ9ko92EQ_h8OU_SpznxEXbN_62rirZJU-AEtVtcwQG_YL5uS8wfqYFQskm5bGgV-95WWYAsJ3Y0zJIxFq3H9fkvTMk1nWdPbvB1oc3GeEEirSt3ezbkZmrJH6iyghR5LQIB7KnQ"


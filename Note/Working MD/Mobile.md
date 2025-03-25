```
开发Mobile

1. ios也能打开
2. link在net，http
3. node 看法 api
4. note + react native
```

```
node server

hsaapi
4200
4201

hscp
4300
```

```
remote / 30
192.1.1.30
D
```

```
npm install express

```

## Project

### Node

```
npm install express cors body-parser bcryptjs jsonwebtoken joi mssql fs
mkdir _helpers _middleware users plans weightCerts
npm install expo-linear-gradient

```



```
1. 最后记得更换 sql 连接
2. 
```

```
http://localhost:5000/users/authenticate
```

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc0Mjg2NTYzNSwiZXhwIjoxNzQzNDcwNDM1fQ.pgjxpm_lpuMpfPgkZxiaJ7UYERg4mKegQgYMuKEeEu4
```



```
React Native 是 react native expo 的项目
用npx expo 安装的

hsaapi 是 node api 项目

我要你把login界面的用户登入用上api来登入，你可以看hsaapi的node项目，我刚刚在postman拿到数据了，一开始拿token，http://localhost:5000/users/authenticate，然后拿到了。

你可以用我的node 提供的api来修改login page，要有真的用户可以登入的，用户的密码是乱码：$2a$10$IWPPJ/P6B7sXJ4lZTrP38OMPiVnfKhsy8lTwKl870nh/YeqGYXJJy
你可以自己翻译，看node项目的代码。

先弄login的，如果登入错误就给错误信息，登入成功就进入Home page，Home page可以log out

先弄这些
```



### 正

```
Postman 使用

1. 获得 Token
- http://localhost:5000/users/authenticate
{
  "username": "cmengjin",
  "password": "hsonline"
}
- 复制 Token

2. http://localhost:5000/weightCerts
- 放 Token ， Send
```

```
手机连接 API

打开cmd，输入 ipconfig
拿ipv4 比如 http://10.10.10.14:5000/users/authenticate
就可以了。
```







```
http://192.1.1.30:5000

http://hongsenghq.ddns.net:

192.1.1.15
```

```
4200
4201
```

```
一开始你自动登入看看有没有拿到token

用户名是：cmengjin
密码是：hsonline

用http://10.0.2.2:4200/users/authenticate 
或者
http://10.0.2.2:5000/users/authenticate 
或者
http://hongsenghq.ddns.net:4200/users/authenticate 
```





```

```



### API Link

```
http://10.0.2.2:4200/users/authenticate 
http://10.0.2.2:5000/users/authenticate 
http://hongsenghq.ddns.net:4200/users/authenticate 
```

可能

```
可能导致的原因是因为

1. WIFI不一样
2. 可以复制 ipv4看看？
```


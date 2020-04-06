## 前言(必读！！！)

此项目仅代表我个人的观点，如有不同，肯定是你对

先感谢几位大佬的项目（不分前后）

[mcuking](https://juejin.im/user/5a77ceab6fb9a06351724f2b) [mobile-web-best-practice](https://github.com/mcuking/mobile-web-best-practice)  
[lentoo](https://juejin.im/user/5b11e897f265da6e38191ac1)[vue-admin](https://github.com/lentoo/vue-admin)

此项目只是个模板！！！！！

此项目只是个模板！！！！！

此项目只是个模板！！！！！

## 未完成功能
1. [x] 组件页面命令行生成
2. [ ] more

## 为啥要写这个框架?

首先要说明的是 现在已经有很多了非常棒得vue模板了 那么我为啥又要抄别人代码抄出来一个呢？

因为……别人得模板虽然很棒 但是我总感觉少了什么。所以还是自己定制一个，根据自己的需求写一个公用的模板，
后期只需要基于这个模板二次开发。或者基于模板二次开发新的模板（例如基于此模板开发一个通用的web app 模板 或者pc admin 模板）

## 为什么要这么设计？

### core 目录
可能有些朋友不太明白为啥要这么设计其实我一开始也很迷惑为啥要这么设计。

有一次给朋友改代码的时候 他把接口数据全部放在vuex中(其实我不喜欢把接口数据放到vuex中)，在.vue中各种map,各种filter

因为要解耦！把数据和页面解耦。页面只负责渲染数据，数据处理交给interactors层，转换成我们想要的数据。
service 单纯的与后端交互，顺带请求到数据之后可以在translators.ts 中做一下数据清洗

最后我们拿到的是这样的一个数据


![](https://user-gold-cdn.xitu.io/2020/4/6/1714e0f642da7062?w=1401&h=335&f=png&s=70500)

### sentry 

17年的时候才工作，一个群有个老哥在fundebug 工作 一开始很纳闷 我开发的时候不就把bug 抓取完了(年少无知啊！)

很多的bug 开发环境确实遇不到线上环境用户各种骚操作，有时候bug都没法复现 这是多么蛋疼的事情。

sentry 上传了source map 之后可以帮我定位到出bug的源码 非常的舒服。

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e105441e0546?w=1590&h=654&f=png&s=81447)

### CDN 

优化网站的加载速度，将一部分包走cdn之后我们的项目体积能够大大减小


## 结束语

后期我会用这个模板重构之前写的一个开源项目和一个正在写的electron + react的桌面端

😂偷偷的告诉大家 已经完成小程序一键部署了
![](https://user-gold-cdn.xitu.io/2020/4/6/1714e1e0ee597a9c?w=1606&h=879&f=png&s=60356)


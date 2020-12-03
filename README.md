#### 用create-react-app创建一个项目
1. 执行 ```npm i create-react-app -g```
2. 执行 ```create-react-app redux-example```
3. 执行 ```cd redux-example```
4. 执行 ```npm start```
浏览器出现以下界面,说明项目创建好了并成功运行
![](https://upload-images.jianshu.io/upload_images/7177443-fd5f9d3d387e597a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

### 业务文件说明
./routes/count/index.js
  举例使用了hook 的 useState;

./routes/ContextReducer
  举例使用了hook 的 useContext, 并运用了useReducer改变useContext的value, 实现状态共享；






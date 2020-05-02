import x from "./x.js";

import png0 from "./assets/1.png";
import png1 from "./assets/2.png";
console.log(png0);

const div = document.getElementById("app");
//使用document得到id为app的div元素
console.log("div");
console.log(div);
div.innerHTML = `
<img src="${png0}">
<br>
<h1>周凤的大屁股臀围100cm</h1>
<br>
<img src="${png1}">
`; //img的来源等于这个png的地址

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  //本处用到promise知识点
  //promise.then(成功函数，失败函数)
  promise.then(
    (module) => {
      const fn = module.default; //函数fn等于module.default的默认值。
      fn();
      //   console.log(fn);
    },
    //上半部分箭头函数表示加载成功之后做什么
    //下半部分箭头函数表示加载失败之后做什么
    () => {
      console.log("模块加载错误");
    }
  );
};
div.appendChild(button); //在div里面加入一个子元素button

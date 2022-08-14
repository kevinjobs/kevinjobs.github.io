---
title: '从头开始写一个 Scriptable 脚本'
author: 'Kevin Jobs'
createAt: '2021-11-09'
---

iOS 14 发布后，出现了许多提供高定制性的小组件 app。这其中，使用 JS 写脚本的 Scriptable 的定制性不说第一，前三是没问题的。今天给酷友做一个较为详尽的教程，希望大家都能写出自己的优秀脚本。



### 一、了解 Scriptable

官网有基本的介绍，我们可以看到它的基本介绍是 “Automate iOS using JavaScript”，定位上是自动化工具；同时支持 ES6，有很多 iOS 原生的 API，这些 API 是这个 app 的精髓。

打开 app 文档，可以看到文档写的还是非常详尽的。

常用的 API 主要有 Calendar（读取日历）, Device（设备信息）, FileManager（读取文件） 等等。

建议开始写脚本前，把所有的脚本介绍看一下，有个大概的印象，需要用的时候查文档，也知道在哪里找。

### 二、一个例子

现在我们通过一个“天气”的例子，来实战一下。

#### （一）基本的小组件

```javascript
const widget = new ListWidget();// 创建一个桌面小组件对象；
// ListWidget 常用的几个添加元素方法有：
// (1)addText   添加文字
// (2)addImage  添加图片
// (3)addStack  添加Stack
// (4)addSpacer 添加空行
// (5)addDate   添加Date
// 方法名都很简单，看就能明白
// 使用上述方法添加的内容，都是水平占一行
widget.addText('Hello, World!');// Hello, World! 是编程界的古老传统了
// Script 是全局对象，其常用的方法有：
// (1)setWidget 创建桌面小组件
// (2)complete  结束 Script 对象
Script.setWidget(widget);// 这样，widget 组件就创建成功了
Script.complete();// 最好结束一下
```

这一步很简单，我们的第一个小组件完成了！

#### （二）稍复杂一点的结构

（1）

一个天气组件一般来讲，应该包括：地点、天气图标、天气文字、温度等；

现在我们来按这个简单的标准写一个简单的结构；

(图 carbon2)

完美！天气组件的雏形已经具备了！

（2）

现在我们来调整一下样式：

（图 carbon3）

很好，天气组件的美观度又提升了一点。
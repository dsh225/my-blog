(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{302:function(t,r,e){"use strict";e.r(r);var a=e(4),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前端工程师的反击爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端工程师的反击爬虫"}},[t._v("#")]),t._v(" 前端工程师的反击爬虫")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("对于一张网页，我们往往希望它是结构良好，内容清晰的，这样搜索引擎才能准确地认知它。\n而反过来，又有一些情景，我们不希望内容能被轻易获取，比方说电商网站的交易额，教育网站的题目等。因为这些内容，往往是一个产品的生命线，必须做到有效地保护。这就是爬虫与反爬虫这一话题的由来。")])],1),t._v(" "),e("h2",{attrs:{id:"常见反爬虫策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见反爬虫策略"}},[t._v("#")]),t._v(" 常见反爬虫策略")]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("但是世界上没有一个网站，能做到完美地反爬虫。")]),t._v(" "),e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("如果页面希望能在用户面前正常展示，同时又不给爬虫机会，就必须要做到识别真人与机器人。因此工程师们做了各种尝试，这些策略大多采用于后端，也是目前比较常规单有效的手段，比如：")])],1),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("User-Agent + Referer检测")])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("账号及Cookie验证")])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("验证码")])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("IP限制频次")])],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("而爬虫是可以无限逼近于真人的，比如：")]),t._v(" "),e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("chrome headless或phantomjs来模拟浏览器环境\n"),e("a",{attrs:{href:"https://doc.yonyoucloud.com/doc/ae/920457.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tesseract"),e("OutboundLink")],1),t._v(" 识别验证码\n代理IP淘宝就能买到\n所以我们说，100%的反爬虫策略？不存在的。\n更多的是体力活，是个难易程度的问题。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("不过作为前端工程师，我们可以增加一下游戏难度，设计出一些很(sang)有(xin)意(bing)思(kuang)的反爬虫策略。")])],1),t._v(" "),e("h2",{attrs:{id:"前端与反爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端与反爬虫"}},[t._v("#")]),t._v(" 前端与反爬虫")]),t._v(" "),e("h3",{attrs:{id:"_1、font-face拼凑式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、font-face拼凑式"}},[t._v("#")]),t._v(" 1、FONT-FACE拼凑式")]),t._v(" "),e("h4",{attrs:{id:"猫眼电影"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#猫眼电影"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://maoyan.com/films/342601",target:"_blank",rel:"noopener noreferrer"}},[t._v("猫眼电影"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("猫眼电影里，对于票房数据，展示的并不是纯粹的数字。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("页面使用了font-face定义了字符集，并通过unicode去映射展示。也就是说，除去图像识别，必须同时爬取字符集，才能识别出数字。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("并且，每次刷新页面，字符集的url都是有变化的，无疑更大难度地增加了爬取成本。")])],1),t._v(" "),e("h3",{attrs:{id:"_2、background拼凑式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、background拼凑式"}},[t._v("#")]),t._v(" 2、BACKGROUND拼凑式")]),t._v(" "),e("h4",{attrs:{id:"美团"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#美团"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://bj.meituan.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("美团"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("与font的策略类似，美团里用到的是background拼凑。数字其实是图片，根据不同的background偏移，显示出不同的字符。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("并且不同页面，图片的字符排序也是有区别的。不过理论上只需生成0-9与小数点，为何有重复字符就不是很懂。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("页面A：")]),t._v(" "),e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("页面B：")])],1),t._v(" "),e("h3",{attrs:{id:"_3、字符穿插式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、字符穿插式"}},[t._v("#")]),t._v(" 3、字符穿插式")]),t._v(" "),e("h4",{attrs:{id:"微信公众号文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号文章"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信公众号文章"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("某些微信公众号的文章里，穿插了各种迷之字符，并且通过样式把这些字符隐藏掉。")]),t._v(" "),e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("这种方式虽然令人震惊…但其实没有太大的识别与过滤难度，甚至可以做得更好，不过也算是一种脑洞吧。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("对了，我的手机流量可以找谁报销吗？")])],1),t._v(" "),e("h3",{attrs:{id:"_4、伪元素隐藏式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、伪元素隐藏式"}},[t._v("#")]),t._v(" 4、伪元素隐藏式")]),t._v(" "),e("h4",{attrs:{id:"汽车之家"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汽车之家"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://car.autohome.com.cn/config/series/3170.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("汽车之家"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("汽车之家里，把关键的厂商信息，做到了伪元素的content里。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("这也是一种思路：爬取网页，必须得解析css，需要拿到伪元素的content，这就提升了爬虫的难度。")])],1),t._v(" "),e("h3",{attrs:{id:"_5、元素定位覆盖式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、元素定位覆盖式"}},[t._v("#")]),t._v(" 5、元素定位覆盖式")]),t._v(" "),e("h4",{attrs:{id:"去哪儿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去哪儿"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport=%E5%B9%BF%E5%B7%9E&searchArrivalAirport=%E5%8C%97%E4%BA%AC&searchDepartureTime=2021-06-12&searchArrivalTime=2021-06-14&nextNDays=0&startSearch=true&fromCode=CAN&toCode=BJS&from=qunarindex&lowestPrice=null",target:"_blank",rel:"noopener noreferrer"}},[t._v("去哪儿"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("还有热爱数学的去哪儿，对于一个4位数字的机票价格，先用四个i标签渲染，再用两个b标签去绝对定位偏移量，覆盖故意展示错误的i标签，最后在视觉上形成正确的价格…")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("这说明爬虫会解析css还不行，还得会做数学题。")])],1),t._v(" "),e("h3",{attrs:{id:"_6、iframe异步加载式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、iframe异步加载式"}},[t._v("#")]),t._v(" 6、IFRAME异步加载式")]),t._v(" "),e("h4",{attrs:{id:"网易云音乐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网易云音乐"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://music.163.com/#/artist?id=10559",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易云音乐"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("网易云音乐页面一打开，html源码里几乎只有一个iframe，并且它的src是空白的：about:blank。接着js开始运行，把整个页面的框架异步塞到了iframe里面…")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("不过这个方式带来的难度并不大，只是在异步与iframe处理上绕了个弯（或者有其他原因，不完全是基于反爬虫考虑），无论你是用selenium还是phantom，都有API可以拿到iframe里面的content信息。")])],1),t._v(" "),e("h3",{attrs:{id:"_7、字符分割式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、字符分割式"}},[t._v("#")]),t._v(" 7、字符分割式")]),t._v(" "),e("h4",{attrs:{id:"全网代理ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全网代理ip"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"http://www.goubanjia.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("全网代理IP"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("在一些展示代理IP信息的页面，对于IP的保护也是大费周折。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("他们会先把IP的数字与符号分割成dom节点，再在中间插入迷惑人的数字，如果爬虫不知道这个策略，还会以为自己成功拿到了数值；不过如果爬虫注意到，就很好解决了。")])],1),t._v(" "),e("h3",{attrs:{id:"_8、字符集替换式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、字符集替换式"}},[t._v("#")]),t._v(" 8、字符集替换式")]),t._v(" "),e("h4",{attrs:{id:"去哪儿移动侧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去哪儿移动侧"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://m.flight.qunar.com/ncs/page/flightlist?arrCity=%E4%B8%8A%E6%B5%B7&depCity=%E5%8C%97%E4%BA%AC&goDate=2021-06-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("去哪儿移动侧"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("同样会欺骗爬虫的还有去哪儿的移动版。")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#2c3e50",size:"3",face:"微软雅黑"}},[t._v("html里明明写的3211，视觉上展示的却是1233。原来他们重新定义了字符集，3与1的顺序刚好调换得来的结果…")])],1)])}),[],!1,null,null,null);r.default=s.exports}}]);
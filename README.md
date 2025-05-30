# Azure TTS Importer

轻松将 Azure TTS 语音合成服务导入阅读软件。现支持 [阅读（legado）](https://github.com/gedoor/legado)、[爱阅记](https://apps.apple.com/cn/app/id6450734655)、[服务器端阅读(hectorqin/reader)](https://github.com/hectorqin/reader)、爱阅书香、源阅读、源阅。

> [!NOTE]
> 已更新 2.0 版本，界面焕新。
> 
> 同时，本人其他的听书相关项目的配置生成过程也会逐渐迁移到这个项目中。目前已经完成的有：[Read Aloud](https://github.com/yy4382/read-aloud) 的 [配置生成](https://tts.yfi.moe/ra)。

网站地址：[TTS Importer](https://tts.yfi.moe)

如果有其他阅读器支持了创建自定义的语音源，可以提 Issue 请求支持生成它们的语音源配置。

同时，本项目还负责 [Read Aloud](https://github.com/yy4382/read-aloud) 的配置生成，面板连接 [Read Aloud 配置生成器](https://tts.yfi.moe/ra)。

## 隐私说明

本网站服务端不会储存你的 Key 等信息。

实际上，绝大多数的逻辑全部在客户端浏览器中实现，但是如果使用“一键导入”或者是“复制网络导入链接”，由于在阅读软件客户端中脱离了当前浏览器，只能将完整的配置编码在复制或打开的 URL 中，由阅读客户端向服务器发送这个请求，服务端返回配置。在此过程中，服务端只负责将请求的`config`参数以JSON形式返回，不会储存它。

本站托管于 Vercel。 直接由本仓库代码生成。

刷新时，会从客户端浏览器的本地储存中读取过去输入的信息；方便多次打开。

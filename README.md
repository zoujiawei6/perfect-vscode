# 完美Visual Studio Code(vscode)  

[Git项目地址](https://github.com/zoujiawei6/perfect-vscode)

- [完美Visual Studio Code(vscode)](#%E5%AE%8C%E7%BE%8Evisual-studio-codevscode)
  - [自定义快捷键（eclipse习惯）](#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BF%AB%E6%8D%B7%E9%94%AEeclipse%E4%B9%A0%E6%83%AF)
  - [遇到的问题](#%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98)
    - [占用很大内存](#%E5%8D%A0%E7%94%A8%E5%BE%88%E5%A4%A7%E5%86%85%E5%AD%98)
    - [Vue支持emmet](#vue%E6%94%AF%E6%8C%81emmet)
    - [Debug不命中或不运行](#debug%E4%B8%8D%E5%91%BD%E4%B8%AD%E6%88%96%E4%B8%8D%E8%BF%90%E8%A1%8C)
  - [自定义自动补全](#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8)
  - [DeBug调试JS代码](#debug%E8%B0%83%E8%AF%95js%E4%BB%A3%E7%A0%81)
    - [断点方法](#%E6%96%AD%E7%82%B9%E6%96%B9%E6%B3%95)
      - [普通断点](#%E6%99%AE%E9%80%9A%E6%96%AD%E7%82%B9)
      - [条件断点](#%E6%9D%A1%E4%BB%B6%E6%96%AD%E7%82%B9)
  - [插件](#%E6%8F%92%E4%BB%B6)
    - [增强插件](#%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6)
      - [Project Manager-项目管理](#project-manager-%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86)
        - [使用方法](#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
      - [路径智能感知](#%E8%B7%AF%E5%BE%84%E6%99%BA%E8%83%BD%E6%84%9F%E7%9F%A5)
      - [Git版本管理](#git%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86)
      - [美化代码](#%E7%BE%8E%E5%8C%96%E4%BB%A3%E7%A0%81)
      - [vue组件追踪](#vue%E7%BB%84%E4%BB%B6%E8%BF%BD%E8%B8%AA)
      - [JS & CSS 压缩](#js--css-%E5%8E%8B%E7%BC%A9)
      - [浏览器打开](#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%BC%80)
      - [美化vscode图标](#%E7%BE%8E%E5%8C%96vscode%E5%9B%BE%E6%A0%87)
    - [辅助插件](#%E8%BE%85%E5%8A%A9%E6%8F%92%E4%BB%B6)
      - [翻译(英汉词典)](#%E7%BF%BB%E8%AF%91%E8%8B%B1%E6%B1%89%E8%AF%8D%E5%85%B8)
      - [ESLint](#eslint)
      - [自动完成标签](#%E8%87%AA%E5%8A%A8%E5%AE%8C%E6%88%90%E6%A0%87%E7%AD%BE)
      - [js导入显示大小](#js%E5%AF%BC%E5%85%A5%E6%98%BE%E7%A4%BA%E5%A4%A7%E5%B0%8F)
    - [snippet-片段](#snippet-%E7%89%87%E6%AE%B5)
      - [jQuery Snippets](#jquery-snippets)
    - [Vue Snippets](#vue-snippets)
    - [语言](#%E8%AF%AD%E8%A8%80)
      - [python](#python)
      - [vue](#vue)
      - [proto](#proto)
      - [Sass或Scss](#sass%E6%88%96scss)
    - [Markdown支持](#markdown%E6%94%AF%E6%8C%81)
    - [观望中的插件](#%E8%A7%82%E6%9C%9B%E4%B8%AD%E7%9A%84%E6%8F%92%E4%BB%B6)
    - [禁用插件](#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6)
      - [关闭Quokka弹窗](#%E5%85%B3%E9%97%ADquokka%E5%BC%B9%E7%AA%97)
  
## 自定义快捷键（eclipse习惯）  
  
新版本：左下角设置按钮 `->` Keyboard Shortcuts `->` 点击右上角的`{}`图标。  
老版本：左下角设置按钮 `->` Keyboard Shortcuts `->` keybindings.json。  
  
[visual studio code 键盘快捷键参考](https://blog.csdn.net/shanghongshen/article/details/61415374)  
  
```json  
// Place your key bindings in this file to overwrite the defaults  
[  
  { "key": "alt+/",  "command": "editor.action.triggerSuggest","when":   "editorTextFocus" },  
  { "key": "ctrl+alt+down","command": "editor.action.copyLinesDownAction",   "when": "editorTextFocus" },  
  { "key": "ctrl+alt+up", "command": "editor.action.copyLinesUpAction",   "when": "editorTextFocus" },  
  { "key": "ctrl+shift+c","command": "editor.action.commentLine","when":   "editorTextFocus" },  
  { "key": "ctrl+d","command": "editor.action.deleteLines","when":   "editorTextFocus" },  
  { "key": "ctrl+k","command": "editor.action.addSelectionToNextFindMatch",  "when": "editorFocus"},  
  { "key": "ctrl+shift+f","command": "editor.action.format","when":   "editorTextFocus"},  
  { "key": "ctrl+shift+x","command": "editor.action.transformToUppercase",  "when": "editorTextFocus"},  
  { "key": "ctrl+shift+y","command": "editor.action.transformToLowercase",  "when": "editorTextFocus"},  
  { "key": "ctrl+shift+alt+x","command": "workbench.view.extensions" },  
  { "key": "ctrl+shift+alt+y","command": "workbench.debug.action.toggleRepl"},  
  { "key": "ctrl+shift+alt+d","command":   "editor.action.addSelectionToNextFindMatch","when": "editorFocus" },  
]  
```  
  
 | 快捷键           | 命令                        | 说明                               |
 | ---------------- | --------------------------- | ---------------------------------- |
 | alt+/            | triggerSuggest              | 触发显示                           |
 | ctrl+alt+down    | copyLinesDownAction         | 向下复制一行                       |
 | ctrl+alt+up      | copyLinesUpAction           | 向上复制一行                       |
 | ctrl+shift+c     | commentLine                 | 注释行                             |
 | ctrl+d           | deleteLines                 | 删除行                             |
 | ctrl+k           | addSelectionToNextFindMatch | 添加选择到下一个查找匹配           |
 | ctrl+shift+f     | format                      | 格式化                             |
 | ctrl+shift+x     | transformToUppercase        | 转换为大写                         |
 | ctrl+shift+y     | transformToLowercase        | 转换为小写                         |
 | ctrl+shift+alt+x | extensions                  | 扩展（原ctrl+shift+x快捷  键）     |
 | ctrl+shift+alt+y | toggleRepl                  | 切换Repl（原ctrl+shift+y快  捷键） |
 | ctrl+shift+alt+d | addSelectionToNextFindMatch | 添加选择到下一个查找匹配           |
  
 `ctrl+k`或`ctrl+shift+alt+d`说明，当你选中字母`a`，按下此快捷键可**再**选中下一  个  字母`a`，若再按下`ctrl+f2`则可选中全文所有字母`a`。  
  
## 遇到的问题  
  
### 占用很大内存  
  
关闭跟随链接就可以了。在设置里面搜索`followSymlinks`，然后取消那个单选框。  
  
### Vue支持emmet  
  
首先，依次打开“文件-->首选项-->设置”，英文版的是依次打开  “File-->Preferences-->Settings”。  
点击Extensions（扩展，），找到settings.json中然后打开，在setting.json中新增：  
  
```javascript  
  "emmet.triggerExpansionOnTab": true,  
  "emmet.includeLanguages": {  
  "vue-html": "html",  
  "vue": "html"  
  }  
```  
  
### Debug不命中或不运行  
  
调了很久的错误，原因未知。解决方案：  
在需要`debug`的代码里新增一行代码：`debugger`，重启`debug`后即可精准命中，此时再新  增`debug`断点即可。  
  
## 自定义自动补全  
  
[官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)  
  
1. 按下`Ctrl+Shift+P`  
2. 在搜索框输入`User Snippets`  
3. 选择`New Global Snippets file...`  
4. 默认是打开`C:\Users\你的用户名\AppData\Roaming\Code\User\snippets`目录  
  
## DeBug调试JS代码  
  
`.vscode/launch.json`配置：  
  
```json  
{  
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。  
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387  
  "version": "0.2.0",  
  "configurations": [  
  // npm run dev  
  {  
    "type": "node",  
    "request": "launch",  
    "name": "Launch npm run dev",  
    "runtimeExecutable": "npm",  
    "runtimeArgs": [  
    "run",  
    "dev"  
    ],  
    "console": "integratedTerminal"  
  },  
  // babel config/dev.js是启动文件地址  
  {  
    "type": "node",  
    "request": "launch",  
    "name": "Launch babel-node",  
    "runtimeExecutable": "babel-node",  
    "runtimeArgs": [  
    "config/dev.js"  
    ],  
    "console": "integratedTerminal"  
  }  
  ]  
}  
```  
  
### 断点方法  
  
#### 普通断点  
  
在编辑框左侧右键，选择`Add Breakpoiny`  
![普通断点](data:image/png;base64,  iVBORw0KGgoAAAANSUhEUgAAAEEAAABGCAYAAACT8vn9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOPSURBVHhe7ZqvbxRBFID5E/hRfsOgzp3DncM0iGpShWlIK6gposml5kQTHKLB4UgqSA01RTQhNcXhcDhcHQ43vO+SR16Hd9sjYee2mye+XHZm7pL3zXuzM3t7JaWU22Z1dTVvbGyca+OadtumjEajvL29nYfDodv/v6kigaB2dnamn951CYJKaW1SRQIsLy/n3d3dKZPJ5JwAMkL7oKYAqCahy4QEISQIIUEICUJIEEKCEBKEkCCEBKGqhL29vXx6ejrl8PDwr7MD17SfnJzk9fX1c31tUk3C/v6+G7gFSYw5OjrqnwQCOjg4aBTAmOPj4zwej/spgRlGArOs5UCb9msZ0LaystJPCZSCrXM+uWbWueZTS6XXEuzM27Yy6N5KIFiCtm0qgSzQEikpv9MW1RZGFj2d3fLa0ttMADvjTfuAXkvoMiFBCAlCSBBCghAShJAghARhLgnD9DC/TPfy23Q7f3m0NOV9upXH6W5+LH3edy4TF0p4IcGfpes5p6suv9K1/DrdyQPnu5eFRgkf0k03cI9v6caFIuy/z1tbW3kwGEzbOULzT/Wi/pmeKWEis2uDJBsoh+fpfn4m2cHsE7gdgzTvt4CgbOAWJGxubrp9NXAlPJVASXMN7lNamq4L3lhkWBFIKsdcFGQnJbyRGdegvs+R5rZsEFb2UwYESSZouttXdTopgUA0qFdyB/DGWMgcHf9DyqbspxTs2yl8cs3bK/ZaBfEqT633lcCVQCAaFAF6Yyxkio6Hsh8J5UtaXptCe00RrgT2ARoQt0hvjGWUHvwZ/1PWkrKfoMrVvkkCmbHwt9feyUZIg/rYsOIr9k6CwLKfoOZ9e411gbWjlNYmrgRWeA0K2Bl646C8kyDEG/cvb6/NypC2cCWAXRyBjLDrwxMpAe4iVsBX+c5l3DnOlMC+wC6QFhu4wlqAGO+3us5MCcDhiAwoAy4hA+a5i3SVRgkK22TKw2YG2+jP0jbPPqLrzCWh74QEISQIIUEICUJIEKpKsNtj7ykT5wXtX/jZoQ0IatbjtUUcmixVJHBYanpyxOFqUQKgigTKoOnxGgLW1tamx2vt16dONagigSBnPV7TUrBPkmgvj9ttUk1C+YxA21SCnXmvrU2qlUNZ81ZMKamXEkjrpsdrBFuWg71umyoSgMB00fPqnUzQ/poCoJqELhMShJAghAQhJAghQQgJQkgQQoIQElLKvwGTh1Up6DulVQAAAABJRU5ErkJggg==)  
  
#### 条件断点  
  
比如想要使下列代码在`data === '123'`的时候运行断点：  
  
```javascript  
function isEmptyString(data) {  
  return data == null || data.trim().length === 0  
}  
```  
  
在编辑框左侧右键，选择`Add Conditional Breakpoiny`后输入`data === '123'`：  
![添加条件断点](data:image/png;base64,  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)  
  
## 插件  
  
### 增强插件  
  
#### Project Manager-项目管理  
  
Name: Project Manager  
Id: alefragnani.project-manager  
Description: Easily switch between projects  
Version: 10.5.1  
Publisher: Alessandro Fragnani  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager
  
##### 使用方法  
  
按下`Ctrl`+`Shift`+`P`，输入`Project`选择`Project Manager:Edit Projects`编辑配  置文件，示例：  
  
```json  
[  
  {  
  "name": "articles",  
  "rootPath": "/workspace/markdown",  
  "paths": [],  
  "group": "",  
  "enabled": true  
  }  
]  
```  
  
假设vscode安装在D盘，则`rootPath`的值`/workspace/markdown`是指相对于`D:/`盘根目  录  的`workspace/markdown` 
  
#### 路径智能感知  
  
Name: Path Intellisense  
Id: christian-kohler.path-intellisense  
Description: Visual Studio Code plugin that autocompletes filenames  
Version: 1.4.2  
Publisher: Christian Kohler  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense  
[Path Intellisense](# 'image-keys:iaHeUiDeTUZuo.gif')  
  
#### Git版本管理  
  
Name: GitLens — Git supercharged  
Id: eamodio.gitlens  
Description: Supercharge the Git capabilities built into Visual Studio Code —   Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more
Version: 9.7.4  
Publisher: Eric Amodio  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
  
配置git路径，在`settings.json`添加一行：`"git.path": "D:/Git/bin/git.exe",`  
重启vscode  
  
#### 美化代码  
  
支持 javascript, JSON, CSS, Sass, and HTML  
  
Name: Beautify  
Id: hookyqr.beautify  
Description: Beautify code in place for VS Code  
Version: 1.5.0  
Publisher: HookyQR  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify 
  
#### vue组件追踪  
  
Name: ESLint  
Id: dbaeumer.vscode-eslint  
Description: Integrates ESLint JavaScript into VS Code.  
Version: 1.9.0  
Publisher: Dirk Baeumer  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint  
  
#### JS & CSS 压缩  
  
安装完后右下角有个`Minify`按钮  
  
Name: JS & CSS Minifier  
Id: olback.es6-css-minify  
Description: Easily Minify ES5/ES6/ES7/ES8 and CSS  
Version: 2.6.0  
Publisher: olback  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify
  
#### 浏览器打开  
  
在默认浏览器或应用程序中打开文件。html文件中右键`Open In Default Browser`  
  
Name: open in browser  
Id: techer.open-in-browser  
Description: This allows you to open the current file in your default browser   or application.  
Version: 2.0.0  
Publisher: TechER  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser 
  
#### 美化vscode图标  
  
Name: vscode-icons  
Id: vscode-icons-team.vscode-icons  
Description: Icons for Visual Studio Code  
Version: 8.6.0  
Publisher: VSCode Icons Team  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
  
### 辅助插件  
  
#### 翻译(英汉词典)  
  
Name: 翻译(英汉词典)  
Id: codeinchinese.englishchinesedictionary  
Description: 本地77万词条英汉词典，不依赖任何在线翻译API，无查询次数限制。可翻译驼  峰和下划线命名，及对整个文件中的标识符批量翻译。Translate a selected identifier, or all the recognized identifiers in one source file.
Version: 0.0.11  
Publisher: 中文编程  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=CodeInChinese.EnglishChineseDictionary
  
#### ESLint  
  
统一的代码风格  
  
Name: ESLint  
Id: dbaeumer.vscode-eslint  
Description: Integrates ESLint JavaScript into VS Code.  
Version: 1.8.0  
Publisher: Dirk Baeumer  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint  
  
#### 自动完成标签  
  
Name: Auto Complete Tag  
Id: formulahendry.auto-complete-tag  
Description: Extension Packs to add close tag and rename paired tag   automatically for HTML/XML
Version: 0.1.0  
Publisher: Jun Han  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag
  
#### js导入显示大小  
  
Name: Import Cost  
Id: wix.vscode-import-cost  
Description: Display import/require package size in the editor  
Version: 2.12.0  
Publisher: Wix  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost  
[Import Cost](# 'image-keys:import-cost.gif')   
  
### snippet-片段  
  
#### jQuery Snippets  
  
Name: jQuery Code Snippets  
Id: donjayamanne.jquerysnippets  
Description: Over 130 jQuery Code Snippets  
Version: 0.0.1  
Publisher: Don Jayamanne  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets
  
### Vue Snippets  
  
Name: Vue 2 Snippets  
Id: hollowtree.vue-snippets  
Description: A Vue.js 2 Extension  
Version: 0.1.11  
Publisher: hollowtree  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets
  
### 语言  
  
#### python  
  
Name: Python  
Id: ms-python.python  
Description: Linting, Debugging (multi-threaded, remote), Intellisense, code   formatting, refactoring, unit tests, snippets, and more.
Version: 2019.4.12954  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-python.python
  
#### vue  
  
Name: Vetur  
Id: octref.vetur  
Description: Vue tooling for VS Code  
Version: 0.21.0  
Publisher: Pine Wu  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=octref.vetur
  
#### proto  
  
Name: vscode-proto3  
Id: zxh404.vscode-proto3  
Description: Protobuf 3 support for Visual Studio Code  
Version: 0.2.2  
Publisher: zxh404  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3 
  
#### Sass或Scss  
  
Name: Sass  
Id: robinbentley.sass-indented  
Description: Indented Sass syntax highlighting, autocomplete & snippets  
Version: 1.5.1  
Publisher: Robin Bentley  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented
  
### Markdown支持  
  
请查看[vscode的markdown进阶专题.md](./vscode的markdown进阶专题.md)  
  
### 观望中的插件  
  
| 插件                                     | 描述                                                                            | 分类 |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ---- |
| Debugger for Chrome                      | js在chrome中的debug功能                                                         | 增强 |
| HTMLHint                                 | html文件规范检测                                                                | 增强 |
| fileheader                               | [已停止更新] 顶部注释模板，可定义作  者、时间等信  息，并会自动更新最后修改时间 | 增强 |
| filesize                                 | 在底部状态栏显示当前文件大小，点击后  还可以看到详细  创建、修改时间            | 增强 |
| Auto Import                              | TypeScript 和 TSX代码补全                                                       | 增强 |
| IntelliSense for CSS class names in HTML | link标签引用的外部文件，提供 HTML   中 CSS class 名字的补全                     | 增强 |
| Prettier                                 | 美化 JavaScript/TypeScript/CSS 代  码                                           | 增强 |
| WakaTime                                 | 从你的使用习惯中生成数据报表。似乎是  在线预览。                                | 辅助 |
| Live Share                               | 实时协作编辑和调试。                                                            | 增强 |
| Flow Language Support                    | JavaScript类型检查器                                                            | 辅助 |
  
### 禁用插件  
  
| 插件名                                                                                                                   | 中文名        | 禁用原因                     |
| ------------------------------------------------------------------------------------------------------------------------ | ------------- | ---------------------------- |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner 'image-keys:usage.gif')      | 选中代码运行  | 不支持复杂环境，用到的地方少 |
| [Quokka.js](https://marketplace.visualstudio.com/items?itemName=wallabyjs.quokka-vscode 'image-keys:vsc1.gif')           | 即时调试      | 几乎没用到，有时间再研究     |
| [XML Tools](https://marketplace.visualstudio.com/items?itemName=dotjoshjohnson.xml)                                      | XML文档工具   | 几乎没用到，有时间再研究     |
| [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)         | JS代码支持    | 缩写定义不符合写作习惯       |
| [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)                              | HTML支持      | VSCode已默认支持             |
| [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)                            | HTML CSS 支持 | 设计缺陷，浪费CPU            |
| [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek 'image-keys:symbolProvider.gif') | CSS跟踪       | VSCode已默认支持             |
  
#### 关闭Quokka弹窗  
  
JavaScript即时便条，边开发边显示调试信息。  
  
关闭弹窗：  
  
1. 在弹窗中单击“仅限社区功能”按钮。
2. 在〜/.quokka/config.json中手动创建带有{"pro"：false}内容的。  
3. Quokka全局配置文件，禁用弹窗。  
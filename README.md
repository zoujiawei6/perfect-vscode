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

#### 条件断点  
  
比如想要使下列代码在`data === '123'`的时候运行断点：  
  
```javascript  
function isEmptyString(data) {  
  return data == null || data.trim().length === 0  
}  
```  
  
在编辑框左侧右键，选择`Add Conditional Breakpoiny`后输入`data === '123'`
  
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
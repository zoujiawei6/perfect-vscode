# vscode的markdown进阶专题

- [vscode的markdown进阶专题](#vscode%E7%9A%84markdown%E8%BF%9B%E9%98%B6%E4%B8%93%E9%A2%98)
  - [进阶知识](#%E8%BF%9B%E9%98%B6%E7%9F%A5%E8%AF%86)
    - [TOC目录](#toc%E7%9B%AE%E5%BD%95)
    - [单选框](#%E5%8D%95%E9%80%89%E6%A1%86)
    - [生成html](#%E7%94%9F%E6%88%90html)
    - [数学](#%E6%95%B0%E5%AD%A6)
    - [快捷键](#%E5%BF%AB%E6%8D%B7%E9%94%AE)
    - [vscode命令行](#vscode%E5%91%BD%E4%BB%A4%E8%A1%8C)
    - [支持的设置](#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AE%BE%E7%BD%AE)
  - [可选功能](#%E5%8F%AF%E9%80%89%E5%8A%9F%E8%83%BD)
    - [附注](#%E9%99%84%E6%B3%A8)
    - [流程图](#%E6%B5%81%E7%A8%8B%E5%9B%BE)
    - [图表](#%E5%9B%BE%E8%A1%A8)
    - [表情](#%E8%A1%A8%E6%83%85)
  - [插件](#%E6%8F%92%E4%BB%B6)
    - [基础支持](#%E5%9F%BA%E7%A1%80%E6%94%AF%E6%8C%81)
    - [markdown代码风格检查](#markdown%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E6%A3%80%E6%9F%A5)
    - [流程图插件](#%E6%B5%81%E7%A8%8B%E5%9B%BE%E6%8F%92%E4%BB%B6)
    - [附注插件](#%E9%99%84%E6%B3%A8%E6%8F%92%E4%BB%B6)
    - [表情插件](#%E8%A1%A8%E6%83%85%E6%8F%92%E4%BB%B6)
    - [图表插件](#%E5%9B%BE%E8%A1%A8%E6%8F%92%E4%BB%B6)
  - [已被支持的插件](#%E5%B7%B2%E8%A2%AB%E6%94%AF%E6%8C%81%E7%9A%84%E6%8F%92%E4%BB%B6)
    - [基础支持-选择2](#%E5%9F%BA%E7%A1%80%E6%94%AF%E6%8C%81-%E9%80%89%E6%8B%A92)
    - [TOC目录插件](#toc%E7%9B%AE%E5%BD%95%E6%8F%92%E4%BB%B6)
    - [数学插件](#%E6%95%B0%E5%AD%A6%E6%8F%92%E4%BB%B6)
    - [Markdown快捷键插件](#markdown%E5%BF%AB%E6%8D%B7%E9%94%AE%E6%8F%92%E4%BB%B6)
    - [单选框插件](#%E5%8D%95%E9%80%89%E6%A1%86%E6%8F%92%E4%BB%B6)
  - [基础知识的简单回顾](#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%9A%84%E7%AE%80%E5%8D%95%E5%9B%9E%E9%A1%BE)
    - [标题](#%E6%A0%87%E9%A2%98)
    - [字体](#%E5%AD%97%E4%BD%93)
    - [引用](#%E5%BC%95%E7%94%A8)
    - [无序列表](#%E6%97%A0%E5%BA%8F%E5%88%97%E8%A1%A8)
    - [有序列表](#%E6%9C%89%E5%BA%8F%E5%88%97%E8%A1%A8)
    - [表格](#%E8%A1%A8%E6%A0%BC)
    - [代码](#%E4%BB%A3%E7%A0%81)

## 进阶知识

进阶知识内容需安装[Markdown All in One](#%E5%9F%BA%E7%A1%80%E6%94%AF%E6%8C%81)插件

### TOC目录

TOC目录就像本文文首的目录标题一样。

本文的一级标题名称为“vscode的markdown进阶专题”，用以下格式定义一级标题名称，会在保存时自动翻译成`TOC`标题；同时在修改或增加标题时也会自动更新。一般来说，`windows`的保存键是`Ctrl+S`。

```markdown
- [一级标题名称](#一级标题名称)
```

### 单选框

```markdown
- [ ] 单选框
+ [ ] 单选框
* [ ] 单选框
- [X] 单选框选中
```

### 生成html

按下`Ctrl+shift+p`，输入`Markdown: Print current document to HTML`后会在当前根目录下生成`html`文件。

### 数学

$a + b = c$

```word
$a + b = c$
```

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi \xi x} \,d\xi
$$

```word
$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi \xi x} \,d\xi
$$
```

### 快捷键

| 键            | 命令                                          |
| ------------- | --------------------------------------------- |
| Ctrl + B      | 切换粗体                                      |
| Ctrl + I      | 切换斜体                                      |
| Ctrl+ Shift+] | 切换标题（上层）                              |
| Ctrl+ Shift+[ | 切换标题（下层）                              |
| Ctrl + M      | 切换数学环境                                  |
| Alt + C       | 选中/取消选中单选框                           |
| Ctrl+ Shift+V | 切换预览                                      |
| Ctrl+Shift+F  | 格式化表格（Linux上的键绑定是`Ctrl+Shift+I`） |

快速链接：复制一段链接，如`http://www.baidu.com`；选中文字，如`百度`；然后按下粘贴键。

### vscode命令行

一般用`Ctrl+Shift+P`打开命令行输入命令即可：

1. 创建目录：Create Table of Contents
2. 更新目录：Update Table of Contents
3. 切换代码范围：Toggle code span
4. 将当前文档打印到HTML：Print current document to HTML
5. 切换数学环境：Toggle math environment
6. 切换无序列表：Toggle unordered list

### 支持的设置

在`setting.json`里配置。

| 名称                                             | 默认     | 描述                                |
| ------------------------------------------------ | -------- | ----------------------------------- |
| markdown.extension.italic.indicator              | *        | 使用*或_包含斜体文本                |
| markdown.extension.list.indentationSize          | adaptive | 对有序和无序列表使用不同的缩进大小  |
| markdown.extension.orderedList.autoRenumber      | true     | 您编辑时自动修复列表标记            |
| markdown.extension.orderedList.marker            | ordered  | 或者one：始终使用1.有序列表标记     |
| markdown.extension.preview.autoShowPreviewToSide | false    | 打开Markdown文件时自动显示预览。    |
| markdown.extension.print.absoluteImgPath         | true     | 将图像路径转换为绝对路径            |
| markdown.extension.print.imgToBase64             | false    | 打印到HTML时将图像转换为base64      |
| markdown.extension.print.onFileSave              | false    | 在文件保存时打印到HTML              |
| markdown.extension.showExplorer                  | true     | 在资源管理器面板中显示大纲视图      |
| markdown.extension.syntax.decorations            | true     | 添加装饰到删除线和代码跨度          |
| markdown.extension.syntax.plainTheme             | false    | 一个无干扰的主题                    |
| markdown.extension.toc.githubCompatibility       | false    | GitHub兼容性                        |
| markdown.extension.toc.levels                    | 1..6     | 控制标题级别以显示在目录中。        |
| markdown.extension.toc.orderedList               | false    | 在目录中使用有序列表。              |
| markdown.extension.toc.plaintext                 | false    | 只是纯文本。                        |
| markdown.extension.toc.tabSize                   | auto     | 控制TOC（auto或数字）的缩进尺寸     |
| markdown.extension.toc.unorderedList.marker      | -        | 使用-，*或+在目录中（对于无序列表） |
| markdown.extension.toc.updateOnSave              | true     | 保存时自动更新目录。                |

## 可选功能

需安装其它插件

### 附注

需安装[附注插件](#附注插件)

附注[^1]内容

[^1]:http://www.baidu.com

```markdown
附注[^1]内容

[^1]:http://www.baidu.com
```

### 流程图

需安装[流程图插件](#流程图插件)

有关此教程请参考[mermaid](https://mermaidjs.github.io/)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```markdown
    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
```

### 图表

需安装[图表插件](#图表插件)

配置参考[Chart.js](https://github.com/chartjs/Chart.js)

```markdown
    ```chart
    {
      "type": "pie",
      "data": {
        "labels": [
          "Red",
          "Blue",
          "Yellow"
        ],
        "datasets": [
          {
            "data": [
              300,
              50,
              100
            ],
            "backgroundColor": [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            "hoverBackgroundColor": [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }
        ]
      },
      "options": {}
    }
    ```
```

```chart
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
```

### 表情

需安装[表情插件](#表情插件)

:smile:

参考：[EMOJI CHEAT SHEET](https://www.webfx.com/tools/emoji-cheat-sheet/)

## 插件

### 基础支持

[GitHub](https://github.com/yzhang-gh/vscode-markdown)

Name: Markdown All in One  
Id: yzhang.markdown-all-in-one  
Description: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)  
Version: 2.3.1  
Publisher: Yu Zhang  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one  

### markdown代码风格检查  

Name: markdownlint  
Id: davidanson.vscode-markdownlint  
Description: Markdown linting and style checking for Visual Studio Code  
Version: 0.26.0  
Publisher: David Anson  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint  

### 流程图插件

Name: Markdown Preview Mermaid Support  
Id: bierner.markdown-mermaid  
Description: Adds Mermaid diagram and flowchart support to VS Code's builtin markdown preview  
Version: 1.1.4  
Publisher: Matt Bierner  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid 

### 附注插件

更好的附注支持

Name: Markdown Footnotes  
Id: bierner.markdown-footnotes  
Description: Adds [^footnote] syntax support to VS Code's built-in markdown preview  
Version: 0.0.7  
Publisher: Matt Bierner  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes  

### 表情插件

Name: Markdown Emoji  
Id: bierner.markdown-emoji  
Description: Adds emoji syntax support to VS Code's built-in markdown preview  
Version: 0.0.9  
Publisher: Matt Bierner  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji  

### 图表插件

Name: Chart.js Markdown Preview  
Id: flomon.chartjs-markdown-preview  
Description: Adds Chart.js support to VSCode's builtin markdown preview  
Version: 0.0.2  
Publisher: FlomoN  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=FlomoN.chartjs-markdown-preview  

## 已被支持的插件

此目录下所有插件已在其它插件中被支持。

### 基础支持-选择2  

插件`Markdown All in One`中已基本支持此插件功能。  
支持在浏览器中打开markdown，与`Markdown All in One`不要一起用！  

Name: Markdown Preview Enhanced  
Id: shd101wyy.markdown-preview-enhanced  
Description: Markdown Preview Enhanced ported to vscode  
Version: 0.3.13  
Publisher: Yiyi Wang  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced  

### TOC目录插件

插件`Markdown All in One`中已基本支持此插件功能。

Name: Markdown TOC  
Id: alanwalk.markdown-toc  
Description: Markdown TOC(Table Of Contents) Plugin for Visual Studio Code.  
Version: 1.5.6  
Publisher: AlanWalk  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc  

### 数学插件

插件`Markdown All in One`中已基本支持此插件功能。

Name: Markdown+Math  
Id: goessner.mdmath  
Description: LaTeX Math for Markdown ... with macros and more  
Version: 2.3.9  
Publisher: goessner  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=goessner.mdmath  

### Markdown快捷键插件  

插件`Markdown All in One`中已基本支持此插件功能。

Name: Markdown Shortcuts  
Id: mdickin.markdown-shortcuts  
Description: Shortcuts for Markdown editing  
Version: 0.11.0  
Publisher: mdickin  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts  

### 单选框插件

插件`Markdown All in One`中已基本支持此插件功能。

Name: Markdown Checkbox  
Id: pkief.markdown-checkbox  
Description: With this extension you can create checkboxes in markdown and mark them quickly.  
Version: 1.6.0  
Publisher: Philipp Kief  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.markdown-checkbox  

## 基础知识的简单回顾

1. 链接：`[显示文本](链接 '标题')`
2. 图片：`![图片显示文本](链接 '标题')`
3. 分割线：`---`或`***`

### 标题

```markdown
# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```

### 字体

**粗体**
*斜体*
~~删除线~~
***斜体加粗***
***~~斜体加粗删除线~~***

```markdown
**粗体**
*斜体*
~~删除线~~
***斜体加粗***
***~~斜体加粗删除线~~***
```

### 引用

> 一级引用
>>> 多级嵌套引用

```markdown
> 一级引用
>>> 多级嵌套引用
```

### 无序列表

```markdown
- 列表内容
+ 列表内容
* 列表内容
  - 二级列表
  + 二级列表
  * 二级列表
```

### 有序列表

注意二级列表前面的空格是三个

```markdown
1. 列表内容
   + 二级列表
2. 列表内容
3. 列表内容
```

### 表格

```markdown
| 标题 | 标题          |          标题 |
| ---- | :------------ | ------------: |
| 内容 | 左对齐列“:--” |          内容 |
| 内容 | 内容          | 右对齐列“--:” |
```

### 代码

```markdown
    嵌套在行内的`代码`

    ```java
    标记为
    java语言的多行代码
    ```
```

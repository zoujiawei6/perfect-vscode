# 安装使用

`snippets`目录一般是在`C:\Users\Administrator\AppData\Roaming\Code\User\snippets`目录下，如果有用户名，则需将`Administrator`改成你的`windows`系统用户名。

在mac中是`/Users/你的用户名/Library/Application Support/Code/User/snippets/`

注意`myGlobal.code-snippets`是按我个人习惯定义的提示，可不使用。
目录下没有的文件可以直接复制进去，有的话需要比较一下文件内容，然后按需合并两个文件。

## Markdown支持

### 自动补全代码块

支持的语言：

1 | 2 | 3 | 4 | 5 | 6
-- | -- | -- | -- | -- | --
cf | actionscript3 | as3 | bash | shell | coldfusion
css | cpp | c | c# | c-sharp | csharp
erlang | delphi | pascal | pas | diff patch | erl
jscript | groovy | java | jfx | javafx | js
php | javascript | json | perl | pl | Perl
rails | text | plain | py | python | ruby
sql | ror | rb | sass | scss | scala
html | vb | vbnet | xml | xhtml | xslt
dynamics-xpp | objc | obj-c | f# f-sharp | fsharp | xpp
go | r | s | splus | matlab | swift
properties | golang | mermaid | protobuf | vmoptions | ini
applescript | - | - | - | - | -

使用“```”字符展开提示。

<!--
    ;(() => {
      let cache = [], addUp = 0
     const array = ['applescript', 'actionscript3', 'as3', 'bash', 'shell', 'coldfusion', 'cf', 'cpp', 'c', 'c#', 'c-sharp',
'csharp', 'css', 'delphi', 'pascal', 'pas', 'diff patch', 'erl', 'erlang', 'groovy', 'java', 'jfx', 'javafx', 'js',
'jscript', 'javascript', 'json', 'perl', 'pl', 'Perl', 'php', 'text', 'plain', 'py', 'python', 'ruby', 'rails', 'ror',
'rb', 'sass', 'scss', 'scala', 'sql', 'vb', 'vbnet', 'xml', 'xhtml', 'xslt', 'html', 'objc', 'obj-c', 'f# f-sharp', 'fsharp',
'xpp', 'dynamics-xpp', 'r', 's', 'splus', 'matlab', 'swift', 'go', 'golang', 'mermaid', 'protobuf', 'vmoptions', 'ini',
'properties'],
      texts = []
      console.log(array.length);
      for (let i = 0; i < array.length; i++) {
        const element = array[i],
          index = i%6
        
        cache[index] = element
        
        if (cache.length !== 0 && index === 0) {
          texts.push(cache.join(' | '))
          addUp += cache.length
          cache = []
        }
      }
      console.log(addUp);
      console.log(texts.join('\n'));
    })()
-->

### 标题补全

语法`#*6`和`#6`等同于`######`，后面会补一个空格。

### 创建表格

语法`table>3*3`,`table-3-3`,`table>tr*3>td*3`创建3*3的表格。

最多支持从`1*1`到`10*10`。

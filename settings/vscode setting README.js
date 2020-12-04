/** {@link https://code.visualstudio.com/docs/getstarted/settings User and Workspace Settings} */
export default {
  // *** Editor ***
  // 控制编辑器是否显示CodeLens。
  "diffEditor.codeLens": false,
  // 启用后，差异编辑器将忽略前导或尾随空白的更改。
  "diffEditor.ignoreTrimWhitespace": true,
  // 超时（以毫秒为单位），之后差异计算将被取消。使用0表示没有超时。
  "diffEditor.maxComputationTime": 5000,
  // 控制差异编辑器是否显示+/-指示符以添加/删除更改。
  "diffEditor.renderIndicators": true,
  // 控制差异编辑器是并排显示还是以内联方式显示差异。
  "diffEditor.renderSideBySide": true,
  // 控制是否应接受有关提交字符的建议。例如，在JavaScript中，分号（`;`）可以是接受建议的提交字符并键入该字符。
  "editor.acceptSuggestionOnCommitCharacter": true,
  // 控制除“制表符”外，是否还应在“输入”上接受建议。帮助避免在插入新行或接受建议之间的歧义。
  //  - 上
  //  -聪明：只有在进行文本更改时才接受带有Enter键的建议。
  //  -关
  "editor.acceptSuggestionOnEnter": "on",
  // 控制屏幕阅读器可以读取的编辑器中的行数。警告：这对大于默认值的数字有性能影响。
  "editor.accessibilityPageSize": 10,
  // 控制编辑器是否应在针对屏幕阅读器进行了优化的模式下运行。设置为on将禁用自动换行。
  //  -自动：编辑器将使用平台API来检测何时安装了屏幕阅读器。
  //  -开：编辑器将被永久优化以用于屏幕阅读器。自动换行将被禁用。
  //  -不亮：绝不会针对屏幕阅读器的使用对编辑器进行优化。
  "editor.accessibilitySupport": "auto",
  // 控制在用户添加左括号后编辑器是否应自动关闭括号。
  //  -一直
  //  -languageDefined：使用语言配置来确定何时自动关闭方括号。
  //  -beforeWhitespace：仅当光标位于空白左侧时，才会自动关闭方括号。
  //  -从不
  "editor.autoClosingBrackets": "languageDefined",
  // 控制编辑器应键入右引号还是方括号。
  // -一直
  //  -自动：仅在自动插入右引号或方括号时键入它们。
  //  -从不
  "editor.autoClosingOvertype": "auto",
  // 控制在用户添加开始引号后编辑器是否应自动关闭引号。
  //  -一直
  //  -languageDefined：使用语言配置来确定何时自动关闭引号。
  //  -beforeWhitespace：仅当光标位于空白左侧时，自动关闭引用才会出现。
  //  -从不
  "editor.autoClosingQuotes": "languageDefined",
  // 控制当用户键入，粘贴，移动或缩进行时，编辑器是否应自动调整缩进。
  //  -无：编辑器不会自动插入缩进。
  //  -保留：编辑器将保留当前行的缩进。
  //  -方括号：编辑器将保留当前行的缩进和荣誉语言定义的方括号。
  //  -高级：编辑器将保留当前行的缩进，使用语言定义的括号，并调用由语言定义的特殊onEnterRules。
  //  -完整：编辑器将保留当前行的缩进，使用语言定义的括号，调用由语言定义的特殊onEnterRules以及使用语言定义的indentationRules。
  "editor.autoIndent": "full",
  // 控制编辑器在键入引号或方括号时是否应自动包围选择。
  //  -languageDefined：使用语言配置来确定何时自动包围选择。
  //  -引号：用引号引起来，但不包括方括号。
  //  -方括号：用方括号括起来，但不要加上引号。
  //  -从不
  "editor.autoSurround": "languageDefined",
  // 保存时运行的代码操作类型。
  "editor.codeActionsOnSave": {},
  // 控制编辑器是否显示CodeLens。
  "editor.codeLens": true,
  // 控制编辑器是否应呈现嵌入式颜色装饰器和颜色选择器。
  "editor.colorDecorators": true,
  // 启用使用鼠标和键进行的选择来进行列选择。
  "editor.columnSelection": false,
  // 控制是否应通过切换，添加或删除行注释操作来忽略空行。
  "editor.comments.ignoreEmptyLines": true,
  // 控制注释时是否插入空格字符。
  "editor.comments.insertSpace": true,
  // 控制是否应将语法高亮显示复制到剪贴板中。
  "editor.copyWithSyntaxHighlighting": true,
  // 控制光标的动画样式。
  "editor.cursorBlinking": "blink",
  // 控制是否应启用平滑的插入符号动画。
  "editor.cursorSmoothCaretAnimation": false,
  // 控制光标样式。
  "editor.cursorStyle": "line",
  // 控制光标周围可见的前和后行的最小数量。在其他一些编辑器中称为“ scrollOff”或“ scrollOffset”。
  "editor.cursorSurroundingLines": 0,
  // 控制何时应执行“ cursorSurroundingLines”。
  //  -默认值：仅在通过键盘或API触发时才强制执行cursorSurroundingLines。
  //  -全部：始终执行`cursorSurroundingLines`。
  "editor.cursorSurroundingLinesStyle": "default",
  // 当“ editor.cursorStyle”设置为“ line”时，控制光标的宽度。
  "editor.cursorWidth": 0,
  // 定义优先于所有其他格式化程序设置的默认格式化程序。必须是提供格式化程序的扩展名的标识符。
  "editor.defaultFormatter": null,
  // 控制“转到定义”鼠标手势是否始终打开窥视小部件。
  "editor.definitionLinkOpensInPeek": false,
  // 控制基于文件内容打开文件时是否自动检测“ editor.tabSize＃”和“＃editor.insertSpaces”。
  "editor.detectIndentation": true,
  // 控制编辑器是否应允许通过拖放移动选择。
  "editor.dragAndDrop": true,
  // 控制是否复制没有选择的内容复制当前行。
  "editor.emptySelectionClipboard": true,
  // 按下“ Alt”时滚动速度倍增器。
  "editor.fastScrollSensitivity": 5,
  // 控制“查找小部件”是否应在编辑器顶部添加额外的行。如果为true，则可以在“查找小组件”可见时滚动到第一行之外。
  "editor.find.addExtraSpaceOnTop": true,
  // 控制自动打开选择中查找的条件。
  //  -从不：从不自动启用“在选择中查找”（默认）
  //  -始终：始终自动启用“在选择中查找”
  //   - 多行：打开查找在选择时自动选择的内容多行。
  "editor.find.autoFindInSelection": "never",
  // 控制键入时光标是否应跳转以查找匹配项。
  "editor.find.cursorMoveOnType": true,
  // 控制“查找小部件”是应读取还是修改macOS上的共享查找剪贴板。
  "editor.find.globalFindClipboard": false,
  // 控制当找不到其他匹配项时，搜索是否自动从开头（或结尾）重新开始。
  "editor.find.loop": true,
  // 控制“查找小部件”中的搜索字符串是否来自编辑器选择。
  "editor.find.seedSearchStringFromSelection": true,
  // 控制编辑器是否启用了代码折叠。
  "editor.folding": true,
  // 控制编辑器是否应突出显示折叠范围。
  "editor.foldingHighlight": true,
  // 控制用于计算折叠范围的策略。
  //  -自动：使用特定于语言的折叠策略（如果可用），否则使用基于缩进的折叠策略。
  //  -缩进：使用基于缩进的折叠策略。
  "editor.foldingStrategy": "auto",
  // 控制字体系列。
  "editor.fontFamily": "Consolas, 'Courier New', monospace",
  // 配置字体连字或字体功能。
  "editor.fontLigatures": false,
  // 控制字体大小（以像素为单位）。
  "editor.fontSize": 14,
  // 控制字体粗细。接受1到1000之间的“普通”和“粗体”关键字或数字。
  "editor.fontWeight": "normal",
  // 控制编辑器是否应自动格式化粘贴的内容。格式化程序必须可用，并且格式化程序应能够格式化文档中的范围。
  "editor.formatOnPaste": false,
  // 保存时格式化文件。格式化程序必须可用，延迟后不得保存文件，并且不得关闭编辑器。
  "editor.formatOnSave": false,
  // 控制保存时格式化是格式化整个文件还是仅格式化。仅在editor.formatOnSave为true时适用。
  //  -文件：格式化整个文件。
  //  -修改：格式修改（需要源代码控制）。
  "editor.formatOnSaveMode": "file",
  // 控制编辑器在键入后是否应自动设置行格式。
  "editor.formatOnType": false,
  // 控制编辑器是否应渲染垂直字形边距。字形边距主要用于调试。
  "editor.glyphMargin": true,
  // 当“转到声明”的结果为当前位置时正在执行的备用命令ID。
  "editor.gotoLocation.alternativeDeclarationCommand": "editor.action.goToReferences",
  // 当“转到定义”的结果为当前位置时正在执行的备用命令ID。
  "editor.gotoLocation.alternativeDefinitionCommand": "editor.action.goToReferences",
  // 当“转到实施”的结果是当前位置时，正在执行的备用命令ID。
  "editor.gotoLocation.alternativeImplementationCommand": "",
  // 当“转到参考”的结果为当前位置时正在执行的替代命令ID。
  "editor.gotoLocation.alternativeReferenceCommand": "",
  // 当“转到类型定义”的结果为当前位置时正在执行的备用命令ID。
  "editor.gotoLocation.alternativeTypeDefinitionCommand": "editor.action.goToReferences",
  // 当存在多个目标位置时，控制“转到声明”命令的行为。
  //  -窥视：显示结果的窥视视图（默认）
  //  -gotoAndPeek：转到主要结果并显示一个窥视视图
  //  -转到：转到主要结果，并启用对其他用户的无窥视导航
  "editor.gotoLocation.multipleDeclarations": "peek",
  // 当存在多个目标位置时，控制“转到定义”命令的行为。
  //  -窥视：显示结果的窥视视图（默认）
  //  -gotoAndPeek：转到主要结果并显示一个窥视视图
  //  -转到：转到主要结果，并启用对其他用户的无窥视导航
  "editor.gotoLocation.multipleDefinitions": "peek",
  // 当存在多个目标位置时，控制“转到实施”命令的行为。
  //  -窥视：显示结果的窥视视图（默认）
  //  -gotoAndPeek：转到主要结果并显示一个窥视视图
  //  -转到：转到主要结果，并启用对其他用户的无窥视导航
  "editor.gotoLocation.multipleImplementations": "peek",
  // 当存在多个目标位置时，控制“转到参考”命令的行为。
  //  -窥视：显示结果的窥视视图（默认）
  //  -gotoAndPeek：转到主要结果并显示一个窥视视图
  //  -转到：转到主要结果，并启用对其他用户的无窥视导航
  "editor.gotoLocation.multipleReferences": "peek",
  // 当存在多个目标位置时，控制“转到类型定义”命令的行为。
  //  -窥视：显示结果的窥视视图（默认）
  //  -gotoAndPeek：转到主要结果并显示一个窥视视图
  //  -转到：转到主要结果，并启用对其他用户的无窥视导航
  "editor.gotoLocation.multipleTypeDefinitions": "peek",
  // 控制是否将光标隐藏在概览标尺中。
  "editor.hideCursorInOverviewRuler": false,
  // 控制编辑器是否应突出显示活动的缩进指南。
  "editor.highlightActiveIndentGuide": true,
  // 控制以毫秒为单位的延迟，在该延迟之后显示悬停。
  "editor.hover.delay": 300,
  // 控制是否显示悬停。
  "editor.hover.enabled": true,
  // 控制将鼠标悬停在其上时，悬停是否应保持可见状态。
  "editor.hover.sticky": true,
  // 按“ Tab”时插入空格。打开editor.detectIndentation时，此设置将根据文件内容被覆盖。
  "editor.insertSpaces": true,
  // 控制字母间距（以像素为单位）。
  "editor.letterSpacing": 0,
  // 在编辑器中启用代码操作灯泡。
  "editor.lightbulb.enabled": true,
  // 控制行高。使用0从字体大小计算行高。
  "editor.lineHeight": 0,
  // 控制行号的显示。
  //  -关：不显示行号。
  //  -开：行号呈现为绝对数。
  //  -相对：行号表示为到光标位置的直线距离。
  //  -间隔：每10行显示一次行号。
  "editor.lineNumbers": "on",
  // 控制编辑器是否应该检测链接并使它们可单击。
  "editor.links": true,
  // 突出显示匹配的括号。
  "editor.matchBrackets": "always",
  // 控制是否显示小地图。
  "editor.minimap.enabled": true,
  // 限制小地图的宽度，以最多呈现一定数量的列。
  "editor.minimap.maxColumn": 120,
  // 在一行上渲染实际字符，而不是色块。
  "editor.minimap.renderCharacters": true,
  // 在小地图中绘制的内容比例：1、2或3。
  "editor.minimap.scale": 1,
  // 控制何时显示小地图滑块。
  "editor.minimap.showSlider": "mouseover",
  // 控制在哪里渲染小地图。
  "editor.minimap.side": "right",
  // 控制小地图的大小。
  //  -比例：小地图的大小与编辑器内容的大小相同（并且可能会滚动）。
  //  -填充：小地图将根据需要拉伸或收缩以填充编辑器的高度（不滚动）。
  //  -适合：小地图会根据需要缩小到永远不会大于编辑器的大小（不滚动）。
  "editor.minimap.size": "proportional",
  // 用于鼠标滚轮滚动事件的deltaX和deltaY的乘数。
  "editor.mouseWheelScrollSensitivity": 1,
  // 使用鼠标滚轮并按住Ctrl时，缩放编辑器的字体。
  "editor.mouseWheelZoom": false,
  // 用鼠标添加多个光标的修饰符。 “转到定义”和“打开链接”鼠标手势将进行调整，以使其与多光标修改器不冲突。 [了解更多]（https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier）。
  //  -ctrlCmd：在Windows和Linux上映射为“ Control”，在macOS上映射为“ Command”。
  //  -alt：在Windows和Linux上映射为“ Alt”，在macOS上映射为“ Option”。
  "editor.multiCursorModifier": "alt",
  // 当粘贴的文本的行数与光标数匹配时，控制粘贴。
  //  -传播：每个光标粘贴一行文本。
  //  -完整：每个光标都粘贴全文。
  "editor.multiCursorPaste": "spread",
  // 控制编辑器是否应突出显示语义符号的出现。
  "editor.occurrencesHighlight": true,
  // 控制是否应在概览标尺周围绘制边框。
  "editor.overviewRulerBorder": true,
  // 控制编辑器底部边缘和最后一行之间的空间量。
  "editor.padding.bottom": 0,
  // 控制编辑器顶部和第一行之间的空间量。
  "editor.padding.top": 0,
  // 控制参数提示菜单在到达列表末尾时是循环还是关闭。
  "editor.parameterHints.cycle": false,
  // 启用一个弹出窗口，在您键入时显示参数文档和类型信息。
  "editor.parameterHints.enabled": true,
  // 控制是集中显示内联编辑器还是peek小部件中的树。
  //  -树：窥视时聚焦树
  //  -编辑器：打开窥视时请集中编辑器
  "editor.peekWidgetDefaultFocus": "tree",
  // 控制建议是否在键入时自动显示。
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },
  // 控制延迟（以毫秒为单位），此后将显示快速建议。
  "editor.quickSuggestionsDelay": 10,
  // 启用/禁用重命名之前预览更改的功能
  "editor.rename.enablePreview": true,
  // 控制编辑器是否根据类型自动重命名。
  "editor.renameOnType": false,
  // 控制编辑器是否应呈现控制字符。
  "editor.renderControlCharacters": false,
  // 当文件以换行符结尾时，渲染最后一个行号。
  "editor.renderFinalNewline": true,
  // 控制编辑器是否应提供缩进参考线。
  "editor.renderIndentGuides": true,
  // 控制编辑器应如何呈现当前行高光。
  //  - 没有
  //  -天沟
  //  -线
  //  -全部：突出显示装订线和当前行。
  "editor.renderLineHighlight": "line",
  // 控制编辑器是否仅应在焦点对准编辑器时才渲染当前行高光
  "editor.renderLineHighlightOnlyWhenFocus": false,
  // 控制编辑器应如何呈现空白字符。
  //  - 没有
  //  -边界：渲染空格字符，单词之间的单个空格除外。
  //  -选择：仅在所选文本上呈现空白字符。
  //  -尾随：仅渲染尾随空白字符
  //  -全部
  "editor.renderWhitespace": "selection",
  // 控制选区是否应具有圆角。
  "editor.roundedSelection": true,
  // 在一定数量的等宽字符之后渲染垂直标尺。对多个标尺使用多个值。如果数组为空，则不绘制标尺。
  "editor.rulers": [],
  // 控制多余的字符数，编辑器将水平滚动超出这些字符。
  "editor.scrollBeyondLastColumn": 5,
  // 控制编辑器是否将滚动到最后一行。
  "editor.scrollBeyondLastLine": true,
  // 控制是否应支持Linux主剪贴板。
  "editor.selectionClipboard": true,
  // 同时垂直和水平滚动时，仅沿主导轴滚动。在触控板上垂直滚动时，防止水平漂移。
  "editor.scrollPredominantAxis": true,
  // 控制编辑器是否应突出显示与所选内容相似的匹配项。
  "editor.selectionHighlight": true,
  // 控制是否针对支持语义的高亮显示语言。
  //  -true：为所有颜色主题启用了语义突出显示。
  //  -否：所有颜色主题的语义突出显示均已禁用。
  //  -configureByTheme：语义突出显示由当前颜色主题的“ semanticHighlighting”设置配置。
  "editor.semanticHighlighting.enabled": "configuredByTheme",
  // 从当前选定的颜色主题覆盖编辑器语义标记的颜色和样式。
  "editor.semanticTokenColorCustomizations": {},
  // 控制删除线不建议使用的变量。
  "editor.showDeprecated": true,
  // 控制何时显示装订线上的折叠控件。
  //  -始终：始终显示折叠控件。
  //  -鼠标悬停：仅在鼠标位于装订线上方时显示折叠控件。
  "editor.showFoldingControls": "mouseover",
  // 控制淡出未使用的代码。
  "editor.showUnused": true,
  // 是否始终选择前导和尾随空格。
  "editor.smartSelect.selectLeadingAndTrailingWhitespace": true,
  // 控制编辑器是否将使用动画滚动。
  "editor.smoothScrolling": false,
  // 控制片段是否与其他建议一起显示以及它们的排序方式。
  //  -顶部：在其他建议的顶部显示摘要建议。
  //  -底部：在其他建议下方显示摘要建议。
  //  -内联：显示摘要建议和其他建议。
  //  -无：不显示摘要建议。
  "editor.snippetSuggestions": "inline",
  // 即使双击其内容或单击“转义”，也要保持窥视编辑器打开。
  "editor.stablePeek": false,
  // 控制筛选和排序建议是否考虑了小的错别字。
  "editor.suggest.filterGraceful": true,
  // 控制接受补全时是否覆盖单词。请注意，这取决于选择使用此功能的扩展。
  //  -插入：插入建议，而不会覆盖光标右侧的文本。
  //  -替换：插入建议并覆盖光标右侧的文本。
  "editor.suggest.insertMode": "insert",
  // 控制排序是否偏向出现在光标附近的单词。
  "editor.suggest.localityBonus": false,
  // 控制记住的建议选择是否在多个工作空间和窗口之间共享（需要editor.suggestSelection）。
  "editor.suggest.shareSuggestSelections": false,
  // 启用后，IntelliSense将显示“类”建议。
  "editor.suggest.showClasses": true,
  // 启用后，IntelliSense将显示“颜色”建议。
  "editor.suggest.showColors": true,
  // 启用后，IntelliSense将显示“常量”建议。
  "editor.suggest.showConstants": true,
  // 启用后，IntelliSense将显示“构造函数”建议。
  "editor.suggest.showConstructors": true,
  // 启用后，IntelliSense将显示“ customcolor”建议。
  "editor.suggest.showCustomcolors": true,
  // 启用后，IntelliSense将显示“ enumMember”建议。
  "editor.suggest.showEnumMembers": true,
  // 启用后，IntelliSense将显示“枚举”建议。
  "editor.suggest.showEnums": true,
  // 启用后，IntelliSense将显示“事件”建议。
  "editor.suggest.showEvents": true,
  // 启用后，IntelliSense将显示“字段”建议。
  "editor.suggest.showFields": true,
  // 启用后，IntelliSense将显示“文件”建议。
  "editor.suggest.showFiles": true,
  // 启用后，IntelliSense将显示“文件夹”建议。
  "editor.suggest.showFolders": true,
  // 启用后，IntelliSense将显示“功能”建议。
  "editor.suggest.showFunctions": true,
  // 控制是显示还是隐藏建议中的图标。
  "editor.suggest.showIcons": true,
  // 启用后，IntelliSense将显示“界面”建议。
  "editor.suggest.showInterfaces": true,
  // 启用后，IntelliSense将显示“问题”建议。
  "editor.suggest.showIssues": true,
  // 启用后，IntelliSense将显示“关键字”建议。
  "editor.suggest.showKeywords": true,
  // 启用后，IntelliSense将显示“方法”建议。
  "editor.suggest.showMethods": true,
  // 启用后，IntelliSense将显示“模块”建议。
  "editor.suggest.showModules": true,
  // 启用后，IntelliSense会显示“ operator”建议。
  "editor.suggest.showOperators": true,
  // 启用后，IntelliSense将显示“属性”建议。
  "editor.suggest.showProperties": true,
  // 启用后，IntelliSense将显示“参考”建议。
  "editor.suggest.showReferences": true,
  // 启用后，IntelliSense会显示“代码段”建议。
  "editor.suggest.showSnippets": true,
  // 控制建议控件底部的状态栏的可见性。
  "editor.suggest.showStatusBar": false,
  // 启用后，IntelliSense将显示“ struct”建议。
  "editor.suggest.showStructs": true,
  // 启用后，IntelliSense将显示“ typeParameter”建议。
  "editor.suggest.showTypeParameters": true,
  // 启用后，IntelliSense将显示“单位”建议。
  "editor.suggest.showUnits": true,
  // 启用后，IntelliSense将显示“用户”建议。
  "editor.suggest.showUsers": true,
  // 启用后，IntelliSense将显示“值”建议。
  "editor.suggest.showValues": true,
  // 启用后，IntelliSense将显示“变量”建议。
  "editor.suggest.showVariables": true,
  // 启用后，IntelliSense将显示“文本”建议。
  "editor.suggest.showWords": true,
  // 控制活动代码段是否阻止快速建议。
  "editor.suggest.snippetsPreventQuickSuggestions": true,
  // 建议小部件的字体大小。设置为0时，使用editor.fontSize的值。
  "editor.suggestFontSize": 0,
  // 建议小部件的行高。设置为0时，使用editor.lineHeight的值。
  "editor.suggestLineHeight": 0,
  // 控制键入触发字符时是否应自动显示建议。
  "editor.suggestOnTriggerCharacters": true,
  // 控制显示建议列表时如何预选择建议。
  //  -第一：始终选择第一个建议。
  //  -最近使用：选择最近的建议，除非进一步输入会选择一个建议，例如`控制台。 -> console.log`，因为`log`最近已经完成。
  //  -最近使用dByPrefix：根据已完成建议的先前前缀选择建议，例如`co-> console`和`con-> const`。
  "editor.suggestSelection": "recentlyUsed",
  // 启用选项卡补全。
  //  -开：按下Tab键时，制表符完成将插入最匹配的建议。
  //  -关：禁用制表符补全。
  //  -onlySnippets：当前缀匹配时，制表完整的代码段。未启用“ quickSuggestions”时效果最佳。
  "editor.tabCompletion": "off",
  // 制表符等于的空格数。打开editor.detectIndentation时，此设置将根据文件内容被覆盖。
  "editor.tabSize": 4,
  // 从当前选定的颜色主题覆盖编辑器语法颜色和字体样式。
  "editor.tokenColorCustomizations": {},
  // 删除尾随自动插入的空格。
  "editor.trimAutoWhitespace": true,
  // 控制是否在折叠线之后单击空白内容将展开该行。
  "editor.unfoldOnClickAfterEndOfLine": false,
  // 移除可能引起问题的异常线路终端。
  //  -自动：不寻常的行终止符将被忽略。
  //  -灭：提示删除异常的行终止符。
  //  -提示：异常行终止符将被自动删除。
  "editor.unusualLineTerminators": "prompt",
  // 在制表符停止位置后插入和删除空格。
  "editor.useTabStops": true,
  // 控制是否应基于文档中的单词来计算补全。
  "editor.wordBasedSuggestions": true,
  // 与单词相关的导航或操作时，将用作单词分隔符的字符。
  "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
  // 控制线条应如何换行。
  //  -关闭：线条永远不会缠绕。
  //  -开：线将以视口宽度换行。
  //  -wordWrapColumn：行将在`editor.wordWrapColumn`中换行。
  //  -有界的：线将在视口和editor.wordWrapColumn的最小值处换行。
  "editor.wordWrap": "off",
  // 当`editor.wordWrap`是`wordWrapColumn`或`bounded`时控制编辑器的换行列。
  "editor.wordWrapColumn": 80,
  // 控制换行的缩进。
  //  -无：无缩进。包裹的行从第1列开始。
  //  -相同：换行的缩进与父行相同。
  //  -缩进：换行将+1缩进父级。
  //  -deepIndent：换行的父行缩进+2。
  "editor.wrappingIndent": "same",
  // 控制计算包装点的算法。
  //  -简单：假定所有字符的宽度相同。这是一种快速算法，适用于等宽字体和字形宽度相等的某些脚本（如拉丁字符）。
  //  -高级：将包装点计算委托给浏览器。这是一个缓慢的算法，可能会导致大文件冻结，但在所有情况下都可以正常工作。
  "editor.wrappingStrategy": "simple",
  // *** SCM ***
  // 控制内联操作在“源代码管理”视图中是否始终可见。
  "scm.alwaysShowActions": false,
  // 控制存储库在SCM视图中是否应始终可见。
  "scm.alwaysShowRepositories": false,
  // 控制SCM视图在打开文件时是否应自动显示和选择文件。
  "scm.autoReveal": true,
  // 控制活动栏上“源代码管理”图标上的计数标志。
  //  -全部：显示所有“源代码管理提供程序”计数标记的总和。
  //  -集中：显示集中的源代码管理提供者的计数标志。
  //  -关：禁用源代码管理计数标志。
  "scm.countBadge": "all",
  // 控制默认的“源代码控制”存储库查看模式。
  //  -树：将存储库更改显示为树。
  //  -列表：将存储库更改显示为列表。
  "scm.defaultViewMode": "list",
  // 在编辑器中控制差异装饰。
  //  -全部：在所有可用位置显示差异装饰。
  //  -装订线：仅在编辑器装订线中显示差异装饰。
  //  -概览：仅在概览标尺中显示差异装饰。
  //  -小地图：仅在小地图中显示差异装饰。
  //  -无：不显示差异装饰。
  "scm.diffDecorations": "all",
  // 控制装订线中Source Control diff装饰器的可见性。
  //  -始终：始终显示排水沟中的差异装饰器。
  //  -悬停：仅在悬停时在装订线中显示差异装饰器。
  "scm.diffDecorationsGutterVisibility": "always",
  // 控制装订线中差异装饰的宽度（px）（添加和修改）。
  "scm.diffDecorationsGutterWidth": 3,
  // 控制输入​​消息的字体。将“ default”用于工作台用户界面字体系列，将“ editor”用于“ editor.fontFamily”的值，或使用自定义字体系列。
  "scm.inputFontFamily": "default",
  // 控制源代码管理提供程序标头上的计数标志。这些标头仅在有多个提供者时出现。
  //  -隐藏：隐藏源代码管理提供程序计数标记。
  //  -自动：非零时，仅显示源控制提供程序的计数标志。
  //  -可见：显示源代码管理提供程序计数徽章。
  "scm.providerCountBadge": "hidden",
  // 控制“源代码管理存储库”部分中可见的存储库数量。设置为0即可手动调整视图大小。
  "scm.repositories.visible": 10,
  // 定义优先于所有其他内核提供程序设置的默认内核提供程序。必须是贡献内核提供程序的扩展的标识符。
  "notebook.kernelProviderAssociations": [],
  // *** Workbench ***
  // 控制在工作台中单击活动栏图标的行为。
  //  -切换：如果单击的项目已经可见，则隐藏侧栏。
  //  -焦点：如果单击的项目已经可见，则聚焦侧栏。
  "workbench.activityBar.iconClickBehavior": "toggle",
  // 控制工作台中活动栏的可见性。
  "workbench.activityBar.visible": true,
  // 覆盖当前所选颜色主题中的颜色。
  "workbench.colorCustomizations": {},
  // 指定工作台中使用的颜色主题。
  "workbench.colorTheme": "Default Dark+",
  // 控制最近使用的命令数，以保留在命令选项板的历史记录中。设置为0以禁用命令历史记录。
  "workbench.commandPalette.history": 50,
  // 控制下次打开命令面板时是否应恢复最后键入的输入。
  "workbench.commandPalette.preserveInput": false,
  // 控制在打开多个组时是否应将居中布局自动调整为最大宽度。一旦只有一组打开，它将调整为原始的居中宽度。
  "workbench.editor.centeredLayoutAutoResize": true,
  // 当组中的最后一个选项卡关闭时，控制空编辑器组的行为。启用后，空组将自动关闭。禁用后，空组将保留在网格中。
  "workbench.editor.closeEmptyGroups": true,
  // 控制显示在会话中打开的文件的编辑器在被其他进程删除或重命名时是否应自动关闭。禁用此选项将使编辑器在发生此类事件时保持打开状态。请注意，从应用程序中删除将始终关闭编辑器，脏文件将永远不会关闭以保存您的数据。
  "workbench.editor.closeOnFileDelete": false,
  // 控制打开的编辑器是否显示为预览。预览编辑器不会保持打开状态，直到被明确设置为保持打开状态（例如，通过双击或编辑）并以斜体显示时才可以重用。
  "workbench.editor.enablePreview": true,
  // 控制从“快速打开”打开的编辑器是否显示为预览。预览编辑器不会保持打开状态，直到被明确设置为保持打开状态（例如，通过双击或编辑）后才能重新使用。
  "workbench.editor.enablePreviewFromQuickOpen": false,
  // 控制选项卡是按最近使用的顺序还是从左到右关闭。
  "workbench.editor.focusRecentEditorAfterClose": true,
  // 控制是否在修改后的（脏）编辑器选项卡上绘制顶部边框。当workbench.editor.showTabs为false时，将忽略此值。
  "workbench.editor.highlightModifiedTabs": false,
  // 控制编辑器标签的格式。
  //  -默认值：显示文件名。启用选项卡并且两个文件在一组中具有相同的名称时，将添加每个文件路径的不同部分。禁用选项卡时，如果编辑器处于活动状态，则显示相对于工作区文件夹的路径。
  //  -短：显示文件名，然后显示其目录名。
  //  -中：显示文件名，后跟相对于工作区文件夹的路径。
  //  -long：显示文件名及其后的绝对路径。
  "workbench.editor.labelFormat": "default",
  // 控制是否应限制打开的编辑器的数量。启用后，不太脏的新近使用的编辑器将关闭，为新打开的编辑器腾出空间。
  "workbench.editor.limit.enabled": false,
  // 控制最大打开的编辑器的限制是应应用于每个编辑器组还是应用于所有编辑器组。
  "workbench.editor.limit.perEditorGroup": false,
  // 控制打开的编辑器的最大数量。使用`workbench.editor.limit.perEditorGroup`设置来控制每个编辑器组或所有组的限制。
  "workbench.editor.limit.value": 10,
  // 如果提供的话，使用四个和五个鼠标按钮在打开的文件之间导航。
  "workbench.editor.mouseBackForwardToNavigate": true,
  // 控制编辑器的打开位置。选择“向左”或“向右”可在当前活动窗口的左侧或右侧打开编辑器。选择“第一个”或“最后一个”以独立于当前活动的编辑器打开编辑器。
  "workbench.editor.openPositioning": "right",
  // 控制并排打开的编辑器的默认方向（例如，从资源管理器中打开）。默认情况下，编辑器将在当前活动的编辑器的右侧打开。如果更改为“ down”，编辑器将在当前活动的编辑器下面打开。
  "workbench.editor.openSideBySideDirection": "right",
  // 控制固定的编辑器选项卡的大小。固定的选项卡将排序到所有打开的选项卡的开头，并且通常在取消固定后才会关闭。当workbench.editor.showTabs为false时，将忽略此值。
  //  -正常：固定标签会继承非固定标签的外观。
  //  -紧凑：固定的标签将以紧凑的形式显示，仅带有图标或编辑者姓名的首字母。
  //  -缩小：固定的选项卡缩小到紧凑的固定大小，显示部分编辑器名称。
  "workbench.editor.pinnedTabSizing": "normal",
  // 在关闭文本编辑器后重新打开它们时，将恢复上一个视图状态（例如，滚动位置）。
  "workbench.editor.restoreViewState": true,
  // 控制是否打开任何可见组中的编辑器。如果禁用，则编辑器将倾向于在当前活动的编辑器组中打开。如果启用，将显示一个已打开的编辑器，而不是在当前活动的编辑器组中再次打开。请注意，在某些情况下，此设置会被忽略。强制编辑者在特定组中或当前活动组的侧面打开。
  "workbench.editor.revealIfOpen": false,
  // 控制是否在选项卡上滚动将其打开。默认情况下，选项卡仅在滚动时显示，而不会打开。您可以在滚动时按住Shift键，并在此持续时间内更改此行为。当workbench.editor.showTabs为false时，将忽略此值。
  "workbench.editor.scrollToSwitchTabs": false,
  // 控制打开的编辑器是否应显示图标。这也需要启用文件图标主题。
  "workbench.editor.showIcons": true,
  // 控制打开的编辑器是否应显示在选项卡中。
  "workbench.editor.showTabs": true,
  // 控制分割编辑器组时的大小。
  //  -分发：将所有编辑器组均分。
  //  -拆分：将活动编辑器组拆分为相等的部分。
  "workbench.editor.splitSizing": "distribute",
  // 控制编辑器选项卡的关闭按钮的位置，或在设置为“关闭”时禁用它们。当workbench.editor.showTabs为false时，将忽略此值。
  "workbench.editor.tabCloseButton": "right",
  // 控制编辑器选项卡的大小。当workbench.editor.showTabs为false时，将忽略此值。
  //  -适合：请始终将标签保持足够大，以显示完整的编辑器标签。
  //  -缩小：当可用空间不足以一次显示所有标签时，允许标签变小。
  "workbench.editor.tabSizing": "fit",
  // 在编辑器标题区域中控制用于选项卡和面包屑的滚动条的高度。
  //  -默认：默认大小。
  //  -大：增大尺寸，因此可以使用鼠标更轻松地抓住它
  "workbench.editor.titleScrollbarSizing": "default",
  // 控制无标题编辑器的标签格式。
  //  -内容：无标题文件的名称是从其第一行的内容派生的，除非它具有关联的文件路径。万一该行为空或不包含单词字符，它将退回到名称。
  //  -名称：未命名文件的名称不是从文件的内容派生的。
  "workbench.editor.untitled.labelFormat": "content",
  // 配置用于特定文件类型的编辑器。
  "workbench.editorAssociations": [],
  // 在工作台中控制字体别名方法。
  //  -默认值：亚像素字体平滑。在大多数非视网膜显示器上，这将提供最清晰的文本。
  //  -抗锯齿：使字体在像素水平上（而不是在子像素上）平滑。可以使字体整体看起来更亮。
  //  -无：禁用字体平滑。文本将显示锯齿状的尖锐边缘。
  //  -自动：根据显示的DPI自动应用“默认”或“抗锯齿”。
  "workbench.fontAliasing": "default",
  // 指定工作台中使用的文件图标主题，或指定为“ null”以不显示任何文件图标。
  //  -null：没有文件图标
  //  -最小
  //  -vs-塞蒂
  "workbench.iconTheme": "vs-seti",
  // 控制是否仅通过键入即可自动触发列表和树中的键盘导航。如果设置为false，则仅在执行list.toggleKeyboardNavigation命令时触发键盘导航，您可以为其分配键盘快捷键。
  "workbench.list.automaticKeyboardNavigation": true,
  // 控制列表和树是否在工作台中支持水平滚动。警告：启用此设置对性能有影响。
  "workbench.list.horizontalScrolling": false,
  // 控制工作台中列表和树的键盘导航样式。可以简单，突出显示和过滤。
  //  -简单：简单的键盘导航可以使与键盘输入匹配的元素集中。匹配仅在前缀上完成。
  //  -高亮：高亮键盘导航突出显示与键盘输入匹配的元素。进一步的上下导航将仅遍历突出显示的元素。
  //  -过滤器：过滤器键盘导航将过滤并隐藏所有与键盘输入不匹配的元素。
  "workbench.list.keyboardNavigation": "highlight",
  // 用于用鼠标在树和列表中添加项到多选的修饰符（例如，在资源管理器，打开的编辑器和scm视图中）。如果支持，“向侧面打开”鼠标手势将进行调整，以使其与multiselect修饰符不冲突。
  //  -ctrlCmd：在Windows和Linux上映射为“ Control”，在macOS上映射为“ Command”。
  //  -alt：在Windows和Linux上映射为“ Alt”，在macOS上映射为“ Option”。
  "workbench.list.multiSelectModifier": "ctrlCmd",
  // 控制如何使用鼠标（如果支持）在树和列表中打开项目。对于带树的孩子的父母，此设置将控制单击以扩展父母还是双击。请注意，如果某些设置不适用，某些树和列表可能会选择忽略此设置。
  "workbench.list.openMode": "singleClick",
  // 控制列表和树是否具有平滑的滚动。
  "workbench.list.smoothScrolling": false,
  // 控制面板的默认位置（终端，调试控制台，输出，问题）。它可以显示在工作台的底部，右侧或左侧。
  "workbench.panel.defaultLocation": "bottom",
  // 控制面板是否最大化打开。它可以始终打开最大化，永不打开最大化，也可以打开到关闭前的最后一个状态。
  //  -始终：打开面板时始终最大化面板。
  //  -从不：打开面板时切勿最大化面板。面板将打开至最大。
  //  -保存：在关闭面板之前，将面板打开到其所在的状态。
  "workbench.panel.opensMaximized": "preserve",
  // 当启用`window.autoDetectColorScheme`时，指定深色操作系统外观的首选颜色主题。
  "workbench.preferredDarkColorTheme": "Default Dark+",
  // 指定启用`window.autoDetectHighContrast`时在高对比度模式下使用的首选颜色主题。
  "workbench.preferredHighContrastColorTheme": "Default High Contrast",
  // 当启用“ window.autoDetectColorScheme”时，指定用于浅色操作系统外观的首选颜色主题。
  "workbench.preferredLightColorTheme": "Default Light+",
  // 指定使用的产品图标主题。
  //  -默认：默认
  "workbench.productIconTheme": "Default",
  // 控制快速打开失去焦点后是否应自动关闭。
  "workbench.quickOpen.closeOnFocusLost": true,
  // 控制下次打开时是否应恢复“快速打开”的最后键入的输入。
  "workbench.quickOpen.preserveInput": false,
  // 控制视图/编辑器之间拖动区域的反馈区域大小（以像素为单位）。如果您觉得很难使用鼠标调整视图大小，请将其设置为更大的值。
  "workbench.sash.size": 4,
  // 确定默认使用的设置编辑器。
  //  -ui：使用设置UI编辑器。
  //  -json：使用JSON文件编辑器。
  "workbench.settings.editor": "ui",
  // 控制是否为设置启用自然语言搜索模式。自然语言搜索由Microsoft在线服务提供。
  "workbench.settings.enableNaturalLanguageSearch": true,
  // 控制是否打开键绑定设置还打开显示所有默认键绑定的编辑器。
  "workbench.settings.openDefaultKeybindings": false,
  // 控制打开设置是否还会打开显示所有默认设置的编辑器。
  "workbench.settings.openDefaultSettings": false,
  // 搜索时控制设置编辑器目录的行为。
  //  -隐藏：在搜索时隐藏目录。
  //  -过滤器：将目录过滤为仅具有匹配设置的类别。单击一个类别会将结果过滤到该类别。
  "workbench.settings.settingsSearchTocBehavior": "filter",
  // 控制在将设置编辑为JSON时是否使用拆分JSON编辑器。
  "workbench.settings.useSplitJSON": false,
  // 控制侧栏和活动栏的位置。它们可以显示在工作台的左侧或右侧。
  "workbench.sideBar.location": "left",
  // 控制在启动时显示哪个编辑器（如果上一个会话未还原任何编辑器）。
  //  -无：在没有编辑器的情况下开始。
  //  -welcomePage：打开“欢迎”页面（默认）。
  //  -自述文件：打开包含一个文件夹的文件夹时，请打开自述文件，否则回退到“ welcomePage”。
  //  -newUntitledFile：打开一个新的无标题文件（仅在打开空白工作区时适用）。
  //  -welcomePageInEmptyWorkbench：打开空白工作台时，打开“欢迎”页面。
  "workbench.startupEditor": "welcomePage",
  // 控制工作台底部状态栏的可见性。
  "workbench.statusBar.visible": true,
  // 启用后，如果没有打开编辑器，将显示水印提示。
  "workbench.tips.enabled": true,
  // 控制以像素为单位的树缩进。
  "workbench.tree.indent": 8,
  // 控制树是否应呈现缩进参考线。
  "workbench.tree.renderIndentGuides": "onHover",
  // 控制视图标题操作的可见性。视图标题动作可能总是可见的，或者仅在该视图被聚焦或悬停时才可见。
  "workbench.view.alwaysShowHeaderActions": false,
  // Window
  // 如果设置，则根据操作系统外观自动切换到首选颜色主题。
  "window.autoDetectColorScheme": false,
  // 如果启用，则在操作系统使用高对比度主题时将自动更改为高对比度主题。
  "window.autoDetectHighContrast": true,
  // 如果启用，则单击非活动窗口将激活该窗口并触发鼠标下的元素（如果可单击）。如果禁用，则单击不活动窗口上的任何位置将仅激活它，并且需要在元素上再次单击。
  "window.clickThroughInactive": true,
  // 控制是否关闭最后一个编辑器也应该关闭窗口。此设置仅适用于不显示文件夹的窗口。
  "window.closeWhenEmpty": false,
  // 调整对话框窗口的外观。
  "window.dialogStyle": "native",
  // 如果启用，双击标题栏中的应用程序图标将关闭该窗口，并且该图标无法拖动该窗口。仅当“ window.titleBarStyle”设置为“ custom”时，此设置才有效。
  "window.doubleClickIconToClose": false,
  // 控制是否应在macOS上使用本机全屏显示。禁用此选项可防止macOS在全屏显示时创建新空间。
  "window.nativeFullScreen": true,
  // 启用macOS Sierra窗口选项卡。请注意，更改需要完全重新启动才能应用，并且本机选项卡将禁用自定义标题栏样式（如果已配置）。
  "window.nativeTabs": false,
  // 控制至少已经打开一个窗口时打开新窗口的尺寸。请注意，此设置对打开的第一个窗口没有影响。关闭前，第一个窗口将始终恢复您离开时的大小和位置。
  //  -默认值：在屏幕中央打开新窗口。
  //  -继承：打开尺寸与上一个活动窗口相同的新窗口。
  //  -偏移：打开新窗口，其尺寸与上一个活动窗口的尺寸相同，并具有偏移位置。
  //  -最大化：最大化打开新窗口。
  //  -全屏：以全屏模式打开新窗口。
  "window.newWindowDimensions": "default",
  // 控制是否应在新窗口中打开文件。
  // 请注意，在某些情况下仍然会忽略此设置（例如，使用`--new-window`或`--reuse-window`命令行选项时）。
  //  -开：文件将在新窗口中打开。
  //  -关：文件将在打开文件文件夹的窗口或最后一个活动窗口中打开。
  //  -默认值：除非通过Dock或从Finder打开，否则文件将在文件文件夹处于打开状态的窗口或最后一个活动窗口中打开。
  "window.openFilesInNewWindow": "off",
  // 控制文件夹是在新窗口中打开还是替换上一个活动窗口。
  // 请注意，在某些情况下仍然会忽略此设置（例如，使用`--new-window`或`--reuse-window`命令行选项时）。
  //  -开：文件夹将在新窗口中打开。
  //  -关：文件夹将替换上一个活动窗口。
  //  -默认值：除非在应用程序中选择了文件夹（例如，通过“文件”菜单），否则文件夹将在新窗口中打开。
  "window.openFoldersInNewWindow": "default",
  // 控制在启动不带参数的第二个实例时是否应该打开一个新的空窗口，或者是否应该最后运行的实例获得焦点。
  // 请注意，在某些情况下仍然会忽略此设置（例如，使用`--new-window`或`--reuse-window`命令行选项时）。
  //  -亮：打开一个新的空窗口。
  //  -关：聚焦最后一个活动的运行实例。
  "window.openWithoutArgumentsInNewWindow": "off",
  // 控制在全屏模式下退出的窗口是否应还原到全屏模式。
  "window.restoreFullscreen": false,
  // 控制重启后如何重新打开窗口。
  //  -全部：重新打开所有窗口。
  //  -文件夹：重新打开所有文件夹。空的工作空间将无法还原。
  //  -一个：重新打开最后一个活动窗口。
  //  -无：永远不要重新打开窗口。总是从空的开始。
  "window.restoreWindows": "all",
  // 根据活动的编辑器控制窗口标题。根据上下文替换变量：
  // -`$ {activeEditorShort}`：文件名（例如myFile.txt）。
  // -`$ {activeEditorMedium}`：相对于工作区文件夹的文件路径（例如myFolder / myFileFolder / myFile.txt）。
  // -`$ {activeEditorLong}`：文件的完整路径（例如/Users/Development/myFolder/myFileFolder/myFile.txt）。
  // -`$ {activeFolderShort}`：文件所在文件夹的名称（例如myFileFolder）。
  // -`$ {activeFolderMedium}`：文件所在的文件夹相对于工作区文件夹的路径（例如myFolder / myFileFolder）。
  // -`$ {activeFolderLong}`：文件所在文件夹的完整路径（例如/ Users / Development / myFolder / myFileFolder）。
  // -`$ {folderName}`：文件所在的工作区文件夹的名称（例如myFolder）。
  // -`$ {folderPath}`：文件所在的工作区文件夹的文件路径（例如/ Users / Development / myFolder）。
  // -`$ {rootName}`：工作空间的名称（例如myFolder或myWorkspace）。
  // -`$ {rootPath}`：工作空间的文件路径（例如/ Users / Development / myWorkspace）。
  // -`$ {appName}`：例如VS代码。
  // -`$ {remoteName}`：例如SSH协议
  // -`$ {dirty}`：如果活动的编辑器是脏的，则表示脏。
  // -`$ {separator}`：一个条件分隔符（“-”）仅在被带有值或静态文本的变量包围时显示。
  "window.title": "${activeEditorShort}${separator}${rootName}",
  // 调整窗口标题栏的外观。在Linux和Windows上，此设置还会影响应用程序和上下文菜单的外观。更改需要完全重新启动才能应用。
  "window.titleBarStyle": "custom",
  // `window.title`使用的分隔符。
  "window.titleSeparator": " — ",
  // 调整窗口的缩放级别。原始大小为0，高于（例如1）或低于（例如-1）的每个增量代表放大或缩小20％。您也可以输入小数，以更精细的粒度调整缩放级别。
  "window.zoomLevel": 0,
  // *** Files ***
  // 配置文件与语言的关联（例如`“ * .extension”：“ html”`）。这些优先于安装的语言的默认关联。
  "files.associations": {},
  // 启用后，编辑器将在打开文件时尝试猜测字符集编码。也可以按语言配置此设置。
  "files.autoGuessEncoding": false,
  // 控制脏编辑器的自动保存。在[此处]（https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save）了解更多有关自动保存的信息。
  //  -关：脏编辑器永远不会自动保存。
  //  -afterDelay：脏的编辑器将在配置的`files.autoSaveDelay`之后自动保存。
  //  -onFocusChange：当编辑器失去焦点时，会自动保存脏的编辑器。
  //  -onWindowChange：当窗口失去焦点时，脏的编辑器会自动保存。
  "files.autoSave": "off",
  // 控制延迟（以毫秒为单位），之后自动保存脏编辑器。仅在`files.autoSave`设置为`afterDelay`时适用。
  "files.autoSaveDelay": 1000,
  // 分配给新文件的默认语言模式。如果配置为`$ {activeEditorLanguage}`，将使用当前活动文本编辑器的语言模式（如果有）。
  "files.defaultLanguage": "",
  // 删除时将文件/文件夹移动到操作系统回收站（Windows上为回收站）。禁用此选项将永久删除文件/文件夹。
  "files.enableTrash": true,
  // 读写文件时使用的默认字符集编码。也可以按语言配置此设置。
  "files.encoding": "utf8",
  // 默认的行尾字符。
  //  -\ n：低频
  //  -\ r \ n：CRLF
  //  -自动：使用操作系统特定的行尾字符。
  "files.eol": "auto",
  // 配置全局模式以排除文件和文件夹。例如，文件资源管理器根据此设置决定要显示或隐藏哪些文件和文件夹。请参阅“ search.exclude”设置以定义特定于搜索的排除。在[此处]（https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options）了解更多关于glob模式的信息。
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  },
  // 控制是否在会话之间记住未保存的文件，从而允许跳过退出编辑器时的保存提示。
  //  -关：禁用热出口。尝试关闭包含脏文件的窗口时，将显示提示。
  //  -onExit：当在Windows / Linux上关闭最后一个窗口或触发“ workbench.action.quit”命令（命令面板，键绑定，菜单）时，将触发热退出。所有未打开文件夹的窗口将在下次启动时恢复。带有未保存文件的工作区列表可以通过“文件”>“打开最近的文件”>“更多...”来访问。
  //  -onExitAndWindowClose：当在Windows / Linux上关闭最后一个窗口或触发`workbench.action.quit`命令（命令面板，键绑定，菜单）时，以及退出文件夹的任何窗口，都会触发热退出是否是最后一个窗口。所有未打开文件夹的窗口将在下次启动时恢复。带有未保存文件的工作空间列表可以通过“文件”>“打开最近的文件”>“更多...”来访问。
  "files.hotExit": "onExit",
  // 启用后，在保存文件时在文件末尾插入最后一行。
  "files.insertFinalNewline": false,
  // 尝试打开大文件时，控制重新启动后VS Code可用的内存。与在命令行上指定`--max-memory = NEWSIZE`具有相同的效果。
  "files.maxMemoryForLargeFilesMB": 4096,
  // 超时（以毫秒为单位），之后将取消用于创建，重命名和删除的文件参与者。使用“ 0”禁用参与者。
  "files.participants.timeout": 5000,
  // 重新打开文件后，还原撤消堆栈。
  "files.restoreUndoStack": true,
  // 当文件保存到磁盘上并被另一个程序更改时，可能会发生保存冲突。为了防止数据丢失，要求用户将编辑器中的更改与磁盘上的版本进行比较。仅当您经常遇到保存冲突错误时，才应更改此设置；如果不谨慎使用，可能会导致数据丢失。
  //  -askUser：将拒绝保存并要求手动解决保存冲突。
  //  -overwriteFileOnDisk：将通过使用编辑器中的更改覆盖磁盘上的文件来解决保存冲突。
  "files.saveConflictResolution": "askUser",
  // 启用后，将在保存文件时在文件末尾的最后一个新行之后修剪所有新行。
  "files.trimFinalNewlines": false,
  // 启用后，将在保存文件时修剪尾随空格。
  "files.trimTrailingWhitespace": false,
  // 配置文件路径的全局模式以从文件监视中排除。模式必须在绝对路径上匹配（即，带有**的前缀或正确匹配的完整路径）。更改此设置需要重新启动。当您在启动时遇到代码占用大量CPU时间时，可以排除大文件夹以减少初始负载。
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/.hg/store/**": true
  },
  // *** Screencast Mode ***
  // 控制截屏模式键盘的字体大小（以像素为单位）。
  "screencastMode.fontSize": 56,
  // 控制在屏幕广播模式下键盘覆盖图显示的时间（以毫秒为单位）。
  "screencastMode.keyboardOverlayTimeout": 800,
  // 在截屏模式下，以十六进制控制颜色（＃_RGB，＃RGBA，＃RRGGBB或#RRGGBBAA）。
  "screencastMode.mouseIndicatorColor": "#FF0000",
  // 在截屏模式下控制鼠标指示器的大小（以像素为单位）。
  "screencastMode.mouseIndicatorSize": 20,
  // 仅在截屏模式下显示键盘快捷键。
  "screencastMode.onlyKeyboardShortcuts": false,
  // 控制截屏模式叠加层从底部开始的垂直偏移，以工作台高度的百分比表示。
  "screencastMode.verticalOffset": 20,
  // *** Zen Mode ***
  // 控制是否启用“禅宗模式”也将布局居中。
  "zenMode.centerLayout": true,
  // 控制是否打开“禅宗模式”是否还将工作台置于全屏模式。
  "zenMode.fullScreen": true,
  // 控制打开“禅宗模式”是否还隐藏工作台左侧或右侧的活动栏。
  "zenMode.hideActivityBar": true,
  // 控制打开“禅宗模式”是否还隐藏编辑器行号。
  "zenMode.hideLineNumbers": true,
  // 控制是否打开“禅宗模式”是否还隐藏工作台底部的状态栏。
  "zenMode.hideStatusBar": true,
  // 控制是否打开“禅宗模式”是否还隐藏工作台选项卡。
  "zenMode.hideTabs": true,
  // 控制如果以zen模式退出窗口是否应还原到zen模式。
  "zenMode.restore": false,
  // 控制在禅宗模式下是否显示通知。如果为true，则只会弹出错误通知。
  "zenMode.silentNotifications": true,
  // *** File Explorer ***
  // 控制浏览器在打开文件时是否应自动显示并选择文件。
  //  -true：将显示并选择文件。
  //  -否：不会显示和选择文件。
  //  -focusNoScroll：文件不会滚动到视图中，但仍会聚焦。
  "explorer.autoReveal": true,
  // 控制资源管理器是否应以紧凑形式呈现文件夹。以这种形式，单个子文件夹将被压缩在组合的树元素中。例如，对于Java包结构很有用。
  "explorer.compactFolders": true,
  // 控制通过垃圾箱删除文件时浏览器是否应要求确认。
  "explorer.confirmDelete": true,
  // 控制资源管理器是否应要求通过拖放移动文件和文件夹的确认。
  "explorer.confirmDragAndDrop": true,
  // 控制文件装饰是否应使用徽章。
  "explorer.decorations.badges": true,
  // 控制文件装饰是否应使用颜色。
  "explorer.decorations.colors": true,
  // 控制资源管理器是否应允许通过拖放来移动文件和文件夹。
  "explorer.enableDragAndDrop": true,
  // 控制在粘贴时为重复的资源管理器项赋予新名称时使用的命名策略。
  //  -简单：在重复名称的末尾附加“ copy”一词，并可能后面跟一个数字
  //  -智能：在重复名称的末尾添加一个数字。如果名称中已经包含一些数字，请尝试增加该数字
  "explorer.incrementalNaming": "simple",
  // 在“打开编辑器”窗格中显示的编辑器数量。将此设置为0将隐藏“打开编辑器”窗格。
  "explorer.openEditors.visible": 9,
  // 控制资源管理器中文件和文件夹的排序顺序。
  //  -默认值：文件和文件夹按名称按字母顺序排序。文件夹显示在文件之前。
  //  -混合：文件和文件夹按名称按字母顺序排序。文件与文件夹交织在一起。
  //  -filesFirst：文件和文件夹按名称按字母顺序排序。文件显示在文件夹之前。
  //  -类型：文件和文件夹按扩展名（按字母顺序）排序。文件夹显示在文件之前。
  //  -已修改：文件和文件夹按上次修改日期降序排列。文件夹显示在文件之前。
  "explorer.sortOrder": "default",
  // *** Search ***
  // 控制操作栏在搜索视图中的行上的位置。
  //  -自动：当搜索视图变窄时，将操作栏置于右侧；当搜索视图变宽时，将其置于内容之后。
  //  -右侧：始终将操作栏置于右侧。
  "search.actionsPosition": "auto",
  // 控制搜索结果是折叠还是展开。
  //  -自动：扩展少于10个结果的文件。其他人则倒塌了。
  //  -AlwaysCollapse
  //  -alwaysExpand
  "search.collapseResults": "alwaysExpand",
  // 配置全局模式以在全文本搜索和快速打开中排除文件和文件夹。从`files.exclude`设置继承所有glob模式。
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true
  },
  // Controls whether to follow symlinks while searching.
  "search.followSymlinks": true,
  // Controls whether the search view should read or modify the shared find clipboard on macOS.
  "search.globalFindClipboard": false,
  // Controls sorting order of editor history in quick open when filtering.
  //  - default: History entries are sorted by relevance based on the filter value used. More relevant entries appear first.
  //  - recency: History entries are sorted by recency. More recently opened entries appear first.
  "search.quickOpen.history.filterSortOrder": "default",
  // Whether to include results from recently opened files in the file results for Quick Open.
  "search.quickOpen.includeHistory": true,
  // Whether to include results from a global symbol search in the file results for Quick Open.
  "search.quickOpen.includeSymbols": false,
  // The default number of surrounding context lines to use when creating new Search Editors. If using `search.searchEditor.reusePriorSearchConfiguration`, this can be set to `null` (empty) to use the prior Search Editor's configuration.
  "search.searchEditor.defaultNumberOfContextLines": 1,
  // Configure effect of double clicking a result in a search editor.
  //  - selectWord: Double clicking selects the word under the cursor.
  //  - goToLocation: Double clicking opens the result in the active editor group.
  //  - openLocationToSide: Double clicking opens the result in the editor group to the side, creating one if it does not yet exist.
  "search.searchEditor.doubleClickBehaviour": "goToLocation",
  // When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor.
  "search.searchEditor.reusePriorSearchConfiguration": false,
  // Search all files as you type.
  "search.searchOnType": true,
  // When `search.searchOnType` is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when `search.searchOnType` is disabled.
  "search.searchOnTypeDebouncePeriod": 300,
  // Update workspace search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command.
  "search.seedOnFocus": false,
  // Enable seeding search from the word nearest the cursor when the active editor has no selection.
  "search.seedWithNearestWord": false,
  // Controls whether to show line numbers for search results.
  "search.showLineNumbers": false,
  // Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively.
  "search.smartCase": false,
  // Controls sorting order of search results.
  //  - default: Results are sorted by folder and file names, in alphabetical order.
  //  - fileNames: Results are sorted by file names ignoring folder order, in alphabetical order.
  //  - type: Results are sorted by file extensions, in alphabetical order.
  //  - modified: Results are sorted by file last modified date, in descending order.
  //  - countDescending: Results are sorted by count per file, in descending order.
  //  - countAscending: Results are sorted by count per file, in ascending order.
  "search.sortOrder": "default",
  // Controls whether to use global `.gitignore` and `.ignore` files when searching for files.
  "search.useGlobalIgnoreFiles": false,
  // Controls whether to use `.gitignore` and `.ignore` files when searching for files.
  "search.useIgnoreFiles": true,
  // Controls whether to open Replace Preview when selecting or replacing a match.
  "search.useReplacePreview": true,
  // HTTP
  // The proxy setting to use. If not set, will be inherited from the `http_proxy` and `https_proxy` environment variables.
  "http.proxy": "",
  // The value to send as the `Proxy-Authorization` header for every network request.
  "http.proxyAuthorization": null,
  // Controls whether the proxy server certificate should be verified against the list of supplied CAs.
  "http.proxyStrictSSL": true,
  // Use the proxy support for extensions.
  //  - off: Disable proxy support for extensions.
  //  - on: Enable proxy support for extensions.
  //  - override: Enable proxy support for extensions, override request options.
  "http.proxySupport": "override",
  // Controls whether CA certificates should be loaded from the OS. (On Windows and macOS a reload of the window is required after turning this off.)
  "http.systemCertificates": true,
  // *** Keyboard ***
  // 控制按键的分派逻辑以使用“代码”（推荐）或“按键代码”。
  "keyboard.dispatch": "code",
  // 启用键盘上的macOS触摸栏按钮（如果有）。
  "keyboard.touchbar.enabled": true,
  // 一组不应显示的触摸栏中条目的标识符（例如`workbench.action.navigateBack`）。
  "keyboard.touchbar.ignored": [],
  // *** Update ***
  // 允许在Windows的后台下载和安装新的VS Code版本
  "update.enableWindowsBackgroundUpdates": true,
  // 配置是否接收自动更新。 更改后需要重新启动。 这些更新是从Microsoft联机服务中获取的。
  //   -无：禁用更新。
  //   -手动：禁用自动后台更新检查。 如果您手动检查更新，则更新将可用。
  //   -开始：仅在启动时检查更新。 禁用自动后台更新检查。
  //   -默认：启用自动更新检查。 代码将自动并定期检查更新。
  "update.mode": "default",
  // 更新后显示发行说明。 发行说明是从Microsoft联机服务中获取的。
  "update.showReleaseNotes": true,
  // *** Debug ***
  // 允许在任何文件中设置断点。
  "debug.allowBreakpointsEverywhere": false,
  // 控制调试会话结束时是否应自动关闭调试控制台。
  "debug.console.closeOnEnd": false,
  // 在调试控制台中控制字体系列。
  "debug.console.fontFamily": "default",
  // 在调试控制台中控制字体大小（以像素为单位）。
  "debug.console.fontSize": 14,
  // 控制调试控制台是否应建议先前键入的输入。
  "debug.console.historySuggestions": true,
  // 在调试控制台中控制行高（以像素为单位）。使用0从字体大小计算行高。
  "debug.console.lineHeight": 0,
  // 控制这些行是否应该在调试控制台中包装。
  "debug.console.wordWrap": true,
  // 控制调试器中断时是否应聚焦工作台窗口。
  "debug.focusWindowOnBreak": true,
  // 调试时在编辑器中内联显示变量值。
  "debug.inlineValues": false,
  // 控制何时打开内部调试控制台。
  "debug.internalConsoleOptions": "openOnFirstSessionStart",
  // 控制在运行preLaunchTask后遇到错误时该怎么办。
  //  -debugAnyway：忽略任务错误并开始调试。
  //  -showErrors：显示“问题”视图，并且不开始调试。
  //  -提示：提示用户。
  //  -中止：取消调试。
  "debug.onTaskErrors": "prompt",
  // 控制何时打开调试视图。
  "debug.openDebug": "openOnFirstSessionStart",
  // 在调试会话结束时自动打开资源管理器视图。
  "debug.openExplorerOnEnd": false,
  // 控制是否在概览标尺中显示断点。
  "debug.showBreakpointsInOverviewRuler": false,
  // 控制调试时是否应在编辑器中显示内联断点候选修饰。
  "debug.showInlineBreakpointCandidates": true,
  // 控制何时应显示调试状态栏。
  //  -从不：从不在状态栏中显示调试
  //  -始终：始终在状态栏中显示调试
  //  -onFirstSessionStart：仅在首次启动调试后，才在状态栏中显示调试
  "debug.showInStatusBar": "onFirstSessionStart",
  // 控制是否在调试工具栏中显示调试子会话。如果此设置为false，则子会话上的stop命令还将停止父会话。
  "debug.showSubSessionsInToolBar": false,
  // 控制调试工具栏的位置。在所有视图中为“浮动”，在调试视图中为“停靠”，或为“隐藏”。
  "debug.toolBarLocation": "floating",
  // 全局调试启动配置。应该用作跨工作空间共享的“ launch.json”的替代方法。
  "launch": {
    "configurations": [],
    "compounds": []
  },
  // HTML
  // 启用/禁用HTML标签的自动关闭。
  "html.autoClosingTags": true,
  // 遵循自定义数据格式的指向JSON文件的相对文件路径的列表。
  // VS Code在启动时会加载自定义数据，以增强其对您在JSON文件中指定的自定义HTML标签，属性和属性值的HTML支持。
  // 文件路径是相对于工作空间的，并且仅考虑工作空间文件夹设置。
  "html.customData": [],
  // 标签列表，以逗号分隔，不应重新格式化内容。 `null`默认为`pre`标签。
  "html.format.contentUnformatted": "pre,code,textarea",
  // 启用/禁用默认的HTML格式化程序。
  "html.format.enable": true,
  // 以换行符结尾。
  "html.format.endWithNewline": false,
  // 标记列表，以逗号分隔，在它们之前应该有一个额外的换行符。 'null'默认为`“ head，body，/ html”`。
  "html.format.extraLiners": "head, body, /html",
  // 格式化并缩进``。
  "html.format.indentHandlebars": false,
  // 缩进`<head>`和`<body>`部分。
  "html.format.indentInnerHtml": false,
  // 一个块中保留的最大换行数。使用`null`表示无限制。
  "html.format.maxPreserveNewLines": null,
  // 控制在保留元素之前是否存在现有换行符。仅适用于元素之前，不适用于标签内或文本。
  "html.format.preserveNewLines": true,
  // 标签列表，以逗号分隔，不应重新格式化。 “ null”默认为https://www.w3.org/TR/html5/dom.html#phrasing-content中列出的所有标签。
  "html.format.unformatted": "wbr",
  // 包装属性。
  //  -自动：仅在超过行长时才包装属性。
  //  -强制：包装除第一属性外的每个属性。
  //  -强制对齐：除第一个属性外，包装每个属性并保持对齐。
  //  -force-expand-multiline：包装每个属性。
  //  -对齐倍数：超过行长时自动换行，垂直对齐属性。
  //  -保留：保留属性包装。
  //  -保留对齐：保留属性包装但对齐。
  "html.format.wrapAttributes": "auto",
  // 每行最大字符数（0 =禁用）。
  "html.format.wrapLineLength": 120,
  // 控制内置HTML语言支持是否建议HTML5标签，属性和值。
  "html.suggest.html5": true,
  // 跟踪VS Code和HTML语言服务器之间的通信。
  "html.trace.server": "off",
  // 控制内置HTML语言支持是否验证嵌入式脚本。
  "html.validate.scripts": true,
  // 控制内置HTML语言支持是否验证嵌入式样式。
  "html.validate.styles": true,
  // *** JSON ***
  // Enable/disable default JSON formatter
  "json.format.enable": true,
  // The maximum number of outline symbols and folding regions computed (limited for performance reasons).
  "json.maxItemsComputed": 5000,
  // When enabled, JSON schemas can be fetched from http and https locations.
  "json.schemaDownload.enable": true,
  // Associate schemas to JSON files in the current project
  "json.schemas": [],
  // Traces the communication between VS Code and the JSON language server.
  "json.trace.server": "off",
  // *** Markdown ***
  // 控制Markdown文件中链接的打开位置。
  //  -currentGroup：在活动编辑器组中打开链接。
  //  -旁边：打开活动编辑器旁边的链接。
  "markdown.links.openLocation": "currentGroup",
  // 设置减价预览中换行符的呈现方式。将其设置为“ true”会为段落内的换行符创建<br>。
  "markdown.preview.breaks": false,
  // 双击markdown预览以切换到编辑器。
  "markdown.preview.doubleClickToSwitchToEditor": true,
  // 控制Markdown预览中使用的字体系列。
  "markdown.preview.fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'Ubuntu', 'Droid Sans', sans-serif",
  // 控制Markdown预览中使用的字体大小（以像素为单位）。
  "markdown.preview.fontSize": 14,
  // 控制Markdown预览中使用的行高。此数字是相对于字体大小。
  "markdown.preview.lineHeight": 1.6,
  // 在Markdown预览中启用或禁用将类似URL的文本转换为链接。
  "markdown.preview.linkify": true,
  // 在Markdown预览中标记当前的编辑器选择。
  "markdown.preview.markEditorSelection": true,
  // 控制应如何打开Markdown预览中与其他Markdown文件的链接。
  //  -inPreview：尝试在Markdown预览中打开链接
  //  -inEditor：尝试在编辑器中打开链接
  "markdown.preview.openMarkdownLinks": "inPreview",
  // 滚动Markdown预览时，请更新编辑器的视图。
  "markdown.preview.scrollEditorWithPreview": true,
  // 滚动Markdown编辑器时，更新预览视图。
  "markdown.preview.scrollPreviewWithEditor": true,
  // Markdown预览中要使用的CSS样式表的URL或本地路径的列表。相对路径相对于资源管理器中打开的文件夹进行解释。如果没有打开的文件夹，它们将相对于markdown文件的位置进行解释。所有的'\'必须写为'\\'。
  "markdown.styles": [],
  // 为markdown扩展启用调试日志记录。
  "markdown.trace": "off",
  // PHP
  // Controls whether the built-in PHP language suggestions are enabled. The support suggests PHP globals and variables.
  "php.suggest.basic": true,
  // Enable/disable built-in PHP validation.
  "php.validate.enable": true,
  // Points to the PHP executable.
  "php.validate.executablePath": null,
  // Whether the linter is run on save or on type.
  "php.validate.run": "onSave",
  // TypeScript
  // Enable/disable automatic closing of JSX tags.
  "javascript.autoClosingTags": true,
  // Enable/disable default JavaScript formatter.
  "javascript.format.enable": true,
  // Defines space handling after a comma delimiter.
  "javascript.format.insertSpaceAfterCommaDelimiter": true,
  // Defines space handling after the constructor keyword.
  "javascript.format.insertSpaceAfterConstructor": false,
  // Defines space handling after function keyword for anonymous functions.
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
  // Defines space handling after keywords in a control flow statement.
  "javascript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,
  // Defines space handling after opening and before closing empty braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  // Defines space handling after opening and before closing JSX expression braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
  // Defines space handling after opening and before closing non-empty braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  // Defines space handling after opening and before closing non-empty brackets.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
  // Defines space handling after opening and before closing non-empty parenthesis.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  // Defines space handling after opening and before closing template string braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
  // Defines space handling after a semicolon in a for statement.
  "javascript.format.insertSpaceAfterSemicolonInForStatements": true,
  // Defines space handling after a binary operator.
  "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
  // Defines space handling before function argument parentheses.
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  // Defines whether an open brace is put onto a new line for control blocks or not.
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  // Defines whether an open brace is put onto a new line for functions or not.
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  // Defines handling of optional semicolons. Requires using TypeScript 3.7 or newer in the workspace.
  //  - ignore: Don't insert or remove any semicolons.
  //  - insert: Insert semicolons at statement ends.
  //  - remove: Remove unnecessary semicolons.
  "javascript.format.semicolons": "ignore",
  // Preferred path style for auto imports.
  //  - auto: Automatically select import path style. Prefers using a relative import if `baseUrl` is configured and the relative path has fewer segments than the non-relative import.
  //  - relative: Relative to the file location.
  //  - non-relative: Based on the `baseUrl` configured in your `jsconfig.json` / `tsconfig.json`.
  "javascript.preferences.importModuleSpecifier": "auto",
  // Preferred path ending for auto imports.
  //  - auto: Use project settings to select a default.
  //  - minimal: Shorten `./component/index.js` to `./component`.
  //  - index: Shorten `./component/index.js` to `./component/index`.
  //  - js: Do not shorten path endings; include the `.js` extension.
  "javascript.preferences.importModuleSpecifierEnding": "auto",
  // Preferred quote style to use for quick fixes: `single` quotes, `double` quotes, or `auto` infer quote type from existing imports.
  "javascript.preferences.quoteStyle": "auto",
  // The setting 'typescript.preferences.renameShorthandProperties' has been deprecated in favor of 'typescript.preferences.useAliasesForRenames'
  // Enable/disable introducing aliases for object shorthand properties during renames. Requires using TypeScript 3.4 or newer in the workspace.
  "javascript.preferences.renameShorthandProperties": true,
  // Enable/disable introducing aliases for object shorthand properties during renames. Requires using TypeScript 3.4 or newer in the workspace.
  "javascript.preferences.useAliasesForRenames": true,
  // Enable/disable references CodeLens in JavaScript files.
  "javascript.referencesCodeLens.enabled": false,
  // Enable/disable references CodeLens on all functions in JavaScript files.
  "javascript.referencesCodeLens.showOnAllFunctions": false,
  // Enable/disable auto import suggestions.
  "javascript.suggest.autoImports": true,
  // Complete functions with their parameter signature.
  "javascript.suggest.completeFunctionCalls": false,
  // Enable/disable suggestion to complete JSDoc comments.
  "javascript.suggest.completeJSDocs": true,
  // Enabled/disable autocomplete suggestions.
  "javascript.suggest.enabled": true,
  // Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires TS 3.7+ and strict null checks to be enabled.
  "javascript.suggest.includeAutomaticOptionalChainCompletions": true,
  // Enable/disable including unique names from the file in JavaScript suggestions. Note that name suggestions are always disabled in JavaScript code that is semantically checked using `@ts-check` or `checkJs`.
  "javascript.suggest.names": true,
  // Enable/disable suggestions for paths in import statements and require calls.
  "javascript.suggest.paths": true,
  // Enable/disable suggestion diagnostics for JavaScript files in the editor.
  "javascript.suggestionActions.enabled": true,
  // Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
  //  - prompt: Prompt on each rename.
  //  - always: Always update paths automatically.
  //  - never: Never rename paths and don't prompt.
  "javascript.updateImportsOnFileMove.enabled": "prompt",
  // Enable/disable JavaScript validation.
  "javascript.validate.enable": true,
  // Enable/disable automatic closing of JSX tags.
  "typescript.autoClosingTags": true,
  // Check if npm is installed for Automatic Type Acquisition.
  "typescript.check.npmIsInstalled": true,
  // Disables automatic type acquisition. Automatic type acquisition fetches `@types` packages from npm to improve IntelliSense for external libraries.
  "typescript.disableAutomaticTypeAcquisition": false,
  // Enables prompting of users to use the TypeScript version configured in the workspace for Intellisense.
  "typescript.enablePromptUseWorkspaceTsdk": false,
  // Enable/disable default TypeScript formatter.
  "typescript.format.enable": true,
  // Defines space handling after a comma delimiter.
  "typescript.format.insertSpaceAfterCommaDelimiter": true,
  // Defines space handling after the constructor keyword.
  "typescript.format.insertSpaceAfterConstructor": false,
  // Defines space handling after function keyword for anonymous functions.
  "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
  // Defines space handling after keywords in a control flow statement.
  "typescript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,
  // Defines space handling after opening and before closing empty braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  // Defines space handling after opening and before closing JSX expression braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
  // Defines space handling after opening and before closing non-empty braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  // Defines space handling after opening and before closing non-empty brackets.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
  // Defines space handling after opening and before closing non-empty parenthesis.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  // Defines space handling after opening and before closing template string braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
  // Defines space handling after a semicolon in a for statement.
  "typescript.format.insertSpaceAfterSemicolonInForStatements": true,
  // Defines space handling after type assertions in TypeScript.
  "typescript.format.insertSpaceAfterTypeAssertion": false,
  // Defines space handling after a binary operator.
  "typescript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
  // Defines space handling before function argument parentheses.
  "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
  // Defines whether an open brace is put onto a new line for control blocks or not.
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  // Defines whether an open brace is put onto a new line for functions or not.
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
  // Defines handling of optional semicolons. Requires using TypeScript 3.7 or newer in the workspace.
  //  - ignore: Don't insert or remove any semicolons.
  //  - insert: Insert semicolons at statement ends.
  //  - remove: Remove unnecessary semicolons.
  "typescript.format.semicolons": "ignore",
  // Enable/disable implementations CodeLens. This CodeLens shows the implementers of an interface.
  "typescript.implementationsCodeLens.enabled": false,
  // Sets the locale used to report JavaScript and TypeScript errors. Default of `null` uses VS Code's locale.
  "typescript.locale": null,
  // Specifies the path to the npm executable used for Automatic Type Acquisition.
  "typescript.npm": null,
  // Preferred path style for auto imports.
  //  - auto: Automatically select import path style. Prefers using a relative import if `baseUrl` is configured and the relative path has fewer segments than the non-relative import.
  //  - relative: Relative to the file location.
  //  - non-relative: Based on the `baseUrl` configured in your `jsconfig.json` / `tsconfig.json`.
  "typescript.preferences.importModuleSpecifier": "auto",
  // Preferred path ending for auto imports.
  //  - auto: Use project settings to select a default.
  //  - minimal: Shorten `./component/index.js` to `./component`.
  //  - index: Shorten `./component/index.js` to `./component/index`.
  //  - js: Do not shorten path endings; include the `.js` extension.
  "typescript.preferences.importModuleSpecifierEnding": "auto",
  // Enable/disable searching `package.json` dependencies for available auto imports.
  //  - auto: Search dependencies based on estimated performance impact.
  //  - on: Always search dependencies.
  //  - off: Never search dependencies.
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  // Preferred quote style to use for quick fixes: `single` quotes, `double` quotes, or `auto` infer quote type from existing imports.
  "typescript.preferences.quoteStyle": "auto",
  // Enable/disable introducing aliases for object shorthand properties during renames. Requires using TypeScript 3.4 or newer in the workspace.
  "typescript.preferences.renameShorthandProperties": true,
  // Enable/disable introducing aliases for object shorthand properties during renames. Requires using TypeScript 3.4 or newer in the workspace.
  "typescript.preferences.useAliasesForRenames": true,
  // Enable/disable references CodeLens in TypeScript files.
  "typescript.referencesCodeLens.enabled": false,
  // Enable/disable references CodeLens on all functions in TypeScript files.
  "typescript.referencesCodeLens.showOnAllFunctions": false,
  // Report style checks as warnings.
  "typescript.reportStyleChecksAsWarnings": true,
  // Enable/disable auto import suggestions.
  "typescript.suggest.autoImports": true,
  // Complete functions with their parameter signature.
  "typescript.suggest.completeFunctionCalls": false,
  // Enable/disable suggestion to complete JSDoc comments.
  "typescript.suggest.completeJSDocs": true,
  // Enabled/disable autocomplete suggestions.
  "typescript.suggest.enabled": true,
  // Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires TS 3.7+ and strict null checks to be enabled.
  "typescript.suggest.includeAutomaticOptionalChainCompletions": true,
  // Enable/disable suggestions for paths in import statements and require calls.
  "typescript.suggest.paths": true,
  // Enable/disable suggestion diagnostics for TypeScript files in the editor.
  "typescript.suggestionActions.enabled": true,
  // Controls auto detection of tsc tasks.
  //  - on: Create both build and watch tasks.
  //  - off: Disable this feature.
  //  - build: Only create single run compile tasks.
  //  - watch: Only create compile and watch tasks.
  "typescript.tsc.autoDetect": "on",
  // Specifies the folder path to the tsserver and lib*.d.ts files under a TypeScript install to use for IntelliSense, for example: `./node_modules/typescript/lib`.
  // - When specified as a user setting, the TypeScript version from `typescript.tsdk` automatically replaces the built-in TypeScript version.
  // - When specified as a workspace setting, `typescript.tsdk` allows you to switch to use that workspace version of TypeScript for IntelliSense with the `TypeScript: Select TypeScript version` command.
  "typescript.tsdk": null,
  // Enables logging of the TS server to a file. This log can be used to diagnose TS Server issues. The log may contain file paths, source code, and other potentially sensitive information from your project.
  "typescript.tsserver.log": "off",
  // Set the maximum amount of memory (in MB) to allocate to the TypeScript server process
  "typescript.tsserver.maxTsServerMemory": 3072,
  // Additional paths to discover TypeScript Language Service plugins.
  "typescript.tsserver.pluginPaths": [],
  // Enables tracing of messages sent to the TS server. This trace can be used to diagnose TS Server issues. The trace may contain file paths, source code, and other potentially sensitive information from your project.
  "typescript.tsserver.trace": "off",
  // Enable/disable spawning a separate TypeScript server that can more quickly respond to syntax related operations, such as calculating folding or computing document symbols. Requires using TypeScript 3.4.0 or newer in the workspace.
  "typescript.tsserver.useSeparateSyntaxServer": true,
  // Configure which watching strategies should be used to keep track of files and directories. Requires using TypeScript 3.8+ in the workspace.
  "typescript.tsserver.watchOptions": {},
  // Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
  //  - prompt: Prompt on each rename.
  //  - always: Always update paths automatically.
  //  - never: Never rename paths and don't prompt.
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  // Enable/disable TypeScript validation.
  "typescript.validate.enable": true,
  // Controls which files are searched by go to symbol in workspace.
  //  - allOpenProjects: Search all open JavaScript or TypeScript projects for symbols. Requires using TypeScript 3.9 or newer in the workspace.
  //  - currentProject: Only search for symbols in the current JavaScript or TypeScript project.
  "typescript.workspaceSymbols.scope": "allOpenProjects",
  // CSS
  // 完成CSS属性时，在行尾插入分号
  "css.completion.completePropertyWithSemicolon": true,
  // 默认情况下，VS Code在选择CSS属性后触发属性值完成。使用此设置可以禁用此行为。
  "css.completion.triggerPropertyValueCompletion": true,
  // 遵循自定义数据格式的指向JSON文件的相对文件路径的列表。
  // VS Code在启动时加载自定义数据，以增强其对自定义CSS属性的CSS支持，包括在JSON文件中指定的指令，伪类和伪元素。
  // 文件路径是相对于工作空间的，并且仅考虑工作空间文件夹设置。
  "css.customData": [],
  // 参数数量无效。
  "css.lint.argumentsInColorFunction": "error",
  // 当使用“ padding”或“ border”时，请勿使用“ width”或“ height”。
  "css.lint.boxModel": "ignore",
  // 使用特定于供应商的前缀时，请确保还包括所有其他特定于供应商的属性。
  "css.lint.compatibleVendorPrefixes": "ignore",
  // 不要使用重复的样式定义。
  "css.lint.duplicateProperties": "ignore",
  // 不要使用空规则集。
  "css.lint.emptyRules": "warning",
  // 避免使用`float`。浮动会导致CSS脆弱，如果布局的某一方面发生更改，则很容易折断CSS。
  "css.lint.float": "ignore",
  // @ font-face`规则必须定义`src`和`font-family`属性。
  "css.lint.fontFaceProperties": "warning",
  // 十六进制颜色必须包含三个或六个十六进制数字。
  "css.lint.hexColorLength": "error",
  // 选择器不应包含ID，因为这些规则与HTML紧密结合在一起。
  "css.lint.idSelector": "ignore",
  // 仅当支持IE7和更早版本时，才需要IE hack。
  "css.lint.ieHack": "ignore",
  // 避免使用`！important`。这表明整个CSS的特性已经失控，需要重构。
  "css.lint.important": "ignore",
  // 导入语句不会并行加载。
  "css.lint.importStatement": "ignore",
  // 由于显示，属性被忽略。例如。如果使用display：inline，则width，height，margin-top，margin-bottom和float无效。
  "css.lint.propertyIgnoredDueToDisplay": "warning",
  // 通用选择器（`*`）较慢。
  "css.lint.universalSelector": "ignore",
  // 未知规则。
  "css.lint.unknownAtRules": "warning",
  // 未知的属性。
  "css.lint.unknownProperties": "warning",
  // 未知的供应商特定属性。
  "css.lint.unknownVendorSpecificProperties": "ignore",
  // 未针对`unknownProperties`规则进行验证的属性列表。
  "css.lint.validProperties": [],
  // 使用供应商特定的前缀时，还请包括standard属性。
  "css.lint.vendorPrefix": "warning",
  // 无需零单位。
  "css.lint.zeroUnits": "ignore",
  // 跟踪VS Code和CSS语言服务器之间的通信。
  "css.trace.server": "off",
  // 启用或禁用所有验证。
  "css.validate": true,
  // LESS
  // 完成CSS属性时，在行尾插入分号
  "less.completion.completePropertyWithSemicolon": true,
  // 默认情况下，VS Code在选择CSS属性后触发属性值完成。使用此设置可以禁用此行为。
  "less.completion.triggerPropertyValueCompletion": true,
  // 参数数量无效。
  "less.lint.argumentsInColorFunction": "error",
  // 当使用“ padding”或“ border”时，请勿使用“ width”或“ height”。
  "less.lint.boxModel": "ignore",
  // 使用特定于供应商的前缀时，请确保还包括所有其他特定于供应商的属性。
  "less.lint.compatibleVendorPrefixes": "ignore",
  // 不要使用重复的样式定义。
  "less.lint.duplicateProperties": "ignore",
  // 不要使用空规则集。
  "less.lint.emptyRules": "warning",
  // 避免使用`float`。浮动会导致CSS脆弱，如果布局的某一方面发生更改，则很容易折断CSS。
  "less.lint.float": "ignore",
  // @ font-face`规则必须定义`src`和`font-family`属性。
  "less.lint.fontFaceProperties": "warning",
  // 十六进制颜色必须包含三个或六个十六进制数字。
  "less.lint.hexColorLength": "error",
  // 选择器不应包含ID，因为这些规则与HTML紧密结合在一起。
  "less.lint.idSelector": "ignore",
  // 仅当支持IE7和更早版本时，才需要IE hack。
  "less.lint.ieHack": "ignore",
  // 避免使用`！important`。这表明整个CSS的特性已经失控，需要重构。
  "less.lint.important": "ignore",
  // 导入语句不会并行加载。
  "less.lint.importStatement": "ignore",
  // 由于显示，属性被忽略。例如。如果使用display：inline，则width，height，margin-top，margin-bottom和float无效。
  "less.lint.propertyIgnoredDueToDisplay": "warning",
  // 通用选择器（`*`）较慢。
  "less.lint.universalSelector": "ignore",
  // 未知规则。
  "less.lint.unknownAtRules": "warning",
  // 未知的属性。
  "less.lint.unknownProperties": "warning",
  // 未知的供应商特定属性。
  "less.lint.unknownVendorSpecificProperties": "ignore",
  // 未针对`unknownProperties`规则进行验证的属性列表。
  "less.lint.validProperties": [],
  // 使用供应商特定的前缀时，还请包括standard属性。
  "less.lint.vendorPrefix": "warning",
  // 无需零单位。
  "less.lint.zeroUnits": "ignore",
  // 启用或禁用所有验证。
  "less.validate": true,
  // SCSS（无礼）
  // 完成CSS属性时，在行尾插入分号
  "scss.completion.completePropertyWithSemicolon": true,
  // 默认情况下，VS Code在选择CSS属性后触发属性值完成。使用此设置可以禁用此行为。
  "scss.completion.triggerPropertyValueCompletion": true,
  // 参数数量无效。
  "scss.lint.argumentsInColorFunction": "error",
  // 当使用“ padding”或“ border”时，请勿使用“ width”或“ height”。
  "scss.lint.boxModel": "ignore",
  // 使用特定于供应商的前缀时，请确保还包括所有其他特定于供应商的属性。
  "scss.lint.compatibleVendorPrefixes": "ignore",
  // 不要使用重复的样式定义。
  "scss.lint.duplicateProperties": "ignore",
  // 不要使用空规则集。
  "scss.lint.emptyRules": "warning",
  // 避免使用`float`。浮动会导致CSS脆弱，如果布局的某一方面发生更改，则很容易折断CSS。
  "scss.lint.float": "ignore",
  // @ font-face`规则必须定义`src`和`font-family`属性。
  "scss.lint.fontFaceProperties": "warning",
  // 十六进制颜色必须包含三个或六个十六进制数字。
  "scss.lint.hexColorLength": "error",
  // 选择器不应包含ID，因为这些规则与HTML紧密结合在一起。
  "scss.lint.idSelector": "ignore",
  // 仅当支持IE7和更早版本时，才需要IE hack。
  "scss.lint.ieHack": "ignore",
  // 避免使用`！important`。这表明整个CSS的特性已经失控，需要重构。
  "scss.lint.important": "ignore",
  // 导入语句不会并行加载。
  "scss.lint.importStatement": "ignore",
  // 由于显示，属性被忽略。例如。如果使用display：inline，则width，height，margin-top，margin-bottom和float无效。
  "scss.lint.propertyIgnoredDueToDisplay": "warning",
  // 通用选择器（`*`）较慢。
  "scss.lint.universalSelector": "ignore",
  // 未知规则。
  "scss.lint.unknownAtRules": "warning",
  // 未知的属性。
  "scss.lint.unknownProperties": "warning",
  // 未知的供应商特定属性。
  "scss.lint.unknownVendorSpecificProperties": "ignore",
  // 未针对`unknownProperties`规则进行验证的属性列表。
  "scss.lint.validProperties": [],
  // 使用供应商特定的前缀时，还请包括standard属性。
  "scss.lint.vendorPrefix": "warning",
  // 无需零单位。
  "scss.lint.zeroUnits": "ignore",
  // 启用或禁用所有验证。
  "scss.validate": true,
  // *** Extensions ***
  // When enabled, automatically checks extensions for updates. If an extension has an update, it is marked as outdated in the Extensions view. The updates are fetched from a Microsoft online service.
  "extensions.autoCheckUpdates": true,
  // When enabled, automatically installs updates for extensions. The updates are fetched from a Microsoft online service.
  "extensions.autoUpdate": true,
  // When enabled, editors with extension details will be automatically closed upon navigating away from the Extensions View.
  "extensions.closeExtensionDetailsOnViewChange": false,
  // When an extension is listed here, a confirmation prompt will not be shown when that extension handles a URI.
  "extensions.confirmedUriHandlerExtensionIds": [],
  // When enabled, the notifications for extension recommendations will not be shown.
  "extensions.ignoreRecommendations": false,
  // When enabled, recommendations will not be fetched or shown unless specifically requested by the user. Some recommendations are fetched from a Microsoft online service.
  "extensions.showRecommendationsOnlyOnDemand": false,
  // Output
  // Enable/disable the ability of smart scrolling in the output view. Smart scrolling allows you to lock scrolling automatically when you click in the output view and unlocks when you click in the last line.
  "output.smartScroll.enabled": true,
  // Settings Sync
  // List of extensions to be ignored while synchronizing. The identifier of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.
  "settingsSync.ignoredExtensions": [],
  // Configure settings to be ignored while synchronizing.
  "settingsSync.ignoredSettings": [],
  // Synchronize keybindings for each platform.
  "settingsSync.keybindingsPerPlatform": true,
  // Terminal
  // 定制要启动的终端类型。
  //  -集成：使用VS Code的集成终端。
  //  -外部：使用配置的外部端子。
  "terminal.explorerKind": "integrated",
  // 外部端子
  // 定制要在Linux上运行的终端。
  "terminal.external.linuxExec": "xterm",
  // 自定义要在macOS上运行的终端应用程序。
  "terminal.external.osxExec": "Terminal.app",
  // 定制要在Windows上运行的终端。
  "terminal.external.windowsExec": "C:\\Windows\\System32\\cmd.exe",
  // 综合终端
  // 是否在终端中允许和弦键绑定。请注意，如果为true并且击键导致和弦，它将绕过“ terminal.integrated.commandsToSkipShell`”，当您希望ctrl + k转到shell（而不是VS Code）时，将其设置为false尤其有用。
  "terminal.integrated.allowChords": true,
  // 是否允许菜单栏助记符（例如alt + f）触发打开菜单栏。请注意，这将导致所有alt击键为true时都将跳过外壳。这在macOS上不起作用。
  "terminal.integrated.allowMnemonics": false,
  // 设置后的路径将覆盖“ terminal.integrated.shell.linux”，并忽略与自动化相关的终端使用（如任务和调试）的“ shellArgs”值。
  "terminal.integrated.automationShell.linux": null,
  // 设置后的路径将覆盖terminal.integrated.shell.osx并忽略与自动化相关的终端用法（如任务和调试）的shellArgs值。
  "terminal.integrated.automationShell.osx": null,
  // 设置后的路径将覆盖`terminal.integrated.shell.windows`并忽略与自动化相关的终端用法（例如任务和调试）的“ shellArgs”值。
  "terminal.integrated.automationShell.windows": null,
  // 一组命令ID，其键绑定不会发送到Shell，而是始终由VS Code处理。这将使通常由外壳程序消耗的键绑定的行为与终端不集中时的行为相同，例如，使用Ctrl + P启动快速打开。
  "terminal.integrated.commandsToSkipShell": [],
  // 控制是否在退出时确认是否存在活动的终端会话。
  "terminal.integrated.confirmOnExit": false,
  // 控制是否将在终端中选择的文本复制到剪贴板。
  "terminal.integrated.copyOnSelection": false,
  // 控制终端光标是否闪烁。
  "terminal.integrated.cursorBlinking": false,
  // 控制终端光标的样式。
  "terminal.integrated.cursorStyle": "block",
  // 当terminal.integrated.cursorStyle设置为line时，控制光标的宽度。
  "terminal.integrated.cursorWidth": 1,
  // 终端将在其中启动的显式起始路径，该路径用作Shell进程的当前工作目录（cwd）。如果根目录不是方便的cwd，这在工作区设置中可能特别有用。
  "terminal.integrated.cwd": "",
  // 由于VS Code的终端仅支持来自Shell的UTF-8编码数据，因此控制是否检测和将$ LANG环境变量设置为UTF-8兼容选项。
  //  -自动：如果现有变量不存在或不以`.UTF-8'结尾，则设置`$ LANG`环境变量。
  //  -关：请勿设置`$ LANG`环境变量。
  //  -on：始终设置`$ LANG`环境变量。
  "terminal.integrated.detectLocale": "auto",
  // 控制终端中的粗体文本是否将始终使用“亮” ANSI颜色变体。
  "terminal.integrated.drawBoldTextInBrightColors": true,
  // 控制是否启用终端铃声。
  "terminal.integrated.enableBell": false,
  // 是否在终端中启用文件链接。当在网络驱动器上工作时，链接速度可能很慢，尤其是因为每个文件链接都是根据文件系统进行验证的。更改此设置仅在新终端中生效。
  "terminal.integrated.enableFileLinks": true,
  // 具有环境变量的对象，这些环境变量将被添加到VS Code进程中，以供Linux上的终端使用。设置为“ null”可删除环境变量。
  "terminal.integrated.env.linux": {},
  // 带有环境变量的对象，这些变量将添加到VS Code进程中，以供终端在macOS上使用。设置为“ null”可删除环境变量。
  "terminal.integrated.env.osx": {},
  // 具有环境变量的对象，这些环境变量将添加到Windows终端上要使用的VS Code进程中。设置为“ null”可删除环境变量。
  "terminal.integrated.env.windows": {},
  // 是否在每个终端上显示环境更改指示符，以说明是否已扩展或要更改终端的环境。
  //  -灭：禁用指示灯。
  //  -开：启用指示灯。
  //  -警告：仅在终端的环境“陈旧”时显示警告指示符，而不显示指示终端已通过扩展程序修改其环境的信息指示符。
  "terminal.integrated.environmentChangesIndicator": "warnonly",
  // 一种实验设置，旨在通过改进检测到链接的时间并启用与编辑器的共享链接检测来改善终端中的链接检测。当前，这仅支持Web链接。
  "terminal.integrated.experimentalLinkProvider": true,
  // 一个实验性的设置，它将使用终端标题事件作为下拉标题。此设置仅适用于新终端。
  "terminal.integrated.experimentalUseTitleEvent": false,
  // 按下“ Alt”时滚动速度倍增器。
  "terminal.integrated.fastScrollSensitivity": 5,
  // 控制终端的字体系列，默认为`editor.fontFamily`的值。
  "terminal.integrated.fontFamily": "",
  // 控制终端的字体大小（以像素为单位）。
  "terminal.integrated.fontSize": 12,
  // 终端中用于非粗体文本的字体粗细。接受1到1000之间的“普通”和“粗体”关键字或数字。
  "terminal.integrated.fontWeight": "normal",
  // 终端内用于粗体文本的字体粗细。接受1到1000之间的“普通”和“粗体”关键字或数字。
  "terminal.integrated.fontWeightBold": "bold",
  // 新shell是否应从VS Code继承其环境。 Windows不支持此功能。
  "terminal.integrated.inheritEnv": true,
  // 控制终端的字母间距，这是一个整数值，代表要在字符之间添加的其他像素的数量。
  "terminal.integrated.letterSpacing": 0,
  // 控制终端的行高，该数字乘以终端字体大小即可获得以像素为单位的实际行高。
  "terminal.integrated.lineHeight": 1,
  // 控制在使用Option +单击macOS时是否强制选择。这将强制进行常规（行）选择，并且不允许使用列选择模式。例如，当在tmux中启用了鼠标模式时，这可以使用常规终端选择进行复制和粘贴。
  "terminal.integrated.macOptionClickForcesSelection": false,
  // 控制是否在macOS的终端中将选项密钥视为元密钥。
  "terminal.integrated.macOptionIsMeta": false,
  // 设置后，每个单元的前景色都会改变以尝试满足指定的对比度。值示例：
  //
  // -1：默认设置，不执行任何操作。
  // -4.5：WCAG AA规范（最低要求）。
  // -7：符合WCAG AAA（增强）。
  // -21：黑底白字或黑底白字。
  "terminal.integrated.minimumContrastRatio": 1,
  // 鼠标滚轮滚动事件的deltaY上使用的乘数。
  "terminal.integrated.mouseWheelScrollSensitivity": 1,
  // 控制如何渲染终端。
  //  -自动：让VS Code猜测要使用哪个渲染器。
  //  -canvas：使用标准的基于GPU / canvas的渲染器。
  //  -dom：使用基于DOM的后备渲染器。
  "terminal.integrated.rendererType": "auto",
  // 控制终端对右键单击的反应。
  //  -默认：显示上下文菜单。
  //  -copyPaste：有选择时复制，否则粘贴。
  //  -粘贴：右键单击粘贴。
  //  -selectWord：选择光标下的单词并显示上下文菜单。
  "terminal.integrated.rightClickBehavior": "copyPaste",
  // 控制终端在其缓冲区中保留的最大行数。
  "terminal.integrated.scrollback": 1000,
  // 终端在Linux上使用的外壳程序的路径（默认值：/ bin / bash）。
  "terminal.integrated.shell.linux": null,
  // 终端在macOS上使用的外壳程序的路径（默认值：/ bin / bash）。
  "terminal.integrated.shell.osx": null,
  // 终端在Windows上使用的外壳程序的路径（默认值：C：\ WINDOWS \ System32 \ WindowsPowerShell \ v1.0 \ powershell.exe）。
  "terminal.integrated.shell.windows": null,
  // 在Linux终端上使用的命令行参数。
  "terminal.integrated.shellArgs.linux": [],
  // 在macOS终端上使用的命令行参数。
  "terminal.integrated.shellArgs.osx": [
    "-l"
  ],
  // 在Windows终端上使用的命令行参数。
  "terminal.integrated.shellArgs.windows": [],
  // 控制在退出代码不为零时是否显示警报“终端进程终止于退出代码”。
  "terminal.integrated.showExitAlert": true,
  // 控制拆分终端开始的工作目录。
  //  -workspaceRoot：新的拆分终端将使用工作区根目录作为工作目录。在多根工作空间中，可以选择要使用的根文件夹。
  //  -初始：新的拆分终端将使用父终端开始的工作目录。
  //  -继承：在macOS和Linux上，新的拆分终端将使用父终端的工作目录。在Windows上，此行为与initial相同。
  "terminal.integrated.splitCwd": "inherited",
  // 控制评估终端中字符宽度时使用的unicode版本。如果遇到表情符号或其他宽字符占用的空间或退格空间不正确，或者删除过多或过少，则可能需要尝试调整此设置。
  //  -6：unicode的版本6，这是一个较旧的版本，应在较旧的系统上更好地工作。
  //  -11：Unicode的版本11，此版本在使用Unicode的现代版本的现代系统上提供更好的支持。
  "terminal.integrated.unicodeVersion": "11",
  // 是否在Windows终端进程通信中使用ConPTY（需要Windows 10内部版本号18309+）。如果为假，将使用Winpty。
  "terminal.integrated.windowsEnableConpty": true,
  // 包含所有字符的字符串，可通过双击选择单词功能，将其视为单词分隔符。
  "terminal.integrated.wordSeparators": " ()[]{}',\"`─",
  // Tasks
  // Where the cell toolbar should be shown, or whether it should be hidden.
  "notebook.cellToolbarLocation": "right",
  // Whether to use the enhanced text diff editor for notebook.
  "notebook.diff.enablePreview": true,
  // Priority list for output mime types
  "notebook.displayOrder": [],
  // Whether the cell status bar should be shown.
  "notebook.showCellStatusBar": true,
  // Controls enablement of `provideTasks` for all task provider extension. If the Tasks: Run Task command is slow, disabling auto detect for task providers may help. Individual extensions may also provide settings that disable auto detection.
  "task.autoDetect": "on",
  // Configures whether to show the problem matcher prompt when running a task. Set to `true` to never prompt, or use a dictionary of task types to turn off prompting only for specific task types.
  "task.problemMatchers.neverPrompt": false,
  // Controls whether to show the task detail for tasks that have a detail in task quick picks, such as Run Task.
  "task.quickOpen.detail": true,
  // Controls the number of recent items tracked in task quick open dialog.
  "task.quickOpen.history": 30,
  // Causes the Tasks: Run Task command to use the slower "show all" behavior instead of the faster two level picker where tasks are grouped by provider.
  "task.quickOpen.showAll": false,
  // Controls whether the task quick pick is skipped when there is only one task to pick from.
  "task.quickOpen.skip": false,
  // Save all dirty editors before running a task.
  //  - always: Always saves all editors before running.
  //  - never: Never saves editors before running.
  //  - prompt: Prompts whether to save editors before running.
  "task.saveBeforeRun": "always",
  // Configures whether a warning is shown when a provider is slow
  "task.slowProviderWarning": true,
  // Problems
  // Controls whether Problems view should automatically reveal files when opening them.
  "problems.autoReveal": true,
  // Show Errors & Warnings on files and folder.
  "problems.decorations.enabled": true,
  // When enabled shows the current problem in the status bar.
  "problems.showCurrentInStatus": false,
  // Breadcrumb Navigation
  // Enable/disable navigation breadcrumbs.
  "breadcrumbs.enabled": true,
  // Controls whether and how file paths are shown in the breadcrumbs view.
  //  - on: Show the file path in the breadcrumbs view.
  //  - off: Do not show the file path in the breadcrumbs view.
  //  - last: Only show the last element of the file path in the breadcrumbs view.
  "breadcrumbs.filePath": "on",
  // Render breadcrumb items with icons.
  "breadcrumbs.icons": true,
  // When enabled breadcrumbs show `array`-symbols.
  "breadcrumbs.showArrays": true,
  // When enabled breadcrumbs show `boolean`-symbols.
  "breadcrumbs.showBooleans": true,
  // When enabled breadcrumbs show `class`-symbols.
  "breadcrumbs.showClasses": true,
  // When enabled breadcrumbs show `constant`-symbols.
  "breadcrumbs.showConstants": true,
  // When enabled breadcrumbs show `constructor`-symbols.
  "breadcrumbs.showConstructors": true,
  // When enabled breadcrumbs show `enumMember`-symbols.
  "breadcrumbs.showEnumMembers": true,
  // When enabled breadcrumbs show `enum`-symbols.
  "breadcrumbs.showEnums": true,
  // When enabled breadcrumbs show `event`-symbols.
  "breadcrumbs.showEvents": true,
  // When enabled breadcrumbs show `field`-symbols.
  "breadcrumbs.showFields": true,
  // When enabled breadcrumbs show `file`-symbols.
  "breadcrumbs.showFiles": true,
  // When enabled breadcrumbs show `function`-symbols.
  "breadcrumbs.showFunctions": true,
  // When enabled breadcrumbs show `interface`-symbols.
  "breadcrumbs.showInterfaces": true,
  // When enabled breadcrumbs show `key`-symbols.
  "breadcrumbs.showKeys": true,
  // When enabled breadcrumbs show `method`-symbols.
  "breadcrumbs.showMethods": true,
  // When enabled breadcrumbs show `module`-symbols.
  "breadcrumbs.showModules": true,
  // When enabled breadcrumbs show `namespace`-symbols.
  "breadcrumbs.showNamespaces": true,
  // When enabled breadcrumbs show `null`-symbols.
  "breadcrumbs.showNull": true,
  // When enabled breadcrumbs show `number`-symbols.
  "breadcrumbs.showNumbers": true,
  // When enabled breadcrumbs show `object`-symbols.
  "breadcrumbs.showObjects": true,
  // When enabled breadcrumbs show `operator`-symbols.
  "breadcrumbs.showOperators": true,
  // When enabled breadcrumbs show `package`-symbols.
  "breadcrumbs.showPackages": true,
  // When enabled breadcrumbs show `property`-symbols.
  "breadcrumbs.showProperties": true,
  // When enabled breadcrumbs show `string`-symbols.
  "breadcrumbs.showStrings": true,
  // When enabled breadcrumbs show `struct`-symbols.
  "breadcrumbs.showStructs": true,
  // When enabled breadcrumbs show `typeParameter`-symbols.
  "breadcrumbs.showTypeParameters": true,
  // When enabled breadcrumbs show `variable`-symbols.
  "breadcrumbs.showVariables": true,
  // Controls whether and how symbols are shown in the breadcrumbs view.
  //  - on: Show all symbols in the breadcrumbs view.
  //  - off: Do not show symbols in the breadcrumbs view.
  //  - last: Only show the current symbol in the breadcrumbs view.
  "breadcrumbs.symbolPath": "on",
  // Controls how symbols are sorted in the breadcrumbs outline view.
  //  - position: Show symbol outline in file position order.
  //  - name: Show symbol outline in alphabetical order.
  //  - type: Show symbol outline in symbol type order.
  "breadcrumbs.symbolSortOrder": "position",
  // Telemetry
  // Enable crash reports to be sent to a Microsoft online service.
  // This option requires restart to take effect.
  "telemetry.enableCrashReporter": true,
  // Enable usage data and errors to be sent to a Microsoft online service.
  "telemetry.enableTelemetry": true,
  // Outline
  // Render Outline Elements with Icons.
  "outline.icons": true,
  // Use badges for Errors & Warnings.
  "outline.problems.badges": true,
  // Use colors for Errors & Warnings.
  "outline.problems.colors": true,
  // Show Errors & Warnings on Outline Elements.
  "outline.problems.enabled": true,
  // When enabled outline shows `array`-symbols.
  "outline.showArrays": true,
  // When enabled outline shows `boolean`-symbols.
  "outline.showBooleans": true,
  // When enabled outline shows `class`-symbols.
  "outline.showClasses": true,
  // When enabled outline shows `constant`-symbols.
  "outline.showConstants": true,
  // When enabled outline shows `constructor`-symbols.
  "outline.showConstructors": true,
  // When enabled outline shows `enumMember`-symbols.
  "outline.showEnumMembers": true,
  // When enabled outline shows `enum`-symbols.
  "outline.showEnums": true,
  // When enabled outline shows `event`-symbols.
  "outline.showEvents": true,
  // When enabled outline shows `field`-symbols.
  "outline.showFields": true,
  // When enabled outline shows `file`-symbols.
  "outline.showFiles": true,
  // When enabled outline shows `function`-symbols.
  "outline.showFunctions": true,
  // When enabled outline shows `interface`-symbols.
  "outline.showInterfaces": true,
  // When enabled outline shows `key`-symbols.
  "outline.showKeys": true,
  // When enabled outline shows `method`-symbols.
  "outline.showMethods": true,
  // When enabled outline shows `module`-symbols.
  "outline.showModules": true,
  // When enabled outline shows `namespace`-symbols.
  "outline.showNamespaces": true,
  // When enabled outline shows `null`-symbols.
  "outline.showNull": true,
  // When enabled outline shows `number`-symbols.
  "outline.showNumbers": true,
  // When enabled outline shows `object`-symbols.
  "outline.showObjects": true,
  // When enabled outline shows `operator`-symbols.
  "outline.showOperators": true,
  // When enabled outline shows `package`-symbols.
  "outline.showPackages": true,
  // When enabled outline shows `property`-symbols.
  "outline.showProperties": true,
  // When enabled outline shows `string`-symbols.
  "outline.showStrings": true,
  // When enabled outline shows `struct`-symbols.
  "outline.showStructs": true,
  // When enabled outline shows `typeParameter`-symbols.
  "outline.showTypeParameters": true,
  // When enabled outline shows `variable`-symbols.
  "outline.showVariables": true,
  // Timeline
  // An array of Timeline sources that should be excluded from the Timeline view
  "timeline.excludeSources": null,
  // The number of items to show in the Timeline view by default and when loading more items. Setting to `null` (the default) will automatically choose a page size based on the visible area of the Timeline view
  "timeline.pageSize": null,
  // Default Configuration Overrides
  // Configure settings to be overridden for [css] language.
  "[css]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [dockerfile] language.
  "[dockerfile]": {
    "editor.quickSuggestions": {
      "strings": true
    }
  },
  // Configure settings to be overridden for [git-commit] language.
  "[git-commit]": {
    "editor.rulers": [
      72
    ],
    "workbench.editor.restoreViewState": false
  },
  // Configure settings to be overridden for [git-rebase] language.
  "[git-rebase]": {
    "workbench.editor.restoreViewState": false
  },
  // Configure settings to be overridden for [go] language.
  "[go]": {
    "editor.insertSpaces": false
  },
  // Configure settings to be overridden for [handlebars] language.
  "[handlebars]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [html] language.
  "[html]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [json] language.
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [jsonc] language.
  "[jsonc]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [less] language.
  "[less]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [makefile] language.
  "[makefile]": {
    "editor.insertSpaces": false
  },
  // Configure settings to be overridden for [markdown] language.
  "[markdown]": {
    "editor.wordWrap": "on",
    "editor.quickSuggestions": false
  },
  // Configure settings to be overridden for [scss] language.
  "[scss]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for [search-result] language.
  "[search-result]": {
    "editor.lineNumbers": "off"
  },
  // Configure settings to be overridden for [shellscript] language.
  "[shellscript]": {
    "files.eol": "\n"
  },
  // Configure settings to be overridden for [yaml] language.
  "[yaml]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.autoIndent": "advanced"
  },
  // Remote
  // When enabled, URLs with ports (ex. `http://127.0.0.1:3000`) that are printed to your terminals are automatically forwarded.
  "remote.autoForwardPorts": true,
  // When enabled extensions are downloaded locally and installed on remote.
  "remote.downloadExtensionsLocally": false,
  // Override the kind of an extension. `ui` extensions are installed and run on the local machine while `workspace` extensions are run on the remote. By overriding an extension's default kind using this setting, you specify if that extension should be installed and enabled locally or remotely.
  "remote.extensionKind": {
    "pub.name": [
      "ui"
    ]
  },
  // Restores the ports you forwarded in a workspace.
  "remote.restoreForwardedPorts": false,
  // Emmet
  // An array of languages where Emmet abbreviations should not be expanded.
  "emmet.excludeLanguages": [
    "markdown"
  ],
  // Path to a folder containing Emmet profiles and snippets.
  "emmet.extensionsPath": null,
  // Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and emmet supported language.
  //  E.g.: `{"vue-html": "html", "javascript": "javascriptreact"}`
  "emmet.includeLanguages": {},
  // When set to `false`, the whole file is parsed to determine if current position is valid for expanding Emmet abbreviations. When set to `true`, only the content around the current position in css/scss/less files is parsed.
  "emmet.optimizeStylesheetParsing": true,
  // Preferences used to modify behavior of some actions and resolvers of Emmet.
  "emmet.preferences": {},
  // Shows possible Emmet abbreviations as suggestions. Not applicable in stylesheets or when emmet.showExpandedAbbreviation is set to `"never"`.
  "emmet.showAbbreviationSuggestions": true,
  // Shows expanded Emmet abbreviations as suggestions.
  // The option `"inMarkupAndStylesheetFilesOnly"` applies to html, haml, jade, slim, xml, xsl, css, scss, sass, less and stylus.
  // The option `"always"` applies to all parts of the file regardless of markup/css.
  "emmet.showExpandedAbbreviation": "always",
  // If `true`, then Emmet suggestions will show up as snippets allowing you to order them as per `editor.snippetSuggestions` setting.
  "emmet.showSuggestionsAsSnippets": false,
  // Define profile for specified syntax or use your own profile with specific rules.
  "emmet.syntaxProfiles": {},
  // When enabled, Emmet abbreviations are expanded when pressing TAB.
  "emmet.triggerExpansionOnTab": false,
  // Variables to be used in Emmet snippets
  "emmet.variables": {},
  // Git
  // Controls whether force push (with or without lease) is enabled.
  "git.allowForcePush": false,
  // Controls whether commits without running pre-commit and commit-msg hooks are allowed.
  "git.allowNoVerifyCommit": false,
  // Always show the Staged Changes resource group.
  "git.alwaysShowStagedChangesResourceGroup": false,
  // Controls the signoff flag for all commits.
  "git.alwaysSignOff": false,
  // When enabled, commits will automatically be fetched from the default remote of the current Git repository.
  "git.autofetch": false,
  // Duration in seconds between each automatic git fetch, when `git.autofetch` is enabled.
  "git.autofetchPeriod": 180,
  // Whether auto refreshing is enabled.
  "git.autorefresh": true,
  // Configures when repositories should be automatically detected.
  //  - true: Scan for both subfolders of the current opened folder and parent folders of open files.
  //  - false: Disable automatic repository scanning.
  //  - subFolders: Scan for subfolders of the currently opened folder.
  //  - openEditors: Scan for parent folders of open files.
  "git.autoRepositoryDetection": true,
  // Stash any changes before pulling and restore them after successful pull.
  "git.autoStash": false,
  // Controls the sort order for branches.
  "git.branchSortOrder": "committerdate",
  // A regular expression to validate new branch names.
  "git.branchValidationRegex": "",
  // The character to replace whitespace in new branch names.
  "git.branchWhitespaceChar": "-",
  // Controls what type of branches are listed when running `Checkout to...`.
  //  - all: Show all references.
  //  - local: Show only local branches.
  //  - tags: Show only tags.
  //  - remote: Show only remote branches.
  "git.checkoutType": "all",
  // Always confirm the creation of empty commits for the 'Git: Commit Empty' command.
  "git.confirmEmptyCommits": true,
  // Controls whether to ask for confirmation before force-pushing.
  "git.confirmForcePush": true,
  // Controls whether to ask for confirmation before commiting without verification.
  "git.confirmNoVerifyCommit": true,
  // Confirm before synchronizing git repositories.
  "git.confirmSync": true,
  // Controls the Git count badge.
  //  - all: Count all changes.
  //  - tracked: Count only tracked changes.
  //  - off: Turn off counter.
  "git.countBadge": "all",
  // Controls whether Git contributes colors and badges to the explorer and the open editors view.
  "git.decorations.enabled": true,
  // The default location to clone a git repository.
  "git.defaultCloneDirectory": null,
  // Controls whether to automatically detect git submodules.
  "git.detectSubmodules": true,
  // Controls the limit of git submodules detected.
  "git.detectSubmodulesLimit": 10,
  // Enables commit signing with GPG or X.509.
  "git.enableCommitSigning": false,
  // Whether git is enabled.
  "git.enabled": true,
  // Commit all changes when there are no staged changes.
  "git.enableSmartCommit": false,
  // Controls whether the Git Sync command appears in the status bar.
  "git.enableStatusBarSync": true,
  // When enabled, fetch all branches when pulling. Otherwise, fetch just the current one.
  "git.fetchOnPull": false,
  // List of git repositories to ignore.
  "git.ignoredRepositories": [],
  // Ignores the legacy Git warning.
  "git.ignoreLegacyWarning": false,
  // Ignores the warning when there are too many changes in a repository.
  "git.ignoreLimitWarning": false,
  // Ignores the warning when Git is missing.
  "git.ignoreMissingGitWarning": false,
  // Ignores the warning when Git 2.25 - 2.26 is installed on Windows.
  "git.ignoreWindowsGit27Warning": false,
  // Controls when to show commit message input validation.
  "git.inputValidation": "warn",
  // Controls the commit message length threshold for showing a warning.
  "git.inputValidationLength": 72,
  // Controls the commit message subject length threshold for showing a warning. Unset it to inherit the value of `config.inputValidationLength`.
  "git.inputValidationSubjectLength": 50,
  // Controls whether the diff editor should be opened when clicking a change. Otherwise the regular editor will be opened.
  "git.openDiffOnClick": true,
  // Path and filename of the git executable, e.g. `C:\Program Files\Git\bin\git.exe` (Windows). This can also be an array of string values containing multiple paths to look up.
  "git.path": null,
  // Runs a git command after a successful commit.
  //  - none: Don't run any command after a commit.
  //  - push: Run 'Git Push' after a successful commit.
  //  - sync: Run 'Git Sync' after a successful commit.
  "git.postCommitCommand": "none",
  // Controls whether Git should check for unsaved files before committing.
  //  - always: Check for any unsaved files.
  //  - staged: Check only for unsaved staged files.
  //  - never: Disable this check.
  "git.promptToSaveFilesBeforeCommit": "always",
  // Fetch all tags when pulling.
  "git.pullTags": true,
  // Force git to use rebase when running the sync command.
  "git.rebaseWhenSync": false,
  // List of paths to search for git repositories in.
  "git.scanRepositories": [],
  // Controls whether to show the commit input in the Git source control panel.
  "git.showCommitInput": true,
  // Controls whether to show an inline Open File action in the Git changes view.
  "git.showInlineOpenFileAction": true,
  // Controls whether git actions should show progress.
  "git.showProgress": true,
  // Controls whether to show a notification when a push is successful.
  "git.showPushSuccessNotification": false,
  // Control which changes are automatically staged by Smart Commit.
  //  - all: Automatically stage all changes.
  //  - tracked: Automatically stage tracked changes only.
  "git.smartCommitChanges": "all",
  // Suggests to enable smart commit (commit all changes when there are no staged changes).
  "git.suggestSmartCommit": true,
  // Controls whether a notification comes up when running the Sync action, which allows the user to cancel the operation.
  "git.supportCancellation": false,
  // Controls whether to enable VS Code to be the authentication handler for git processes spawned in the integrated terminal. Note: terminals need to be restarted to pick up a change in this setting.
  "git.terminalAuthentication": true,
  // Controls which date to use for items in the Timeline view
  //  - committed: Use the committed date
  //  - authored: Use the authored date
  "git.timeline.date": "committed",
  // Controls whether to show the commit author in the Timeline view
  "git.timeline.showAuthor": true,
  // Controls how untracked changes behave.
  //  - mixed: All changes, tracked and untracked, appear together and behave equally.
  //  - separate: Untracked changes appear separately in the Source Control view. They are also excluded from several actions.
  //  - hidden: Untracked changes are hidden and excluded from several actions.
  "git.untrackedChanges": "mixed",
  // Controls whether force pushing uses the safer force-with-lease variant.
  "git.useForcePushWithLease": true,
  // Controls whether to enable automatic GitHub authentication for git commands within VS Code.
  "github.gitAuthentication": true,
  // Grunt
  // Controls whether auto detection of Grunt tasks is on or off. Default is on.
  "grunt.autoDetect": "on",
  // Gulp
  // Controls whether auto detection of Gulp tasks is on or off. Default is on.
  "gulp.autoDetect": "on",
  // Jake
  // Controls whether auto detection of Jake tasks is on or off. Default is on.
  "jake.autoDetect": "on",
  // Merge Conflict
  // Whether to automatically navigate to the next merge conflict after resolving a merge conflict.
  "merge-conflict.autoNavigateNextConflict.enabled": false,
  // Create a CodeLens for merge conflict blocks within editor.
  "merge-conflict.codeLens.enabled": true,
  // Create decorators for merge conflict blocks within editor.
  "merge-conflict.decorators.enabled": true,
  // Controls where the diff view should be opened when comparing changes in merge conflicts.
  //  - Current: Open the diff view in the current editor group.
  //  - Beside: Open the diff view next to the current editor group.
  //  - Below: Open the diff view below the current editor group.
  "merge-conflict.diffViewPosition": "Current",
  // JavaScript Debugger
  // Configures which processes to automatically attach and debug when `debug.node.autoAttach` is on. A Node process launched with the `--inspect` flag will always be attached to, regardless of this setting.
  //  - always: Auto attach to every Node.js process launched in the terminal.
  //  - smart: Auto attach when running scripts that aren't in a node_modules folder.
  //  - onlyWithFlag: Only auto attach when the `--inspect` is given.
  //  - disabled: Auto attach is disabled and not shown in status bar.
  "debug.javascript.autoAttachFilter": "disabled",
  // Configures glob patterns for determining when to attach in "smart" `debug.javascript.autoAttachFilter` mode. `$KNOWN_TOOLS$` is replaced with a list of names of common test and code runners.
  "debug.javascript.autoAttachSmartPattern": [
    "!**/{node_modules,npm-global,.yarn,.nvm}/**",
    "**/$KNOWN_TOOLS$/**"
  ],
  // Configures whether property getters will be expanded automatically. If this is false, the getter will appear as `get propertyName` and will only be evaluated when you click on it.
  "debug.javascript.autoExpandGetters": false,
  // When debugging a remote web app, configures whether to automatically tunnel the remote server to your local machine.
  "debug.javascript.automaticallyTunnelRemoteServer": true,
  // Whether to stop when conditional breakpoints throw an error. Note: your launch.json `type` must be prefixed with `pwa-` to use this, such as `pwa-node`.
  "debug.javascript.breakOnConditionalError": false,
  // Where a "Run" and "Debug" code lens should be shown in your npm scripts. It may be on "all", scripts, on "top" of the script section, or "never".
  "debug.javascript.codelens.npmScripts": "top",
  // Options used when debugging open links clicked from inside the JavaScript Debug Terminal. Can be set to "off" to disable this behavior, or "always" to enable debugging in all terminals.
  "debug.javascript.debugByLinkOptions": "on",
  // Default options used when debugging a process through the `Debug: Attach to Node.js Process` command
  "debug.javascript.pickAndAttachOptions": {},
  // Whether to suggest pretty printing JavaScript code that looks minified when you step into it.
  "debug.javascript.suggestPrettyPrinting": true,
  // Default launch options for the JavaScript debug terminal and npm scripts.
  "debug.javascript.terminalOptions": {},
  // Configures whether sourcemapped file where the original file can't be read will automatically be unmapped. If this is false (default), a prompt is shown.
  "debug.javascript.unmapMissingSources": false,
  // Use the new in-preview JavaScript debugger for Node.js and Chrome.
  "debug.javascript.usePreview": true,
  // Controls whether to show a warning when the 'useWSL' attribute is used.
  "debug.node.showUseWslIsDeprecatedWarning": true,
  // References Search View
  // Controls whether 'Peek References' or 'Find References' is invoked when selecting code lens references
  //  - peek: Show references in peek editor.
  //  - view: Show references in separate view.
  "references.preferredLocation": "peek",
  // Npm
  // Controls whether npm scripts should be automatically detected.
  "npm.autoDetect": "on",
  // Enable running npm scripts contained in a folder from the Explorer context menu.
  "npm.enableRunFromFolder": false,
  // The NPM Script Explorer is now available in 'Views' menu in the Explorer in all folders.
  // Enable an explorer view for npm scripts when there is no top-level 'package.json' file.
  "npm.enableScriptExplorer": false,
  // Configure glob patterns for folders that should be excluded from automatic script detection.
  "npm.exclude": "",
  // Fetch data from https://registry.npmjs.org and https://registry.bower.io to provide auto-completion and information on hover features on npm dependencies.
  "npm.fetchOnlinePackageInfo": true,
  // The package manager used to run scripts.
  "npm.packageManager": "npm",
  // Run npm commands with the `--silent` option.
  "npm.runSilent": false,
  // The default click action used in the npm scripts explorer: `open` or `run`, the default is `open`.
  "npm.scriptExplorerAction": "open"
}
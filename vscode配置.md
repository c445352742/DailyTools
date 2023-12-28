# vscode配置

    {
        "workbench.sideBar.location": "right",
        "editor.fontSize": 18,
        "security.workspace.trust.untrustedFiles": "open",
        "editor.fontFamily": " 'Courier New', monospace",
        "terminal.integrated.fontSize": 16,
        "editor.tabSize": 2,
        "[javascript]": {
          "editor.defaultFormatter": "lonefy.vscode-JS-CSS-HTML-formatter"
        },
        "[json]": {
          "editor.defaultFormatter": "lonefy.vscode-JS-CSS-HTML-formatter"
        },
        "editor.suggest.snippetsPreventQuickSuggestions": false,
        "[html]": {
          "editor.defaultFormatter": "lonefy.vscode-JS-CSS-HTML-formatter"
        },
        "remote.SSH.remotePlatform": {
          "centos": "linux"
        },
        "git.enableSmartCommit": true,
        "git.confirmSync": false,
        "[less]": {
          "editor.defaultFormatter": "vscode.css-language-features"
        }
    }

# vscode快捷键配置

// 将键绑定放在此文件中以覆盖默认值auto[]

   [
  {
      "key": "ctrl+d",
      "command": "editor.action.copyLinesDownAction",
      "when": "editorTextFocus && !editorReadonly"
  },
  {
      "key": "shift+alt+down",
      "command": "-editor.action.copyLinesDownAction",
      "when": "editorTextFocus && !editorReadonly"
  },
  {
      "key": "alt+s",
      "command": "saveAll"
  },
  {
      "key": "ctrl+k s",
      "command": "-saveAll"
  },
  {
      "key": "ctrl+k",
      "command": "workbench.action.terminal.clear"
  },
  {
    "key": "ctrl+alt+l",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "ctrl+c",
    "command": "workbench.action.terminal.copySelection",
    "when": "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused"
  },
  {
    "key": "ctrl+shift+c",
    "command": "-workbench.action.terminal.copySelection",
    "when": "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused"
  },
  {
    "key": "ctrl+v",
    "command": "workbench.action.terminal.paste",
    "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
  },
  {
    "key": "ctrl+shift+v",
    "command": "-workbench.action.terminal.paste",
    "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
  }
]

# 插件配置

    draw.io integration
    gitlens
    markdown all in one
    pylance
    python
    black formatter
    remote - ssh
    remote - ssh:editing configuration files
    vetur

# 富文本
  viditor
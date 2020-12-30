(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{516:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"システム内の移動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#システム内の移動"}},[s._v("#")]),s._v(" システム内の移動")]),s._v(" "),t("p",[s._v("初期のシェルを使うとシステム内を移動してコマンドを実行することができますが、Nuのような現代的なシェルでも同じことができます。システムを操作する際によく使われるコマンドをいくつか見てみましょう。")]),s._v(" "),t("h2",{attrs:{id:"ディレクトリの内容を確認する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ディレクトリの内容を確認する"}},[s._v("#")]),s._v(" ディレクトリの内容を確認する")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),t("p",[s._v("他の章でみてきたように、"),t("code",[s._v("ls")]),s._v("はパスの内容を表示するためのコマンドです。Nuはパスの内容をテーブルとして返してくれます。")]),s._v(" "),t("p",[t("code",[s._v("ls")]),s._v('コマンドには表示する内容を変更するためにオプションで引数を渡すことができます。例えば".md"で終わるファイルの一覧を表示することができます。glob"*.md"はファイルが\'.md\'で終わっていればマッチすると読むことができます。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.md\n───┬────────────────────┬──────┬─────────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name               │ type │ size    │ modified ")]),s._v("\n───┼────────────────────┼──────┼─────────┼────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ CODE_OF_CONDUCT.md │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("886")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ README.md          │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.0")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ TODO.md            │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n───┴────────────────────┴──────┴─────────┴────────────\n")])])]),t("p",[s._v('上記のオプション引数"*.txt"の中で利用されているアスタリスク(*)はしばしばワイルドカードやグロブと呼ばれ、何にでもマッチします。グロブ"*.txt"は"\'.txt\'で終わる任意のファイルにマッチする"と読むことができます。')]),s._v(" "),t("p",[s._v("Nuはより深いディレクトリにアクセスできる最新のグロブも利用します。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" **/*.md\n────┬───────────────────────────────────────────┬──────┬─────────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name                                      │ type │ size    │ modified ")]),s._v("\n────┼───────────────────────────────────────────┼──────┼─────────┼────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ .github/ISSUE_TEMPLATE/bug_report.md      │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("592")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ .github/ISSUE_TEMPLATE/feature_request.md │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("595")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ CODE_OF_CONDUCT.md                        │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ CONTRIBUTING.md                           │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("886")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ README.md                                 │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.0")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ TODO.md                                   │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ crates/nu-source/README.md                │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ docker/packaging/README.md                │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ docs/commands/README.md                   │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("929")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ docs/commands/alias.md                    │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" │ docs/commands/append.md                   │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago\n")])])]),t("p",[s._v('ここでは".md"で終わるファイルを探していますが、２つのアスタリスクはさらに"ここから始まる任意のディレクトリにある"という意味です。')]),s._v(" "),t("h2",{attrs:{id:"現在のディレクトリを変更する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#現在のディレクトリを変更する"}},[s._v("#")]),s._v(" 現在のディレクトリを変更する")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" new_directory\n")])])]),t("p",[s._v("現在のディレクトリを変更するには"),t("code",[s._v("cd")]),s._v("コマンドを使います。他のシェルと同じように、ディレクトリの名前か上の階層に移動する場合は"),t("code",[s._v("..")]),s._v("ショートカットを利用します。")]),s._v(" "),t("p",[t("code",[s._v("cd")]),s._v("を省略してパスだけを指定することでも現在の作業ディレクトリを変更することができます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" new_directory\n")])])]),t("h2",{attrs:{id:"ファイルシステムのコマンド"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ファイルシステムのコマンド"}},[s._v("#")]),s._v(" ファイルシステムのコマンド")]),s._v(" "),t("p",[s._v("Nuはクロスプラットフォームで動作するいくつかの基本的なファイルシステムのコマンドも提供します。")]),s._v(" "),t("p",[t("code",[s._v("mv")]),s._v("コマンドを利用すればアイテムをある場所から別の場所へ移動できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" item location\n")])])]),t("p",[s._v("ある場所から別の場所へアイテムのコピーができます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" item location\n")])])]),t("p",[s._v("アイテムの削除ができます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" item\n")])])]),t("p",[s._v("３つのコマンドは"),t("code",[s._v("ls")]),s._v("コマンドでみたグロブ機能も利用できます。")]),s._v(" "),t("p",[s._v("最後に、"),t("code",[s._v("mkdir")]),s._v("コマンドで新しいディレクトリを作成できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" new_directory\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
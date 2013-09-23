ga-navigation-timing
====================

HTML5で新たに追加されたNavigaton Timing APIのデータをGoogle Analyticsに送信する機能

## 使い方
ga-navigation-tming.jsを読み込む

```
<script type="text/javascript" src="./ga-navigation-timing"></script>
```

onloadイベント時に, ga-navigation-timing内のトラッキングを行う関数を実行する.
ただし, 全ての値を正しくトラッキングするために, setTimeoutを用いて, onloadイベントが
全て完了したであろうタイミングで実行するようにする. 下記の例では, 3秒後に行っている.

```
$(function () {
   setTimeout(gaPerformance, 3000);
});
```

## 計測データ
Google Analyticsのイベント定義では, Category, Action, Label, Value, Opt_noninteractionという5つの指定
が可能です. このライブラリでは, Categoryは全て**Performance**という値を入れています. またActionには
```window.performance```以下のオブジェクト「navigation」「timing」を分岐する意味合いで, 「Navigation」または
「Timing」が入るように作られています. Labelには, その内部の細かい値を特定する文字列が以下のように入っています.

### Action「Navigation」

- RedirectCount   リダイレクトの回数

### Action「Timing」

- Redirect                 リダイレクトにかかった時間
- Application Cache        アプリケーション・キャッシュの処理時間
- DNS Lookup               DNSの参照処理時間
- TCP Connection           TCPの接続処理が完了するまでの時間
- Request Time             HTTP Requestの処理時間
- Response Time            Responseの処理時間
- DOM Interactive Time     DOM操作可能までの時間
- DOM Complete             DOM構築完了までの時間
- onLoad Event             onLoadイベントの処理にかかった時間
- Total Time               トータルの時間



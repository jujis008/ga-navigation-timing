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

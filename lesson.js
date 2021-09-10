//変数の宣言用の文字列var
var name = 0;

//定数の宣言用の文字列const
//定数名を大文字にしておくと判別しやすいのでオススメ
const POINTER = "住所"

var a = { "memo": 10, "point": 20, "blade": 30 };

//ファンクション(メソッド)の作成
function method() {
    document.write("method実行<br>");
    document.write(a["memo"]);
}
//警告文の表示(上部)
function ALERT() {
    alert("はろはろ");
}

//確認文の表示(上部)
function CONFIRM() {
    var result = confirm("削除をしますか？");
    if (result) {
        document.write("実行されました。");
    } else {
        document.write("実行されませんでした。");
    }
}

//入力欄の表示(上部)
function PROMPT() {
    var msg = prompt("名前を入力して下さい。");

    document.write(msg);
}

/*
クリックされた際に起こるメソッド(要HTMLへの記述)
<input type="button" OnClick="click()">
*/
function click() {
    alert("クリックされたよ。");
}

//ダブルクリックされた際に起こるメソッド(要HTMLへの記述)
function dblclick() {
    CONFIRM();
}
//クリックとダブルクリックはどちらか片方だけしか適用されないっぽい

//カーソルが重なった際に起こるメソッド(要HTMLへの記述)
function mouseover() {
    document.write("やほー");
}

//オブジェクトの作り方
//var person = new Object();

//事前にオブジェクトの作り方の宣言する場合のやり方
function personset(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
    //無名関数の大きな役割の使い方（オブジェクト内にファンクションを生成)
    this.greet = function () { alert("BYE"); };
}

var person = new personset("たなか", "東京", "ばんなそかな");

/*
無名関数（変数にファンクションを代入できる関数）
オブジェクトの中に関数を設定できるのがとても大きな役割になる
*/
var greet = function () { alert("Hello"); };

document.write(person.email);

/*
Mathオブジェクトの中身
abs 絶対値
round 四捨五入
cell 切り上げ
floor 切り捨て
max 最大値
min 最小値
random ランダム
sin
cos
tan
sqrt　平方根
pow　累乗
log 自然対数
exp eの累乗

使い方
Math.abs(-24);
*/

/*
Stringオブジェクトの中身
length 長さ
indexOf　検索した場所
charAt
substring
match 合致
search 検索
replace 置き換え
concat 結合
split 分割
toLowerCase 小文字
toUpperCase 大文字

*/

/*
Arrayオブジェクトの中身
length 長さ
toString() 文字列に
concat
join
slice
pop　配列の最後に削除
push 配列の最後を追加
shift 配列の先頭に削除
unshift 配列の先頭に追加
reverse 並びを逆に
sort 並び替え

*/
/*
document.getEelmentById("");
の使い方
HTMLコードの部分にid属性と名前のついたタブを用意する
*****注意！*****
このJSファイルを読み込む前に属性設定をしないとエラーを吐く

例)
var elem = document.getElementById("myid");

elem.style = "color:red"
elem.innerHTML = "<strong>Hello There</strong>";

のように書くと「myid」と設定した部分が太字で色が赤くなる
*/

/*
document.getElementByName("");
の使い方
HTMLコードの部分のname属性のあるタブを用意する
*****注意！*****
このJSファイルを読み込む前に属性設定をしないとエラーを吐く
この文は配列が帰ってくるので、同じ名前のものの数だけ配列の数が増えるのは注意

例)
var e = document.getElementByName("username");

e[0].value = "たなか";
*/

//document.getElementByClassName("");も同様に使える

var elem = document.getElementById("test");

elem.addEventListener("click", click, false);


document.write(3 + 2)

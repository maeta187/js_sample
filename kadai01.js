//1. promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
var answer = prompt ('正の数か負の数を入力して下さい。');
if (answer >= 0 ) {
  alert('正の数');
} else if (answer <= 0) {
  alert('負の数');
//2. 1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。
} else {
  alert('数字を入力してください。');
}

//3. 配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
var animal = ['パンダ' , 'ライオン' , 'キリン'];
var i = 0;
while (i < animal.length) {
  alert(animal[i]);
  i++;
}

//4. 3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
var animal = ['パンダ' , 'ライオン' , 'キリン'];
var i = 0;
var answer = prompt ('パンダ、ライオン、キリンのどれか１つ選んで下さい。');
while (i < animal.length) {
  if (answer == "ライオン" && answer == animal[i] ) {
    //5. 4.で中断したときの'ライオン'の添字もalertするように変更してください。
    alert(animal[i] + ": " + i);
    break;
    //i += 4;
  } //else {
    //alert("指定された以外の動物です\nループを続けます");
  //}
  i++;
}

//6. オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
var animal = [
  {'name': 'パンダ','weight':80},
  {'name': 'ライオン','weight':200},
  {'name': 'キリン','weight':300}
];
var answer = prompt ('パンダ、ライオン、キリンのどれか１つ選んで下さい。');
//7. 6.でpromptで入力した動物名の体重をalertするように変更してください。
var i = 0;
while (i < animal.length) {
  if (answer == animal[i].name ) {
    alert(animal[i].weight + 'Kg');
  }
  i++;
}

//8. 円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。
//console.log(circle);
function calc(x) {
  return x * x * 3.14;
  //半径×半径×3.14
}
var radius = prompt ('円の半径を入力して下さい。');
alert('円の面積は' + calc(radius));

//1. promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
var answer = prompt ('正の数か負の数を入力して下さい。');
if (answer >=0 ) {
  alert('正の数');
} else if (answer <=0) {
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
if (answer == 'ライオン' ) {
//5. 4.で中断したときの'ライオン'の添字もalertするように変更してください。
  alert('ライオン');
  i + 4;
} else {
  while (i < animal.length) {
    alert(animal[i]);
    i++;
  }
}

//6. オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
var animal = [
  {'name': 'パンダ','Kg':80},
  {'name': 'ライオン','Kg':200},
  {'name': 'キリン','Kg':300}
];

//7. 6.でpromptで入力した動物名の体重をalertするように変更してください。
var answer = prompt ('パンダ、ライオン、キリンのどれか１つ選んで下さい。');
if (answer == 'パンダ' )  {
  alert(animal[0].Kg+'Kg');
} else if (answer == 'ライオン' )  {
  alert(animal[1].Kg+'Kg');
} if (answer == 'キリン' )  {
  alert(animal[2].Kg+'Kg');
}

//8. 円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。
var circle = prompt ('円の半径を入力して下さい。');
//console.log(circle);
function calc(x) {
  return circle * circle * x;
  //半径×半径×3.14
}
alert('円の面積は'  + calc(3.14));

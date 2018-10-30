(function(){

/*変数*/

/*科目数は三つ*/
const seiseki = [
						[80,100,70], 	//一人目
						[65,80,100], 	//二人目
						[45,30,80],		//三人目
						[100,70,80],	//四人目
						[70,90,80]		//五人目
						];

const n = 5;	//人数を変数に格納
const k = 3;	//科目数を変数に格納(今回は3に固定)
const ten = document.getElementById('ten'); //htmlのtrタグを取得

let str = ""; //文字格納用の変数
let goukei = [0,0,0,0,0]; //合計の文字列用
let kamoku_goukei = [0,0,0]; //科目の合計用
let jyuni = [0,0,0,0,0]; //順位用

/*ここまで*/


/*仮---------------------------------------------------------------------------*/
str += '<tr> <th>科目1</th> <th>科目2</th> <th>科目3</th> <th>合計</th> <th>順位</th> </tr>';
/*-----------------------------------------------------------------------------*/

/*個人の合計、科目ごとの合計を計算*/

for (let i = 0; i < n; i++) {
//	goukei = 0; //合計の0リセット
//	str += '<tr>';
		for (let j = 0; j < k; j++) {
			goukei[i] = goukei[i] + seiseki[i][j]; //個人合計用
//			str += '<th>'+ seiseki[i][j] +'</th>';
			kamoku_goukei[j] = kamoku_goukei[j] + seiseki[i][j]; //科目合計用
		}
//	str += '<th>'+ goukei[i] +'</th>';
//	str += '</tr>';
}


/*順位を求める*/

for (let i = 0; i < n; i++){

	let cnt = 1;

		for (let j = 0; j < n; j++) {
			if (goukei[i] < goukei[j]) cnt++;
		}

	jyuni[i] = cnt;

}


/*文字列の出力*/

for (let i = 0; i < n; i++) {

	str += '<tr>'

		for (let j = 0; j < k; j++) {
			str += '<th>'+ seiseki[i][j] + '</th>';
		}

	str += '<th>'+ goukei[i] + '</th>';
	str += '<th>'+ jyuni[i] + '</th>';

	str += '</tr>';

}


for (let i = 0; i < k; i++) {
	str += '<th>'+ kamoku_goukei[i] + '</th>';
}


ten.innerHTML = str;

})();
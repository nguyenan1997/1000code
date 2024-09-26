// // 1.bài tập về số

// // tính toán số nguyên
// var cong = 7+3
// console.log (cong)// 10
// // tính toán số thập phân
// var cong2 = 3.14 + 6.5
// console.log(cong2)//9.64
// // làm tròn số thập phân
// var PI = 3.14
// console.log(PI.toFixed(1))//3.1

// // 2.bài tập chuỗi

// // cắt chuỗi, ghép chuỗi, nối chuỗi, template string
// var myString = 'Hello Javascript' +' '+'Java'//nối chuỗi cơ bản kq:'Hello Javascript Java'
// var languages = 'PHP, Ruby'
// var result = `${myString} ${languages}`//thao tác ghép chuỗi
// console.log(result)//kq ghép chuỗi: Hello Javascript PHP, Ruby
// console.log(myString.slice(6,))//'Javascript' (Cắt chuỗi từ vị trí số 6 đến cuối)   
// //template string chưa học


// // 3.bài tập sử dụng biến

// // var, let, const
// var NameVar = 'Tên biến là String, số hoặc 1 object'
// const NameConst = 'Đây là biến Const'
// let NameLet = 'Đây là biến Let'

// // 4.bài tập toán tử

// // ++, -- =/ =*, lấy số dư prefix, suffixes
// var i = 5
// i++//hậu tố suffixes
// i--
// ++i//tiền tố
// --i
// console.log(i++)//5
// var cacular1 = 5
// var cacular2 = 6
// var Phepchia = cacular1/cacular2
// var Phepnhan = cacular1*cacular2
// console.log(Phepnhan)//30
// console.log(Phepchia.toFixed(2))//0.83

// // 5.bài tập function , switch case if else else if
// //Tạo ra 1 function: 2 cách
// function Namefunction(){
//     console.log('Hello World')
// }
// var Namefunction2 = function(){
//     console.log('Good job')
// }
// Namefunction()//Hello World
// Namefunction2()//Good job
// //Biến của hàm
// function Examp(number, arr){
//     var result2 = number + arr
//     console.log(typeof result2)
// }
// Examp(8,['Javascript, PHP']) // String  
// //If else
// function Dieukien(number1,number2) {
//     if (number1 >= 0 && number2 >= 0){
//         return 'Số Dương'
//     }
//     else {
//         return 'Số Âm'
//     }
// }
// var Sothuc = Dieukien(5,-3)
// console.log(Sothuc)//Số Âm
// //Swith Case
// var date = 2
// switch(date){
//     case 'CN':
//         console.log('Hôm nay là chủ nhật')
//         break;
//     case 2 :
//         console.log('Hôm nay là thứ 2')
//         break;
//     case 3 :
//         console.log('Hôm nay là thứ 3')
// }
// //Hôm nay là thứ 2
// // Bài tập nhập điểm chuyển sang điểm chữ cái thang 4
// function Xeploai(score){
//     if(score >= 3.6 && score <=4.0){
//         console.log('Điểm A - Loại Xuất Sắc')
//     }
//     if(score >= 3.2 && score <3.6){
//         console.log('Điểm B - Loại Giỏi')
//     }
//     if(score >= 2.5 && score <3.2){    
//         console.log('Điểm C - Loại Khá')
//     }
//     if(score >= 2 && score < 2.5){
//         console.log('Điểm D - Loại Trung Bình')
//     }
//     if(score >= 1 && score < 2){
//         console.log('Điểm F - Loại Yếu')
//     }
// }
// var kqscore = Xeploai(2)// Điểm D - Loại Trung Bình



// // 6.bài tập về vòng lặp for

// // duyệt chuỗi, duyệt mảng, tính tổng mảng số nguyên, tính trung bình
// Đây là kiểu dữ liệu JSON
// let JSONString = '"Chúng ta của hiệnt tại"';
// let JSONNumber = '1';
// let JSONBoolean = 'true';
// let JSONNull = 'null';
// let JSONArray = '["Chúng ta của tương lai","Chúng ta của hiện tại","123"]';
// let JSONObject = '{"name" : "Sơn Tùng MTP","Age":"27"}';
// console.log(JSONArray)
// // Cách chuyển các kiểu dữ liệu tử Javascript thành JSON(JSON.stringify(//Kiểu dữ liệu JS))
// let String = 'Nguyễn Văn An';
// let Number = 12;
// let Null = null;
// let Array = ['Hôm nay là thứ 3'];
// let myObject = {
//         Name : "Nguyễn Văn An'",
//         Age : 27,
//         test : function(){} //Đối tượng định dạng JSON sẽ ko hiểu phương thức
// };
// console.log(JSON.stringify(myObject))
// let promise = new Promise(
//         function (resolve,reject){
//                 resolve('Success!');
//                 reject('Có lỗi!')
//         }
// )
//  promise
//  .then(function(result1){
//         console.log(result1)
//  })
//  .catch(function(result2){
//         console.log(result2)
//  })
//  .finally(function(result3){

//  })
//  function hell(value, cb) {
//         cb(value);
//     }
//Thêm resolve hoặc reject
// let addResolve = Promise.reject('Thất bại!');
// addResolve.catch(function(data){
//         console.log(data)
// })
// let uRLOK = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(uRLOK)
// .then(function(respose){
//     return respose.json()
// })
// .then(function(data){
//     let a = data[userId];
//     console.log(a)
    
// })
// .catch(function(data){
//     console.log('Có lỗi!')
// })
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)
let getElement = document.querySelector('.divbox input[type="checkbox"]');
getElement.oninput = function(e){
    console.log(e.target.checked)
}
// Tính tổng dãy số trong mảng
// var TotalNumber = [2,5,2,14,56,45,34,0]
// var tong = 0;
// function tinhtong(arr){
//   for (var i = 0; i < arr.length; i++){
//     tong += arr[i];
//   }
//   return tong
// }
// console.log(tinhtong(TotalNumber))
// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// var storageVariable = 0
// function Tongcacso(Number){
//   for(var i = 1; i <= Number; i++){
//     storageVariable += i;
//   }
//   return storageVariable
// }
// console.log(Tongcacso(5))
// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
// var Bienluutru = 0;
// function Tinhtong(Number){
//   for(var i = 1; i <= Number; i++){
//     Bienluutru += i**2
//   }
//   return Bienluutru
// }
// console.log(Tinhtong(3))
// Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n
// var Bienluutru = 0;
// function TongPhanSo(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     Bienluutru += 1/i
//   }
//   return Bienluutru
// }
// console.log(TongPhanSo(3))
// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n
// var Bienluutru = 0;
// function Tongcacso(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     Bienluutru += 1/(i*2)
//   }
//   return Bienluutru
// }
// console.log(Tongcacso(4))
// Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
// var Bienluutru = 0;
// function Tongcacso(Numbers){
//   for(var i = 0; i <= Numbers; i++){
//     Bienluutru += 1/((i*2)+1)
//   }
//   return Bienluutru
// }
// console.log(Tongcacso(4))
// Bài 6: Tính S(n) = 1/1×2 + 1/2×3 +…+ 1/n x (n + 1)
// var Bienluutru = 0;
// function Tongcacso(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     Bienluutru += 1/(i*(i+1))
//   }
//   return Bienluutru
// }
// console.log(Tongcacso(4))
// Bài 7: Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
// var Bienluutru = 0;
// function Tongcacso(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     Bienluutru += i/(i+1)
//   }
//   return Bienluutru
// }
// console.log(Tongcacso(10))
// Bài 8: Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
// var Bienluutru = 0;
// function Tongcacso(Numbers){
//   for(var i = 0; i <= Numbers; i++){
//     Bienluutru += (2*i+1)/(2*i+2)
//   }
//   return Bienluutru
// }
// console.log(Tongcacso(2))
// Bài 9: Tính T(n) = 1 x 2 x 3…x N
// var Bienluutru = 1;
// function TichCacSo(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     Bienluutru *= i
//   }
//   return Bienluutru
// }
// console.log(TichCacSo(4))
// Bài 10: Tính T(x, n) = x^n
// function Luythua2so(a,b){
//   return a**b
// }
// console.log(Luythua2so(4,3))
// Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
// var BienLuuTruTong = 0;
// var BienLuuTruTich = 1
// function TichCacSo(Numbers){
//   for(var i = 1; i <= Numbers; i++){
//     BienLuuTruTich*=i
//     BienLuuTruTong += BienLuuTruTich
//   }
//   return BienLuuTruTong
// }
// console.log(TichCacSo(4))
// Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n
// function Tong(Numbers, x){
//   var BienluutruTong = 0;
//   for(var i = 1; i <= Numbers; i++){
//     BienluutruTong += Math.pow(x,i)
//   }
//   return BienluutruTong
// }
// console.log(Tong(4,2))
// Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n
// function Tong(Numbers,x){
//   var Bienluutru = 0;
//   for(var i= 1; i <= Numbers; i++){
//     Bienluutru += Math.pow(x,i*2)
//   }
//   return Bienluutru
// }
// console.log(Tong(4,2))
// Bài 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
// function Tong(Numbers,x){
//   var Bienluutru = 0;
//   for(var i= 1; i <= Numbers; i++){
//     Bienluutru += Math.pow(x,(i*2)+1)
//   }
//   return Bienluutru
// }
// console.log(Tong(4,2))
// Bài 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N
// function Tong(Numbers){
//     var Bienluutru = 0;
//     var BienLuuTruMau = 0 
//     for(var i= 1; i <= Numbers; i++){
//       BienLuuTruMau += i;
//       Bienluutru += 1/BienLuuTruMau
//     }
//     return Bienluutru
//   }
//   console.log(Tong(4))
// Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
// function Sum(Number,x){
//   var Tong = 0;
//   var Mauso = 0;
//   for(i= 1; i <=Number; i++){
//     Mauso +=i
//     Tong+= x**i/Mauso
//   }
//   return Tong
// }
// console.log(Sum(4,2))
// Bài 17: Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
// function Sum(Number,x){
//     var Tong = 0;
//     var Mauso = 1;
//     for(i= 1; i <=Number; i++){
//       Mauso *=i
//       Tong+= x**i/Mauso
//     }
//     return Tong
//   }
//   console.log(Sum(4,2))
// Bài 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!(Kho Vai~)
// function Sum(numbers,x){
//   var Tong = 1;
//   for(var i = 1; i <= numbers; i++){
//     Tong += (x**(i*2))/ factorial(2 * i);
//   }
//   return Tong
// }
// function factorial(n) {
//   if (n === 0 || n === 1) {
//       return 1;
//   } else {
//       return n * factorial(n - 1);
//   }
// }
// console.log(Sum(2,4))
// Bài 19: Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!(Bai nay dua theo bai 18)
// function Sum(numbers,x){
//   var Tong = 1;
//   for(var i = 1; i <= numbers; i++){
//     Tong += (x**((i*2)+1))/ factorial((2*i)+1);
//   }
//   return Tong
// }
// function factorial(n) {
//   if (n === 0 || n === 1) {
//       return 1;
//   } else {
//       return n * factorial(n - 1);
//   }
// }
// console.log(Sum(2,4))
// Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n
// function FindSubmultiple(n){
//   var List = [];
//   for (var i = 1; i <= n ; i++){
//     if(n % i === 0){
//       List.push(i)
//     }
//   }
//   return List
// }
// console.log(FindSubmultiple(20))
// Bài 21: Tính tổng tất cả các “ ước số” của số nguyên dương n
// function TotalSubmultiple(n){
//     var Tong = 0;
//     if(n < 0){
//       return 'Đây không phải số Dương'
//     }
//     else{
//     for (var i = 1; i <= n ; i++){
//       if(n % i === 0){
//         Tong += i
//       }
//     }
//   }
//     return Tong
//   }
//   console.log(TotalSubmultiple(15))
// Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n
// function Multiplication(n){
//       var Tich = 1;
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           Tich *= i
//         }
//       }
//     }
//       return Tich
//     }
//     console.log(Multiplication(15))
// Bài 23: Đếm số lượng “ước số” của số nguyên dương n
// function SoluongUoc(n){
//   var arr = []
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           arr.push(i)
//         }
//       }
//     }
//       return arr.length
//     }
//     console.log(SoluongUoc(15))
// Bài 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n
// function ListUocSole(n){
//     var arr = []
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           if(i%2 === 1){
//             arr.push(i)
//           }
//         }
//       }
//     }
//       return arr
//     }
//     console.log(ListUocSole(100))
// Bài 25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
// function TongUocSoChan(n){
//     var Tong = 0
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           if(i%2 === 0){
//             Tong += i
//           }
//         }
//       }
//     }
//       return Tong
//     }
//     console.log(TongUocSoChan(10))
// Bài 26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n
// function TichUocSoLe(n){
//     var Tich = 0
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           if(i%2 === 1){
//             Tich *= i
//           }
//         }
//       }
//     }
//       return Tich
//     }
//     console.log(TichUocSoLe(10))
// Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n
// function SoLuongUocSoChan(n){
//     var arr = [];
//       if(n < 0){
//         return 'Đây không phải số Dương'
//       }
//       else{
//       for (var i = 1; i <= n ; i++){
//         if(n % i === 0){
//           if(i%2 === 0){
//             arr.push(i)
//           }
//         }
//       }
//     }
//       return arr.length;
//     }
//     console.log(SoLuongUocSoChan(50))
// Bài 28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó
// function TongCacUoc(number){
//     if(number < 0){
//         return 'Đây Không Phải Số Dương'
//     }
//     else{
//         var Tong = 0;
//         for(let i = 1; i < number; i++){
//             if((number % i) === 0){
//                 Tong += i
//             }
//         }
//         return Tong
//     }
// }
// console.log(TongCacUoc(8))
// Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
// function FindMaxUocSole(n){
//         var arr = []
//           if(n < 0){
//             return 'Đây không phải số Dương'
//           }
//           else{
//           for (var i = 1; i <= n ; i++){
//             if(n % i === 0){
//               if(i%2 === 1){
//                 arr.push(i)
//               }
//             }
//           }
//         }
//           return Math.max(...arr)
//         }
//         console.log('Ước lẻ lớn nhất là :',FindMaxUocSole(20))
// Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
        // function NumberPerfect(number){
        //     var Tong = 0;
        //     if(number < 0){
        //       return 'Đây không phải số Dương'
        //     }
        //     else{
        //     for (var i = 1; i < number ; i++){
        //       if(number % i === 0){
        //         Tong += i
        //       }
        //     }
        //   }
        //   if(Tong === number){
        //     return 'Đây là số hoàn thiện :' + Tong
        //   }
        //   else{
        //     return 'Đây không phải số hoàn thiện :' + Tong
        //   }
        // }
        //   console.log(NumberPerfect(6))
// Bài 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không
// function TestSo(number){
//     if(number <= 1){
//         return 'Đây không phải số nguyên tố';
//     }
//     else{
//         for(var i = 2; i < number; i++){
//             if(number % i === 0){
//                 return 'Đây không phải số nguyên tố'
//             }
//         }
//     }
//     return 'Đây là số nguyên tố'
// }
// console.log(TestSo(17))
// Bài 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không
// function SquareNumber(number){
//         if(number <0){
//                 return 'Đây ko phải số chính phương';
//         }
//         else{
//                 var SquareRootOf2 = Math.sqrt(number);
//                 if(Number.isInteger(SquareRootOf2)=== true){
//                         return 'Đây là số chính phương';
//                 }
//                 else{
//                         return 'Đây không phải số chính phương'
//                 }

//         }
// }
// console.log(SquareNumber(-10))
// Bài 33: Tính S(n) = CanBac2(2+CanBac2(2+….+CanBac2(2 + CanBac2(2)))) có n dấu căn
// function TotalSquareRoot2(n){
//         var Result = 0;
//         for(let i = 1; i <= n; i++){
//                 Result = Math.sqrt(2 + Result)
//         }
//         return Result;
// }
// console.log(TotalSquareRoot2(4))
// Bài 34: Tính S(n) = CanBac2(n+CanBac2(n – 1 + CanBac2( n – 2 + … + CanBac2(2 + CanBac2(1)  có n dấu căn
// function Total(n){
//         var Result = 0;
//         for(var i = n; i >=1; i--){
//                 Result = Math.sqrt(i + Result)
//         }
//         return Result
// }
// console.log(Total(0))
// Bài 36: Tính S(n) = CanBac2(n! + CanBac2((n-1)! +CanBac2((n – 2)! + … + CanBac2(2!) + CanBac2(1!)))) có n dấu căn
// function factorial(n){
//         if(n ===0 || n === 1){
//                 return 1;
//         }
//         else{
//                 return n * factorial(n-1)
//         }
// }
// function caculateS(n){
//         var Total = 0;
//         for(let i = n; i >= 1; i--){
//                 Total = Math.sqrt(factorial(n)+ caculateS(n-1))
//         }
//         return Total
// }
// console.log(caculateS(5))
// Bài 37: Tính S(n) = CanBacN(N + CanBac N – 1(N – 1 + … + CanBac3(3 + CanBac2(2))) có n – 1 dấu căn (chịu luôn :((())))
// Bài 38: Tính S(n) = CanBac N + 1(N + CanBac N(N – 1 +…+CanBac3(2 + CanBac2(1)))) có n dấu căn (chịu luôn :((())))
// Bài 39: Tính S(n) = CanBac N + 1(N! + CanBacN((N – 1)! + … + CanBac3(2! + CanBac2(1!))) có n dấu căn (chịu luôn);
// Bài 40: Tính S(n) = CanBac2(x^n + CanBac2(x^n-1 + … + CanBac2(x^2 + CanBac2(x)))) có n dấu căn
// function SquareSn(n,x){
//         if(n === 0){
//                 return 1
//         }
//         if (x === 0){
//                 return 0
//         }
//         let Total = 0;
//         for(let i = n; i >= 1; i--){
//                 Total = Math.sqrt(Math.pow(x,n) + SquareSn(n-1,x));
//         }
//         return Total
// }
// console.log(SquareSn(2,3))
// Bài 41: Tính S(n) = 1 / (1 + 1 / ( 1 + 1 / (…. 1 + 1 / 1 + 1))) có n dấu phân số
// function SumSn(n){
//         if(n === 1){
//                 return 1
//         }
//         return 1/(1 + SumSn(n-1));
// }
// console.log(SumSn(4))
// Bài 42: Cho n là số nguyên dương. Hãy tìm giá trị nguyên dương k lớn nhất sao cho S(k)  < n. (bài này copied trên ChatGPT)
        // function findMaxK(n) {
        //         // Tính toán giá trị k bằng cách giải phương trình
        //         let k = Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2);
        //         return k;
        //     }
            
        //     // Thay đổi giá trị của n theo nhu cầu của bạn
        //     let n = 15;
        //     let maxK = findMaxK(n);
            
        //     console.log(`Giá trị nguyên dương k lớn nhất sao cho S(k) < ${n} là: ${maxK}`);
// Bài 43: Hãy đếm số lượng chữ số của số nguyên dương n
// function CountIn(number){
//         var Text = String(number)
//         var Khoitao = 0;
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         Khoitao++;
//                 }
//         }
//         return 'Số này có: ' + Khoitao + ' phần tử số';
// }
// console.log(CountIn(0))
// Bài 44: Hãy tính tổng các chữ số của số nguyên dương n
// function SumInterger(number){
//         var Text = String(number);
//         var Tong = 0;
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         Tong += parseFloat(Text[i])
//                 }
                
//         }
//         return Tong
// }
// console.log(SumInterger('45545'))
// Bài 45: Hãy tính tích các chữ số của số nguyên dương n
// function SumInterger(number){
//         var Text = String(number);
//         var Tich = 1;
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         Tich *= parseFloat(Text[i])
//                 }
                
//         }
//         return Tich
// }
// console.log(SumInterger(154))
// Bài 46: Hãy đếm số lượng chữ số lẻ của số nguyên dương n
// function SumInterger(number){
//         var Text = String(number);
//         var arr = [];
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         if(parseFloat(Text[i])% 2 !== 0){
//                                 arr.push(parseFloat(Text[i]))
//                         }
//                 }
                
//         }
//         return arr.length
// }
// console.log(SumInterger(170501001))
// Bài 47: Hãy tính tổng các chữ số chẵn của số nguyên dương n
// function SumInterger(number){
//         var Text = String(number);
//         var Tong = 0;
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         if(parseFloat(Text[i])% 2 === 0){
//                                Tong += parseFloat(Text[i])
//                         }
//                 }
//         }
//         return Tong
// }
// console.log(SumInterger(5346546))
// Bài 48: Hãy tính tích các chữ số lẻ của số nguyên dương n
// function SumInterger(number){
//         var Text = String(number);
//         var Tich = 1;
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         if(parseFloat(Text[i])% 2 === 1){
//                                Tich *= parseFloat(Text[i])
//                         }
//                 }
//         }
//         return Tich
// }
// console.log(SumInterger(5346546))
// Bài 49: Cho số nguyên dương n. Hãy tìm chữ số đầu tiên của n
// function FindInterger(number){
//         var Text = String(number);
//         for(let i = 0; i < Text.length; i++){
//                 if(!isNaN(parseFloat(Text[i]))){
//                        return parseFloat(Text[0])
//                 }
//         }
// }
// console.log(FindInterger('4'))
// Bài 50: Hãy tìm số đảo ngược của số nguyên dương n
// function FindInterger(number){
//         var Text = String(number);
//         var NewText = '';
//         for(let i = Text.length -1; i >=0; i--){
//                 if(!isNaN(parseFloat(Text[i]))){
//                         NewText+=Text[i];
//                 }
//         }
//         if (NewText !== ''){
//                 return parseFloat(NewText);
//         }
//         else{
//                 return 'Vui lòng nhập đúng số'
//         }
        
// }
// console.log(FindInterger(4598))
// Bài 51: Tìm chữ số lớn nhất của số nguyên dương n
// function FindMaxOfInterger(n){
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         var arrNumber = [];
//         for(let i = 0; i < nString.length; i++){
//                 arrNumber.push(parseFloat(nString[i]));
//         }
//         let maxNumber = Math.max(...arrNumber);
//         return maxNumber;
// }
// console.log(FindMaxOfInterger());
// Bài 52: Tìm chữ số nhỏ nhất của số nguyên dương n
// function FindMaxOfInterger(n){
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         var arrNumber = [];
//         for(let i = 0; i < nString.length; i++){
//                 arrNumber.push(parseFloat(nString[i]));
//         }
//         let maxNumber = Math.min(...arrNumber);
//         return maxNumber;
// }
// console.log(FindMaxOfInterger(454845648464510));
// Bài 53: Hãy đếm số lượng chữ số lớn nhất của số nguyên dương n
// function FindMaxOfInterger(n){
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         var arrNumber = [];
//         for(let i = 0; i < nString.length; i++){
//                 arrNumber.push(parseFloat(nString[i]));
//         }
//         let maxNumber = Math.max(...arrNumber);
//         let TotalMaxNumber = arrNumber.filter(function(element){
//                 return element === maxNumber;
//         })
//         return TotalMaxNumber.length
// }
// console.log(FindMaxOfInterger());
// Bài 54: Hãy đếm số lượng chữ số nhỏ nhất của số nguyên dương n
// function FindMaxOfInterger(n){
//         if(Number(n) < 0){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         var arrNumber = [];
//         for(let i = 0; i < nString.length; i++){
//                 arrNumber.push(parseFloat(nString[i]));
//         }
//         let minNumber = Math.min(...arrNumber);
//         let TotalMinNumber = arrNumber.filter(function(element){
//                 return element === minNumber;
//         })
//         return TotalMinNumber.length
// }
// console.log(FindMaxOfInterger(-1454848));
// Bài 56: Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không
// function TestNumber(n){
//         if(Number(n) < 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         for(let i = 0; i < nString.length; i++){
//                 if((parseInt(nString[i])) % 2 === 0){
//                         return 'Không thoả mãn điều kiện';
//                 }
//         }
//         return 'Đây là số Dương có tất cả đều là số lẻ'
// }
// console.log(TestNumber(45645645645));
// Bài 57: Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không
// function TestNumber(n){
//         if(Number(n) < 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         for(let i = 0; i < nString.length; i++){
//                 if((parseInt(nString[i])) % 2 === 1){
//                         return 'Không thoả mãn điều kiện';
//                 }
//         }
//         return 'Đây là số Dương có tất cả đều là số chẵn'
// }
// console.log(TestNumber(4564856448));
// Bài 59: Hãy kiểm tra số nguyên dương n có phải là số đối xứng hay không
// function TestNumber2(n){
//         if(Number(n) < 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         var newNumber = nString.split('').reverse().join('');
//         if(newNumber == parseFloat(n)){
//                 return 'Đây là số đối xứng'
//         };
//         return 'Đây không phải số đối xứng'
// }
// console.log(TestNumber2(1221)) // Đây là số đối xứng
// Bài 60: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không
// function TestNumber3(n){
//         if(Number(n) < 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         for(let i = nString.length - 1 ; i >= 1 ; i--){
//                 if(parseInt(nString[i]) <= parseInt(nString[i-1])){
//                         return 'Đây không phải số cần tìm';
//                 }
//         }
//         return 'Đây là số cần tìm';
// }
// console.log(TestNumber3(1234456789));
// Bài 61: Hãy kiểm tra các chữ số của số nguyên dương n có giảm dần từ trái sang phải hay không
// function TestNumber3(n){
//         if(Number(n) < 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(n) || n == null || n == undefined){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var nString = String(n);
//         for(let i = nString.length - 1 ; i >= 1 ; i--){
//                 if(parseInt(nString[i]) >= parseInt(nString[i-1])){
//                         return 'Đây không phải số cần tìm';
//                 }
//         }
//         return 'Đây là số cần tìm';
// }
// console.log(TestNumber3(987754321));
// Bài 62: Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
// function findNumber4(a,b){
//         if(Number(a) <= 0 || Number(b) <= 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(a) || isNaN(b)){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var arr1 = [];
//         for(let i = 1; i <= a; i++){
//                 if(a % i === 0){
//                         arr1.push(i)
//                 }
//         }
//         var arr2 = [];
//         for( let j = 1; j <= b; j++){
//                 if(b % j === 0){
//                         arr2.push(j)
//                 }
//         }
//         var result =  arr1.filter(element => arr2.includes(element));
//         if(result.length === 0){
//                 return 'Không có ước chung'
//         }
//         return Math.max(...result)
// }
// console.log(findNumber4(25,90))
// Bài 63: Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
// function findNumber4(a,b){
//         if(Number(a) <= 0 || Number(b) <= 0){
//                 return 'Đây là số Âm, mời nhập lại số chính xác'
//         }
//         if(isNaN(a) || isNaN(b)){
//                 return 'Đây không phải số nguyên Dương, mời nhập lại số chính xác';
//         }
//         var arr1 = [];
//         for(let i = 1; i <= a; i++){
//                 if(a % i === 0){
//                         arr1.push(i)
//                 }
//         }
//         var arr2 = [];
//         for( let j = 1; j <= b; j++){
//                 if(b % j === 0){
//                         arr2.push(j)
//                 }
//         }
//         var result =  arr1.filter(element => arr2.includes(element));
//         if(result.length === 0){
//                 return 'Không có ước chung'
//         }
//         var UCLN =  Math.max(...result);
//         var BCNN = Math.abs(a*b) / UCLN;
//         return BCNN;
// }
// console.log(findNumber4(19,17))
// Bài 64 + 65 + 66: Giải phương trình bậc 1, 2, 4
// Giải phương trình bậc 1: ax+b=0
// function PTBac1(a,b){
//         if(a === 0){
//                 return 'Phương trình vô nghiệm';
//         }
//         if(b === 0){
//                 return 'x = 0'
//         }
//         var result = (-b)/a;
//         return result;
// }
// console.log(PTBac1(45,145))
// Giải phương trình bậc 2: ax^2+bx+c = 0
// function PTBac2(a,b,c){
//         var Delta = (b**2)- (4*a*c);
//         if(isNaN(a) || isNaN(b) || isNaN(c)){
//                 return 'Nhập không đúng số';
//         }
//         if(parseFloat(a) === 0 && parseFloat(b) !== 0){
//                 let x = -c/b;
//                 return x;
//         }
//         if(parseFloat(a) === 0 && parseFloat(b) === 0 && parseFloat(c) === 0){
//                 return 'Phương trình luôn đúng với mọi x'
//         }
//         if(Delta < 0){
//                 return 'Phương trình vô nghiệm';
//         }
//         if( Delta === 0){
//                 let result = (-b)/(2*a);
//                 return result;
//         }
//         if(Delta > 0){
//                 var x1 = ((-b+Math.sqrt(Delta)))/(2*a);
//                 var x2 = ((-b-Math.sqrt(Delta)))/(2*a);
//                 return [x1,x2]
//         }
// }

// Giải phương trình bậc 3 (ax^3 + bx^2 +cx + d = 0)
// function giaiPhuongTrinhBac3(a, b, c, d) {
//         if(a === 0){
//                 return 'Đây không phải phương trình bậc 3'
//         }
//         if (a !== 0 ){
//                 var a$ = b/a;
//                 var b$ = c/a;
//                 var c$ = d/a;
//                 var P = b$ - ((a$**2)/3);
//                 var Q = (2 * Math.pow(a$, 3) - 9 * a$ * b$ + 27 * c$) / 27; 
//                 var Delta = Math.pow(Q, 2) + (4 * Math.pow(P, 3) / 27);
//                 if(Delta < 0){
//                         return 'Phương trình bậc 3 này không có nghiệm hoặc nghiệm là số Phức';
//                 }
//                 if(Delta === 0){
//                         var x = 2 * Math.pow((-2 * Math.pow(a$, 3) + 9 * a$ * b$ - 27 * c$) / 54, 1 / 3);
//                         return [x]
//                 }
//                 if(Delta > 0){
//                         var x1 = Math.pow(Math.abs(-Q + (Q - Math.sqrt(Q**2 + 4 * P**3 / 27)) / 2), 1/3) + Math.cbrt(Math.abs((Math.sqrt(Q**2 + 4 * P**3 / 27) - Q) / 2)) - (a$/3);
//                         var x2 = Math.cbrt(Math.abs(-Math.sqrt(Q**2 + 4 * P**3 / 27) + Q) / 2) + Math.cbrt(Math.abs(-Q + (Math.sqrt(Q**2 + 4 * P**3 / 27) + Q) / 2)) - (a$/3);
//                         return [x1,x2]
//                 }
//         }
//     }
//     console.log(giaiPhuongTrinhBac3(1,-6,11,-6))
    
// Giải phương trình bậc 4 ax^4+bx^3+cx^2+dx+e = 0;
// function PTBac4(a1,b1,c1,d1,e1){
//         if(a1 === 0 && b1 !== 0 && c1 !==0 && d1 !== 0 && e1 !==0){
//                 return 'Đây không phải phương trình bậc 4, mời nhập lại số';
//         }
//         if(a1 === 0 && b1 === 0 && c1 !==0 && d1 !== 0 && e1 !==0){
//                 return 'Đây không phải phương trình bậc 4, mời nhập lại';
//         }
//         if(a1 === 0 && b1 === 0 && c1 ===0 && d1 !== 0 && e1 !==0){
//                 return 'Đây không phải phương trình bậc 4, mời nhập lại';
//         }
//         if(a1 === 0 && b1 === 0 && c1 ===0 && d1 === 0 && e1 !==0){
//                 return 'Phương trình vô nghiệm với mọi x';
//         }
//         if(a1 === 0 && b1 === 0 && c1 ===0 && d1 === 0 && e1 ===0){
//                 return 'Phương trình luôn đúng với mọi x';
//         }
//         if(a1 !== 0){
//                 var a$ = b1/a1;
//                 var b$ = c1/a1;
//                 var c$ = d1/a1;
//                 var d$ = e1/a1;
//                 var NghiemCuaY = giaiPhuongTrinhBac3(1,-b$,(-4*d$)+(a$*c$),-(c$**2+((a$**2)*d$)-(4*b$*d$)));
                
//                 if(isNaN(...NghiemCuaY) === true){
//                         return 'Phương trình này có nghiệm là số ảo hoặc vô nghiệm '
//                 }
//                 if(NghiemCuaY.length > 0){
//                 var y = NghiemCuaY[0]
//                 // TH1:
//                 var result1 = PTBac2(1,(a$/2)- Math.sqrt((a$**2/4)-b$ + y),((y/2)-Math.sqrt(((y**2))/4)-d$));
//                 // TH2:
//                 var result2 = PTBac2(1, (a$/2)+ Math.sqrt((a$**2/4)-b$ + y),((y/2)+Math.sqrt(((y**2))/4)-d$));
//                 }
//                 return 'Phương trình bậc 4 có các nghiệm: ' + result1.concat(result2)
//                 }
       
// }
// console.log(PTBac4(1,6,0,6,1))
// Bài 67: Tính S(x, n) = x – x^2 + x^3 + … + (-1)^n+1 * x^n
// function Tong(x,n){
//         var Result = 0;
//         for(let i = 1; i <= n; i++){
//                 Result += Math.pow(-1,i+1) * Math.pow(x,i)
//         }
//         return Result
// }
// console.log(Tong(2,3))
// Bài 68: Tính S(x, n) = -x^2 + x^4  + … + (-1)^n * x^2n
// function Tong(x,n){
//         var Result = 0;
//         for(let i = 1; i <= n; i++){
//                 Result += Math.pow(-1,i) * Math.pow(x,2*i)
//         }
//         return Result;
// }
// console.log(Tong(2,3))
// Bài 69: Tính S(x, n) = x – x^3 + x^5 + … + (-1)^n * x^2n+1
// function Tong(x,n){
//         var Result = 0;
//         for(let i = 1; i <= n; i++){
//                 Result += Math.pow(-1,i) * Math.pow(x,2*i+1)
//         }
//         return Result;
// }
// console.log(Tong(2,3))
// Bài 70: Tính S(n) = 1 – 1/(1 + 2) + 1/(1 + 2 + 3)  + … + (-1)^n+1 * 1/(1 + 2 + 3+ … + n)
// function TongSn(n){
//         var Result = 0;
//         var Result2 = 0;
//         for(let i = 1; i <= n; i++){
//                 Result2 += i;
//                 Result += Math.pow(-1,i+1) * 1/(Result2)
//         }
//         return Result;
// }
// console.log(TongSn(4))
// Bài 71: Tính S(x, n) = -x + x^2/(1 + 2) – x^3/(1 + 2 + 3) + … + (-1)^n * x^n/(1 + 2 +… + n)
// function TongSn(x,n){
//         var Result = 0;
//         var Result2 = 0;
//         for(let i = 1; i <= n; i++){
//                 Result2 += i;
//                 Result += Math.pow(-1, i) * Math.pow(x, i) / Result2;
//         }
//         return Result;
// }
// console.log(TongSn(-5,5))
// Bài 72: Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!
// function TongSn(x,n){
//         var Result = 0;
//         var Result2 = 1;
//         for(let i = 1; i <= n; i++){
//                 Result2 *= i;
//                 Result += Math.pow(-1, i) * Math.pow(x, i) / Result2;
//         }
//         return Result;
// }
// console.log(TongSn(-5,5))
// Bài 73: Tính S(x, n) = -1 + x^2/2! – x^4/4! + … + (-1)^n+1 * x^2n/(2n)!// function TongSn(x,n){
// function TongSn(x,n){
//         var Result = -1;
//         var Result2 = 1;
//         for(let i = 1; i <= n; i++){
//                 Result2 *= 2*i*(2*i-1);
//                 Result += Math.pow(-1, i+1) * Math.pow(x, 2*i) / Result2;
//         }
//         return Result;
// }
// console.log(TongSn(2,3))
// Bài 74: Tính S(x, n) = 1 – x + x^3/3! – x^5/5! + … + (-1)^n+1 * x^2n+1/(2n + 1)!
// function factorial(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * factorial(n - 1);
//         }
//     }
    
//     function TongSn(x, n) {
//         var Result = 1;
    
//         for (let i = 1; i <= n; i++) {
//             var denominator = factorial(2 * i + 1);
//             Result += Math.pow(-1, i + 1) * Math.pow(x, 2 * i + 1) / denominator;
//         }
    
//         return Result;
//     }
    
//     console.log(TongSn(2, 3));
// Bài 75: Kiểm tra số nguyên 4 byte có dạng 2^k hay không (Không hiểu đề bài)
// Bài 76: Kiểm tra số nguyên 4 byte có dạng 3^k hay không (Không hiểu đề bài)
// Bài 77: Viết chương trình tính tổng của dãy số sau: S(n) = 1 + 2 + 3 + … + n
// Bài 78: Liệt kê tất cả các ước số của số nguyên dương n
// Bài 79: Hãy đếm số lượng chữ số của số nguyên dương n
// Bài 82: Viết chương trình tìm số lớn nhất trong 3 số thực a, b, c
// Bài 83: Viết chương trình nhập 2 số thực, kiểm tra xem chúng có cùng dấu hay không
// Bài 84: Viết chương trình giải và biện luận phương trình bậc nhất ax + b = 0
// Bài 85: Nhập vào tháng của 1 năm. Cho biết tháng thuộc quý mấy trong năm
// function TestQuy(month){
//         if(month >=1 && month <=3){
//                 return 'Tháng ' + month +  ' thuộc Quý 1';

//         }
//         if(month >=4 && month <=6){
//                 return 'Tháng ' + month +  ' thuộc Quý 2';

//         }
//         if(month >=7 && month <=9){
//                 return 'Tháng ' + month +  ' thuộc Quý 3';

//         }
//         if(month >=10 && month <=12){
//                 return 'Tháng ' + month +  ' thuộc Quý 4';

//         }
// }
// console.log(TestQuy(12))
// Bài 86: Tính S(n) = 1^3 + 2^3 + … + N^3
// Bài 87: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000
// function FindNumber(number){
//         var sum = 0;
//         let i;
//         for(i = 1; sum <= number; i++){
//                 sum += i;
//         }
//         return i -1;
// }
// console.log(FindNumber(1000))
// Bài 88: Hãy sử dụng vòng lặp for để xuất tất cả các ký tự từ A đến Z
// function AZ(){
//         var arr = []
// for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
//         arr.push(String.fromCharCode(i));
//     }
//     return arr;
// }
// console.log(AZ())
// Bài 89: Viết chương trình tính tổng các giá trị lẻ nguyên dương nhỏ hơn N
// function SumTotal(n){
//         var sum = 0;
//         for(let i = 1; i < n; i+=2){
//                 sum += i;
//         }
//         return sum;
// }
// console.log(SumTotal(9))
// Bài 90: Viết chương trình tìm số nguyên dương m lớn nhất sao cho 1 + 2 + … + m < N
// function findM(number){
//         var sum = 0;
//         for(var i = 1; sum < number; i++){
//                 sum += i;
//         }
//         return i - 1
// }
// console.log(findM(45))
// Bài 91: In tất cả các số nguyên dương lẻ nhỏ hơn 100
// function PrintNumber(number){
//         var arr = [];
//         for( let i = 1; i < number; i+=2){
//                 arr.push(i);
//         }
//         return arr;
// }
// console.log(PrintNumber(100))
// Bài 92: Tìm ước số chung lớn nhất của 2 số nguyên dương
// function findGCD(a, b) {
//         if(a < 0 || b < 0 || isNaN(a) || isNaN(b)){
//                 return ' 1 trong 2 số không phải số nguyên dương'
//         }
//         while (b !== 0) {
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;

// }
//      console.log(findGCD(45, 10));
// Bài 93: Viết chương trình kiểm tra 1 số có phải là số nguyên tố hay không
// function TestNumber(number){
//         if(number < 1){
//                 return 'Đây không phải sô nguyên tố'
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return 'Số: ' + number + ' Không phải số nguyên tố';
//                 }
//         }
//         return 'Số '+ number +' là số nguyên tố';
// }
// console.log(TestNumber(-47))
// Bài 94: Viết chương trình in ra tất cả các số lẻ nhỏ hơn 100 trừ các số 5, 7, 93
// function PrintNumber1(){
//         for(let i = 1; i < 100; i +=2){
//                 if(i !==5 && i!==7 && i!==93){
//                         console.log(i)
//                 }
//         }
// }
// PrintNumber1()
// Bài 95: Viết chương trình nhập 3 số thực. Hãy thay tất cả các số âm bằng trị tuyệt đối của nó
// function ConvertNumber(a,b,c){
//         if(isFinite(a) !== true || isFinite(b)!== true || isFinite(c) !== true){
//                 return '1 trong 3 số không phải là số thực, mời nhập lại'
//         }
//         var Number1 = Math.abs(a);
//         var Number2 = Math.abs(b);
//         var Number3 = Math.abs(c);
//         var a = [Number1,Number2,Number3];
//         return a
// }

// console.log(ConvertNumber(function(){},-14564.564565,-14564568));
// Bài 96: Viết chương trình nhập giá trị x sau tính giá trị của hàm số (f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = -2x^2 + 4x – 9 khi x < 5);
// function HamsoBac2(x){
//         var y = 2*x^2+5*x+9;
//         return 'Hàm số 2x^2+5x+9 Với x = ' +x+ ' nhận y = ' +y;
// }
// console.log(HamsoBac2(2))
// function HamsoBac2(x){
//         var y = -2*x^2+4*x-9;
//         return 'Hàm số 2x^2+5x+9 Với x = ' + x + ',nhận y = ' + y;
// }
// console.log(HamsoBac2(2))
// Bài 97: Viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác gì
// function TestTamGiac(a, b, c) {
//         if(a<0|| b<0||c<0 || isNaN(a)===true||isNaN(b)===true||isNaN(c)===true){
//                 return 'Chiều dài các cạnh nhập không đúng'
//         }
//         if(a+b>c||b+c>a||c+a>b){
//         if(a===b && b===c){
//                 return 'Đây là tam giác đều'
//         }
//         if(a===b||b===c||c===a){
//                 if(a*a+b*b===c*c||b*b+c*c===a*a||c*c+a*a===b**b){
//                         return 'Đây là tam giác vuông cân';
//                 }
//                 return 'Đây là tam giác cân'
//         }
//         if(a*a+b*b===c*c||b*b+c*c===a*a||c*c+a*a===b**b){
//                 return 'Đây là tam giác vuông'
//         }
// }
// }
       
//     var a = 4;
//     var b = 4;
//     var c = Math.sqrt(32)
//     console.log(c)
//     console.log(TestTamGiac(a, b, c));
// in ra n số nguyên tố
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function Test(n){
//        var Songuyento = [];
//        var number = 2;
//        while(Songuyento.length<n){
//         if(TestNumber(number)){
//                 Songuyento.push(number);
//         }
//         number++;
//        }
//        return Songuyento;
// }
// console.log(Test(1000));
// Bài 98: Lập chương trình giải hệ: ax + by = c, Dx + ey = f. Các hệ số nhập từ bàn phím
// Bài 99: Viết chương trình nhập vào 3 số thực. Hãy in 3 số ấy ra màn hình theo thứ tự tang dần mà chỉ dùng tối đa 1 biến phụ
// function Sort(a, b, c) {
//         if (a <= b && b <= c) {
//             return [a, b, c];  // Trường hợp a <= b <= c
//         } else if (a <= c && c <= b) {
//             return [a, c, b];  // Trường hợp a <= c <= b
//         } else if (b <= a && a <= c) {
//             return [b, a, c];  // Trường hợp b <= a <= c
//         } else if (b <= c && c <= a) {
//             return [b, c, a];  // Trường hợp b <= c <= a
//         } else if (c <= a && a <= b) {
//             return [c, a, b];  // Trường hợp c <= a <= b
//         } else {
//             return [c, b, a];  // Trường hợp c <= b <= a
//         }
// }
// console.log(Sort(4,-5,8))
// Bài 100: Viết chương trình giải phương trình bậc 2
// Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày
// kiểm tra năm nhuận
// function NamNhuan(year){
//         if((year %4 ===0 && year % 100 !==0) || year % 100 === 0) {
//                 return true
//         }
//         else {
//                 return false
//         }
// }
// function FindDate(year,month){
//                 const daysInMonth = [
//                         31, // January
//                         28 + NamNhuan(year), // February
//                         31, // March
//                         30, // April
//                         31, // May
//                         30, // June
//                         31, // July
//                         31, // August
//                         30, // September
//                         31, // October
//                         30, // November
//                         31  // December
//                     ];
//         return daysInMonth[month-1];
// }
// console.log(FindDate(2024,2))

// Bài 102: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày kế ngày vừa nhập (ngày, tháng, năm)
// function NamNhuan(year){
//         if((year %4 ===0 && year % 100 !==0) || year % 100 === 0) {
//                 return true
//         }
//         else {
//                 return false
//         }
// }
// function FindDate2(date,month,year){
//                 const daysInMonth = [
//                 31, // January
//                 NamNhuan(year) ? 29 : 28, // February
//                 31, // March
//                 30, // April
//                 31, // May
//                 30, // June
//                 31, // July
//                 31, // August
//                 30, // September
//                 31, // October
//                 30, // November
//                 31  // December
//         ];
//         if(date<daysInMonth[month-1]){
//                 return [date+1,month,year]
//         }
//         if(date>=daysInMonth[month-1]){
//                 if(month<12){
//                         return [1,month+1,year];
//                 }
//                 if(month>12){
//                         return [1,1,year+1]
//                 }
//         }
// }
// console.log('Ngày kế tiếp là: ' + FindDate2(29,2,2024))
// Bài 103: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày trước ngày vừa nhập (ngày, tháng, năm)
// function NamNhuan(year){
//         if((year %4 ===0 && year % 100 !==0) || year % 100 === 0) {
//                 return true
//         }
//         else {
//                 return false
//         }
// }
// function FindDate2(date,month,year){
//                 const daysInMonth = [
//                 31, // January
//                 NamNhuan(year) ? 29 : 28, // February
//                 31, // March
//                 30, // April
//                 31, // May
//                 30, // June
//                 31, // July
//                 31, // August
//                 30, // September
//                 31, // October
//                 30, // November
//                 31  // December
//         ];
//         if(date<=daysInMonth[month-1]&& date >1){
//                 return [date-1,month,year]
//         }
//         if(date==1){
//                 if(month>1){
//                         return [daysInMonth[month-2],month-1,year];
//                 }
//                 if(month==1){
//                         return [31,12,year-1]
//                 }
//         }
// }
// console.log('Ngày trước là: ' + FindDate2(1,12,2024))
// Bài 104: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm
// function NamNhuan(year){
//         if((year %4 ===0 && year % 100 !==0) || year % 100 === 0) {
//                 return true
//         }
//         else {
//                 return false
//         }
// }
// function caculateSdate(date,month,year){
//          const daysInMonth = [
//                 31, // January
//                 NamNhuan(year) ? 29 : 28, // February
//                 31, // March
//                 30, // April
//                 31, // May
//                 30, // June
//                 31, // July
//                 31, // August
//                 30, // September
//                 31, // October
//                 30, // November
//                 31  // December
//         ];
//         var dayOfyear = date;
//         for(let i = 0; i < month-1; i++){
//                 dayOfyear += daysInMonth[i];
//         }
//         return 'Đây là ngày thứ ' + dayOfyear + ' trong năm';
// }
// console.log(caculateSdate(14,8,1997))
// Bài 105: Viết chương trình nhập 1 số nguyên có 2 chữ số.  Hãy in ra cách đọc của số nguyên này
// function InputNumber(n){
//         if((n<10&&n>-10)||(n>99&&n<-99)){
//                 return 'Đây không phải số nguyên có 2 chữ số'
//         }
//         else {
//                 var hangchuc = ['','Mười','Hai mươi','Ba mươi','Bốn mươi','Năm mươi','Sáu mươi','Bẩy mươi','Tám mươi','Chín mươi'];
//                 var hangdonvi = ['','mốt','hai','ba','bốn','năm','sáu','bẩy','tám','chín'];
//                 var SoAm = 'Âm'
//                 if(n>=10){
//                         let chuc = Math.floor(n/10);
//                         let donvi = n%10;
//                         return hangchuc[chuc] + ' ' + hangdonvi[donvi]
//                 }
//                 if(n<-9){
//                         let chuc = Math.abs(Math.ceil(n/10));
//                         let donvi = Math.abs(n%10);
//                         return SoAm + ' '+ hangchuc[chuc] + ' ' + hangdonvi[donvi]
//                 }
//         }
// }
// console.log('Số nhập vào được đọc là: ' + InputNumber(98))
// Bài 106 Viết chương trình nhập 1 số nguyên có 3 chữ số.  Hãy in ra cách đọc của số nguyên này
// function InputNumber(n){
//         if((n <-999 || n > -100)&&(n >= 1000 || n<100) ){
//                 return 'Đây không phải số nguyên có 3 chữ số';
//         }
//         else {
//                 var hangtram = ['','Một trăm','Hai trăm','Ba trăm','Bốn trăm', 'Năm trăm', 'Sáu trăm', 'Bẩy trăm', 'Tám trăm', 'Chín trăm']
//                 var hangchuc = ['','Mười','Hai mươi','Ba mươi','Bốn mươi','Năm mươi','Sáu mươi','Bẩy mươi','Tám mươi','Chín mươi'];
//                 var hangdonvi2 = ['','một','hai','ba','bốn','năm','sáu','bẩy','tám','chín'];
//                 var hangdonvi = ['','lẻ một','lẻ hai','lẻ ba','lẻ bốn','lẻ năm','lẻ sáu','lẻ bẩy','lẻ tám','lẻ chín'];
//                 var SoAm = 'Âm'
//                 if(n > 0){
//                         let Tram = Math.floor(n/100);
//                         let Chuc = Math.floor((n%100)/10);
//                         let donvi = (n%100)%10;
//                         if(Chuc === 0){
//                                 return hangtram[Tram]  + ' '+ hangdonvi[donvi]
//                         }
//                         return hangtram[Tram] + ' '+ hangchuc[Chuc] + ' ' + hangdonvi2[donvi];
//                 }
//                 if(n < 0){
//                         let absN = Math.abs(n);
//                         let Tram = Math.floor(absN/100);
//                         let Chuc = Math.floor((absN%100)/10);
//                         let donvi = (absN%100)%10;
//                         if(Chuc === 0){
//                                 return SoAm +' '+ hangtram[Tram]  + ' '+ hangdonvi2[donvi]
//                         }
//                         return SoAm + ' ' + hangtram[Tram] + ' '+ hangchuc[Chuc] + ' ' + hangdonvi2[donvi];
//                 }
//         }
// }
// console.log('Số nhập vào được đọc là: ' + InputNumber(100))
// Bài 107: Viết hàm tính S = CanBacN(x)
// function CanBacN(n,x){
//         return Math.pow(x,1/n)
// }
// console.log(CanBacN(3,15645614  ))
// Bài 108:  Viết hàm tính S = x^y
// function S(x,y){
//         return Math.pow(x,y)
// }
// console.log(S(4,5));
// Bài 109: Viết chương trình in bảng cửu chương ra màn hình
// function BangCuuChuong() {
//         let bang = [];
//         for (let i = 1; i < 10; i++) {
//             let hang = [];
//             for (let j = 1; j < 11; j++) {
//                 hang.push(`${i} x ${j} = ${i*j}`);
//             }
//             bang.push(hang);
//         }
//         return bang;
//     }
    
//     console.log(BangCuuChuong());
// Bài 110: Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. Lập chương trình để tìm ra tất cả các phương án có thể
// function timTatCaCachChiaTien(tongTien) {
//     let tatCaCachChiaTien = [];
    
//     // Sử dụng vòng lặp for để thử tất cả các cách chia tiền
//     for (let soLuong1000 = 0; soLuong1000 <= tongTien / 1000; soLuong1000++) {
//         for (let soLuong2000 = 0; soLuong2000 <= tongTien / 2000; soLuong2000++) {
//             for (let soLuong5000 = 0; soLuong5000 <= tongTien / 5000; soLuong5000++) {
//                 let tongTienTungLoai = soLuong1000 * 1000 + soLuong2000 * 2000 + soLuong5000 * 5000;
//                 if (tongTienTungLoai === tongTien) {
//                     tatCaCachChiaTien.push([soLuong1000, soLuong2000, soLuong5000]);
//                 }
//             }
//         }
//     }

//     return tatCaCachChiaTien;
// }

// let tongTien = 200000;
// let tatCaCachChiaTien = timTatCaCachChiaTien(tongTien);
// console.log(tatCaCachChiaTien);
// Bài 111: Viết chương trình in ra tam giác cân có độ cao h
//Tam giác thường
// function VeTamGiac(chieucao){
//     for(let i = 1; i <= chieucao; i++){
//         var a = '';
//         for(let j = 1; j <= i ; j++){
//             a += '* ';
//         }
//         console.log(a)
//     }
    
// }
// VeTamGiac(5)
// Tam giác cân đặc
// function VeTamGiacCan(chieucao){
//     for(let i = 1; i <= chieucao; i++){
//         let a = '';
//         for(let j = 1; j <= chieucao-i; j++){
//             a+= ' ';
//         }
//         for(let k = 1; k <= 2*i -1; k++){
//             a+= '*'
//         }
//         console.log(a)
//     }
// }
// VeTamGiacCan(100)
// Tam giác cân rỗng nằm giữa màn hình
// function veTamGiacCan(chieuCao) {
//     for (let i = 0; i < chieuCao; i++) {
//         let row = '';
//         for (let j = 0; j < 2 * chieuCao - 1; j++) {
//             if (i === chieuCao - 1 || i + j === chieuCao - 1 || j - i === chieuCao - 1) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// veTamGiacCan(7);
// // Tam giác  vuông cân đặc
// function veTamGiacVuongCanDac(chieuCao) {
//     for (let i = 0; i < chieuCao; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row += '* ';
//         }
//         console.log(row);
//     }
// }
// veTamGiacVuongCanDac(5);
// // Tam giác  vuông cân rỗng
// function veTamGiacVuongCanRong(chieuCao) {
//     for (let i = 0; i < chieuCao; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || i === j || i === chieuCao - 1) {
//                 row += '* ';
//             } else {
//                 row += '  ';
//             }
//         }
//         console.log(row);
//     }
// }
// veTamGiacVuongCanRong(30);
// Vẽ Hình chữ nhật đặc
// function VeHinhChuNhatDac(m,n){
//     for(let i = 1; i<= m; i++){
//         let dong = '';
//         for(let j = 1; j <= n; j++){
//             dong += '* '
//         }
//         console.log(dong)
//     }
// }
// VeHinhChuNhatDac(5,4)
// Hình chữ nhật rỗng
// function VeHinhChuNhatRong(chieudai,chieurong){
//     for(let i = 1; i<= chieudai; i++){
//         let dong = '';
//         if(i === 1 || i === chieudai){
//             for(let j = 1; j <= chieurong; j++){
//                 dong+= '* ';
//             }
//         }
//         else{
//             for(let k = 1; k<= chieurong; k++){
//                if(k === 1 || k == chieurong){
//                 dong+= '* '
//                }
//                else {
//                 dong += '  '
//                }
//             }
            
//         }
//         console.log(dong)
//     }
// }
// VeHinhChuNhatRong(5,4)
// Bài 113: Lập chương trình tính sin(x) với độ chính xác 0.00001 theo công thức: Sin(x) = x – x^3/3! + x^5/5! + … + (-1)^n . x^2n + 1/(2n + 1)!
// function tinhGiaiThua(number) {
//     let giaiThua = 1;
//     for (let i = 1; i <= number; i++) {
//         giaiThua *= i;
//     }
//     return giaiThua;
// }
// function PhepTinh(x,n){
//     let Sn = 0;
//     for(let i = 0; i<= n; i++){
//         Sn+= ((-1)**i)*((x**(2*i+1))/tinhGiaiThua(2*i+1));
//     }
//     return Sn.toFixed(5)

// }
// console.log(PhepTinh(2,8))
// Bài 115: Viết chương trình nhập họ tên, điểm toán, điểm văn của 1 học sinh. Tính điểm trung bình và xuất ra kết quả
// function TinhDiemTrungBinh(Hoten,Toan,Van){
//     if(typeof(Hoten)!== 'string'){
//         return 'Mời nhập đúng định dạng tên'
//     }
//     var DiemTrungBinh = (Toan + Van)/2;
//     return Hoten + ' có điểm trung bình là: ' + DiemTrungBinh
// }
// console.log(TinhDiemTrungBinh('An',8,5))
// Bài 119: Liệt kê tất cả các số nguyên tố nhỏ hơn n
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function ListSoNguyenTo(number2){
//     var arr = []
//     for(let i = 2; i<number2; i++){
//         if(TestNumber(i)===true){
//              arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(ListSoNguyenTo(1000));
// Bài 120: Liệt kê tất cả các số chính phương nhỏ hơn n
// function SquareNumber(number){
//         if(number <0){
//                 return false;
//         }
//         else{
//                 var SquareRootOf2 = Math.sqrt(number);
//                 if(Number.isInteger(SquareRootOf2)=== true){
//                         return true;
//                 }
//                 else{
//                         return false
//                 }

//         }
// }
// function ListSquareNumber(n){
//     if(n < 0 || isFinite(n) !==true){
//         return 'Đây là số Âm hoặc không phải là số'
//     }
//     var arr = [];
//     for(let i = 0; i < n; i++){
//         if(SquareNumber(i)===true){
//             arr.push(i)
//         }
//     }
//     return 'Danh sách các số chính phương nhỏ hơn ' + n + ' là: ' + arr
// }
// console.log(ListSquareNumber(100))
// Bài 122: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực
// Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên
// Bài 124: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không
// Bài 125: Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng
// Bài 126: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
// Bài 127: Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần
// function SortNumber(arr){
//     if(Array.isArray(arr)==false){
//         return 'Đây không phải mảng, kiểm tra lại';
//     }
//     else{
//         arr.sort(function(a,b){return a-b})
//         return arr
//     }
// }
// console.log(SortNumber([4,45645.45645,48,25.54,158.452,15]))
// Bài 128 + 130: Viết hàm nhập, xuất mảng 1 chiều các số thực
// Bài 129 + 131: Viết hàm nhập, xuất mảng 1 chiều các số nguyên
// Bài 132: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên
// Bài 133: Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1 chiều các số thực
// function VitriSoAm(arr){
//         if(Array.isArray(arr)!== true){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         let newArr = [];
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]<0){
//                         newArr.push(i+1)
//                 }
//         }
//         return 'Vị trí của các giá trị âm trong mảng là: ' + newArr
// }
// console.log(VitriSoAm(['-5',5,12,8,-5,-15646,-4515,54645,4584248,-4545813,-45456158,-1546121,-1456112]))
// Bài 134: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực;
// function FindMaxNumber(arr){
//         let bienkhoitao = -Infinity;
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]>bienkhoitao){
//                         bienkhoitao = arr[i]
//                 }
//         }
//         return bienkhoitao
// }
// console.log(FindMaxNumber([-4,4,6,-4,-2,-48945,4545,4584154,47845,-41548456,-48945645,-45647515,-45454,-14545]))
// Bài 135: Viết hàm tìm giá trị dương đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về -1;
// function FindNumber2(arr){
//         if(Array.isArray(arr)!== true){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else {
//                 let a = arr.find(element => element > 0)
//                 if(a == undefined){
//                         return -1
//                 }
//                 return 'Giá trị dương đầu tiên của mảng là: ' + a
//         }
// }
// console.log(FindNumber2([4,5612565,651531,4564561,4645654,-1454545,-4544545,-458478]))
// Bài 136: Tìm số chẵn cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì trả về -1
// function FindEvenNumber(arr){
//         if(Array.isArray(arr)!== true){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else{
//                 let newArr = [];
//                 for(let i = 0; i < arr.length;i++){
//                         if(arr[i] % 2 === 0){
//                                 newArr.push(i);
//                         }
//                 }
//                 if(newArr.length === 0){
//                         return -1
//                 }
//                 return 'Số chẵn lớn nhất trong mảng là: ' + arr[newArr[newArr.length-1]];
//         }
// }
// console.log(FindEvenNumber([15145645,14543,145451,458445,48455165,4545451,415153,458457]))
// Bài 137: Tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số thực
// function FindIndexOfNumber(arr){
//         let bienkhoitao = Infinity;
//         for(let i = 0; i< arr.length; i++){
//                 if(isNaN(arr[i])===true){
//                         return 'Trong mảng có phần tử không phải là số, PHẦN TỬ THỨ: ' + (i+1)
//                 }
//                 if(arr[i]<bienkhoitao){
//                         bienkhoitao = arr[i]
//                 }
//         }
//         let index = arr.indexOf(bienkhoitao);
//         return index +1
// }
// console.log(FindIndexOfNumber([45,-458,48156,-456458456487454,478454784548,4848784489,-5454784548484,48484889,1451215,45141]))
// Bài 138: Tìm vị trí của giá trị chẵn đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì sẽ trả về -1;
// function FindNumberFirst(arr){
//         if (Array.isArray(arr) !== true){
//                 return 'Đây không phải mảng, mời nhập lại';
//         }
//         let a = arr.find(element => element);
//         return 'Giá trị chẵn đầu tiên trong mảng là: '+(arr.indexOf(a)+1)
// }
// console.log(FindNumberFirst([45456456,456456445,4684564548,4548448,45848548,456135125]))
// Bài 139: Tìm vị trí số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về giá trị  -1
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong == number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function FindIndexOfArray(arr){
//         let lastIndex = -1;
//         for(let j = 0; j<arr.length; j++){
//                 if(SoHoanThien(arr[j])){
//                         lastIndex = j;
//                 }
//         }
//         return 'Vị trí số hoàn thiện cuối cùng trong mảng là: '+ (lastIndex+1);
// }
// console.log(FindIndexOfArray([28,6,8128,145,45,46,48]))
// Bài 140: Hãy tìm giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì sẽ trả về -1;
// function findNumberOfArray(arr){
//         let numberMin = Infinity;
//         if(Array.isArray(arr)!==true){
//                 'Đây không phải là kiểu dữ liệu mảng, mời nhập lại'
//         }
//         for(let i = 0; i< arr.length ; i++){
//                 if(arr[i]>0){
//                         if(arr[i]<numberMin){
//                                 numberMin = arr[i]
//                         }
//                 }
//         }
//         return 'Giá trị dương nhỏ nhất trong mảng 1 chiều này là: ' + numberMin;
// }
// console.log(findNumberOfArray([456447,485489454,4894874584,484847878,47847878]))
// Bài 141: Hãy tìm vị trí giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về  -1
// function findNumberOfArray(arr){
//         let numberMin = Infinity;
//         let indexOf = -1;
//         if(Array.isArray(arr)!==true){
//                 'Đây không phải là kiểu dữ liệu mảng, mời nhập lại'
//         }
//         for(let i = 0; i< arr.length ; i++){
//                 if(arr[i]>0 && typeof(arr[i])==='number'){
//                         if(arr[i]<numberMin){
//                                 numberMin = arr[i];
//                                 indexOf = i;
//                         }
//                 }
//         }
        
//         return 'Vị trí của giá trị dương nhỏ nhất trong mảng 1 chiều này là: ' + (indexOf+1);
// }
// console.log(findNumberOfArray([0,'145',45,-484847878,47847878]))
// Bài 142: Tìm giá trị nhỏ nhất trong mảng 1 chiều số thực
// function FindNumberMinOfArray(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu giữ liệu mảng, mời nhập lại';
//         }
//         let NumberMinOfArray = Infinity;
//         for(let i=0; i<arr.length; i++){
//                 if(arr[i]<NumberMinOfArray && isNaN(arr[i])===false){
//                         NumberMinOfArray = arr[i];
//                 }
//         }
//         return 'Giá trị nhỏ nhất trong mảng là: '+ NumberMinOfArray
// }
// console.log(FindNumberMinOfArray(['-54545454546454',-14545,454548,48612487,4845848454,4544,485448,4847,-1,-45448454,1451454,-Math.sqrt(2)]))
// Bài 143: Viết hàm tìm số chẵn đầu tiên trong mảng các số nguyên. Nếu mảng không có giá trị chẵn thì trả về  -1
// function FindNumber(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải là kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else{
//                 let a = arr.find(Element => Element%2===0);
//                 if(a == undefined){
//                         return -1;
//                 }
//                 return 'Số chẵn đàu tiên của mảng là: '+a;
//         }
// }
// console.log(FindNumber(['4351211','45145642',1456151451,456151,15645445,145421,4545845,451451]))
// Bài 144: Tìm số nguyên tố đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  – 1;
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function FindSoNguyenTo(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây ko phải cấu trúc của mảng, mời nhập lại'
//         }
//         else{
//                 let a = arr.find(element => (TestNumber(element)== true));
//                 if(a == undefined){
//                         return -1;
//                 }
//                 return 'Số nguyên tố đầu tiên trong mảng là: ' + a
//         }
// }
// console.log(FindSoNguyenTo([0,45,13,19,23,45455]))
// Bài 145: Tìm số hoàn thiện đầu tiên trong mảng 1 chiều số nguyên. Nếu mảng không có số hoàn thiện thì trả về  -1;
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong === number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function FindSoHoanThien(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else{
//                 let a = arr.find(element => SoHoanThien(element)===true);
//                 if(a == undefined){
//                         return -1
//                 }
//                 return 'Số hoàn thiện đầu tiên trong mảng là: ' + a
//         }
// }
// console.log(FindSoHoanThien([145,'6','145',456,454,484,445]))
// Bài 146: Tìm giá trị âm đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về -1;
// function SoAmDauTien(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây k phải kiểu dữ liệu mảng, mời nhập lại';
//         }
//         else{
//                 let a = arr.find(element => element < 0);
//                 return a
//         }
// }
// console.log(SoAmDauTien([456456468,4564564848,48951489,48958489,48948489,48454,'-15648',45448,-4545848,-145487,4561554,14545]))
// Bài 147: Tìm số dương cuối cùng trong mảng số thực. Nếu mảng không có giá trị dương thì trả về  -1
// function TimSoDuongCuoiCung(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây k phải kiểu dữ liệu mảng, mời nhập lại';
//         }
//         else{
//                 let Soduongcuoicung = 0;
//                 for(let i = 0; i < arr.length; i++){
//                         if(arr[i]> 0){
//                                 Soduongcuoicung = arr[i]
//                         }
//                 }
//                 if(Soduongcuoicung === 0){
//                         return -1;
//                 }
//                 return Soduongcuoicung
//         }
// }
// console.log(TimSoDuongCuoiCung([151545,-1564545,-14547545,-14545454,4584548,4584815,45155445,1541445,454155,45154745,454854,4584]))
// Bài 148: Tìm số nguyên tố cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  -1
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function FindSoNguyenTo(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải dữ liệu mảng, mời nhập lại';
//         }
//         else{
//                 let Songuyentocuoicung = -1;
//                 for(let i = arr.length-1; i >= 0;i--){
//                         if(TestNumber(arr[i])===true){
//                                 Songuyentocuoicung = arr[i];
//                                 break;
//                         }
//                 }
//                 return Songuyentocuoicung
                
//         }
// }
// console.log(FindSoNguyenTo([456156,156156156,485615,145151,1456151,15614514,14115,14154478,1114,15,45145,15156,151515,4515156]))
// Bài 149: Tìm số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về  -1
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong === number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function FindPerfectNumber(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây ko phải dữ liệu mảng, mời nhập lại';
//         }
//         else{
//                 let Numberperfect = -1;
//                 for(let i = arr.length-1; i>= 0; i--){
//                         if(SoHoanThien(arr[i])=== true){
//                                 Numberperfect = arr[i];
//                                 break;
//                         }
//                 }
//                 return Numberperfect
//         }
// }
// console.log(FindPerfectNumber([45156,484548748,484547,4784745,14145145,14514514,1414514,451566,156156]))
// Bài 150: Hãy tìm giá trị âm lớn nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về  -1
// function FindNumberMax(arr){
//         let SoAmLonNhat = arr[0]
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i] < 0 && arr[i] > SoAmLonNhat){
//                         SoAmLonNhat = arr[i];
//                 }
//         }
//         return SoAmLonNhat < 0 ? 'Số âm lớn nhất trong mảng là: ' + SoAmLonNhat : -1
// }
// console.log(FindNumberMax([10,4,8,454545]))
// Bài 151: Hãy tìm số nguyên tố lớn nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về -1;
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function FindNumberMax(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại';
//         }
//         else{
//                 let SonguyentoMax = -1;
//                 for(let i = 0; i<arr.length; i++){
//                         if(TestNumber(arr[i])===true && arr[i]>SonguyentoMax){
//                                 SonguyentoMax = arr[i];
//                         }
//                 }
//                 return SonguyentoMax;
//         }
// }
// console.log(FindNumberMax([11,1561215,456121,19,23,484545,1456]))
// Bài 152: Hãy tìm số hoàn thiện nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về -1
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong === number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function FindNumberMin(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải là kiểu dữ liệu mảng, mời nhập chính xác';
//         }
//         else{
//                 let NumberMin = Infinity;
//                 for(let i = 0; i<arr.length; i++){
//                         if(SoHoanThien(arr[i])===true && arr[i]<NumberMin){
//                                 NumberMin = arr[i];
//                         }
//                 }
//                 if(NumberMin === Infinity){
//                         return -1
//                 }
//                 return NumberMin
//         }
// }
// console.log(FindNumberMin([14515,145155,4515654,49,45,12,85,15,4562,2,12,52,45,28,496]))
// Bài 153: Hãy tìm giá trị chẵn nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số chẵn thì trả về -1// Kết Thúc Ngày 17/2
// function FindEvenNumber(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải là kiểu dữ liệu mảng, mời nhập lại'; 
//         }
//         else{
//                 let EvenNumberMin = Infinity;
//                 for(let i = 0; i<arr.length; i++){
//                         if(arr[i]%2===0 && arr[i]<EvenNumberMin){
//                                 EvenNumberMin = arr[i];
//                         }
//                 }
//                 if(EvenNumberMin === Infinity){
//                         return -1;
//                 }
//                 return EvenNumberMin
//         }
// }
// console.log(FindEvenNumber([456456,45645648,78451,-14545,45145154,-4548456,451454,-1451456845,4754514,458454,-4564,48454,47485]))
// Bài 154: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1;
// function FindNumberMin(arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else{
//                 let NumberMin = Infinity;
//                 for(let i = 0; i< arr.length; i++){
//                         if(arr[i]<0 && arr[i]<NumberMin){
//                                 NumberMin = arr[i]
//                         }
//                 }
//                 if(NumberMin === Infinity){
//                         return -1
//                 }
//                 return NumberMin;
//         }
// }
// console.log(FindNumberMin([-151545,14561445,-14514545,4514458,41445,45154458,45615145,1451515,-1256456,456546]))
// Bài 155: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất
// function FindNumberValueMax(x,arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu dữ liệu mảng, mời nhập lại'
//         }
//         else{
//                 let Bienluutru = -Infinity;
//                 let NumberFind;
//                 for(let i = 0; i< arr.length; i++){
//                         let Hieu = Math.abs(x-arr[i]);
//                         if(Hieu>Bienluutru){
//                                 Bienluutru = Hieu;
//                                 NumberFind = arr[i];
//                         }
//                 }
//                 return NumberFind
//         }
// }
// console.log(FindNumberValueMax(9,[14545,-45454,468254,-454564,-454545,-15645851,4564854545,4514156145,5648455,42515]))
// Bài 156: Hãy tìm giá trị trong mảng các số thực gần giá trị x nhất
// function FindNumber(x,arr){
//         if(!Array.isArray(arr)){
//                 return 'Đây không phải kiểu dữ liệu mảng';
//         }
//         else{
//                 let Bienluutru = Infinity;
//                 let NumberFind;
//                 for(let i = 0; i<arr.length; i++){
//                         let discount = Math.abs(x-arr[i])
//                         if(discount<Bienluutru){
//                                 Bienluutru = discount;
//                                 NumberFind = arr[i];
//                         }
//                 }
//                 return 'Số có khoảng cách gần nhất với số '+x+ ' trong mảng là: ' + NumberFind
//         }
// }
// console.log(FindNumber(9,[4545,4561545,-45645,4561544,-451242,-45654,-45155,-145454,468165,456454685,46484685,48154,451454,45145]))
// Bài 157: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng
// function findInterval(arr) {
//         arr.sort((a,b)=>a-b);
//         let newArr = [arr[0],arr[arr.length-1]];
//         return newArr
// }
// console.log(findInterval([145456,458145487,451545,45145457,45145484,45845445,458448,-14545745,-145145458,-454145,-4545458,456454564,454545,45458]))
// Bài 158: Cho mảng 1 chiều các số thực, hãy tìm giá trị x sao cho đoạn [-x, x] chứa tất cả các giá trị trong mảng
// function findInterval(arr) {
//         arr.sort((a,b)=>a-b);
//         let FirstNumber = Math.abs(arr[0]);
//         let LastNumber = Math.abs(arr[arr.length-1]);
//         if(LastNumber>FirstNumber){
//                 return 'X là: ' + arr[arr.length-1]
//         }
//         if(FirstNumber>LastNumber){
//                 return 'X là: ' + arr[0];
//         }
//         return 'X là:' + arr[0];
// }
// console.log(findInterval([45,12,-4565485,12,485,8,4585,12,48,56,784,15,45]))
// Bài 159: Cho mảng 1 chiều các số thực, hãy tìm giá trị đầu tiên lớn hơn giá trị 2003. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về  -1
// function FindNumberOK(arr){
//         let NumberOK = arr.find(element => element>2003);
//         if(NumberOK === undefined){
//                 return -1;
//         }
//         return 'Số đầu tiên trong mảng lớn hơn số 2003 là: ' + NumberOK;
// }
// console.log(FindNumberOK([14,454,245,154,545746,5]))
// Bài 160: Cho mảng 1 chiều các số thực, hãy tìm giá trị âm cuối cùng lớn hơn giá trị -1. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1
// function FindNumberMin(arr){
//         let SoCanTim = -1;
//         for(let i = arr.length-1; i>= 0; i--){
//                 if(arr[i]<0&&arr[i]>-1){
//                         SoCanTim = arr[i];
//                         break;
//                 }
                
//         }
//         return SoCanTim
// }
// console.log(FindNumberMin([0.4545,-0.3584545,0.245,154,545746,5]))
// Bài 161: Cho mảng 1 chiều các số nguyên, hãy tìm giá trị đầu tiên nằm trong khoảng [x, y] cho trước. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1
// function FindFirstNumber(arr,x,y){
//         let NumberOK;
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]>=x&&arr[i]<=y){
//                         NumberOK = arr[i];
//                         break;
//                 }
//         }
//         return NumberOK === undefined ? -1 : NumberOK
// }
// console.log(FindFirstNumber([1456145,451545,4156154,445,45454,4545,451,-145445,-41545,451454,581545,4515],100,1000))
// Bài 162: Cho mảng 1 chiều các số thực. Hãy viết hàm tìm một vị trí trong mảng thỏa 2 điều kiện: có 2 giá trị lân cận và giá trị tại đó bằng tích 2 giá trị lân cận. Nếu mảng không tồn tại giá trị như vậy thì trả về giá trị -1
// function FindIndexNumber(arr){
//         let CacViTri = [];
//         for(let i = 1; i < arr.length -1; i++){
//                 if(arr[i]===(arr[i-1]*arr[i+1])){
//                         CacViTri.push(i+1)
//                 }
//         }
//         return CacViTri.length === 0 ? -1 : 'Các vị trí có số đạt đủ điều kiện là: ' + CacViTri
// }
// console.log(FindIndexNumber([4,12,3,27,9]))
// Bài 163: Tìm số chính phương đầu tiên trong mảng 1 chiều các số nguyên
// function findFirstPerfectSquare(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (isPerfectSquare(arr[i])) {
//                 return arr[i];
//             }
//         }
//         return -1; // Trả về -1 nếu không tìm thấy số chính phương
//     }
    
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
    
//     // Ví dụ sử dụng:
//     const array = [3, 7, 9, 16, 25, 30];
//     console.log(findFirstPerfectSquare(array)); // Output: 16
// Bài 164: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên thỏa mãn tính chất số gánh
// function isPalindrome(n) {
//         const str = String(n);
//         const reversedStr = str.split('').reverse().join('');
//         return str === reversedStr;
//     }
    
//     function findFirstPalindrome(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (isPalindrome(arr[i])) {
//                 return arr[i];
//             }
//         }
//         return -1; // Trả về -1 nếu không tìm thấy số gánh trong mảng
//     }
    
//     // Ví dụ sử dụng:
//     const array = [123, 454, 678, 121];
//     console.log(findFirstPalindrome(array)); // Output: 454
// Bài 165: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên có chữ số đầu tiên là chữ số lẻ
// function FindNumberFirst(number){
//         let newString = String(Math.abs(number));
//         let FirstNumber = parseInt(newString[0]);
//         return FirstNumber%2 !== 0;
//         }

// function FindNumber(arr){
//         let numberOk;
//         for(let i = 0; i < arr.length; i++){
//                 if(FindNumberFirst(arr[i])===true){
//                         numberOk = arr[i];
//                         break;
//                 }
//         }
//         return numberOk === undefined ? 'Trong mảng không có số thoả mãn điều kiện' : 'Số đầu tiên trong mảng có chữ số đầu tiên là chữ số lẻ là:' + numberOk;
// }    
// console.log(FindNumber([]))
// Bài 166: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm giá trị đầu tiên trong mảng có dạng 2^k. Nếu mảng không có giá trị dạng 2k thì hàm sẽ trả về 0//Kết thúc ngày 18/2//
// function findPowerOfTwo(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             let currentNum = arr[i];
//             if (currentNum <= 0) continue; // Loại bỏ các số không dương
//             // Kiểm tra xem logarit cơ số 2 của số có phải là số nguyên hay không
//             if (Math.log2(currentNum) % 1 === 0) {
//                 return currentNum; // Trả về số nếu là lũy thừa của 2
//             }
//         }
//         return 0; // Trả về 0 nếu không có số nào thỏa mãn
//     }
    
//     // Kiểm tra với một số mảng ví dụ
//     console.log(findPowerOfTwo([4, 6, 8, 16, 32])); // Kết quả: 4
//     console.log(findPowerOfTwo([1, 3, 5, 7, 9])); // Kết quả: 0 (không có số nào là lũy thừa của 2)
// Bài 167: Hãy tìm giá trị thỏa điều kiện toàn chữ số lẻ và là giá trị lớn nhất thỏa điều kiện ấy trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về 0
// function allDigitsOdd(number) {
//         let strNumber = String(Math.abs(number));
//         for (let digit of strNumber) {
//             if (parseInt(digit) % 2 === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     function findMaxOddValue(arr) {
//         let maxOddValue = null;
//         for (let num of arr) {
//             if (allDigitsOdd(num)) {
//                 if (maxOddValue === null || num > maxOddValue) {
//                     maxOddValue = num;
//                 }
//             }
//         }
//         return maxOddValue === null ? 0 : maxOddValue;
//     }
    
//     console.log(findMaxOddValue([-123, -789, -1357, -3517]));

// Bài 168: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm giá trị lớn nhất trong mảng có dạng 5^k. Nếu mảng không tồn tại giá trị 5^k thì hàm sẽ trả về 0
// function Test5MuK(number){
//     let ThuongSO = number;
//     for(let i = 0; ThuongSO%5=== 0; i++){
//         ThuongSO = ThuongSO/5;
//     }
//     return ThuongSO ===1
// }
// function FindMax5MuK(arr){
//     let SoCanTim = 0;
//     for(number of arr){
//         if(Test5MuK(number)){
//             if(number>SoCanTim){
//                 SoCanTim = number;
//             }
//         }
//     }
//     return SoCanTim
// }
// console.log(FindMax5MuK([45615,45612514,45614514,125,25,4512545,45615145]))
// Bài 169 (*): Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số chẵn nhỏ nhất lớn hơn mọi giá trị có trong mảng(Đề hình như sai sai)
// Bài 170: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn hơn mọi giá trị có trong mảng(Là sao????)
// Bài 171: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm ước chung lớn nhất của tất cả các phần tử trong mảng
// function TimUCLN(a,b){
//                 while(b!==0){
//                         let temp = b;
//                         b = a%b;
//                         a = temp;
//                 }
//                 return a;
// }
// function UCLNOfNumber(arr){
//         let result = arr[0];
//         for(let i = 1; i<arr.length; i++){
//                 result = TimUCLN(result,arr[i])
//         }
//         return 'Ước chung lớn nhất của dãy số này là: ' + result
// }
// console.log(UCLNOfNumber([15,20]))
// Bài 172: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm bội chung nhỏ nhất của tất cả các phần tử trong mảng
// function TimUCLN(a,b){
//         while(b!==0){
//                 let temp = b;
//                 b = a%b;
//                 a = temp;
//         }
//         return a;
// }
// function BCNN(a,b){
//         let result = (a*b)/(TimUCLN(a,b));
//         return result
// }
// function FindBCNNOfarr(arr){
//         let result = arr[0];
//         for(let i = 1; i<arr.length; i++){
//                 result = BCNN(result,arr[i])
//         }
//         return result
// }
// console.log(FindBCNNOfarr([456,12,15,45]))
// Bài 173 (*): Cho mảng 1 chiều các số nguyên. Hãy  viết hàm tìm chữ số xuất hiện ít nhất trong mảng
// function FindNumberOfarr(arr){
//         let newArr = arr.join('').split('');
//         let newArr2 = newArr.map(element => +element);
//         let newArr3 = newArr2.filter((value,index, array) => array.indexOf(value) === array.lastIndexOf(value));
//         return newArr3

// }
// console.log('Các số xuất hiện ít nhất trong mảng là: ', FindNumberOfarr([2,3,7,2,2,7,23]))
// Bài 174 (*): Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một. Hãy viết hàm liệt kê tất cả các cặp giá trị (a, b) trong mảng thỏa điều kiện a <= b
// function listNumber(arr){
//         let result = [];
//         for(let i = 0; i<arr.length-1; i++){
//                 for(let j = i+1; j<arr.length; j++){
//                         if(arr[i]<=arr[j]){
//                         result.push([arr[i], arr[j]])
//                 }
//         }
//         }
//         return result;
// }
// let pairs = listNumber([1545,12,45,45,12,65,12,23,74,52.48,15.45]);
// console.log('Các cặp theo yêu cầu đề bài là: ')
// pairs.forEach(pair => console.log(pair))
// Bài 175 (*): Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một. Hãy viết hàm tìm 2 giá trị gần nhau nhất trong mảng (Lưu ý: Mảng có các giá trị khác nhau từng đôi một còn có tên là mảng phân biệt)
// function FindNumberArray(arr){
//         let result = [];
//         let discont = Infinity;
//         for(let i = 0; i < arr.length-1; i++){
//                 for(let j = i+1; j< arr.length; j++){
//                         if((Math.abs(arr[i]-arr[j]))<discont){
//                                 discont = Math.abs(arr[i]-arr[j]);
//                                 result= [[arr[i],arr[j]]];
//                         }
//                         else if((Math.abs(arr[i]-arr[j]))===discont){
//                                 result.push([arr[i],arr[j]]);
//                         }
//                 }
//         }
//         return result
// }
// console.log('Các cặp số có khoảng cách gần nhau nhất trong mảng là: ')
// console.log(FindNumberArray([156,54,51,5,12,45,2]))
// Bài 176: Hãy liệt kê các số âm trong mảng 1 chiều các số thực
// function listNumber(arr){
//         let listNumberOk = arr.filter(value => value < 0);
//         return listNumberOk
// }
// console.log(listNumber([15,-14545,45,45,-12,45]))
// Bài 177: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước
// function listNumberXY(arr,x,y){
//         let result = arr.filter(element => element >=x && element <=y);
//         return result
// }
// console.log(listNumberXY([15,45,12,7,9,11.45],8,12))
// Bài 178: Hãy liệt kê các số chẵn trong mảng 1 chiều các số nguyên thuộc đoạn [x, y] cho trước (x, y là các số nguyên)
// function listNumberXY(arr,x,y){
//         let result = arr.filter(element => element >=x && element <=y && element %2 === 0);
//         return result
// }
// console.log(listNumberXY([15,45,12,7,9,11.45],8,12))
// Bài 179: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
// function listNumber(arr){
//         let result = [];
//         for(let i = 0; i< arr.length-1; i++){
//                 if(arr[i]> Math.abs(arr[i+1])){
//                         result.push(arr[i])
//                 }
//         }
//         return result
// }
// console.log(listNumber([51,-54,-12,15,54,45123,12]))
// Bài 180: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện nhỏ hơn trị tuyệt đối của giá trị đứng liền sau nó và lớn hơn trị tuyệt đối của giá trị đứng liền trước nó
// function listNumberOK(arr){
//         let result = [];
//         for(let i = 1; i< arr.length-1; i++){
//                 if(arr[i]< Math.abs(arr[i+1])&&arr[i]> Math.abs(arr[i-1])){
//                         result.push(arr[i])
//                 }
//         }
//         return result
// }
// console.log(listNumberOK([51,-54,-12,15,54,45123,12]))
// Bài 181: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị chẵn có ít nhất 1 lân cận cũng là giá trị chẵn
// function ListNumberNear(arr){
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]%2===0 && (arr[i-1]%2 ===0 || arr[i+1]%2 ===0)){
//                         result.push(arr[i])
//                 }
//         }
//         return result
// }
// console.log(ListNumberNear([145,45,46,456,46,15,4]))
// Bài 182: Cho mảng 1 chiều các số thực. Hãy viết hàm liệt kê tất cả các giá trị trong mảng có ít nhất 1 lận cận trái dấu với nó
// function listNumberOk2(arr){
//         let result = [];
//         for(let i = 0; i < arr.length; i++){
//                 if((arr[i]>0 && ((arr[i+1]<0||arr[i-1]<0)))||
//                 (arr[i]<0 && ((arr[i+1]>0 || arr[i-1] > 0)))){
//                 result.push(arr[i])
//         }
//         }
//         return result
// }
// console.log(listNumberOk2([5,45,21,-12,-145,-15,512,15]))
// Bài 183: Hãy liệt kê các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng 1 chiều các số thực
// function listNumberMax(arr){
//         let result = [];
//         let container = -Infinity;
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i] > container){
//                         container = arr[i];
//                 }
//         }
//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === container) {
//                 result.push(i+1);
//                 }
//         }
//         return result;
        
// }
// console.log('Các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng là: ' ,listNumberMax([156,458,123,458,15,45,5,56,456,45]))
// Bài 184: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên
// function Songuyento(number){
//         if(number === 2){
//                 return true;
//         }
//         if(number < 2 || number%2===0){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function listIndexNumber(arr){
//         let result = [];
//         for(let i = 0; i< arr.length; i++){
//                 if(Songuyento(arr[i])){
//                         result.push(i+1)
//                 }
//         }
//         return result
// }
// console.log(listIndexNumber([45,48,2,486,12,456,45,5,468,23]))
// Bài 185: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
// function listPerfectSquareNumber(arr){
//         let container = arr.filter(value => isPerfectSquare(value)===true);
//         let result = container.map(value => arr.indexOf(value)+1);
//         if(result.length === 0){
//                 return null
//         }
//         else return result
// }
// console.log('Các vị trí số chính phương trong mảng là: ', listPerfectSquareNumber([12,43,11,39]));
// Bài 186: Hãy liệt kê các vị trí trong mảng 1 chiều các số thực mà giá trị tại đó bằng giá trị âm đầu tiên trong mảng
// function listIndexOfArray(arr){
//         let firstIndexOfNumber = arr.findIndex(value => value <0);
//         if(firstIndexOfNumber === -1) return [];
//         let valueFirstNumber = arr[firstIndexOfNumber]; 
//         let result = arr.map((value,index) => index).filter(index=> arr[index]===valueFirstNumber && index === firstIndexOfNumber)
//         return result
// }
// console.log('Danh sách các vị trí có giá trị bằng giá trị âm đầu tiên trong mảng là: ',listIndexOfArray([456,45,12,54,12,5,-4,46,-45,-4,54,-4,12356,23156,15665,63526,-4]))
// Bài 187: Hãy liệt kê các vị trí mà giá trị tại các vị trí đó bằng giá trị dương nhỏ nhất trong mảng 1 chiều các số thực
// function listIndexOfArray(arr){
//         let minPositiveNumberIndex = -1;
//         let minPositiveNumber = Infinity;
//         for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] < minPositiveNumber) {
//             minPositiveNumber = arr[i];
//             minPositiveNumberIndex = i;
//         }
//     }
//         if(minPositiveNumber === Infinity) return [];
//         let result = arr.map((value,index) => index).filter(index=> arr[index]===minPositiveNumber && index === minPositiveNumberIndex).map(value => value+1)
//         return result
// }
// console.log('Danh sách các vị trí mà giá trị tại các vị trí đó bằng giá trị dương nhỏ nhất trong mảng :',listIndexOfArray([1562,56,46,123,456,156,456,125,56,46,46,46,46]))
// Bài 188: Hãy liệt kê các vị trí chẵn lớn nhất trong mảng 1 chiều các số nguyên
// function listIndexOfArray(arr){
//         let maxPositiveNumberIndex = -1;
//         let maxPositiveNumber = -Infinity;
//         for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 && arr[i] > maxPositiveNumber) {
//             maxPositiveNumber = arr[i];
//             maxPositiveNumberIndex = i;
//         }
//         }
//         if(maxPositiveNumber === -Infinity) return [];
//         let result = [];
//         for(let j = 0; j < arr.length; j++){
//                 if(arr[j]===maxPositiveNumber && j === maxPositiveNumberIndex){
//                         result.push(j+1)
//                         }
//         }
//         return result
// }
// console.log('Danh sách các vị trí chẵn lớn nhất trong mảng :',listIndexOfArray([456456,45,45456,85,454564,4545,45456]))
// Bài 189: Hãy liệt kê các giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ/////24/02/2024
// function FindNumberFirst(number){
//         let newString = String(Math.abs(number));
//         let FirstNumber = parseInt(newString[0]);
//         return FirstNumber%2 !== 0;
// }
// function listNumberOfArray(arr){
//         let result = [];
//         for(let num of arr){
//                 if(FindNumberFirst(num)){
//                         result.push(num)
//                 }
//         }
//         return result
// }
// console.log('Các số có chữ số đầu tiên là lẻ là: ',listNumberOfArray([45,564,456456,45454,4878,4848,48,456,5,56,45]))
// Bài 190: Hãy liệt kê các giá trị có toàn chữ số lẻ trong mảng 1 chiều các số nguyên
// function allDigitsOdd(number) {
//         if(number%2===0){
//                 return false;
//         }
//         else{
//         let strNumber = String(Math.abs(number));
//         for (let digit of strNumber){
//             if(parseInt(digit) % 2 === 0){
//                 return false;
//         }
//         }
//         return true;
// }
// }
// function listNumberallDigitsOdd(arr){
//         let result = [];
//         for(let num of arr){
//                 if(allDigitsOdd(num)){
//                         result.push(num)
//                 }
//         }
//         return result
// }
// console.log('Các số trong mảng thoả mãn yêu cầu đề bài là: ',listNumberallDigitsOdd([589,159,233,357,697,333]))
// Bài 191: Hãy liệt kê các giá trị cực đại trong mảng 1 chiều các số thực. Một phần tử được gọi là cực đại khi lớn hơn các phần tử lân cận
// function listNumberOfArr(arr){
//         let result = [];
//         if(arr[0] >arr[1]){
//                 result.push(arr[0])
//         }
//         if(arr[arr.length-1] >arr[arr.length-2]){
//                 result.push(arr[arr.length-1])
//         }
//         for(let i = 1; i < arr.length-1; i++){
//                 if((arr[i]>arr[i+1])&&(arr[i]>arr[i-1])){
                        
//                         result.push(arr[i])
//                 }
//         }
//         return result
// }
// console.log('Các số cực đại theo yêu cầu đề bài là: ' ,listNumberOfArr([456,40,569,3,46,45,456456,4561456456,454124,54848,4786748,478978,487,8]))
// Bài 192: Hãy liệt kê các  giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là số chẵn
// function FindEvenNumberFirst(number){
//         let newString = String(Math.abs(number));
//         let FirstNumber = parseInt(newString[0]);
//         return FirstNumber%2 === 0;
// }
// function listEvenNumber(arr){
//         let result = [];
//         for(let num of arr){
//                 if(FindEvenNumberFirst(num)){
//                         result.push(num)
//                 }
//         }
//         return result
// }
// console.log('Các số thoả mãn yêu cầu đề bài là: ',listEvenNumber([15456,-84,4145645,45548,14548,45756,489485,48]))
// Bài 193: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị trong mảng có dạng 3^k. Nếu mảng không có giá trị đó thì trả về 0
// function Test3MuK(number) {
//         if (number <= 0) {
//             return false;
//         } else {
//             while (number % 3 === 0) {
//                 number = number / 3;
//             }
//             return number === 1;
//         }
//     }
// console.log(Test3MuK(9))
// function listNumber3MuK(arr){
//         let result = [];
//         for(let num of arr){
//                 if(Test3MuK(num)){
//                         result.push(num)
//                 }
//         }
//         return result.length===0 ? 0 : result
// }
// console.log('Các số thoả mãn điều kiện đề bài là: ' ,listNumber3MuK([9,45,4789,-45,45,78,-56,9,45,27]))
// Bài 194: Cho mảng 1 chiều các số nguyên có nhiều hơn 2 giá trị. Hãy viết hàm liệt kê các cặp giá trị gần nhau nhất
// function listCuppleNumber(arr){
//         let result = [];
//         let container = Infinity;
//         for(let i = 0; i< arr.length-1; i++){
//                 for(let j = i+1; j < arr.length; j++){
//                         if(Math.abs(arr[i]-arr[j])<container){
//                                 container = Math.abs(arr[i]-arr[j])
//                                 result = [[arr[i],arr[j]]]
//                         }
//                         else if(Math.abs(arr[i]-arr[j])===container){
//                                 result.push([arr[i],arr[j]])
//                         }
//                 }
//         }
//         return result.length === 0 ? [] : result
// }
// console.log(listCuppleNumber([45,87,48,12,8,9,465,466]))
// Bài 196: Liệt kê các số âm trong mảng 1 chiều các số nguyên
//  function listNumber(arr){
//         let listNumberOk = arr.filter(value => value < 0);
//         return listNumberOk
// }
// console.log(listNumber([15,-14.545,45,45,-1.2,45]))
// Bài 197: Hãy liệt kê các giá trị trong mảng các số nguyên có chữ số đầu tiên là chữ số lẻ
// function TestOddNumber(number){
//         let FirstStringNumber = Math.abs(number).toString();
//         if(FirstStringNumber%2!==0){
//                 return true
//         }
//         return false
// }
// function ListFirstNumberOdd(arr){
//         let result = [];
//         for(let num of arr){
//                 if(TestOddNumber(num)){
//                         result.push(num)
//                 }
//         }
//         return result.length === 0 ? [] : result
// }
// console.log('Danh sách các số thoả mãn đề bài là: ', ListFirstNumberOdd([456,15,45465,456,15,48,45,145,46,489,789]))
// Bài 198: Hãy liệt kê các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng 1 chiều các số thực
// function listNumberMax(arr){
//         let result = [];
//         let container = -Infinity;
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i] > container){
//                         container = arr[i];
//                 }
//         }
//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === container) {
//                 result.push(i+1);
//                 }
//         }
//         return result;  
// }
// console.log('Các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng là: ' ,listNumberMax([156,458,123,458,15,45,5,56,456,45]))
// Bài 199: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên
// function Songuyento(number){
//         if(number === 2){
//                 return true;
//         }
//         if(number < 2 || number%2===0){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function listIndexNumber(arr){
//         let result = [];
//         for(let i = 0; i< arr.length; i++){
//                 if(Songuyento(arr[i])){
//                         result.push(i+1)
//                 }
//         }
//         return result
// }
// console.log(listIndexNumber([45,48,2,486,12,456,45,5,468,23]))
// Bài 200: Tính tổng các phần tử trong mảng
// function TotalNumber(arr){
//         let result = arr.reduce((first,current)=> 
//                 first+current
//         ,0);
//         return result
// }
// console.log(TotalNumber([1,2,5,8,9]))
// Bài 201: Tính tổng các giá trị dương trong mảng 1 chiều các số thực
// function SumNumber(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(num>0){
//                         result+=num
//                 }
//         }
//         return result
// }
// console.log(SumNumber([-15,45,-1,45,46,45]))
// Bài 202: Tính tổng các giá trị có chữ số đầu tiên là chữ số lẻ trong mảng 1 chiều các số nguyên
// function FindNumberFirst(number){
//         let newString = String(Math.abs(number));
//         let FirstNumber = parseInt(newString[0]);
//         return FirstNumber%2 !== 0;
// }
// function TotalNumber(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(FindNumberFirst(num)){
//                         result+=num
//                 }
//         }
//         return result
// }
// console.log(TotalNumber([154,358,222,417,8,369]))
// Bài 203: Tinh tổng các chữ số có chữ số hàng chục là 5 trong mảng 1 chiều các số nguyên
// function TestHangChuc(number){
//                 let toStringNumber = Math.abs(number).toString();
//                 if(toStringNumber.length>=2){
//                 let HangChuc = toStringNumber[toStringNumber.length-2];
//                 return parseInt(HangChuc) === 5
//                 }
//                 return false
// }
// function SumNumber5(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(TestHangChuc(num)){
//                         result+=num
//                 }
//         }
//         return result
// }
// console.log(SumNumber5([12,-5,123,23,486,68,55,123,59,459]))
// Bài 204: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực
// function TotalNumber(arr){
//         let result = 0;
//         for(let i = 1; i< arr.length; i++){
//                 if(arr[i]>arr[i-1]){
//                         result += arr[i]
//                 }
//         }
//         return result
// }
// console.log(TotalNumber([45,69,32,58,33,96,21,-101,85]))
// Bài 205: Tính tổng các giá trị lớn hơn trị tuyệt đối của giá trị đứng liền sau nó trong mảng 1 chiều các số thực
// function TotalNumberOk(arr){
//         let result = 0;
//         for(let i = 0; i<arr.length-1; i++){
//                 if(arr[i]>Math.abs(arr[i+1])){
//                         result += arr[i]
//                 }
//         }
//         return result
// }
// console.log(TotalNumberOk([12,89,23,458,48,45,46,456,15458,45,-45,-45,8,45678,45845,58]))
// Bài 206: Tính tổng các giá trị lớn hơn các giá trị xung quanh trong mảng 1 chiều các số thực
//  Lưu ý: Một giá trị trong mảng có tối đa 2 giá trị xung quang
// function sumLargerThanSurrounding(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             // Xét trường hợp khi phần tử có hai phần tử xung quanh
//             if (i > 0 && i < arr.length - 1 && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//                 sum += arr[i];
//             }
//             // Xét trường hợp khi phần tử chỉ có một phần tử xung quanh
//             if ((i === 0 || i === arr.length - 1) && i < arr.length - 1 && arr[i] > arr[i + 1]) {
//                 sum += arr[i];
//             }
//         }
//         return sum;
//     }
    
//     // Ví dụ
//     console.log(sumLargerThanSurrounding([1, 3, 5, 2, 6, 4])); // Kết quả: 5 + 6 = 11
// Bài 207: Tính tổng các phần tử “cực trị” trong mảng. Một phần tử được gọi là cực trị khi nó lớn hơn hoặc nhỏ hơn các phần tử xung quanh nó/////25/02/2024
// function TotalNumber(arr){
//         let result = arr[0]+arr[arr.length-1];
//         for(let i = 1; i< arr.length; i++){
//                 if((arr[i]<arr[i-1]&&arr[i]<arr[i+1])||(arr[i]>arr[i-1]&&arr[i]>arr[i+1])){
//                         result+=arr[i]
//                 }
//         }
//         return result
// }
// console.log(TotalNumber([45,25,98,12,45,23,48,123]))
// Bài 208: Tính tổng các giá trị chính phương trong mảng 1 chiều các số nguyên
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
// function SumNumberIsPerfectSquare(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(isPerfectSquare(num)){
//                         result += num
//                 }
//         }
//         return result
// }
// console.log('Tổng các số chính phương trong mảng là: ',SumNumberIsPerfectSquare([15,45,5648,48,455,4815,48,4548,145,48,45,9]))
// Bài 209: Tính tổng các giá trị đối xứng trong mảng các số nguyên
// function TestNumber2(n){
//         var nString = Math.abs(n).toString();
//         var newNumber = nString.split('').reverse().join('');
//         if(parseFloat(newNumber) === Math.abs(n)){
//                 return true
//         };
//         return false
// }
// function TotaNumber(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(TestNumber2(num)){
//                         result += num
//                 }
//         }
//         return result
// }
// console.log(TotaNumber([121,323,555,-121,-555]))
// Bài 210: Tính tổng các giá trị có chữ số đầu tiên là chữ số chẵn trong mảng các số nguyên
// function FindNumberFirst(number){
//         let newString = String(Math.abs(number));
//         let FirstNumber = parseInt(newString[0]);
//         return FirstNumber%2 === 0;
// }
// function TotalNumberFirstEven(arr){
//         let result = 0;
//         for(let num of arr){
//                 if(FindNumberFirst(num)){
//                         result += num
//                 }
//         }
//         return result
// }
// console.log(TotalNumberFirstEven([152,458,5815,45815,45815,45156,4545,8,548545646,54545]))
// Bài 211: Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên
// function TestNumber(number) {
//         if (number < 2) {
//             return false;
//         }
//         if (number === 2) {
//             return true;
//         }
//         if (number % 2 === 0) {
//             return false;
//         }
//         const sqrtNum = Math.sqrt(number);
//         for (let i = 3; i <= sqrtNum; i += 2) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }
//         return true;
// }
// function AverageNumber(arr){
//         let count = 0;
//         let result = 0;
//         for(let num of arr){
//                 if(TestNumber(num)){
//                        result+=num;
//                        count++ 
//                 }
//         }
//         return count === 0 ? 0 : result/count
// }
// console.log('Trung bình cộng các số nguyên tố trong mảng là: ',AverageNumber([456,45,458.454,455,45.45,456,456,4588]))
// Bài 212: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
// function AveragePositiveNumber(arr){
//         let result = 0;
//         let count = 0;
//         for(let num of arr){
//                 if(num>0){
//                         result+=num;
//                         count++
//                 }
//         }
//         return count === 0 ? 0 : result/count
// }
// console.log(AveragePositiveNumber([45.48,456,456,45,45648,456485,4548,465,489456,-455]))
// Bài 213: Tính trung bình cộng các giá trị lớn hơn giá trị x trong mảng 1 chiều các số thực
// function AverageNumberX(arr,x){
//         let result = 0;
//         let count = 0;
//         for(let num of arr){
//                 if(num>x){
//                         result += num;
//                         count++
//                 }
//         }
//         return count === 0 ? 0 : result/count
// }
// console.log(AverageNumberX([15,45,45,45612,45,4515,4545,415,4545,4545,45815,4545,4545456,4545],19))
// Bài 214: Tính trung bình nhân các giá trị dương có trong mảng 1 chiều các số thực
// function GeometricMean(arr){
//         let result = 1;
//         let count = 0;
//         for(let num of arr){
//                 if(num>0){
//                 result *=num;
//                 count++
//         }
// }
//         return count === 0 ? 0 : Math.pow(result,1/count)
// }
// console.log(GeometricMean([15,45,485,45616,456156,41,544,5645,456]))
// Bài 215 (*): Tính khoảng các trung bình giữa các giá trị trong mảng
// function AverageDistance(arr){
//         let IntValue = 0;
//         if(arr.length === 0){
//                 return 0
//         }
//         if(arr.length === 1){
//                 return arr[0]
//         }
//         for(let i = 0; i< arr.length-1; i++){
//                 IntValue += (Math.abs(arr[i]-arr[i+1]))
//         }
//         return IntValue/(arr.length-1)
// }
// console.log(AverageDistance([156,456,456456,456,456]))
// Bài 216: Đếm số lượnɡ số chẵn tronɡ mảnɡ
// function CountEvenNumber(arr){
//         let count = 0;
//         for(let num of arr){
//                 if(num%2===0){
//                         count++
//                 }
//         }
//         return count
// }
// console.log('Số lượng số chẵn trong mảng là: ',CountEvenNumber([45,45485,4548,1548,45845,4814854,8484,74845,4845,484575]))
// Bài 217: Đếm số dươnɡ chiɑ hết cho 7 tronɡ mảnɡ
// function CountNumber(arr){
//         let count = 0;
//         for(let num of arr){
//                 if(num>0 && num%7===0){
//                         count++
//                 }
//         }
//         return count
// }
// console.log('Số lượng các số dương chia hết cho 7 trong mảng là: ',CountNumber([7,49,587,456,489,456,456,456]))
// Bài 218: Đếm số đối xứnɡ tronɡ mảnɡ
// function TestNumber2(n){
//         var nString = Math.abs(n).toString();
//         var newNumber = nString.split('').reverse().join('');
//         if(parseFloat(newNumber) === Math.abs(n)){
//                 return true
//         };
//         return false
// }
// function CountNumber(arr){
//         let count = 0;
//         for(let num of arr){
//                 if(TestNumber2(num)){
//                         count++
//                 }
//         }
//         return count
// }
// console.log('Tổng số đối xứng trong mảng là: ',CountNumber([1221,-1221,5858585,141414125]))
// Bài 219: Đếm số lần xuất hiện củɑ ɡiá trị x tronɡ mảnɡ
// function countOccurrences(arr, x) {
//         let count = 0;
//         for (let num of arr) {
//             if (num === x) {
//                 count++;
//             }
//         }
//         return count;
// }
//     let arr = [1, 5, 2, 3, 5, 4, 5];
//     let x = 5;
//     console.log("Số lần xuất hiện của giá trị", x, "trong mảng là:", countOccurrences(arr, x));
// Bài 220: Đếm số lượnɡ ɡiá trị tận cùnɡ bằnɡ 5 tronɡ mảnɡ
// function CountLastNumber5(arr){
//         let count = 0;
//         for(let i = arr.length-1; i>=0;i--){
//                 if(arr[i]===5){
//                         count++
//                 }
//                 else{
//                         break;
//                 }
//         }
//         return count 
// }
// console.log(CountLastNumber5([456456,45615,4515,4815,45845,45,5,5,5,5,5,5]))
// Bài 221: Cho biết sự tươnɡ quɑn ɡiữɑ số lượnɡ chẵn và lẻ tronɡ mảnɡ

// Hàm trả về 1 tronɡ 3 ɡiá trị -1, 0, 1

// Giá trị -1 là chẵn nhiều hơn lẻ

// Giá trị 0 là chẵn bằnɡ lẻ              

// Giá trị 1 là chẵn ít hơn lẻ
// function Correlation(arr){
//         let countEven = 0;
//         let countOdd = 0;
//         for(let num of arr){
//                 if(num%2==0){
//                         countEven++
//                 }
//                 else{
//                         countOdd++
//                 }
//         }
//         if(countEven===countOdd){
//                 return 0
//         }
//         if(countEven>countOdd){
//                 return -1
//         }
//         if(countEven<countOdd){
//                 return 1
//         }
// }
// console.log(Correlation([15,45,4512,4,45615,4515,45,45645,456456,456456,456,456,1,0]))

// Bài 222: Đếm phần tử lớn hơn hɑy nhỏ hơn phần tử xunɡ quɑnh mảnɡ ////// 26/02/2024
// function CountNumber(arr){
//         let count = 0;
//         for(let i = 1; i< arr.length-1; i++){
//                 if((arr[i]>arr[i-1]&&arr[i]>arr[i+1])||(arr[i]<arr[i-1]&&arr[i]<arr[i+1])){
//                         count++
//                 }
//         }
//         return count
// }
// console.log(CountNumber([145,45156,4845,489,458478,4584,48945,48]))
// Bài 223: Đếm số nɡuyên tố tronɡ mảnɡ
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }else if(number===2){
//                 return true;
//         }else if(number%2===0){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// }
// function CountNumber(arr){
//         let count = 0;
//         for(let num of arr){
//                 if(TestNumber(num)){
//                         count++
//                 }
//         }
//         return count
// }
// console.log(CountNumber([145,458,45,13,45,91]))
// Bài 224: Đếm số hoàn thiện tronɡ mảnɡ
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong == number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function CountNumber(arr){
//         let Count = 0;
//         for(let num of arr){
//                 if(SoHoanThien(num)){
//                         Count++
//                 }
//         }
//         return Count
// }
// console.log('Trong mảng có ',CountNumber([156,45125,45615,456145,4515,456456,45615,456145,456]),' Số hoàn thiện')
// Bài 225: Đếm số lượnɡ ɡiá trị lớn nhất có tronɡ mảnɡ
// function CountNumberMax(arr){
//         let result = -Infinity;
//         let count = 0;
//         for(let num of arr){
//                 if(num>result){
//                         result = num;
//                         count = 1;
//                 }
//                 else if(num===result){
//                         count++
//                 }
//         }
      
//         return count
// }
// console.log(CountNumberMax([456,4545,4545,4545,4545,4515,454545,4561265,456,4561265,4561265]))
// Bài 226: Hãy xác định số lượnɡ phần tử kề nhɑu mà cả 2 đều chẵn
// function countEvenNeighbours(arr){
//         let count = 0;
//         for(let i = 0; i<arr.length-1; i++){
//                 if(arr[i]%2===0&&arr[i+1]%2===0){
//                         count++
//                 }
//         }
//         return count
// }
// console.log(countEvenNeighbours([45,4,56,123,58,3,456,45,3,45645,45,45]))
// Bài 227: Hãy xác định số lượnɡ phần tử kề nhɑu mà cả 2 trái dấu
// function CountNumber(arr){
//         let count = 0;
//         for(let i = 0; i< arr.length-1; i++){
//                 if(arr[i]*arr[i+1]<0){
//                         count++ 
//         }
// }
//      return count
// }
// console.log(CountNumber([45,45,4845,4545458,45645,4545645,-454545,-456,4,45,-45]))
// Bài 228: Hãy xác định số lượnɡ phần tử kề nhɑu mà số đứnɡ sɑu cùnɡ dấu số đứnɡ trước và có ɡiá trị tuyệt đối lớn hơn
// function countNumber(arr){
//         let count = 0;
//         for(let i = 0; i<arr.length-1;i++){
//                 if((arr[i]*arr[i+1])>0 && (arr[i]<Math.abs(arr[i+1]))){
//                         count++
//                 }
//         }
//         return count
// }
// console.log('Số lượng phần tử kề nhau thỏa mãn yêu cầu đề bài là: ',countNumber([456,-456456,-451514,456145,4545,4545,145456458,456,456456,45645,4545]))
// Bài 229: Đếm số lượnɡ các ɡiá trị phân biệt có tronɡ mảnɡ
// function CountNumber(arr){
//         let test = new Set(arr);
//         return test.size 
// }
// console.log(CountNumber([156,45,48,4545,456,4545,4545,45,4547,45,45]))
// Bài 230: Liệt kê tần suất xuất hiện các ɡiá trị tronɡ mảnɡ (mỗi ɡiá trị liệt kê 1 lần)
// function listFrequencyNumber(arr) {
//         let result = {};
//         for (let num of arr) {
//             if (result[num]) {
//                 result[num]++;
//             } else {
//                 result[num] = 1;
//             }
//         }
//         return result;
// }
// console.log(listFrequencyNumber([45, 45645, 45645, 45, 454]));
// Bài 231: Hãy liệt kê các ɡiá trị xuất hiện tronɡ mảnɡ 1 chiều các số nɡuyên đúnɡ 1 lần
// function listNumberOne(arr){
//         let test = new Set(arr);
//         return test.size
// }
// console.log(listNumberOne([156,456456,48,45,4564,54564,458,458,45845,456]))
// Bài 232: Hãy liệt kê các ɡiá trị xuất hiện tronɡ dãy quá 1 lần. Lưu ý: mỗi ɡiá trị liệt kê 1 lần
// function listNumber(arr){
//         let result = {};
//         for(let num of arr){
//                 if(result.hasOwnProperty(num)){
//                         result[num]++
//                 }
//                 else {
//                         result[num] = 1
//                 }
//         }
//         for(let num2 in result){
//                 if(result[num2]===1){
//                         delete result[num2]
//                 }
//         }
//         return result
// }
// console.log(listNumber([456,45,45,456,456,456,458,456456,456,456,4545]))
// Bài 233: Hãy liệt kê tần suất củɑ các ɡiá trị xuất hiện tronɡ dãy. Lưu ý: mỗi ɡiá trị liệt kêt tần suất 1 lần
// function listNumber(arr){
//         let result = {};
//         for(let num of arr){
//                 if(result[num]){
//                         result[num]++;
//                 }
//                 else {
//                         result[num] = 1;
//                 }
//         }
//         return result
// }
// console.log(listNumber([456,45,45,456,456,456,458,456456,456,456,4545]))
// Bài 234: Cho 2 mảnɡ ɑ, b. Đếm số lượnɡ ɡiá trị chỉ xuất hiện 1 lần tronɡ 2 mảnɡ
// function removeDuplicates(arr) {
//         let newArr = arr.filter(value => arr.indexOf(value)===arr.lastIndexOf(value));
//         return newArr
// }
// console.log(removeDuplicates([55,44,33,55,1,1,2,2]))
// function countCommonNumber(a,b){
//         let test1 = removeDuplicates(a);
//         let test2 = removeDuplicates(b);
//         let count = 0;
//         for(let num1 of test1){
//                 for(let num2 of test2){
//                         if(num2===num1){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// console.log(countCommonNumber([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]))
// Bài 235: Cho 2 mảnɡ ɑ, b. Liệt kê các ɡiá trị chỉ xuất hiện 1 lần tronɡ 2 mảnɡ
// function removeDuplicates(arr) {
//         let newArr = arr.filter(value => arr.indexOf(value)===arr.lastIndexOf(value));
//         return newArr
// }
// function countCommonNumber(a,b){
//         let test1 = removeDuplicates(a);
//         let test2 = removeDuplicates(b);
//         let list = [];
//         for(let num1 of test1){
//                 for(let num2 of test2){
//                         if(num2===num1){
//                                 list.push(num1)
//                         }
//                 }
//         }
//         return list
// }
// console.log('Danh sách các giá trị chỉ xuất hiện 1 lần trong 2 mảng là: ',countCommonNumber([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]))
// Bài 236(*): Cho 2 mảnɡ ɑ, b. Hãy cho biết số lần xuất hiện củɑ mảnɡ ɑ tronɡ mảnɡ b////                                                        27/02/2024
// function listAppearNumber(a,b){
//         let result = {};
//         let newArra = [...new Set(a)];

//         for(let num of newArra){
//                 result[num]=0
//                 for(let num2 of b){
//                         if(num ===num2){
//                                 result[num]++
//                         }
//                 }
//         }
//         return result
// }
// console.log('Số lần xuất hiện phần tử mảng của mảng a trong mảng b là: ',listAppearNumber([1,2,2,3,4,5],[1,2,2,5,3,3,4,5]))
// Bài 237 + 238(*): Hãy liệt kê các ɡiá trị có số lần xuất hiện nhiều nhất tronɡ mảnɡ
// function listMaxNumber(arr){
//         // Khởi tạo 1 object để lưu tần suất xuất hiện của từng số trong mảng và tìm ra tần xuất lớn nhất trong tất cả các số
//         let started = {};
//         let maxcount = 0;
//         for(let num of arr){
//                 if(started[num]){
//                         started[num]++
//                 }
//                 else{
//                         started[num]=1
//                 }
//                 if(started[num]>maxcount){
//                         maxcount = started[num]
//                 }

//         }
//         // Khi có số tần suất lớn nhất rồi, ta đi lọc các số trong đối tượng ban đầu sao cho bằng số tần xuất lớn nhất rồi đem nó lấy kết quả ra mảng
//         let result = [];
//         for(let key2 in started){
//                 if(started[key2]===maxcount){
//                         result.push(parseFloat(key2));
//                 }
//         }
//         return result
// }
// console.log(listMaxNumber([12,12,5,48,69,12,69,69]))
// Bài 239: Hãy đếm số lượnɡ số nɡuyên tố phân biệt tronɡ mảnɡ
// function Songuyento(number){
//         if(number === 2){
//                 return true;
//         }
//         if(number < 2 || number%2===0){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function countSoNguyenTo(arr){
//         let newArr = [...new Set(arr)];
//         let count = 0;
//         for(let num of newArr){
//                 if(Songuyento(num)){
//                         count++
//         }
// }
// return count
// }
// console.log(countSoNguyenTo([12,11,59,42,456,31,48,12]))

// Bài 240: Kiểm trɑ mảnɡ có ɡiá trị 0 hɑy khônɡ? Có trả về 1, khônɡ có trả về 0
// function testZeroInArray(arr){
//         return arr.some(value => value ===0) ? 1 : 0
// }
// console.log(testZeroInArray([45,456,45,45,456,456,4560,5656]))
// Bài 241: Kiểm trɑ mảnɡ có 2 ɡiá trị 0 liên tiếp hɑy khônɡ? Có trả về 1, khônɡ có trả về 0
// function testArray(arr){
//         let result = 0
//         for(let i = 0; i<arr.length-1; i++){
//                 if(arr[i]===0 && arr[i+1]===0){
//                         result = 1
//                 }
//         }
//         return result
// }
// console.log(testArray([15,456,45,156,45,45,45,45,456,456,456,0,0]))
// Bài 242: Kiểm trɑ mảnɡ có số chẵn hɑy khônɡ? Có trả về 1, khônɡ có trả về 0
// function testArrayHaveEven(arr){
//         return arr.some(value => value%2===0) ? 1 :0
// }
// console.log(testArrayHaveEven([15]))
// Bài 243: Kiểm trɑ mảnɡ có số nɡuyên tố hɑy khônɡ? Có trả về 1, khônɡ có trả về 0
// function Songuyento(number){
//         if(number === 2){
//                 return true;
//         }
//         if(number < 2 || number%2===0){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function testArray(arr){
//         return arr.some(value => Songuyento(value))?1 : 0
// }
// console.log(testArray([1232,156,56,156,156,456,456,456456,6]))
// Bài 244: Kiểm trɑ mảnɡ thỏɑ tính chất: mảnɡ khônɡ có số hoàn thiện lớn hơn 256. Có trả về 1, khônɡ có trả về 0
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if((!isFinite(number) || number < 1 || Math.floor(number) !== number) && number>256){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 return Tong === number
//         }
// }
// function testArray256(arr){
//         return arr.some(value => SoHoanThien(value))?1:0
// }
// console.log(testArray256([6,45,45,45,45,45,28,45]))
// Bài 245: Kiểm trɑ mảnɡ có toàn số chẵn khônɡ? Có trả về 1, khônɡ có trả về 0
// function testArrayHaveEven(arr){
//         return arr.every(value => value%2===0) ? 1 :0
// }
// console.log(testArrayHaveEven([16,14,2,18]))
// Bài 246: Kiểm trɑ mảnɡ có đối xứnɡ khônɡ? Có trả về 1, khônɡ có trả về 0
// function testSymmetricNumber(arr){
//         for(let i = 0; i< arr.length/2 ; i++){
//                 if(arr[i]!==arr[(arr.length-1)-i]){
//                         return 0
//                 }       
//         }
//         return 1
// }
// console.log(testSymmetricNumber([1,2,3,2,1]))
// Bài 247: Tɑ định nɡhĩɑ 1 mảnɡ có tính chất lẻ khi: tổnɡ củɑ 2 phần tử liên tiếp luôn là lẻ. Kiểm trɑ mảnɡ có tính chất lẻ hɑy khônɡ
// function testOddArray(arr){
//         for(let i = 0; i < arr.length-1; i++){
//                 if((arr[i]+arr[i+1])%2===0){
//                         return false
//                 }
//         }
//         return true
// }
// console.log(testOddArray([12,15,13]))
// Bài 248: Kiểm trɑ mảnɡ có tănɡ dần hɑy khônɡ
// function testIncreasingNumber(arr){
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i]>arr[i+1]){
//                         return false
//                 }
//         }
//         return true
// }
// console.log('Kết quả là: ',testIncreasingNumber([1,2,3,3,4,5,6]))
// Bài 249: Kiểm trɑ mảnɡ có ɡiảm dần hɑy khônɡ
// function testIncreasingNumber(arr){
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i]<arr[i+1]){
//                         return false
//                 }
//         }
//         return true
// }
// console.log('Kết quả là: ',testIncreasingNumber([6,5,3,4,3,2,1]))
// Bài 250: Hảy cho biết các phần tử tronɡ mảnɡ có lập thành cấp số cộnɡ hɑy khônɡ? Nếu có chỉ rɑ cônɡ sɑi d
// function testAPOfArray(arr){
//         let result = true
//         let newArray = arr.sort((a,b)=> a-b);
//         let discount = newArray[1]-newArray[0];
//         for(let i = 1; i<newArray.length; i++){
//                 if((newArray[i]-newArray[i-1])!==discount){
//                         return result = false
//                 }
//         }
//         return result ? 'Các phần tử trong mảng có thể tạo thành cấp số cộng với công sai là: '+ discount : result
// }
// console.log(testAPOfArray([1,3,5,7,9,11,13,15]))
// Bài 251: Hãy cho biết các phần tử tronɡ mảnɡ có bằnɡ nhɑu khônɡ
// function testNumberOfArray(arr){
//         let firstNumber = arr[0];
//         return arr.every(value => value === firstNumber)
// }
// console.log(testNumberOfArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]))
// Bài 252: Tɑ định nɡhĩɑ 1 mảnɡ được ɡọi là dạnɡ sónɡ khi phần tử có trị số I lớn hơn hoặc nhỏ hơn 2 phần tử xunɡ quɑnh. Hãy viết hàm kiểm trɑ mảnɡ có dạnɡ sónɡ khônɡ
// function testArray(arr){
//         if(arr.length < 3){
//                 return false
//         }
//         else{
//                 for(let i = 1; i <arr.length-1;i++){
//                         if((arr[i]>arr[i+1]&&arr[i]>arr[i-1])||(arr[i]<arr[i-1]&&arr[i]<arr[i+1])){
//                                continue;
//                         }
//                         else{
//                                 return false
//                         }
//                 }
//                 return true
//         }
// }
// console.log(testArray([456,456,456,456,456,456,4548,456,456,456456]))
// Bài 253: Hãy cho biết tất cả các phần tử tronɡ mảnɡ ɑ có nằm tronɡ mảnɡ b khônɡ
// function kiemTraTonTai(arrA, arrB) {
//         let setB = new Set(arrB); // Tạo một Set từ mảng B
//         // Lọc các phần tử của mảng A mà cũng tồn tại trong Set của mảng B
//         let a = arrA.filter(element => setB.has(element));
//         return a.length === arrA.length ? 'Mảng A là con của Mảng B' : 'Mảng A không là con của mảng B'
// }
// let mangA = [1,2,3,4,5,6,7,21];
// let mangB = [1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3];
// console.log(kiemTraTonTai(mangA, mangB))
// Bài 254: Hãy đếm ɡiá trị tronɡ mảnɡ thỏɑ: lớn hơn tất cả các ɡiá trị đứnɡ đằnɡ trước nó
// function demGiaTriLonNhat(arr) {
//         let count = 0;
//         let maxSoFar = arr[0]; // Giả sử phần tử đầu tiên là lớn nhất
    
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > maxSoFar) {
//                 count++; // Tăng biến đếm nếu phần tử hiện tại lớn hơn tất cả các phần tử trước đó
//                 maxSoFar = arr[i]; // Cập nhật giá trị lớn nhất cho các phần tử tiếp theo
//             }
//         }
    
//         return count;
//     }
    
//     // Ví dụ:
//     let mang = [4, 3, 6, 8, 2, 10, 7];
//     console.log(demGiaTriLonNhat(mang)); // Kết quả: 3 (có 3 giá trị lớn hơn tất cả các giá trị đứng đằng trước nó)
// Kỹ thuật sắp xếp

// Bài 255: Sắp xếp mảnɡ tănɡ dần                       /// 28/02/2024
// function sapXepTangDan(arr) {
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<arr.length; j++){
//                         if(arr[j]<arr[i]){
//                                 let temp = arr[i]
//                                 arr[i]=arr[j];
//                                 arr[j]=temp
//                         }
//                 }
//         }
//         return arr
// }
// var arr = [22, 45, 45, 5, 46, 48, 4, 545, 45, 45, 456, 465, 45];
// console.log(sapXepTangDan(arr));
// // Bài 256: Sắp xếp mảnɡ ɡiảm dần
// function SapXepGiamDan(arr){
// for(let i = 0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//                 if(arr[i]<arr[j]){
//                         let temp = arr[i]
//                         arr[i]=arr[j];
//                         arr[j]=temp
//                 }
//         }
// }
// return arr
// }
//  console.log(SapXepGiamDan([15,12,56,26,56,56,2669,-56,565,656]))
// Bài 257: Sắp xếp lẻ tănɡ dần nhưnɡ ɡiá trị khác ɡiữ nɡuyên vị trí
// function sapXepTangDan(arr){
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1 ; j < arr.length ; j++){
//                         if(arr[j]<arr[i]){
//                                 let temp = arr[i];
//                                 arr[i]=arr[j];
//                                 arr[j]=temp
//                         }
//                 }
//         }
//         return arr
// }
// function sapXepLeTangDanGiuSoChan(arr2){
//         let listOddNumber = sapXepTangDan(arr2.filter(value => value %2 !== 0));
//         let j = 0;
//         for(let k = 0; k < arr2.length; k++){
//                 if(arr2[k] % 2 !==0){
//                         arr[k]=listOddNumber[j];
//                         j++;
//                 }
                
//         }
//         return arr2
// }
//     var arr = [1,5,8,9,6,3,25,4,1,2,3];
// console.log(sapXepLeTangDanGiuSoChan(arr));
// // Bài 258: Sắp xếp số nɡuyên tố tănɡ dần nhưnɡ ɡiá trị khác ɡiữ nɡuyên vị trí
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// }
// function sapXepSoNguyenToTangDan(arr){
//         let listSoNguyenToTangDan = arr.filter(value => TestNumber(value)).sort((a,b)=> a-b);
//         let j = 0;
//         for(let k = 0; k < arr.length; k++){
//                 if(TestNumber(arr[k])){
//                         arr[k]=listSoNguyenToTangDan[j];
//                         j++;
//                 }
                
//         }
//         return arr
// }
//     var arr = [1,5,8,9,6,3,25,4,1,2,3];
// console.log(sapXepSoNguyenToTangDan(arr));
// Bài 259: Sắp xếp số hoàn thiện ɡiảm dần nhưnɡ ɡiá trị khác ɡiữ nɡuyên vị trí
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong == number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function sapXepSoHoanThienGiamDan(arr){
//         let listSoHoanThien = arr.filter(value => SoHoanThien(value)).sort((a,b)=> b-a);
//         let j = 0;
//         for(let k = 0; k < arr.length; k++){
//                 if(SoHoanThien(arr[k])){
//                         arr[k]=listSoHoanThien[j];
//                         j++;
//                 }
                
//         }
//         return arr
// }
//     var arr = [1,5,8,9,6,3,25,4,1,2,3];
// console.log(sapXepSoHoanThienGiamDan(arr));
// Bài 260: Cho 2 mảnɡ ɑ, b. Hãy cho biết mảnɡ b có phải là hoán vị củɑ mảnɡ ɑ khônɡ ////// 29/02/2024
// function testHoanVi(MangA,MangB){
//         if(MangA.length !== MangB.length){
//                 return false;
//         }
//         else{
//                 let newMangA = MangA.sort((a,b)=>a-b);
//                 let newMangB = MangB.sort((a,b)=> a-b);
//                 let j = 0;
//                 for(let num of newMangA){
//                         if(num !== newMangB[j++]){
//                                 return false
//                         }
//                 }
//         }
//         return true
// }
// console.log(testHoanVi([1,2,3],[3,1,2]))
// Bài 261: Sắp xếp số dươnɡ tănɡ dần, các số âm ɡiữ nɡuyên vị trí
// function sapXepSoDuongTangDan(arr){
//         let listSoDuongTangDan = arr.filter(value => value>0).sort((a,b)=>a-b);
//         let j = 0;
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i] > 0){
//                         arr[i] = listSoDuongTangDan[j++];
                        
//                 }
//         }
//         return arr
// }
// console.log(sapXepSoDuongTangDan([-45,25,1,-9,25,3]))
// Bài 262: Sắp xếp chẵn, lẻ tănɡ dần nhưnɡ vị trí tươnɡ đối ɡiữɑ các số khônɡ thɑy đổi
// function sapXepChanLeGiuNguyenViTri(arr){
//         let listChanTangDan = arr.filter(value => value %2===0).sort((a,b)=>a-b);
//         let listLeTangDan = arr.filter(value => value %2 !==0).sort((a,b)=> a-b);
//         let j = 0;
//         let k = 0;
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]%2===0){
//                         arr[i] = listChanTangDan[j++]
//                 }
//                 else{
//                         arr[i] = listLeTangDan[k++]
//                 }
//         }
//         return arr
// }
// console.log(sapXepChanLeGiuNguyenViTri([-5,5,-47,2,5,3,6,89,4,1,5,5,11,-12,4]))
// Bài 263: Sắp xếp số dươnɡ tănɡ dần, âm ɡiảm dần. Vị trí tươnɡ đối khônɡ thɑy đổi
// function sapXepDuongTangAmGiamGiuNguyenViTri(arr){
//         let listDuongTangDan = arr.filter(value => value > 0).sort((a,b)=>a-b);
//         let listAmGiamDan = arr.filter(value => value < 0).sort((a,b)=> b-a);
//         let j = 0;
//         let k = 0;
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]>0){
//                         arr[i] = listDuongTangDan[j++]
//                 }
//                 else if(arr[i]<0){
//                         arr[i] = listAmGiamDan[k++]
//                 }
//         }
//         return arr
// }
// console.log(sapXepDuongTangAmGiamGiuNguyenViTri([-5,5,-47,2,5,3,6,89,4,1,5,5,11,-12,4]))
// Bài 264: Trộn 2 mảnɡ đã tănɡ thành 1 mảnɡ được sắp xếp tănɡ
// function Tron2MangVasapXepMangTangDan(arr1,arr2){
//         let newArr = arr1.concat(arr2);
//         return newArr.sort((a,b)=> a-b);
// }
// console.log(Tron2MangVasapXepMangTangDan([1,5,8,9,3,6,5,4,1,2,5,8,6,33,2,4],[-8,96,2,10,21,25,5,85,1,1,2,2,5,5,1,-2,3,6,5,-4]))
// Bài 265: Cho 2 mảnɡ tănɡ. Hãy trộn thành 1 mảnɡ ɡiảm dần
// function Tron2MangVasapXepMangTangDan(arr1,arr2){
//         let newArr = arr1.concat(arr2);
//         return newArr.sort((a,b)=> b-a);
// }
// console.log(Tron2MangVasapXepMangTangDan([1,5,8,9,3,6,5,4,1,2,5,8,6,33,2,4],[-8,96,2,10,21,25,5,85,1,1,2,2,5,5,1,-2,3,6,5,-4]))
                                // Kỹ thuật thêm
// Bài 266: Thêm 1 phần tử x vào mảng tại vị trí k
// function addValueInK(arr,x,k){
//         arr.splice(k,0,x);
//         return arr
// }
// console.log(addValueInK([1,2,4],3,2))
// Bài 267: Viết hàm nhập mảng sao cho khi nhập xong thì giá trị trong mảng sắp xếp giảm dần
// function nhapVaSapXepGiamDan() {
//         let arr = [];
//         let input;
        
//         while (true) {
//             input = prompt("Nhập giá trị của mảng (nhập 'done' khi hoàn thành): ");
//             if (input === 'done') break;
//             arr.push(parseFloat(input));
//         }
//         arr.sort((a, b) => b - a);
//         return "Mảng sau khi sắp xếp giảm dần: ", arr;
// }
    
//     // Gọi hàm để thực thi
// console.log(nhapVaSapXepGiamDan());
// Bài 268: Hãy tạo mảng b từ mảng a các giá trị 0, 1 để mảng có tính chẵn lẻ
// function testChanLe(arr){
//         let result = [];
//         for(let num of arr){
//                 if(num%2===0){
//                         result.push(0)
//                 }
//                 else {
//                         result.push(1)
//                 }
//         }
//         return result
// }
// console.log(testChanLe([5,9,8,5,2,3,6,54,7,8,5,22,3]))
// Bài 269: Thêm x vào trong mảng tăng nhưng vẫn giữ nguyên tính tăng của mảng
// function addnumberX(arr,x){
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]===x){
//                         arr.splice(i,0,x);
//                         return arr
//                 }
//                 else if(arr[i]>x){
//                         arr.splice(i,0,x);
//                         return arr
//                 }
//         }
// }
// console.log(addnumberX([45,45,45,48,49,50,51,52,59],46))
// Bài 270: Nhập mảng sau khi nhập xong đã tự sắp xếp tăng dần
// function nhapVaSapXepTangDan() {
//         let arr = [];
//         let input;
        
//         while (true) {
//             input = prompt("Nhập giá trị của mảng (nhập 'done' khi hoàn thành): ");
//             if (input === 'done') break;
//             arr.push(parseFloat(input));
//         }
//         arr.sort((a, b) => a - b);
//         return "Mảng sau khi sắp xếp tăng dần: ", arr;
// }
// console.log(nhapVaSapXepTangDan())
// Kỹ thuật xóa
// Bài 271: Xóa các phần tử có chỉ số k trong mảng
// function xoaPhanTuK(arr,k){
//         arr.splice(k,1);
//         return arr
// }
// console.log(xoaPhanTuK([45,456,456,5456,156],3))
// Bài 272: Hãy xóa tất cả số lớn nhất trong mảng các số thực   ////////////////////// (01/3/2024)
// function deleteMaxNumber(arr){
//         let MaxNumber = Math.max.apply(null,arr);
//         for(let i = arr.length-1; i>=0; i--){
//                 if(arr[i] === MaxNumber){
//                         arr.splice(i,1)
//                 }
//         }
//         return arr
// }
// console.log(deleteMaxNumber([1,2,3,4,56,7,98,9,78,45,45,45,98,9,8,9,8,9,8,9,8,98,98,9,8,9]))
// Bài 273: Xóa tất cả các số âm trong mảng
// function deleteSoAm(arr){
//         let newArray = arr.filter(value => value>0);
//         return newArray
// }
// console.log(deleteSoAm([15,456,456,4,4456,456,-4554,4,4848,-1,4545,4,8-45,45,44,-8,45,4545]))
// Bài 274: Xóa tất cả các số chẵn trong mảng
// function deleteEvenNumber(arr){
//         let newArray = arr.filter(value => value%2!==0);
//         return newArray
// }
// console.log(deleteEvenNumber([15,4564,48,456,45,468,48,48,489,48,489489,489,489,489,489,489,489]))
// Bài 275: Xóa tất cả các số chính phương trong mảng
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
// function deletePerfectNumber(arr){
//         let result = arr.filter(value => !isPerfectSquare(value));
//         return result
// }
// console.log(deletePerfectNumber([25,36,456,456,456489156,5,156,456,156,,156,48,45,45,1,45,15]))
// Bài 276: Xóa tất cả các phần tử trùng với x
// function deleteSameNumberX(arr,x){
//         let result = arr.filter(value => value!==x);
//         return result;
// }
// console.log(deleteSameNumberX([45,45,4,4845,484,845,48,4,848,48,4,4],484))
// Bài 277: Xóa tất cả các số nguyên tố trong mảng
// function TestNumber(number){
//         if(number < 2 || !Number.isInteger(number)){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function deleteSoNguyenTo(arr){
//         let result = arr.filter(value => !TestNumber(value));
//         return result
// }
// console.log(deleteSoNguyenTo([45,456,4,48.48,48,45,484,84,54,845,489,48]))
// Bài 278: Xóa tất cả các phần tử trùng nhau trong mảng và chỉ giữ lại duy nhất 1 phần tử
// function deleteNumber(arr){
//         let result = [...new Set(arr)];
//         return result
// }
// console.log(deleteNumber([5,5,5,5,5,6,6,6,6,6,8,5,25,45456,45,45,45,456456,9,522,15,5]))
// Bài 279: Xóa tất cả các phần tử xuất hiện nhiều hơn 1 lần trong mảng
// function deleteNumber(arr){
//         let result = [...new Set(arr)];
//         return result
// }
// console.log(deleteNumber([5,5,5,5,5,6,6,6,6,6,8,5,25,45456,45,45,45,456456,9,522,15,5]))
                                // Kỹ thuật xử lý mảng
// Bài 280: Hãy đưa số 1 về đầu mảng
// function sapXepSo1VeDauMang(arr){
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i]===1){
//                         let temp = arr.splice(i,1)[0];
//                         arr.unshift(temp);
//                 }
//         }
//         return arr
// }
// console.log(sapXepSo1VeDauMang([45,45,454515,1,48,45,4845,1,1]))
// Bài 281: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng
// function listOddAndEvenNumber(arr){
//         let Even = [];
//         let Odd = [];
//         for(let num of arr){
//                 if(num%2===0){
//                         Even.push(num)
//                 }
//                 else{
//                         Odd.push(num)
//                 }
//         }
//         return Even.concat([0],Odd)
// }
// console.log(listOddAndEvenNumber([15,156,45,45645,645,4,848,15,48,45]))
// Bài 282: Đưa các số chia hết cho 3 về đầu mảng
// function MoveOddNumberToFirst(arr){
//         let ChiaHetCho3 = arr.filter(value => value%3===0);
//         let KhongChiaHetCho3 = arr.filter(value => value%3!==0);
//         let result = ChiaHetCho3.concat(KhongChiaHetCho3);
//         return result
// }
// console.log(MoveOddNumberToFirst([456,456,456,456,45648,156,48,456,789,456,78,4845,48]))
// Bài 283: Đảo ngược mảng ban đầu
// function ReveredArray(arr){
//         let result = arr.reverse();
//         return result
// }
// console.log(ReveredArray([156,456,156,456,156,489,156,489,156489,156,489]))
// Bài 284: Đảo ngược thứ tự các số chẵn trong mảng
// function ReverseEvenNumber(arr){
//         let EvenNumberDaoNguoc = arr.filter(value => value%2===0).reverse();
//         let j = 0;
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]%2===0){
//                         arr[i]=EvenNumberDaoNguoc[j++]
//                 }
//         }
//         return arr

// }
// console.log(ReverseEvenNumber([456,1456,15,1548,15,15,45,15,4]))
// Bài 285: Đảo ngược thứ tự số dương trong mảng
// function ReverseSoDuong(arr){
//         let SoDuongDaoNguoc = arr.filter(value => value >0).reverse();
//         let j = 0;
//         for(let i =0; i<arr.length; i++){
//                 if(arr[i]>0){
//                         arr[i]=SoDuongDaoNguoc[j++]
//                 }
//         }
//         return arr
// }
// console.log(ReverseSoDuong([15,456,456,-456,156,4,156,-48,15489,-156,489,456]))
// Bài 286: Dịch trái xoay vòng k phần tử trong mảng
// function MoveKElement(arr,k){
//         let a = arr.splice(k);
//         let b = a.concat(arr);
//         return b;
// }
// console.log(MoveKElement([1,2,3,4,5,6,7,8],3))
// Bài 287: Dịch phải xoay vòng k phần tử trong mảng
// function MoveRightKElement(arr,k){
//          let a = arr.splice(arr.length-k);
//          let b = a.concat(arr);
//          return b
// }
// console.log(MoveRightKElement([1,2,3,4,5,6,7],2))
// Bài 288: Hãy xuất phần tử trong mảng theo yêu cầu: chẵn vàng, lẻ trắng(HTML,CSS)
// Bài 289: Xuất mảng: chẵn nằm trên 1 mảng, lẻ nằm trên hàng tiếp theo(HTML,CSS)
// Bài 290: Đảo ngược thứ tự số chẵn và lẻ trong mảng nhưng giữ vị trí tương đối(không hiểu đề bài)
// Bài 291: Biến đổi mảng bằng cách thay giá trị max = giá trị min và ngược lại //////////////////////////////////(02/3/2024)
// function TranferArray(arr){
//         let numberMax = Math.max(...arr);
//         let numberMin = Math.min(...arr);
//         for(let i = 0; i< arr.length; i++){
//                 if(arr[i] === numberMax){
//                         arr[i] = numberMin;
//                 }
//                 else if(arr[i] === numberMin){
//                         arr[i] = numberMax;
//                 }
//         }
//         return arr
// }
// console.log(TranferArray([456,4,456,456489,456,78,456,789,456,7894,8,789]))
// Bài 292: Biến đổi mảng  số thực bằng cách thay tất cả phần tử trong mảng bằng số nguyên gần nó nhất (giống làm tròn)
// function tranformArray(arr){
//         for(let i = 0; i<arr.length; i++){
//                 if(!Number.isInteger(arr[i])){
//                         arr[i] = Math.round(arr[i])
//                 }
//         }
//         return arr
// }
// console.log(tranformArray([456,456,456156,45.1545,745.4545,4545,45645.4]))
                                // Kỹ thuật xử lý mảng con
// Bài 293: Liệt kê tất cả các mảng con
// function listChildArray(arr){
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         result.push(arr.slice(i,j))
//                 }
//         }
//         return result
// }
// console.log(listChildArray([1,2,3,4]))
// Bài 294: Liệt kê mảng con có độ dài lớn hơn 2 phần tử
// function listChildArray(arr){
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         let subarrr = arr.slice(i,j);
//                         if(subarrr.length>2){
//                                 result.push(subarrr)
//                         }
//                 }
//         }
//         return result
// }
// console.log(listChildArray([1,2,3,4]))
// Bài 295: Liệt kê dãy con tăng dần
// function listChildArray(arr){
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         let subarrr = arr.slice(i,j);
//                         if(subarrr.length>1){
//                                 let boolend = true;
//                                 for(let k = 0; k<subarrr.length-1; k++){
//                                         if(subarrr[k]>subarrr[k+1]){
//                                                 boolend = false;
//                                                 break;
//                                         }
//                                 }
//                                 if(boolend === true){
//                                         result.push(subarrr)
//                                 }
//                         }
//                 }
//         }
//         return result
// }
// console.log(listChildArray([1,5,5,9]))
// Bài 296: Liệt kê dãy con tăng và chứa giá trị lớn nhất
// function listChildArray(arr){
//         let maxNumber = Math.max(...arr);
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         let subarrr = arr.slice(i,j);
//                         if(subarrr.length>1){
//                                 let boolend = true;
//                                 for(let k = 0; k<subarrr.length-1; k++){
//                                         if(subarrr[k]>subarrr[k+1]){
//                                                 boolend = false;
//                                                 break;
//                                         }
//                                 }
//                                 if(boolend && subarrr.includes(maxNumber)){
//                                         result.push(subarrr)
//                                 }
//                         }
//                 }
//         }
//         return result
// }
// console.log(listChildArray([1,3,5,9,9,2,3,5,8,6]))
// Bài 297: Tính tổng từng mảng con tăng                                                   (04/03/2024)
// function listChildArray(arr){
//         let result = [];
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         let subarrr = arr.slice(i,j);
//                         if(subarrr.length>1){
//                                 let boolend = true;
//                                 for(let k = 0; k<subarrr.length-1; k++){
//                                         if(subarrr[k]>subarrr[k+1]){
//                                                 boolend = false;
//                                                 break;
//                                         }
//                                 }
//                                 if(boolend === true){
//                                         result.push(subarrr)
//                                 }
//                         }
//                 }
//         }
//         let object = {};
//         for(let arr of result){
//                 object[arr.join('_')]=arr.reduce((khoitao,phantu)=> khoitao+phantu,0);
//         }
//         return object
// }
// console.log(listChildArray([1,5,5,9]))
// Bài 298: Đếm mảng con tăng có độ dài lớn hơn 1
// function countChildArray(arr){
//         let result = [];
//         let count = 0;
//         for(let i = 0; i< arr.length; i++){
//                 for(let j = i+1; j<=arr.length;j++){
//                         let subarrr = arr.slice(i,j);
//                         if(subarrr.length>1){
//                                 let boolend = true;
//                                 for(let k = 0; k<subarrr.length-1; k++){
//                                         if(subarrr[k]>subarrr[k+1]){
//                                                 boolend = false;
//                                                 break;
//                                         }
//                                 }
//                                 if(boolend){
//                                         result.push(subarrr);
//                                         count++
//                                 }
//                         }
//                 }
//         }
//         return count
// }
// console.log(countChildArray([1,5,2,8,6,9,2,4]))
// Bài 299: Liệt kê dãy con toàn dương và có độ dài lớn hơn 1
// function listChildArray(arr) {
//         let result = [];
//         let newArray = arr.filter(value => value >0);
//         for(let i = 0; i < newArray.length; i++){
//                 for(let j = i+2; j <=newArray.length;j++){
//                         let subArray = newArray.slice(i,j);
//                         result.push(subArray);
//                 }
//         }
//         return result
// }
// console.log(listChildArray([1, 5, -8, 6]));
// Bài 300: Đếm mảng con giảm
// function countChildArrayDown(arr){
//         let result = [];
//         let count = 0;
//         for(let i = 0; i<arr.length; i++){
//                 for(let j =i+2; j<=arr.length; j++){
//                         let subArray = arr.slice(i,j);
//                         let boolend = true;
//                         for(let k = 0; k<subArray.length; k++){
//                                 if(subArray[k]<subArray[k+1]){
//                                         boolend = false;
//                                         break;
//                                 }
//                         }
//                         if(boolend){
//                                 result.push(subArray);
//                                 count++;
//                         }
//                 }
//         }
//         return count
// }
// console.log(countChildArrayDown([1,5,8,9,6,3,2,5,8]))
// Bài 301: Cho biết mảng a có phải là mảng con của mảng b không                               (05/03/2024)
// function isSubset(A, B) {
//        if(A.length>B.length){
//         return false;
//        }
//        else{
//         let newB = new Set(B);
//         let newA = new Set(A);
//         for(let num of newA){
//                 if(!newB.has(num)){
//                         return false
//                 }
//         }
//         return true
// }
// }
// console.log(isSubset([1,5,8,1],[1,5,2,6,3,9,3,69,3,85,2,8,2,8,25]))
// Bài 302: Đếm số lần xuất hiện của mảng a trong mảng b
// function countAinB(A,B){
//         let object1 = {};
//         let SetOfA = new Set(A);
//         let object2 = {};
//         let quotient = [];
//         for(let num of A){
//                 if(object1[num]){
//                         object1[num]++
//                 }
//                 else{
//                         object1[num]=1
//                 }
//         }
//         for (let num of B) {
//                 if (SetOfA.has(num)) {
//                     if (object2[num]) {
//                         object2[num]++;
//                     }
//                     else{
//                         object2[num]=1
//                     }
//                 }
//             }
//         let numbersInAOnly = [];
//         let SetOfB = new Set(B);
//         for (let num of A) {
//         if (!SetOfB.has(num)) {
//             numbersInAOnly.push(num);
//         }
//         }
//         for(let num of numbersInAOnly){
//                 object2[num] = 0;
//         }
//         for(let key in object2){
//                 quotient.push(Math.trunc(object2[key]/object1[key]));
//         }
//         return Math.min(...quotient)
// }
// console.log('Số lần xuất hiện của mảng A trong Mảng B là: ',countAinB([1,2,9,1,10],[1,8,9,6,3,2,5,1,5,4,7,8,5,2,1,3,6,5,4,8]))
// Bài 303: Tìm dãy con toàn dương dài nhất
// function findMaxChild(arr){
//         let result = [];
//         for(let num of arr){
//                 if(num>0){
//                         result.push(num)
//                 }
//         }
//         return result
// }
// console.log('Mảng con dương và dài nhất là: ',findMaxChild([456,45,9,89,568,956,89,-45489,-45,45,48,-45,48,4578,458,-458]))
// Bài 304(*): Cho mảng a, số nguyên M. Tìm 1 mảng con sao cho tổng các phần tử bằng M
// function findChildArray(arr,M){
//         for(let i =0 ; i<arr.length; i++){
//                 for(let j = i+1; j<=arr.length; j++){
//                         let subarray = arr.slice(i,j);
//                         if(subarray.reduce((a,b)=> a+b,0) === M){
//                                 return subarray
//                         }
//                 }
//         }
//         return 'Không có mảng con nào thoả mãn';
// }
// console.log('Mảng con thoả mãn yêu cầu đề bài là: ',findChildArray([1,2,3,5,3,6,8,9],10))
// Bài 305(*): Tìm dãy con toàn dương có tổng lớn nhất
// function findChildArray(arr){
//         let maxCurrent = 0;
//         let sumCurrent = 0;
//         let index;
//         let result = [];
//         for(let i = 0; i < arr.length; i++){
//                 if(arr[i]>0){
//                         sumCurrent+=arr[i];
//                         if(sumCurrent>maxCurrent){
//                                 maxCurrent = sumCurrent;
//                                 index = i
//                         }
//                 }
//                 else{
//                         sumCurrent = 0;
//                 }
//         }
//         for(let i = index; i>=0; i--){
//                 if(arr[i]<=0){
//                         break;
//                 }
//                 result.push(arr[i]);
                
//         }
//         return result.reverse()
// }
// console.log(findChildArray([1,5,8,6,-2,2,3,-6,9,82,5]))
// Bài 306: Tìm mảng con có tổng lớn nhất                       //07/03/2024 (bài này tôi chưa hiểu hết, từ từ ta sẽ giải quyết sau) 
// function maxSubarray(arr) {
//         let maxCurrent = arr[0];
//         let maxGlobal = arr[0];
//         let start = 0;
//         let end = 0;
//         let tempStart = 0;
    
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > maxCurrent + arr[i]) {
//                 tempStart = i;
//                 maxCurrent = arr[i];
//             } else {
//                 maxCurrent = maxCurrent + arr[i];
//             }
    
//             if (maxCurrent > maxGlobal) {
//                 maxGlobal = maxCurrent;
//                 start = tempStart;
//                 end = i;
//             }
//         }
    
//         return arr.slice(start, end + 1);
//     }
    
//     // Ví dụ:
//     const arr = [-2,-8,-9,8,-8];
//     console.log("Mảng con có tổng lớn nhất là:", maxSubarray(arr));
// Xây dựng mảng
// Bài 307: Tạo mảng b chỉ chứa giá trị lẻ từ mảng a
// function creatSubArray(A){
//     let result = [];
//     for(let i = 0; i<A.length; i++){
//     if(A[i]%2!==0){
//         result.push(A[i]);
//     }
//     }
//     return result
// }
// console.log(creatSubArray([1,5,8,6,3,0,245,8,2,21,5,2,5,2,5,4]))
// Bài 308: Tạo mảng b chỉ chứa giá trị âm từ mảng a
// function creatArrayB(A){
//     let result = [];
//     for(let num of A){
//         if(num<0){
//             result.push(num)
//         }
//     }
//     return result;
// }
// console.log(creatArrayB([1,-8,9,5,3,5,45,-45,456,-78,456,-155,-154545,-15,458,-15,45]))
// Bài 309: Tạo mảng b sao cho b[i] = tổng các phần tử lân cận với a[i] trong mảng a
// function creatArrayB(A){
//     let ArrayB = [];
//     for(let i = 1; i<A.length-1; i++){
//         let sum = A[i]+A[i+1]+A[i-1];
//         ArrayB.push(sum)
//     }
//     ArrayB.push(A[A.length-1]+A[A.length-2]);
//     ArrayB.unshift(A[0]+A[1]);
//     return ArrayB
// }
// console.log(creatArrayB([1,8,56,6,9]))
// Bài 310: Tạo mảng b chỉ chứa số nguyên tố từ mảng a
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function creatArrayB(A){
//     let result = [];
//     for(let num of A){
//         if(TestNumber(num)){
//             result.push(num)
//         }
//     }
//     return result.length===0 ? 'Không chứa số nguyên tố' : result
// }
// console.log('Mảng B chứa các số nguyên tố của mảng A là:',creatArrayB([1,8,52,8,15,48,15,48,15,48,11]))
// Chương 6: Ma trận
// Bài 311 + 313: Viết hàm nhập xuất ma trận số nguyên
// function NhapMaTran(){
//     let rows = parseInt(prompt('Nhập Số hàng Ma Trận Đi Bạn'));
//     let cols = parseInt(prompt('Nhập số cột của Ma trận đi bạn'));
//     let matrix = [];
//     for(let  i = 0; i <rows ; i++){
//         matrix[i]=[];
//         for(let j = 0; j<cols;j++){
//             let value = parseInt(prompt('Nhập phần tử thứ ' + (j+1) + 'của hàng' + (i+1)));
//             matrix[i][j]=value
//         }
//     }
//     return matrix
// }
// function XuatMaTran(maxtrix){
//     console.log('Ma trận của bạn:');
//     for(let i = 0; i < maxtrix.length; i++){
//         console.log(...maxtrix[i])
//     }
// }

// XuatMaTran(NhapMaTran())
// Bài 312 + 314: Viết hàm nhập xuất ma trận số thực
// function NhapMaTran(){
//     let rows = parseInt(prompt('Nhập Số hàng Ma Trận Đi Bạn'));
//     let cols = parseInt(prompt('Nhập số cột của Ma trận đi bạn'));
//     let matrix = [];
//     for(let  i = 0; i <rows ; i++){
//         matrix[i]=[];
//         for(let j = 0; j<cols;j++){
//             let value = parseFloat(prompt('Nhập phần tử thứ ' + (j+1) + 'của hàng' + (i+1)));
//             let tries = 0;
//             while(tries<3){
//             if(!isNaN(value)){
//                 matrix[i][j]=value;
//                 break;
//             }
//             else{
//                 alert('Số của bạn nhập vừa rồi không phải số thực, mời bạn nhập lại');
//                 value = parseFloat(prompt('Mời bạn nhập lại số'));
//                 matrix[i][j]=value;
//                 tries++
//             }
//             }
//             if(tries===3){
//                 alert('Bạn đã nhập quá số lần cho phép. Bạn phải nhập lại ma trận từ đầu');
//                 return false;
            
//         }
//     }
//     }
//     return matrix
// }
// function XuatMaTran(maxtrix){
//     console.log('Ma trận của bạn:');
//     for(let i = 0; i < maxtrix.length; i++){
//         console.log(...maxtrix[i])
//     }
// }

// XuatMaTran(NhapMaTran());
// Bài 315: Viết hàm tìm giá trị lớn nhất trong ma trận số thực
// function InputMaxtrix(){
//     let rows = parseInt(prompt('Nhập số hàng của ma trận'));
//     let cols = parseInt(prompt('Nhập số cột của ma trận'));
//     let maxtrix = [];
//     for(let i = 0 ; i<rows; i++){
//         maxtrix[i]=[];
//         for(let j = 0; j<cols; j++){
//             let value = parseFloat(prompt(`Nhập phần tử thứ ${j+1} của hàng ${i+1}`));
//             maxtrix[i][j] = value;
//         }
//     }
//     return maxtrix;
// }
// function findMaxNumberInMatrix(matrix){
//     if(matrix.length ===0 || matrix[0].length === 0){
//         return 'Mảng không hợp lệ';
//     }
//     else{
//         let maxNumber = -Infinity;
//         for(let i = 0; i< matrix.length; i++){
//             for(let j = 0; j<matrix[i].length; j++){
//                 if(matrix[i][j]>maxNumber){
//                     maxNumber = matrix[i][j]
//                 }
//             }
//         }
//         return maxNumber
//     }
// }
// console.log('Số lớn nhất của ma trận này là: ',findMaxNumberInMatrix(InputMaxtrix()))
// Bài 316: Viết hàm kiểm tra trong ma trận số nguyên có tồn tại giá trị chẵn nhỏ hơn 2015?
// function testNumber2015(matrix){
//     if(matrix.length ===0 || matrix[0].length ===0){
//         return 'Ma trận này không hợp lệ, mời nhập lại';
//     }
//     else{
//         for(let i = 0; i<matrix.length; i++){
//             if(matrix[i].some(value => value%2===0 && value<2015)){
//                 return 'Có'
//             }
//         }
//         return 'Không'
//     }
// }
// console.log(testNumber2015([[2015,2016,2017],[156456,45648,4564],[45458,14545,4545845]]))
// Bài 317: Viết hàm đếm số lượng số nguyên tố trong ma trận số nguyên
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function countPrimeNumber(matrix){
//     if(matrix.length ===0 || matrix[0].length ===0){
//         return 'Ma trận này không hợp lệ, mời nhập lại';
//     }
//     else{
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//             for(let num of matrix[i]){
//                 if(TestNumber(num)){
//                     count++
//                 }
//             }
//         }
//         return count
//     }
// }
// console.log(countPrimeNumber([[1,2,3],[4,5,6],[7,8,9]]))
// Bài 318: Viết hàm tính tổng các giá trị âm trong ma trận số thực
// function cacularNumber(matrix){
//     if(matrix.length ===0 || matrix[0].length ===0){
//         return 'Ma trận này không hợp lệ, mời nhập lại';
//     }
//     else{
//     let result = 0;
//     for(let row of matrix){
//         for(let num of row){
//             if(num <0){
//                 result+=num;
//             }
//         }
//     }
//     return result;
//     }
// }
// console.log('Tổng các số âm trong ma trận là:',cacularNumber([[1,2,-9,-8],[-8,4,8,-7],[7,8,9,6,-4]]))
// Bài 319: Viết hàm sắp xếp ma trận các số thực tăng dần từ trên xuống dưới và từ trái sang phải
// function sortMatrix(matrix){
//     let newArr = matrix.flat().sort((a,b)=>a-b);
//     let newMatrix = [];
//     for(let i = 0; i<newArr.length; i+=3){
//         let subarray = newArr.slice(i,i+3);
//         newMatrix.push(subarray)
//     }
//     return newMatrix
// }
// console.log(sortMatrix([[1,5,8,4],[4,8,5,2],[9,-7,1,2]]))
// Kỹ thuật tính toán
// Bài 320: Tính tổng các số dương trong ma trận các số thực
// function totalNumber(matrix1,matrix2){
//     for(let i = 0; i<matrix1.length; i++){
//         for(let j = 0; j<matrix1[i].length; j++){
//             matrix1[i][j] = matrix1[i][j] + matrix2[i][j]
//         }
//     }
//     return matrix1
// }
// let matrix1 = [
//     [1,5,8,9,6,8],
//     [4,8,5,6,9,23],
//     [5,8,9,6,2,14]
// ];
// let matrix2 = [
//     [1,2,5,8,4,9],
//     [1,2,5,8,8,6,3],
//     [2,5,74,6,3,3]
// ];

// console.log(totalNumber(matrix1,matrix2))
// Bài 321: Tính tích các giá trị lẻ trong ma trận các số nguyên                   // Kết thúc ngày 07/03/2024
// function productNumber(matrix){
//     let result = 1;
//     for(let rows of matrix){
//         for(let num of rows){
//             if(num%2!==0){
//                 result*=num
//             }
//         }
//     }
//     return result
// }
// let matrix1 = [
//     [8,5,2,1,5],
//     [2,3,6,5,4]
// ]
// console.log(productNumber(matrix1))
// Bài 322: Tính tổng các giá trị trên 1 dòng trong ma trận các số thực                                //Ngày 08/3/2024
// function TongCacGiaTriTren1Dong(matrix){
//         let result = {};
//         for(let i = 0 ;i <matrix.length; i++){
//                 let sum = matrix[i].reduce((a,b)=>a+b,0);
//                 result[`Dòng ${i+1} có tổng là:`] = sum
//         }
//         return result
// }
// let matrix = [
//         [1,5,2,3,6],
//         [2,5,8,9,6],
//         [2,5,8,6,6]
// ]
// console.log(TongCacGiaTriTren1Dong(matrix))
// Bài 323: Tính tích các giá trị dương trên 1 cột trong ma trận các số thực
// function productMatrixCols(matrix){
//         let result = {};
//         for(let i = 0; i < matrix[0].length; i++){
//                 let tich = 1;
//                 let testnumber = false;
//                 for(let j = 0; j <matrix.length; j++){
//                         if(matrix[j][i]>0){
//                                 tich*=matrix[j][i];
//                                 testnumber = true;
//                         }
//                 }
//                 if(testnumber){
//                         result[`Tích của phần hàng thứ ${i+1} là`] = tich
//                        }
//                        else{
//                         result[`Tích của phần hàng thứ ${i+1} là`] = 0
//                        }
                
//         }
//         return result
// }
// let matrix = [
//         [0,-5,8,-9,6],
//         [-2,5,8,9,6],
//         [-2,5,6,9,4]
// ]
// console.log(productMatrixCols(matrix))
// Bài 324: Tính tổng các giá trị dương trên 1 dòng trong ma trận các số thực
// function TongGiaTriDuongTren1Dong(matrix){
//         let result = {};
//         for(let rows of matrix){
//                 let sum = 0;
//                 for(let num of rows){
//                         if(num > 0){
//                                 sum+=num
//                         }
//                 }
//                 result[`Tổng số dương dãy thứ ${matrix.indexOf(rows)+1} là`] = sum
//         }
//         return result
// }
// let matrix = [
//         [1,5,-8,2,3],
//         [2,5,6,3,-8],
//         [5,8,9,6,3]
// ]
// console.log(TongGiaTriDuongTren1Dong(matrix))
// Bài 325: Tính tích các số chẵn trên 1 cột trong ma trận các số nguyên
// function TongCacSoChanTren1Cot(matrix){
//         let result = {};
//         for(let j = 0; j <matrix[0].length; j++){
//                 let sum = 0;
//                 for(let i = 0; i<matrix.length; i++){
//                         if(matrix[i][j]%2===0){
//                                 sum+=matrix[i][j]
//                         }
//                 }
//                 result[`Tổng các số chẵn của dòng ${j+1} là:`] = sum
//         }
//         return result
// }
// let matrix = [
//         [2,5,8,9,6,4],
//         [2,5,8,9,6,3],
//         [2,1,4,5,8,9]
// ]
// console.log(TongCacSoChanTren1Cot(matrix))
// Bài 326: Tính trung bình cộng các số dương trong ma trận các số thực
// function AverageNumberMatrix(matrix){
//         let count = 0;
//         let sum = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 sum+=num;
//                                 count++
//                         }
//                 }
//         }
//         return sum>0 ? sum/count : 0
// }
// let matrix = [
//         [1,5,9,8,7,6],
//         [8,9,56,4,12,2],
//         [8,9,7,4,5,2]
// ]
// console.log('Trung bình cộng các số dương trong ma trận là: ',AverageNumberMatrix(matrix))
// Bài 327: Tính tổng các giá trị nằm trên biên của ma trận
// function TongCacGiaTriBien(matrix){
//         let result = 0;
//         for(let i = 0; i<matrix.length;i++){
//                 if(i === 0 || i === matrix.length-1){
//                         for(let j = 0; j <matrix[i].length; j++){
//                                 result+=matrix[i][j]
//                         }
//                 }
//                 else{
//                         result += matrix[i][0]+matrix[i][matrix[i].length-1]
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6],
//         [5,8,9,6,2],
//         [9,5,1,2,3]
// ]
// console.log(TongCacGiaTriBien(matrix))
// function TongCacGiaTriBien(matrix){
//         let result = 0;
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = 0; j < matrix[i].length; j++){
//                 // Kiểm tra nếu phần tử nằm ở hàng đầu tiên hoặc hàng cuối cùng, hoặc nằm ở cột đầu tiên hoặc cột cuối cùng
//                 if(i === 0 || i === matrix.length - 1 || j === 0 || j === matrix[i].length - 1){
//                     result += matrix[i][j]; // Cộng giá trị của phần tử vào biến kết quả
//                 }
//             }
//         }
//         return result;
//     }
    
//     let matrix = [
//         [1, 5, 8, 9, 6],
//         [5, 8, 9, 6, 2],
//         [9, 5, 1, 2, 3]
//     ];
    
//     console.log(TongCacGiaTriBien(matrix));
// Bài 328: Tính trung bình nhân các số dương trong ma trận các số thực
// function TinhTrungBinhNhanMatrix(matrix){
//         let count = 0;
//         let result = 1;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 result*=num;
//                                 count++
//                         }
//                 }
//         }
//         return count === 0 ? 0 : Math.pow(result,1/count)
// }
// let matrix = [
//         [1,-5,8,9,6],
//         [2,5,-8,-7,1],
//         [2,1,4,5,8]
// ];
// console.log(TinhTrungBinhNhanMatrix(matrix))
// Bài 329: Hãy biến đổi ma trận bằng cách thay các giá trị âm bằng trị tuyệt đối của nó
// function transformMatrix(matrix){
//         for(let rows of matrix){
//                 for(let i = 0; i<rows.length; i++){
//                         if(rows[i]<0){
//                                 rows[i] = Math.abs(rows[i])
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,2,3],
//         [4,-5,6],
//         [7,8,-9]
// ]
// console.log(transformMatrix(matrix))
// Bài 330: Hãy biên đổi ma trận số thực bằng cách thay các giá trị bằng giá trị nguyên gần nó nhất
// function transformMatrix(matrix){
//         for(let rows of matrix){
//                 for(let i = 0; i<rows.length; i++){
//                         if(!isNaN(rows[i])){
//                                 rows[i] = Math.round(rows[i])
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1.5,3,6,9.8,4,8],
//         [1.8,2.6,9.2,1,3,6],
//         [1,2,5,6,3,3.5]
// ];
// console.log(transformMatrix(matrix))
// Bài 331: Tính tổng các giá trị trên 1 dòng của ma trận các số thực
// function TongGiaTriTren1Dong(matrix,n){
//         let tong = matrix[n-1].reduce((a,b)=>a+b,0);
//         if(n>matrix.length || !Number.isInteger(n) || n <= 0){
//                 return 'Số liệu nhập vào không hợp lệ, mời nhập lại'
//         }
//         return tong
// }
// let matrix = [
//         [1.5,6.3,8.9,6.6],
//         [1.7,6.9,3.3,6.6],
//         [2.2,3.3,6.4,9.75]
// ]
// console.log('Tổng các giá trị theo dòng yêu cầu là:',TongGiaTriTren1Dong(matrix,3))
// Bài 332: Tính tổng các giá trị lẻ trên 1 cột của ma trận các số nguyên
// function TongGiaTriLeMatrix(matrix,n){
//         let result = 0;
//         for(let subarr of matrix){
//                 if(subarr[n-1]%2!==0){
//                 result += subarr[n-1]
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,8],
//         [2,5,3,6,8,9],
//         [3,6,9,8,4,1]
// ];
// console.log(TongGiaTriLeMatrix(matrix,4));
// Bài 333: Tính tổng các số hoàn thiện trong ma trận các số nguyên
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 return Tong === number
//         }
// }
// function TongSoHoanThienMatrix(matrix){
//         let result = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(SoHoanThien(num)){
//                                 result+=num
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,4],
//         [8,5,6,9,7,8],
//         [2,3,6,5,9,9]
// ];
// console.log(TongSoHoanThienMatrix(matrix))
// Kỹ thuật đếm
// Bài 334: Viết hàm đếm số lượng số dương trong ma trận các số thực
// function countPositiveNumberMatrix(matrix){
//         let count = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,8,9,6,52,4],
//         [3,2,5,6,8,9],
//         [3,2,1,4,5,6]
// ];
// console.log(countPositiveNumberMatrix(matrix))
// Bài 335: Đếm số lượng số nguyên tố trong ma trận các số nguyên
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function countSoNguyenToMatrix(matrix){
//         let count = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 count++
//                         }
//                 }
//         }
//         return count;
// }
// let matrix = [
//         [1,2,5,6,9,8,4],
//         [1,2,5,4,8,6,9],
//         [7,8,9,6,232,1]
// ];
// console.log(countSoNguyenToMatrix(matrix))
// Bài 336: Đếm tần suất xuất hiện của 1 giá trị x trong ma trận các số thực
// function TanSuatNumberXMatrix(matrix,n){
//         let count = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num === n){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,8,9,6,8],
//         [2,5,6,9,8,7],
//         [1,2,5,4,8,7]
// ]
// let x = 8;
// console.log(`Tần suất của số ${x} là:`,TanSuatNumberXMatrix(matrix,x),`lần`)
// Bài 337: Đếm số chữ số trong ma trận các số nguyên dương                                           //Kết thúc ngày 08/3/2024
// function DemChuSoTrongMaTran(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         count++
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,8,9,6,8],
//         [2,5,6,9,8,7],
//         [1,2,5,4,8,7]
// ]
// console.log(DemChuSoTrongMaTran(matrix))
// Bài 338: Đếm số lượng số dương trên 1 hàng trong ma trận các số thực                     //Ngày 09/03/2024
// function countSoDuongMatrix(matrix){
//         let result = {};
//         for(let i = 0 ; i < matrix.length; i++){
//                 let count = 0;
//                 for(let j = 0; j < matrix[i].length; j++){
//                         if(matrix[i][j]>0)
//                         count++
//                 }
//                 result[`Số lượng số dương trong dòng ${i+1} là`] = count;
//         }
//         return result
// }
// let matrix = [
//         [2,1,5,8,9,-7],
//         [9,5,-7,3,-8,-7],
//         [8,5,2,1,5,6]
// ]
// console.log(countSoDuongMatrix(matrix))
// Bài 339: Đếm số lượng số hoàn thiện trên 1 hàng trong ma trận các số nguyên
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 return Tong === number
//         }
// }
// function countPerfectNumberMatrix(matrix){
//         let result = {};
//         for(let i = 0; i< matrix.length; i++){
//                 let count = 0;
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(SoHoanThien(matrix[i][j])){
//                                 count++
//                         }
//                 }
//                 result[`Số lượng số hoàn thiện ở hàng thứ ${i+1} là`] = count
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,9,6,3],
//         [8,5,2,3,6,5],
//         [3,8,9,87,7,4]
// ]
// console.log(countPerfectNumberMatrix(matrix))
// Bài 340: Đếm số lượng số âm trên 1 cột trong ma trận các số thực
// function countSoAm1CotMatrix(matrix){
//         let result = {};
//         for(let j = 0; j < matrix[0].length; j++){
//                 let count = 0;
//                 for(let i = 0; i<matrix.length; i++){
//                         if(matrix[i][j]<0){
//                                 count++
//                         }
//                 }
//                 result[`Số lượng số âm trong cột ${j+1} là`] = count
//         }
//         return result
// }
// let matrix = [
//         [-9,5,6,3,2,3],
//         [-8,-3,6,5,4,9],
//         [-2,-8,-6,-3,0,5]
// ]
// console.log(countSoAm1CotMatrix(matrix))
// Bài 341: Đếm số lượng số dương trên biên trong ma trận các số thực
// function countSoDuongDuongBienMatrix(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 if(i === 0 || i === matrix.length-1){
//                         for(let j = 0; j <matrix[i].length; j++){
//                                 if(matrix[i][j]>0){
//                                         count++
//                                 }
//                         }
//                 }
//                 else {
//                         if(matrix[i][0]>0 || matrix[i][matrix.length-1]>0){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,3,6.8,-6.5,3.12],
//         [-0.25,-48,-55,66.32],
//         [3.6,-6.6,0.25,3.3]
// ]
// console.log(countSoDuongDuongBienMatrix(matrix))
// Bài 342(*): Đếm số lượng phần tử cực đại trong ma trận các số thực. Một phần tử được gọi là cực đại khi nó lớn hơn các phần tử xung quanh
// function countHamCucTri(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(i === 0){
//                                 if(j === 0){
//                                         if(matrix[i][j]>matrix[i+1][j+1] && matrix[i][j] > matrix[i+1][j]){
//                                                 count++
//                                         }
//                                 }
//                                 else if(j === (matrix[i].length-1)){
//                                         if(matrix[i][j]>matrix[i][j-1] && matrix[i][j]>matrix[i+1][j]){
//                                                 count++
//                                         }
//                                 }
                                
//                         } else  if(i === matrix.length-1){
//                                         if(j === 0){
//                                                 if(matrix[i][j]>matrix[i-1][j] && matrix[i][j] > matrix[i][j+1]){
//                                                         count++
//                                                 } 
//                                         }
//                                         else if(j === (matrix[i].length-1)){
//                                                 if(matrix[i][j]>matrix[i][j-1] && matrix[i][j]>matrix[i-1][j]){
//                                                         count++
//                                                 }
//                                         }
//                         };
//                         if(j === 0){
//                                 if(matrix[i][j]>matrix[i][j+1]&&matrix[i][j]>matrix[i-1][j]&&matrix[i][j]>matrix[i+1][j]){
//                                         count++
//                                 }
//                         } else if(j === matrix[0].length-1){
//                                 if(matrix[i][j]>matrix[i-1][j]&& matrix[i][j]>matrix[i+1][j]&&matrix[i][j]>matrix[i][j-1]){
//                                         count++
//                                 }
//                         };
//                         if(i > 0 && i < matrix.length - 1 && j > 0 && j < matrix[0].length - 1){
//                                 if(matrix[i][j] > matrix[i + 1][j] && matrix[i][j] > matrix[i - 1][j] && matrix[i][j] > matrix[i][j + 1] && matrix[i][j] > matrix[i][j - 1]){
//                                     count++;
//                                 }
//                         }

//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,2,5,6,9],
//         [2,3,6,5,8],
//         [2,3,6,9,7]
// ];
// console.log(countHamCucTri(matrix))

// Bài 343(*): Đếm số lượng phần tử cực trị trong ma trận các số thực. Một phần tử được gọi là cực trị khi nó lớn hớn các phần tử xung quanh hoặc nhỏ hơn các phần tử xung quanh
// Bài 344(*): Đếm số lượng giá trị có trong ma trận các số thực. Chú ý: Nếu có k phần tử (k >= 1) trong ma trận bằng nhau thì ta chỉ tính là 1
// Bài 345(*): Tính tổng các phần tử cực trị trong ma trận các số thực. Một phần tử được gọi là cực trị khi nó lớn hớn các phần tử xung quanh hoặc nhỏ hơn các phần tử xung quanh
// Bài 346(*): Đếm số lượng giá trị “Hoàng Hậu” trên ma trận. Một phần tử được gọi là Hoàng Hậu khi nó lớn nhất trên dòng, trên cột và 2 đường chéo đi qua nó
// Bài 347(*): Đếm số lượng giá trị “Yên Ngựa” trên ma trận. Một phần tử được gọi là Yên Ngựa khi nó lớn nhất trên dòng và nhỏ nhất trên cột
// Kỹ thuật đặt cờ hiệu
// Bài 348: Kiểm tra ma trận có tồn tại số dương hay không
// function testSoDuongMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 return 'Có'
//                         }
//                 }
//         }
//         return 'Không'
// }
// let matrix = [
//         [-1,-5,-2,-4],
//         [-3,-6,-5,-9],
//         [-3,-2,-5,-6]
// ]
// console.log(testSoDuongMatrix(matrix))
// Bài 349: Kiểm tra ma trận có tồn tại số hoàn thiện hay không
// function isPerfectNumber(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 if(Tong === number){
//                         return true
//                 }
//                 else{
//                         return false;
//                 }
//         }
// }
// function testPerfectNumberMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(isPerfectNumber(num)){
//                                 return 'Có'
//                         }
//                 }
//         }
//         return 'Không'
// }
// let matrix = [
//         [1,5,8,9,0,4],
//         [8,9,11,54,1,8],
//         [8,9,5,3,3,2]
// ];
// console.log(testPerfectNumberMatrix(matrix))
// Bài 350: Kiểm tra ma trận có tồn tại số lẻ hay không
// function testMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num%2!==0){
//                                 return 'Có'
//                         }
//                 }
//         }
//         return 'Không'
// }
// let matrix = [
//         [4,8,5,6,9,8],
//         [2,5,6,9,8,7],
//         [2,3,6,5,4,7]
// ];
// console.log(testMatrix(matrix))
// Bài 351: Kiểm tra ma trận có toàn dương hay không
// function testMatrixSoDuong(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num<0){
//                                 return 'Có số Âm'
//                         }
//                 }
//         }
//         return 'Không có số âm'
// }
// let matrix = [
//         [8,5,6,9,8,7],
//         [2,5,6,9,8,7],
//         [-8,-9,3,1,2,8]
// ];
// console.log(testMatrixSoDuong(matrix))
// Bài 352: Kiểm tra một hàng ma trận có tăng dần hay không
// function testTangDanMatrix(matrix){
//         for(let rows of matrix){
//                 let test = true
//                 for(let j = 0; j<rows.length-1; j++){
//                         if(rows[j]>rows[j+1]){
//                                 test = false;
//                                 break;
//                         }
//                 }
//                 if(test){
//                         return 'Có'
//                 }
//         }
//         return 'Không'
// }
// let matrix = [
//         [1,5,9,8],
//         [8,9,6,2],
//         [1,2,3,1]
// ]
// console.log(testTangDanMatrix(matrix))
// Bài 353: Kiểm tra một cột ma trận có giảm dần hay không                                   //Kết thúc ngày 09/03/2024
// function testGiamDanMatrix(matrix){
//         for(let j = 0; j<matrix[0].length;j++){
//                 let test = true;
//                 for(let i = 0; i<matrix.length-1;i++){
//                         if(matrix[i][j]<matrix[i+1][j]){
//                                 test = false;
//                                 break;
//                         }
//                 }
//                 if(test){
//                         return 'Có'
//                 }
//         }
//         return 'Không'
// }
// let matrix = [
//         [1,8,9,6,5,2],
//         [5,6,8,9,7,8],
//         [3,9,11,4,7,8]
// ]
// console.log(testGiamDanMatrix(matrix))
// Bài 354: Kiểm tra các giá trị trong ma trận có giảm dần theo dòng và cột hay không         10/03/2024
// function testNumberMatrix(matrix){
//         let flatMatrix = matrix.flat();
//         for(let i = 0; i<flatMatrix.length-1; i++){
//                 if(flatMatrix[i]>flatMatrix[i+1]){
//                         return 'Không'
//                 }
//         }
//         return 'Có'
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [2,3,6,9,8,7],
//         [2,3,6,5,8,7]
// ];
// console.log(testNumberMatrix(matrix))
// Bài 355: Liệt kê các dòng toàn âm trong ma trận các số thực
// function listRowsMatrix(matrix){
//         let result = [];
//         for(let rows of matrix){
//                 let test = true
//                 for(let j = 0; j<rows.length-1; j++){
//                         if(rows[j]>=0){
//                                 test = false
//                         }
//                 }
//                 if(test){
//                         result.push(rows)
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,98,9,7,8],
//         [-7,8,9,-7,6,7],
//         [-8,-9,-3,-7,-4,-5]
// ]
// console.log('Danh sách các hàng trong ma trận toàn âm là:',listRowsMatrix(matrix))
// Bài 356: Liệt kê chỉ số các dòng chứa toàn giá trị chẵn trong ma trận các số nguyên
// function listIndexRows(matrix){
//         let Index = [];
//         for(let i = 0; i < matrix.length; i++){
//                 let test = true;
//                 for(let j = 0; j< matrix[0].length;j++){
//                         if(matrix[i][j] % 2 !==0){
//                                 test = false;
//                                 break;
//                         }
                        
//                 };
//                 if(test){
//                         Index.push(i)
//                 }
//         }
//         return Index
// }
// let matrix = [
//         [1,2,5,8,9,8],
//         [2,3,6,9,8,7],
//         [2,2,8,8,4,2]
// ];
// console.log('Chỉ số các dòng chứa toàn giá trị chẵn trong ma trận là: ',listIndexRows(matrix));
// Bài 357: Liệt kê các dòng có chứa số nguyên tố trong ma trận các số nguyên
// function Songuyento(number){
//         if(number === 2){
//                 return true;
//         }
//         if(number < 2 || number%2===0){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function listRowsHaveSoNguyenTo(matrix){
//         let result = [];
//         for(let i = 0; i< matrix.length; i++){
//                 for(let j = 0; j<matrix[0].length; j++){
//                         if(Songuyento(matrix[i][j])){
//                                 result.push(i+1);
//                                 break;
//                 }
//         }
// }
// return result

// }
// let matrix = [
//         [1,6,8,9,6,9],
//         [2,5,8,9,7,1],
//         [3,6,9,8,7,4]
// ];
// console.log('Các dòng có chứa số nguyên tố là: ',listRowsHaveSoNguyenTo(matrix))
// Bài 358: Liệt kê các dòng có chứa giá trị chẵn trong ma trận các số nguyên
// function listRowsHaveEvenNumber(matrix){
//         let result = [];
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix[0].length; j++){
//                         if(matrix[i][j]%2===0){
//                                 result.push(i+1);
//                                 break
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,6,8,9,6,9],
//         [1,5,3,9,7,1],
//         [3,6,9,8,7,4]     
// ]
// console.log('Các dòng có chứa giá trị chẵn trong ma trận là: ',listRowsHaveEvenNumber(matrix))
// Bài 359: Liệt kê các dòng có chứa giá trị âm trong ma trận các số thực
// function listRowsHavNegativeNumber(matrix){
//         let result = [];
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix[0].length; j++){
//                         if(matrix[i][j]<0){
//                                 result.push(i+1);
//                                 break
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,6,8,9,6,9],
//         [1,5,3,9,7,1],
//         [3,6,9,8,7,4]     
// ]
// console.log('Các dòng có chứa giá trị chẵn trong ma trận là: ', listRowsHavNegativeNumber(matrix))
// Bài 360: Liệt kê các cột trong ma trận các số nguyên có chứa số chính phương
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
// function listColumnsHaPerfectSquareNumberMatrix(matrix){
//         let result = [];
//         for(let j = 0; j<matrix[0].length; j++){
//                 for(let i = 0; i<matrix.length; i++){
//                         if(isPerfectSquare(matrix[i][j])){
//                                 result.push(j+1)
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [5,2,5,6,8,8,7],
//         [2,3,6,7,8,7,4],
//         [2,3,6,2,8,7,1]
// ]
// console.log('Các cột trong ma trận có chứa số chính phương là: ',listColumnsHaPerfectSquareNumberMatrix(matrix))
// Bài 361: Liệt kê các dòng trong ma trận các số thực thỏa mãn đồng thời các điều kiện sau:  dòng có chứa giá trị âm, giá trị 0 và giá trị dương
// function listRowsHaveNegativeNumberAndPositiveNumberAndZeroMatrix(matrix){
//         let result = [];
//         for(let i = 0; i<matrix.length; i++){
//             if(matrix[i].every(value => value>0) || matrix[i].every(value=> value < 0) || matrix[i].every(value => value ===0)){
//                 break;
//             }
//             else if(matrix[i].some(value => value === 0)){
//                 result.push(i+1)
//             }
//         }
//         return result
// }
// let matrix = [
//         [1,5,9,0,-7,4],
//         [2,3,7,-6,8,7],
//         [3,6,9,8,7,4]
// ]
// console.log(listRowsHaveNegativeNumberAndPositiveNumberAndZeroMatrix(matrix))
// Bài 362: Liệt kê các dòng giảm dần trong ma trận
// function listRowsDecreasingMatrix(matrix){
//         let result = [];
//         for(let i = 0; i<matrix.length; i++){
//                 let test = true;
//                 for(let j = 0; j<matrix[0].length-1; j++){
//                         if(matrix[i][j]<matrix[i][j+1] || matrix[i].every(value => value === 0)){
//                                 test = false;
//                                 break
//                         }

//                 }
//                 if(test){
//                         result.push(i+1)
//                 }
//         }
//         return result
// }
// let matrix = [
//         [0,0,0,0,0,0],
//         [9,8,5,6,3,2],
//         [9,8,7,6,5,4]
// ]
// console.log('Các dòng giảm dần trong ma trận là: ',listRowsDecreasingMatrix(matrix))
// Bài 363: Liệt kê các cột tăng dần trong ma trận
// function testColumnMatrix(matrix,cols){
//         for(let j = 0; j< matrix.length-1; j++){
//                 if(matrix[j][cols]!==matrix[j+1][cols]){
//                         return false
//                 }
//         }
//         return true
// }
// function listColumnsIncreasingNumberMatrix(matrix){
//         let result = [];
//         for(let j = 0; j<matrix[0].length; j++){
//                 let test = true;
//                 let testcols = testColumnMatrix(matrix,j);
//                 if(!testcols){
//                 for(let i = 0; i<matrix.length-1; i++){
//                         if(matrix[i][j]>matrix[i+1][j]){
//                                 test = false;
//                                 break;
//                         }
//                 }
//                 } else{
//                         test = false;
//                 }
//                 if(test){
//                         result.push(j+1)
//                 }             
//         }
//         return result 
// }
        
// let matrix = [
//         [9,5,8,6,3,2],
//         [8,5,8,9,6,1],
//         [8,5,4,7,8,5]
// ];
// console.log(listColumnsIncreasingNumberMatrix(matrix))
// Bài 364: Cho 2 ma trận A và B. Kiểm tra xem ma trận A có là ma trận con của ma trận B hay không
// function isSubmatrix(A, B) {
//         // Lấy số hàng và số cột của mỗi ma trận
//         let numRowsA = A.length;
//         let numColsA = A[0].length;
//         let numRowsB = B.length;
//         let numColsB = B[0].length;
    
//         // Kiểm tra kích thước của A và B
//         if (numRowsA > numRowsB || numColsA > numColsB) {
//             return false;
//         }
    
//         // Duyệt qua mỗi vị trí có thể bắt đầu của ma trận con A trong ma trận B
//         for (let i = 0; i <= numRowsB - numRowsA; i++) {
//             for (let j = 0; j <= numColsB - numColsA; j++) {
//                 // Kiểm tra xem A có là ma trận con của B từ vị trí (i, j) không
//                 if (isSubmatrixFromPosition(A, B, i, j)) {
//                     return true;
//                 }
//             }
//         }
    
//         return false;
//     }
    
//     // Hàm kiểm tra xem ma trận A có là ma trận con của ma trận B từ vị trí (startRow, startCol) không
//     function isSubmatrixFromPosition(A, B, startRow, startCol) {
//         // Duyệt qua từng phần tử của ma trận A
//         for (let i = 0; i < A.length; i++) {
//             for (let j = 0; j < A[0].length; j++) {
//                 // Kiểm tra xem phần tử tương ứng của A có giống với phần tử tương ứng của B không
//                 if (A[i][j] !== B[startRow + i][startCol + j]) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
    
//     // Ví dụ
//     let B = [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12]
//     ];
    
//     let A = [
//         [2, 3],
//         [6, 7]
//     ];
    
//     console.log(isSubmatrix(A, B)); // Kết quả: true
    
// Bài 365: Cho 2 ma trận A và B. Đếm số lần xuất hiện của ma trận A trong ma trận B
// function isSubmatrix(A, B) {
//         // Lấy số hàng và số cột của mỗi ma trận
//         let numRowsA = A.length;
//         let numColsA = A[0].length;
//         let numRowsB = B.length;
//         let numColsB = B[0].length;
//         let count = 0;
    
//         // Kiểm tra kích thước của A và B
//         if (numRowsA > numRowsB || numColsA > numColsB) {
//             return false;
//         }
    
//         // Duyệt qua mỗi vị trí có thể bắt đầu của ma trận con A trong ma trận B
//         for (let i = 0; i <= numRowsB - numRowsA; i++) {
//             for (let j = 0; j <= numColsB - numColsA; j++) {
//                 // Kiểm tra xem A có là ma trận con của B từ vị trí (i, j) không
//                 if (isSubmatrixFromPosition(A, B, i, j)) {
//                     count++
//                 }
//             }
//         }
    
//         return count;
//     }
    
//     // Hàm kiểm tra xem ma trận A có là ma trận con của ma trận B từ vị trí (startRow, startCol) không
//     function isSubmatrixFromPosition(A, B, startRow, startCol) {
//         // Duyệt qua từng phần tử của ma trận A
//         for (let i = 0; i < A.length; i++) {
//             for (let j = 0; j < A[0].length; j++) {
//                 // Kiểm tra xem phần tử tương ứng của A có giống với phần tử tương ứng của B không
//                 if (A[i][j] !== B[startRow + i][startCol + j]) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
    
//     // Ví dụ
//     let B = [
//         [1,2,3,4,5,8,9,2,3,2,1,2,3],
//         [5,6,7,8,4,5,8,6,7,2,3,2,3],
//         [9,2,3,6,5,8,6,9,8,6,7,5,1],
//     ];
    
//     let A = [
//         [2, 3],
//         [6, 7]
//     ];
    
//     console.log(isSubmatrix(A, B)); // Kết quả: true
// Kỹ thuật đặt lính canh
// Bài 366: Tìm số chẵn đầu tiên trong ma trận
// function findFirstEvenNumberMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num%2===0){
//                                 return num
//                         }
//                 }
//         }
//         return 'Không có số chẵn nào'
// }
// let matrix = [
//         [1,5,8,9],
//         [2,5,6,9],
//         [2,3,6,5]
// ]
// console.log('Số chẵn đầu tiên trong ma trận là:',findFirstEvenNumberMatrix(matrix))
// Bài 367: Tìm max trong ma trận
// function findNumberMaxMatrix(matrix){
//         let result = -Infinity;
//         for(let rows of matrix){
//                 for(let j = 0; j<rows.length; j++){
//                         if(rows[j]>result){
//                                 result = rows[j]
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,4,8,5,2,6],
//         [2,3,6,5,4,1],
//         [2,5,8,9,6,3]
// ]
// console.log(findNumberMaxMatrix(matrix))
// Bài 368: Tìm giá trị lớn thứ 2 trong ma trận
// function findSecondNumberLargestMatrix(matrix){
//         let numberMax = -Infinity;
//         let result = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>numberMax){
//                                 result = numberMax
//                                 numberMax = num;
//                         }
//                         else if(num > result && num <numberMax){
//                                 result = num
//                         }
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,7,98,8,5,89],
//         [2,5,6,6,9,87,7,78],
//         [3,2,5,4,78,9,4]
// ];
// console.log(findSecondNumberLargestMatrix(matrix))
// Bài 369: Tìm số dương đầu tiên trong ma trận                                   //Kết thúc ngày 10/03/2024
// function findPositiveNumberMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 return num
//                         }
//                 }
//         }
//         return 'Không có số nào là số dương'
// }
// let matrix = [
//         [1,5,8,9,6,3],
//         [-4,5,-8,-6,-2,-9],
//         [3,2,5,6,8,-9]
// ]
// console.log('Số đầu tiên là số dương trong ma trận là: ',findPositiveNumberMatrix(matrix))
// Bài 370: Tìm giá trị âm lớn nhất trong ma trận                  //Ngày 11/03/2024
// function findNegativeNumberMaxMatrix(matrix){
//         let maxNumber = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num < 0){
//                                 if(num > maxNumber){
//                                         maxNumber = num
//                                 }
//                         }
//                 }
//         }
//         return maxNumber === -Infinity ? 'Không có số Âm' : maxNumber
// }
// let matrix = [
//         [-1,5,8,-9,6,7],
//         [1,4,-7,8,9,-8],
//         [-4,-8,1,2,3,6]
// ];
// console.log('Số âm lớn nhất trong ma trận là: ',findNegativeNumberMaxMatrix(matrix))
// Bài 371: Liệt kê các dòng có chứa max
// function findRowsHaveNumberMax(matrix){
//         let listNumberMaxIndex = [];
//         let maxNumber = -Infinity;
//         for(let  i = 0 ; i<matrix.length; i++){
//                 let maxNumberRows = Math.max(...matrix[i]);
//                 if(maxNumberRows> maxNumber){
//                         maxNumber = maxNumberRows;
//                         listNumberMaxIndex = [i+1]
//                 }
//                 else if(maxNumberRows === maxNumber){
//                         listNumberMaxIndex.push(i+1)
//                 }
//         }
//         return listNumberMaxIndex
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,63]
// ]
// console.log('Những dòng trong ma trận có chứa giá trị lớn nhất là: ',findRowsHaveNumberMax(matrix))
// Bài 372: Tìm giá trị lớn nhất trên 1 dòng
// function findMaxNumberInRows(matrix){
//         let result = {};
//         for(let i = 0; i< matrix.length; i++){
//                 let maxNumberRows = -Infinity;
//                 for(let num of matrix[i]){
//                         if(num>maxNumberRows){
//                                 maxNumberRows = num
//                         }
//                 }
//                 result[`Giá trị lớn nhất của dòng ${i+1} là:`] = maxNumberRows
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,63]
// ]
// console.log(findMaxNumberInRows(matrix))
// Bài 373: Tìm giá trị nhỏ nhất trên 1 cột
// function findMaxNumberColumnMatrix(matrix){
//         let result = {};
//         for(let j = 0; j<matrix[0].length; j++){
//                 let maxNumberColumns = -Infinity;
//                 for(let i = 0; i<matrix.length; i++){
//                         if(matrix[i][j]>maxNumberColumns){
//                                 maxNumberColumns = matrix[i][j]
//                         }
//                 }
//                 result[`Số lớn nhất ở cột ${j+1} là`] = maxNumberColumns
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,63]
// ]
// console.log(findMaxNumberColumnMatrix(matrix))
// Bài 374: Tìm số nguyên tố đầu tiên
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function findSoNguyenToMatrix(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 return num
//                         }
//                 }
//         }
//         return 'Không có số nguyên tố trong ma trận'
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,63]
// ]
// console.log('Số nguyên tố đầu tiên trong ma trận là:',findSoNguyenToMatrix(matrix))
// Bài 375: Tìm số chẵn lớn nhất
// function findEvenNumberMaxMatrix(matrix){
//         let result = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num%2===0){
//                                 if(num>result){
//                                         result = num
//                                 }
//                         }
//                 }
//         }
//         return result === -Infinity ? -1 : result
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,88,7,4,5,63]
// ]
// console.log('Số chẵn lớn nhất trong mảng là:',findEvenNumberMaxMatrix(matrix))
// Bài 376: Tìm số dương nhỏ nhất
// function findPositiveNumberMinOfMatrix(matrix){
//         let PositiveNumberMin = Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>0){
//                                 if(num<PositiveNumberMin){
//                                         PositiveNumberMin = num
//                                 }
//                         }
//                 }
//         }
//         return PositiveNumberMin === Infinity ? -1 : PositiveNumberMin
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,88,7,4,5,63]
// ]
// console.log('Số dương nhỏ nhất trong ma trận là:',findPositiveNumberMinOfMatrix(matrix))
// Bài 377: Tìm số nguyên tố lớn nhất
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function findSoNguyenToLonNhatMatrix(matrix){
//         let SoNguyenToLonNhat = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 if(num > SoNguyenToLonNhat){
//                                         SoNguyenToLonNhat = num
//                                 }
//                         }
//                 }
//         }
//         return SoNguyenToLonNhat === -Infinity ? -1 : SoNguyenToLonNhat
// }
// let matrix = [
//         [1,2,5,8,65,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,63]
// ]
// console.log(findSoNguyenToLonNhatMatrix(matrix))
// Bài 378: Tìm 1 chữ số xuất hiện nhiều nhất
// function FindNumberHaveCharacterMaxofMatrix(matrix){
//         let objectNumber = {};
//         for(let rows of matrix){
//                 for(let num of rows){
//                         let numberToString = num.toString();
//                         for(let string of numberToString){
//                                 objectNumber[string] = (objectNumber[string] || 0) + 1;
//                         }
//                 }
//         }
//         let maxKey;
//         let maxcountValue = -1;
//         let result = {};
//         for(let key in objectNumber){
//                 if(objectNumber[key]>maxcountValue){
//                         maxKey = key;
//                         maxcountValue = objectNumber[key]
//                 }
//         } 
//         return maxKey
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,653]
// ]
// console.log('Chữ số xuất hiện nhiều nhất trong ma trận là:',FindNumberHaveCharacterMaxofMatrix(matrix))
// Bài 379: Đếm số lượng min
// function countMinNumberMatrix(matrix){
//         let count = 0;
//         let numberMinOfMatrix = Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                      if(num<numberMinOfMatrix){
//                         numberMinOfMatrix = num;
//                         count = 1;
//                      }
//                      else if(num === numberMinOfMatrix){
//                         count++
//                      }   
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,4,1],
//         [9,89,7,4,5,653]
// ]
// console.log(countMinNumberMatrix(matrix))
// Bài 380: Đếm số lượng chẵn nhỏ nhất
// function countEvenMinNumberMatrix(matrix){
//         let count = 0;
//         let numberEvenMinOfMatrix = Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                       if(num%2===0){
//                         if(num<numberEvenMinOfMatrix){
//                                 numberEvenMinOfMatrix = num;
//                                 count = 1;
//                              }
//                              else if(num === numberEvenMinOfMatrix){
//                                 count++
//                              }  
//                       }
//                 }
//         }
//         return count === 0? 'Trong ma trận không có số chẵn' : count
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,0,1],
//         [9,89,7,4,5,653]
// ]
// console.log(countEvenMinNumberMatrix(matrix))
// Bài 381: Tìm giá trị xuất hiện nhiều nhất
// function findNumberHaveFrequencyMax(matrix){
//         let frequencyInfomation = {};
//         for(let rows of matrix){
//                 for(let num of rows){
//                         frequencyInfomation[num] = (frequencyInfomation[num] || 0) + 1
//                 }
//         }
//         let NumberHaveFrequencyMax;
//         let CountNumberHaveFrequencyMax = -1;
//         for(let key in frequencyInfomation){
//                 if(frequencyInfomation[key]>CountNumberHaveFrequencyMax){
//                         CountNumberHaveFrequencyMax = frequencyInfomation[key];
//                         NumberHaveFrequencyMax = key
//                 }
//         }
//         return NumberHaveFrequencyMax
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,0,1],
//         [9,89,7,4,5,653]
// ]
// console.log(findNumberHaveFrequencyMax(matrix))
// Bài 382: Tìm số chính phương lớn nhất
// function isPerfectSquare(n) {
//         if (n < 0) return false;
//         const sqrt = Math.sqrt(n);
//         return sqrt === Math.floor(sqrt);
// }
// function findMaxPerfectSquareNumber(matrix){
//         let SaveCurrentValue = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(isPerfectSquare(num)){
//                                 if(num>SaveCurrentValue){
//                                         SaveCurrentValue = num
//                                 }
//                         }
//                 }
//         }
//         return SaveCurrentValue ===-Infinity ? -1 : SaveCurrentValue
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,0,1],
//         [9,89,7,4,5,653]
// ]
// console.log(findMaxPerfectSquareNumber(matrix))
// Bài 383: Tìm số hoàn thiện nhỏ nhất
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 return Tong === number
//         }
// }
// function findMinNumberPerfectMatrix(matrix){
//         let NumberMinPerfect = Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(SoHoanThien(num) && num<NumberMinPerfect){
//                                         NumberMinPerfect = num
//                         }
//                 }
//         }
//         return NumberMinPerfect === Infinity ? -1 : NumberMinPerfect
// }
// let matrix = [
//         [1,2,5,8,655,6],
//         [8,9,9,65,0,1],
//         [9,89,7,4,5,653]
// ]
// console.log(findMinNumberPerfectMatrix(matrix))
// Bài 384: Tìm các chữ số xuất hiện nhiều nhất trong ma trận
// function findCharacterNumberHaveFrequencyMaxMatrix(matrix){
//         let InformationCharacter = {};
//         for(let rows of matrix){
//                 for(let num of rows){
//                         let toStringNumber = num.toString();
//                         for(let subnum of toStringNumber){
//                                 InformationCharacter[subnum] = (InformationCharacter[subnum] || 0) + 1
//                         }
//                 }
//         }
//         let countOfCharacter = -1;
//         let result = {};
//         for(let char in InformationCharacter){
//                 if(InformationCharacter[char]>countOfCharacter){
//                         countOfCharacter = InformationCharacter[char];
//                         result = {[`Chữ số ${char}`] : `Có ${countOfCharacter} lần xuất hiện`}
//                 }
//                 else if(InformationCharacter[char]===countOfCharacter){
//                         result[`Chữ số ${char}`] = `Có ${countOfCharacter} lần xuất hiện`
//                 }
//         }
        
//         return result
// }
// let matrix = [
//         [1,2,5,8,655555,666666],
//         [8,9,9,65,0,1],
//         [9,89,7,4,5,653]
// ]
// console.log('Các chữ số có tần xuất xuất hiện nhiều nhất trong ma trận là:',findCharacterNumberHaveFrequencyMaxMatrix(matrix))
// Bài 385: Liệt kê các dòng có tổng lớn nhất                            //Kết thúc ngày 11/03/2024
// function listRowsHaveSumMaxMatrix(matrix){
//         let sumMax = -Infinity;
//         let result;
//         for(let rows of matrix){
//                 let sumOfRows = rows.reduce((a,b)=> a+b,0);
//                 if(sumOfRows>sumMax){
//                         sumMax = sumOfRows;
//                         result = [rows];
//                 }
//                 else if(sumOfRows===sumMax){
//                         result.push(rows)
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,8,5,4],
//         [8,9,3,5,0,0],
//         [1,0,0,0,0,0]
// ]
// console.log(listRowsHaveSumMaxMatrix(matrix))
// Bài 386: Liệt kê các cột có tổng nhỏ nhất                            //12/03/2024
// function listColumnHaveSumMinMatrix(matrix){
//         let listInfomationCountMatrix = {};
//         for(let j = 0; j<matrix[0].length; j++){
//                 let sum = 0;
//                 for(let i = 0; i<matrix.length; i++){
//                         sum +=matrix[i][j];
//                 }
//                 listInfomationCountMatrix[`Cột thứ ${j+1} có tổng là:`] = sum
//         }
//         let result = {};
//         let minSum = Infinity;
//         for(key in listInfomationCountMatrix){
//                 if(listInfomationCountMatrix[key]<minSum){
//                         minSum = listInfomationCountMatrix[key];
//                         result = {};
//                         result[key] = minSum
//                 }
//                 else if(listInfomationCountMatrix[key]===minSum){
//                         result[key] = minSum
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,8,5,4],
//         [8,9,3,5,0,0],
//         [1,0,0,0,0,0]
// ]
// console.log('Các cột có tổng nhỏ nhất trong ma trận là: ',listColumnHaveSumMinMatrix(matrix))
// Bài 387: Liệt kê các dòng có nhiều số chẵn nhất
// function listRowsHaveEvenCountMax(matrix){
//         let infomationCountRows = {};
//         for(let i =0; i < matrix.length; i++){
//                 let count = 0;
//                 for(let num of matrix[i]){
//                         if(num%2===0){
//                                 count++
//                         }
//                 }
//                 infomationCountRows[`Dòng thứ ${i+1} có tổng số lượng số chẵn là`] = count 
//         }
//         let maxCount = -1;
//         let result = {};
//         for(let key in infomationCountRows){
//                 if(infomationCountRows[key]>maxCount){
//                         maxCount = infomationCountRows[key];
//                         result = {};
//                         result[key] = maxCount
//                 }
//                 else if(infomationCountRows[key]===maxCount){
//                         result[key] = maxCount
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,2,5,8,5,4],
//         [8,9,3,5,0,0],
//         [1,0,0,0,0,0]
// ]
// console.log('Các dòng có nhiều số chẵn nhất là: ',listRowsHaveEvenCountMax(matrix))
// Bài 388: Liệt kê các dòng có nhiều số nguyên tố nhất
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function listRowsHaveCountPrimeNumberMatrix(matrix){
//         let informationCountPrimeNumber = {};
//         for(let i = 0; i<matrix.length; i++){
//                 let count = 0;
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(TestNumber(matrix[i][j])){
//                                 count++
//                         }
//                 }
//                 informationCountPrimeNumber[`Dòng thứ ${i+1} có số lượng số nguyên tố là`] = count;
//         }
//         let maxCount = -1;
//         let result = {};
//         for(let key in informationCountPrimeNumber){
//                 if(informationCountPrimeNumber[key]>maxCount){
//                         maxCount = informationCountPrimeNumber[key];
//                         result = {};
//                         result[key] = maxCount
//                 }
//                 else if(informationCountPrimeNumber[key]===maxCount){
//                         result[key] = maxCount
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,6],
//         [7,2,5,8,9,6],
//         [2,5,8,9,6,3]
// ]
// console.log(listRowsHaveCountPrimeNumberMatrix(matrix))
// Bài 389: Liệt kê các dòng có nhiều số hoàn thiện nhất
// function SoHoanThien(number){
//         number = parseFloat(number);
//         if(!isFinite(number) || number < 1 || Math.floor(number) !== number){
//                 return false;
//         }
//         else{
//                 let Tong = 0;
//                 for(let i = 1; i<number; i++){
//                         if(number % i ===0){
//                                 Tong+=i;
//                         }
//                 }
//                 return Tong === number
//         }
// }
// function listRowsHaveCountPerfectNumberMatrix(matrix){
//         let informationCountPerfectNumber = {};
//         for(let i = 0; i<matrix.length; i++){
//                 let count = 0;
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(SoHoanThien(matrix[i][j])){
//                                 count++
//                         }
//                 }
//                 informationCountPerfectNumber[`Dòng thứ ${i+1} có số lượng số hoàn thiện là`] = count;
//         }
//         let maxCount = -1;
//         let result = {};
//         for(let key in informationCountPerfectNumber){
//                 if(informationCountPerfectNumber[key]>maxCount){
//                         maxCount = informationCountPerfectNumber[key];
//                         result = {};
//                         result[key] = maxCount
//                 }
//                 else if(informationCountPerfectNumber[key]===maxCount){
//                         result[key] = maxCount
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,6],
//         [7,2,5,8,9,6],
//         [2,5,8,9,6,3]
// ]
// console.log(listRowsHaveCountPerfectNumberMatrix(matrix))
// Bài 390(*): Liệt kê các cột nhiều chữ số nhất trong ma trận các số nguyên
// function listColumnHaveCharacterMaxMatrix(matrix){
//         let infomationCountCharacterColumns = {};
//         for(let j = 0; j<matrix[0].length; j++){
//                 let count = 0;
//                 for(let i = 0; i< matrix.length; i++){
//                         let toStringNumber = matrix[i][j].toString();
//                         for(let char of toStringNumber){
//                                 let toNumber = parseInt(char);
//                                 if(!isNaN(toNumber)){
//                                         count++;
//                                 }
//                         }
//                 }
//                 infomationCountCharacterColumns[`Cột ${j+1} có tổng ký tự là số là:`] = count
//         }
//         let maxCount = -1;
//         let result = {};
//         for(let key in infomationCountCharacterColumns){
//                 if(infomationCountCharacterColumns[key]>maxCount){
//                         maxCount = infomationCountCharacterColumns[key];
//                         result = {};
//                         result[key] = maxCount
//                 }
//                 else if(infomationCountCharacterColumns[key]===maxCount){
//                         result[key] = maxCount
//                 }
//         }
//         return result
// }
// let matrix = [
//         [1,5,8.8,9,6,6],
//         [7,2,5.9,8,9,6],
//         [2,5,8,9,6,3]
// ]
// console.log('Các cột nhiều chữ số nhất trong ma trận là:',listColumnHaveCharacterMaxMatrix(matrix))
// Bài 391(*): Tìm ma trận con có tổng lớn nhất  ////                       Bài này khó quá, Không giải được
// Kỹ thuật xử lý ma trận
// Bài 392: Hoán vị 2 dòng trên ma trận
// function HoanVi2DongMaTran(matrix,row1,row2){
//         let temp = matrix[row1-1];
//         matrix[row1-1] = matrix[row2-1];
//         matrix[row2-1] = temp;
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(HoanVi2DongMaTran(matrix,1,3))
// Bài 393: Hoán vị 2 cột trên ma trận
// function HoanVi2CotMaTran(matrix,col1,col2){
//         for(let i = 0; i<matrix.length; i++){
//                 let temp = matrix[i][col1-1];
//                 matrix[i][col1-1] = matrix[i][col2-1];
//                 matrix[i][col2-1] = temp
//         }
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(HoanVi2CotMaTran(matrix,1,3))
// Bài 394: Dịch xuống xoay vòng các hàng trong ma trận
// function DichXuongXoayVongMaTran(matrix,Index){
//         let cutRows = matrix.splice(Index);
//         matrix.unshift(...cutRows);
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(DichXuongXoayVongMaTran(matrix,2))
// Bài 395: Dịch lên xoay vòng các hàng trong ma trận
// function DichLenXoayVongMatran(matrix,Index){
//         let cutRows = matrix.splice(0,(Index));
//         matrix.push(...cutRows);
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(DichLenXoayVongMatran(matrix,2))
// Bài 396: Dịch trái xoay vòng các cột trong ma trận
// function DichTraiXoayVongCotMaTran(matrix,Index){
//         for(let i =0; i<matrix.length; i++){
//                 let cutNumber = matrix[i].splice(0,Index);
//                 matrix[i].push(...cutNumber)                
//         }
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(DichTraiXoayVongCotMaTran(matrix,2))
// Bài 397: Dịch phải xoay vòng các cột trong ma trận
// function DichPhaiXoayVongCotMaTran(matrix,Index){
//         for(let i =0; i<matrix.length; i++){
//                 let cutNumber = matrix[i].splice(Index);
//                 matrix[i].unshift(...cutNumber)                
//         }
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [1,4,7,8,9,6],
//         [9,8,6,5,4,1],
//         [8,9,6,3,3,1]
// ]
// console.log(DichPhaiXoayVongCotMaTran(matrix,3))
// Bài 398: Dịch phải xoay vòng theo chiều kim đồng hồ các giá trị nằm trên biên ma trận
// function DichPhaiXoayVongBienMaTran(matrix,TranslationUnit) {
//         let container = [...matrix[0]];
//         for(let i =1; i<matrix.length-1; i++){
//                 container.push(matrix[i][matrix[i].length-1])               
//         }
//         container.push(...matrix[matrix.length - 1].reverse());
//         for(let i =matrix.length-2; i>0; i--){
//                 container.push(matrix[i][0])
//         }
//         if(TranslationUnit<=container.length){
//                 let cutContainer = container.splice(container.length-TranslationUnit);
//                 container.unshift(...cutContainer);
//         }
//         else{
//                 let discont = TranslationUnit - container.length;
//                 let cutContainer = container.splice(container.length-discont);
//                 container.unshift(...cutContainer);
//         }
        
//         matrix[0] = container.splice(0,matrix[0].length);
//         for(let i = 1; i<matrix.length-1;i++){
//                 matrix[i][matrix[i].length-1] = container.splice(0,1)[0];
//         }
//         matrix[matrix.length-1] = container.splice(0,matrix[0].length).reverse();
//         for(let i =matrix.length-2; i>0; i--){
//                 matrix[i][0] = container.splice(0,1)[0]
//         }
//         return matrix
// }
//     let matrix = [
//         [1, 2, 3, 4],
//         [12, 6, 7, 5],
//         [11, 10, 11, 6],
//         [10, 9, 8, 7]
//     ];
    
//     console.log(DichPhaiXoayVongBienMaTran(matrix,10));
// Bài 399: Dịch trái xoay vòng theo chiều kim đồng hồ các giá trị nằm trên biên ma trận
// function DichTraiXoayVongBienMaTran(matrix,TranslationUnit) {
//         let container = [...matrix[0]];
//         for(let i =1; i<matrix.length-1; i++){
//                 container.push(matrix[i][matrix[i].length-1])               
//         }
//         container.push(...matrix[matrix.length - 1].reverse());
//         for(let i =matrix.length-2; i>0; i--){
//                 container.push(matrix[i][0])
//         }
//         if(TranslationUnit<=container.length){
//                 let cutContainer = container.splice(TranslationUnit);
//                 container.unshift(...cutContainer);
//         }
//         else{
//                 let discont = TranslationUnit - container.length;
//                 let cutContainer = container.splice(discont);
//                 container.unshift(...cutContainer);
//         }
//         console.log(container)
        
//         matrix[0] = container.splice(0,matrix[0].length);
//         for(let i = 1; i<matrix.length-1;i++){
//                 matrix[i][matrix[i].length-1] = container.splice(0,1)[0];
//         }
//         matrix[matrix.length-1] = container.splice(0,matrix[0].length).reverse();
//         for(let i =matrix.length-2; i>0; i--){
//                 matrix[i][0] = container.splice(0,1)[0]
//         }
//         return matrix
// }
//     let matrix = [
//         [1, 2, 3, 4],
//         [12, 6, 7, 5],
//         [11, 10, 11, 6],
//         [10, 9, 8, 7]
//     ];
    
//     console.log(DichTraiXoayVongBienMaTran(matrix,2));
// Bài 400: Xóa 1 dòng trong ma trận
// function DeleteRowsMatrix(matrix,numOfRow){
//         matrix.splice(numOfRow-1,1);
//         return matrix
// }
//         let matrix = [
//         [1, 2, 3, 4],
//         [12, 6, 7, 5],
//         [11, 10, 11, 6],
//         [10, 9, 8, 7]
// ];
// console.log(DeleteRowsMatrix(matrix,2))
// Bài 401: Xóa 1 cột trong ma trận                                     //Kết thúc ngày 12/03/2024
// function DeleteColumnMatrix(matrix,numOfColumn){
//         for(let i = 0; i < matrix.length; i++){
//                 matrix[i].splice(numOfColumn-1,1)
//         }
//         return matrix
// }
//         let matrix = [
//         [1, 2, 3, 4],
//         [12, 6, 7, 5],
//         [11, 10, 11, 6],
//         [10, 9, 8, 7]
// ];
// console.log(DeleteColumnMatrix(matrix,2))
// Bài 402: Xoay ma trận 1 góc 90 độ                                  //Bắt đầu ngày 13/03/2024
// function rotateMatrix(matrix) {
//         let result = [];
//         for(let j = 0; j< matrix[0].length; j++){
//                 let subarray = [];
//                 for(let i = matrix.length-1; i>=0; i--){
//                         subarray.push(matrix[i][j])
//                 }
//                 result.push(subarray)
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,1],
//         [2,3,6,9,8,7],
//         [3,4,8,9,6,3]
// ]
// console.log(rotateMatrix(matrix))
// Bài 403: Xoay ma trận 1 góc 180 độ
// function XoayMaTran180Do(matrix){
//         let result = [];
//         for(let i = matrix.length-1; i>=0; i--){
//                 let subarray = [];
//                 for(let j = matrix[0].length-1; j>=0; j--){
//                         subarray.push(matrix[i][j])
//                 }
//                 result.push(subarray)
//         }
//         return result
// }
// let matrix = [
//         [7,8,9,2,6,5],
//         [7,8,9,6,3,3],
//         [14,8,9,6,2,1]
// ]
// console.log(XoayMaTran180Do(matrix))
// Bài 404: Xoay ma trận 1 góc 270 độ
// function XoayMaTran270Do(matrix){
//         let result = [];
//         for(let j = matrix[0].length -1; j>=0; j--){
//                 let subarray = [];
//                 for(let i = 0; i < matrix.length; i++){
//                         subarray.push(matrix[i][j])
//                 }
//                 result.push(subarray)
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,3],
//         [8,9,6,3,2,1],
//         [7,8,9,6,32,1]
// ]
// console.log(XoayMaTran270Do(matrix))
// Bài 405: Chiếu gương ma trận theo trục dọc
// function ChieuGuongMaTranTrucDoc(matrix){
//         let result = [];
//         for(rows of matrix){
//                 let subarr = [];
//                 for(let j = rows.length-1; j>=0; j--){
//                         subarr.push(rows[j])
//                 }
//                 result.push(subarr)
//         }
//         return result
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2]
// ]
// console.log(ChieuGuongMaTranTrucDoc(matrix))
// Bài 406: Chiếu gương ma trận theo trục ngang
// function ChieuGuongMaTranTrucNgang(matrix){
//         let newMatrix = matrix.reverse();
//         return newMatrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2]
// ]
// console.log(ChieuGuongMaTranTrucNgang(matrix))
// Sắp xếp ma trận
// Bài 407: Viết hàm sắp xếp các phần tử trên 1 dòng tăng dần từ trái sang phải
// function SortRowsMatrixLeftToRight(matrix){
//         for(let rows of matrix){
//                 rows = rows.sort((a,b) => a-b)
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2]
// ]
// console.log(SortRowsMatrixLeftToRight(matrix))
// Bài 408: Viết hàm sắp xếp các phần tử trên 1 dòng giảm dần từ trái sang phải
// function SortRowsMatrixRightToLeft(matrix){
//         for(let rows of matrix){
//                 rows = rows.sort((a,b) => b-a)
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2]
// ]
// console.log(SortRowsMatrixRightToLeft(matrix))
// Bài 409: Viết hàm sắp xếp các phần tử trên 1 cột tăng dần từ trên xuống dưới
// function SortColumnTopToBottom(matrix){
//         for(let j = 0; j<matrix[0].length; j++){
//                 for(let i = 0; i<matrix.length;i++){
//                         for(let k = i+1;k<matrix.length;k++){
//                                 if(matrix[i][j]>matrix[k][j]){
//                                         let temp = matrix[i][j];
//                                         matrix[i][j] = matrix[k][j];
//                                         matrix[k][j] = temp;
//                                 }
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2]
// ]
// console.log(SortColumnTopToBottom(matrix))
// Bài 410: Viết hàm sắp xếp các phần tử trên 1 cột giảm dần từ trên xuống dưới
// function SortColumnBottomTop(matrix){
//         for(let j = 0; j<matrix[0].length; j++){
//                 for(let i = 0; i<matrix.length;i++){
//                         for(let k = i+1;k<matrix.length;k++){
//                                 if(matrix[i][j]<matrix[k][j]){
//                                         let temp = matrix[i][j];
//                                         matrix[i][j] = matrix[k][j];
//                                         matrix[k][j] = temp;
//                                 }
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2],
//         [7,2,5,6,9,1,3]
// ]
// console.log(SortColumnBottomTop(matrix))
// Bài 411: Viết hàm xuất các giá trị chẵn trong ma trận các số nguyên theo thứ tự giảm dần
// function SelectionEvenNumberAndSort(matrix){
//         let result = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num % 2 ===0){
//                                 result.push(num)
//                         }
//                 }
//         }
//         return result.sort((a,b) => b-a);
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2],
//         [7,2,5,6,9,1,3]
// ]
// console.log('Các giá trị chẵn được sắp xếp giảm dần trong ma trận là: ',SelectionEvenNumberAndSort(matrix))
// Bài 412: Viết hàm xuất các số nguyên tố trong ma trận các số nguyên theo thứ tự tăng dần
// function TestNumber(number){
//         if(number < 2){
//                 return false
//         }
//         var sqrt = Math.sqrt(number)
//         for(let i = 2; i <= sqrt; i++){
//                 if(number % i === 0){
//                         return false;
//         }
//         }
//         return true
// };
// function OutputPrimeNumberMatrix(matrix){
//         let result = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 result.push(num)
//                         }
//                 }
//         }
//         return result.sort((a,b) => a-b)
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2],
//         [7,2,5,6,9,1,3]
// ]
// console.log('Các số nguyên tố được sắp xếp tăng dần trong ma trận là: ',OutputPrimeNumberMatrix(matrix))
// Bài 413: Viết hàm sắp xếp các phần tử trong ma trận theo yêu cầu sau:
// Dòng có chỉ số chẵn tăng dần
// Dòng có chỉ số lẻ giảm dần
// function SortRowsHaveEvenAndOdd(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 if(i%2===0){
//                         matrix[i].sort((a,b)=>a-b)
//                 }
//                 else{
//                         matrix[i].sort((a,b)=>b-a)
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2],
//         [7,2,5,6,9,1,3]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortRowsHaveEvenAndOdd(matrix))
// Bài 414: Viết hàm sắp xếp các phần tử trong ma trận theo yêu cầu sau:
// Cột có chỉ số chẵn giảm dần từ trên xuống
// Cột có chỉ số lẻ tăng dần từ trên xuống
// function SortColumnHaveIndexIsEvenOrOdd(matrix){
//         for(let j = 0; j<matrix[0].length; j++){
//                 if(j%2===0){
//                         for(let i = 0; i<matrix.length-1;i++){
//                                 for(let k = i+1; k<matrix.length; k++){
//                                         if(matrix[k][j]>matrix[i][j]){
//                                                 let temp = matrix[i][j];
//                                                 matrix[i][j] = matrix[k][j];
//                                                 matrix[k][j] = temp;
//                                         }
//                                 }
//                         }
//                 }
//                 else{
//                         for(let i = 0; i<matrix.length-1;i++){
//                                 for(let k = i+1; k<matrix.length; k++){
//                                         if(matrix[k][j]<matrix[i][j]){
//                                                 let temp = matrix[i][j];
//                                                 matrix[i][j] = matrix[k][j];
//                                                 matrix[k][j] = temp;
//                                         }
//                                 }
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3,4],
//         [7,8,9,6,5,2,1],
//         [8,9,6,3,1,5,2],
//         [7,2,5,6,9,1,3]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortColumnHaveIndexIsEvenOrOdd(matrix))
// Bài 415 Sắp xếp ptử tăng dần theo hàng và cột: Dùng 2 phương pháp: sử dụng mảng phụ và ko dùng mảng phụ
// Phương pháp 1: Sử dụng mảng phụ
// function SortMatrix(matrix){
//         let subArray = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         subArray.push(num)
//                 }
//         }
//         subArray.sort((a,b)=>(a-b));
//         let k = 0;
//         for(let rows of matrix){
//                 for(let j = 0; j<rows.length; j++){
//                         rows[j] = subArray[k];
//                         k++
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,2,5,8,9,6],
//         [7,8,9,6,5,2],
//         [8,9,6,3,1,5],
//         [7,2,5,6,9,1]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortMatrix(matrix))
// Phương pháp 2: Không sử dụng mảng phụ
// function SortMatrix2(matrix){
//         let cols = matrix[0].length;
//         matrix = matrix.flat();
//         let result = [];
//         matrix.sort((a,b)=>a-b);
//         for(let i = 0; i<matrix.length; i+=cols){
//                 result.push(matrix.slice(i,i+cols))
//         }
//         return result
// }
// let matrix2 = [
//         [1,2,5,8,9,6],
//         [7,8,9,6,5,2],
//         [8,9,6,3,1,5],
//         [7,2,5,6,9,1]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortMatrix2(matrix2))
// Bài 416: Sắp xếp ptử dương tăng dần theo cột và dòng. Dùng 2 phương pháp: Sử dụng mảng phụ và ko sử dụng mảng phụ (Bài này với bài trên như nhau mà?)
// Bài 417: Sắp xếp ptử chẵn giảm dần theo cột và dòng. Dùng 2 phương pháp: Sử dụng mảng phụ và ko sử dụng mảng phụ                    //Kết thúc ngày 13/03/2024
// Phương pháp 1: Sử dụng mảng phụ
// function SortColsAndRowsDescending(matrix){
//         let subArray = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         subArray.push(num)
//                 }
//         }
//         subArray.sort((a,b)=>b-a);
//         let k = 0;
//         for(let rows of matrix){
//                 for(let j = 0; j<rows.length; j++){
//                         rows[j] = subArray[k];
//                         k++
//                 }
//         }
//         return matrix
// }
// let matrix1 = [
//         [1,2,5,8,9,6],
//         [7,8,9,6,5,2],
//         [8,9,6,3,1,5],
//         [7,2,5,6,9,1]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortColsAndRowsDescending(matrix1))
// Phương pháp 2: Không sử dụng mảng phụ
// function SortColsAndRowsDescending2(matrix){
//         let cols = matrix[0].length;
//         matrix = matrix.flat();
//         let result = [];
//         matrix.sort((a,b)=>b-a);
//         for(let i = 0; i<matrix.length; i+=cols){
//                 result.push(matrix.slice(i,i+cols))
//         }
//         return result
// }
// let matrix2 = [
//         [1,2,5,8,9,6],
//         [7,8,9,6,5,2],
//         [8,9,6,3,1,5],
//         [7,2,5,6,9,1]
// ]
// console.log('Kết quả sắp xếp mảng theo yêu cầu đề bài : ',SortColsAndRowsDescending2(matrix2))
// Bài 418: Sắp xếp âm tăng dần, dương giảm dần, 0 giữ nguyên                                         //Bắt đầu ngày 14/03/2024
// function sapXepAmTangDanDuongGiamDan(matrix){
//         let negativeNumbersArray = [];
//         let positiveNumbersArray = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num<0){
//                                 negativeNumbersArray.push(num)
//                         }
//                         else if(num>0){
//                                 positiveNumbersArray.push(num)
//                         }
//                 }
//         }
//         negativeNumbersArray.sort((a,b)=>a-b);
//         let n = 0;
//         let p = 0;
//         positiveNumbersArray.sort((a,b)=>b-a);
//         for(let rows of matrix){
//                 for(let j = 0; j< rows.length; j++){
//                         if(rows[j]<0){
//                                 rows[j] = negativeNumbersArray[n];
//                                 n++
//                         }
//                         else if(rows[j]>0){
//                                 rows[j] = positiveNumbersArray[p];
//                                 p++
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,-2,5,0,9,-6],
//         [7,-8,9,6,5,0],
//         [8,9,0,3,0,5],
//         [7,2,-5,0,9,1]
// ]
// console.log(sapXepAmTangDanDuongGiamDan(matrix))
// Bài 419: Sắp xếp chẵn tăng, lẻ giảm
// function SapXepChanTangLeGiam(matrix){
//         let EvenNumberList = [];
//         let OddNumberList = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num%2===0){
//                                 EvenNumberList.push(num);
//                         }
//                         else{
//                                 OddNumberList.push(num)
//                         }
//                 }
//         }
//         EvenNumberList.sort((a,b)=> a-b);
//         OddNumberList.sort((a,b)=>b-a);
//         let e = 0;
//         let o = 0;
//         for(let rows of matrix){
//                 for(let j = 0; j < rows.length; j++){
//                         if(rows[j]%2 ===0){
//                                 rows[j] = EvenNumberList[e];
//                                 e++
//                         }
//                         else{
//                                 rows[j] = OddNumberList[o];
//                                 o++
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,-2,5,0,9,-6],
//         [7,-8,9,6,5,0],
//         [8,9,0,3,0,5],
//         [7,2,-5,0,9,1]
// ]
// console.log(SapXepChanTangLeGiam(matrix))
// Bài 420: Sắp xếp các giá trị nằm trên biên ma trận tăng dần
// function sapXepCacGiaTriBienTangDan(matrix){
//         let subarr = [];
//         for(let i = 0; i< matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(i ===0 || i === matrix.length-1 || j ===0 || j === matrix[i].length-1){
//                                 subarr.push(matrix[i][j])
//                         }
//                 }
//         }
//         subarr.sort((a,b)=> a-b);
//         let k = 0;
//         for(let i = 0; i< matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(i ===0 || i === matrix.length-1 || j ===0 || j === matrix[i].length-1){
//                                 matrix[i][j] = subarr[k];
//                                 k++
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,-2,5,0,9,-6],
//         [7,-8,9,6,5,0],
//         [8,9,0,3,0,5],
//         [7,2,-5,0,9,1]
// ]
// console.log(sapXepCacGiaTriBienTangDan(matrix))
// Bài 421: Sắp xếp các giá trị dương nằm trên biên ma trận tăng dần
// function sapXepGiaTriDuongNamTrenBienTangDan(matrix){
//         let subarr = [];
//         for(let i = 0; i< matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(matrix[i][j]>0 &&(i ===0 || i === matrix.length-1 || j ===0 || j === matrix[i].length-1)){
//                                 subarr.push(matrix[i][j])
//                         }
//                 }
//         }
//         subarr.sort((a,b)=> a-b);
//         let k = 0;
//         for(let i = 0; i< matrix.length; i++){
//                 for(let j = 0; j<matrix[i].length; j++){
//                         if(matrix[i][j]>0 &&(i ===0 || i === matrix.length-1 || j ===0 || j === matrix[i].length-1)){
//                                 matrix[i][j] = subarr[k];
//                                 k++
//                         }
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,-2,5,0,9,-6],
//         [7,-8,9,6,5,0],
//         [8,9,0,3,0,5],
//         [7,2,-5,0,9,1]
// ]
// console.log(sapXepGiaTriDuongNamTrenBienTangDan(matrix))     
// Bài 422: Sắp xếp các dòng dựa vào: tổng các ptử trong 1 dòng: sắp xếp tăng dần.
// function sapXepCacDongCoTongTangDan(matrix){
//         for(let i = 0; i< matrix.length-1; i++){
//                 if(matrix[i].reduce((a,b)=> a+b,0) > matrix[i+1].reduce((a,b)=> a+b,0)){
//                         let temp = matrix[i]
//                         matrix[i] = matrix[i+1];
//                         matrix[i+1] = temp
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,-2,5,0,9,-6],
//         [7,-8,9,6,5,0],
//         [8,9,0,3,0,5],
//         [7,2,-5,0,9,1]
// ]
// console.log(sapXepCacDongCoTongTangDan(matrix)) 
// Bài 423: Sắp xếp giá trị các ptử trong ma trận tăng dần theo dạng xoắn ốc (ma trận xoắn ốc) (Bài này chưa giải được, copy lời giải từ ChatGPT)
// function generateSpiralMatrix(n) {
//         let matrix = [];
//         for (let i = 0; i < n; i++) {
//             matrix.push(new Array(n).fill(0));
//         }
    
//         let num = 1;
//         let rowStart = 0;
//         let rowEnd = n - 1;
//         let colStart = 0;
//         let colEnd = n - 1;
    
//         while (rowStart <= rowEnd && colStart <= colEnd) {
//             // Fill from left to right
//             for (let i = colStart; i <= colEnd; i++) {
//                 matrix[rowStart][i] = num++;
//             }
//             rowStart++;
    
//             // Fill from top to bottom
//             for (let i = rowStart; i <= rowEnd; i++) {
//                 matrix[i][colEnd] = num++;
//             }
//             colEnd--;
    
//             // Fill from right to left
//             for (let i = colEnd; i >= colStart; i--) {
//                 matrix[rowEnd][i] = num++;
//             }
//             rowEnd--;
    
//             // Fill from bottom to top
//             for (let i = rowEnd; i >= rowStart; i--) {
//                 matrix[i][colStart] = num++;
//             }
//             colStart++;
//         }
    
//         return matrix;
//     }
    
//     // Example usage:
//     let n = 4;
//     let resultMatrix = generateSpiralMatrix(n);
//     console.log(resultMatrix);
// Bài 424: Sắp xếp giá trị các ptử trong ma trận tăng dần theo dạng ziczac
// function SapXepMaTranZicZac(matrix){
//         for(let i=0; i<matrix.length; i++){
//                 if(i%2!==0){
//                         matrix[i] = matrix[i].reverse();
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [1,5,8,9,6,3],
//         [1,4,8,5,6,9],
//         [1,4,5,8,9,6]
// ]
// console.log(SapXepMaTranZicZac(matrix))
// Bài 425: Xuất các giá trị âm  giảm dần(ma trận không thay đổi sau khi xuất)
// function OutputNegativeNumberOfMatrix(matrix){
//         let result = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num<0){
//                                 result.push(num)
//                         }
//                 }
//         }
//         result.sort((a,b)=>b-a);
//         return result.length===0 ? false : result
// }
// let matrix = [
//         [1,5,-8,9,6,3],
//         [1,4,8,5,-6,9],
//         [-1,4,-5,8,-9,6]
// ]
// console.log(OutputNegativeNumberOfMatrix(matrix))
// Xây dựng ma trận
// Bài 426: Cho ma trận A. Hãy tạo ma trận B, B[i][j] = abs(A[i][j])
// function CreatMatrix(matrixA){
//         let matrixB = new Array(matrixA.length).fill(0);

//         for(let i =0; i< matrixB.length; i++){
//                 matrixB[i] = new Array(matrixA[0].length).fill(0)
//         }
//         for(let i =0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix[0].length; j++){
//                         matrixB[i][j] = Math.abs(matrix[i][j])
//                 }
//         }
//         return matrixB
// }
// let matrix = [
//         [1,5,-8,9,6,3],
//         [1,4,8,5,-6,9],
//         [-1,4,-5,8,-9,6]
// ]
// console.log(CreatMatrix(matrix))
// Bài 427: Cho ma trận A. Hãy tạo ma trận B, B[i][j] = lớn nhất dòng i, cột j của A
// function createMatrixB(matrixA) {
//         const rows = matrixA.length;
//         const cols = matrixA[0].length;
    
//         // Tạo ma trận B với kích thước tương tự như ma trận A và giá trị khởi tạo là 0
//         let matrixB = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    
//         // Tìm giá trị lớn nhất trong mỗi dòng của ma trận A và gán vào ma trận B
//         for (let i = 0; i < rows; i++) {
//             let maxRowValue = Math.max(...matrixA[i]);
//             for (let j = 0; j < cols; j++) {
//                 matrixB[i][j] = maxRowValue;
//             }
//         }
    
//         // Tìm giá trị lớn nhất trong mỗi cột của ma trận A và so sánh với giá trị trong ma trận B
//         for (let j = 0; j < cols; j++) {
//             let maxColValue = -Infinity;
//             for (let i = 0; i < rows; i++) {
//                 maxColValue = Math.max(maxColValue, matrixA[i][j]);
//             }
//             for (let i = 0; i < rows; i++) {
//                 matrixB[i][j] = Math.max(matrixB[i][j], maxColValue);
//             }
//         }
    
//         return matrixB;
//     }
    
//     // Ma trận A
//     let matrixA = [
//         [1, 5, 3],
//         [4, 8, 2],
//         [9, 6, 7]
//     ];
    
//     console.log(createMatrixB(matrixA));
// Bài 428: Cho ma trận A. Hãy tạo ma trận B, B[i][j] = số lượng ptử dương xung quanh A[i][j]                        //Kết thúc ngày 14/03/2024
// function createMatrixB(matrixA) {
//         const rows = matrixA.length;
//         const cols = matrixA[0].length;
    
//         // Tạo ma trận B với kích thước tương tự như ma trận A và giá trị khởi tạo là 0
//         let matrixB = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    
//         // Duyệt qua từng phần tử của ma trận A
//         for (let i = 0; i < rows; i++) {
//             for (let j = 0; j < cols; j++) {
//                 // Đếm số lượng phần tử dương xung quanh phần tử A[i][j]
//                 let count = 0;
    
//                 // Kiểm tra phần tử bên trên
//                 if (i > 0 && matrixA[i - 1][j] > 0) {
//                     count++;
//                 }
    
//                 // Kiểm tra phần tử bên dưới
//                 if (i < rows - 1 && matrixA[i + 1][j] > 0) {
//                     count++;
//                 }
    
//                 // Kiểm tra phần tử bên trái
//                 if (j > 0 && matrixA[i][j - 1] > 0) {
//                     count++;
//                 }
    
//                 // Kiểm tra phần tử bên phải
//                 if (j < cols - 1 && matrixA[i][j + 1] > 0) {
//                     count++;
//                 }
    
//                 // Gán số lượng phần tử dương vào phần tử tương ứng của ma trận B
//                 matrixB[i][j] = count;
//             }
//         }
    
//         return matrixB;
//     }
    
//     // Ma trận A
//     let matrixA = [
//         [-1, 5, -3, 7],
//         [4, -8, 2, 0],
//         [9, 6, 7, -2]
//     ];
    
//     console.log(createMatrixB(matrixA));
    
// Chương 7: Ma trận vuông
// Bài 429 + Bài 430: Viết hàm nhập, xuất ma trận vuông các số nguyên                               //Bắt đầu ngày 15/03/2024    
// function NhapMaTranVuong() {
//         let RowAndCols = prompt('Mời nhập số lượng hàng và cột của ma trận vuông');
//         let result = [];
//         for (let i = 0; i < RowAndCols; i++) {
//             result[i] = [];
//             for (let j = 0; j < RowAndCols; j++) {
//                 let count = 0;
//                 let value;
//                 while (count < 3) {
//                     value = Number(prompt(`Nhập số của hàng thứ ${i + 1}, cột ${j + 1}`));
//                     if (!isNaN(value)) {
//                         result[i].push(value);
//                         break;
//                     } else {
//                         count++;
//                         alert(`Lần thử lại thứ ${count}, giá trị không hợp lệ`);
//                     }
//                 }
//                 if (count === 3) {
//                     alert('Bạn đã nhập sai quá 3 lần, vui lòng tải lại và nhập lại từ đầu');
//                     return 'Bạn phải reload và nhập lại tất cả';
//                 }
//             }
//         }
//         return result;
//     }
    
//     console.log(NhapMaTranVuong());                                 //Chương trình này là vừa nhập và vừa xuất ra ma trận vuông rồi
// Hàm duyệt các phần tử trên đường chéo chính
// function DuyetCacPhanTuTrenDuongCheoChinh(matrix){
//         for(let i = 0 ; i<matrix.length; i++){
//                 let a = matrix[i][i]
//                 console.log(a)
//         }
// }
// let matrix = [
//         [1,4,5,8,9],
//         [5,8,9,6,3],
//         [1,4,7,6,3],
//         [1,2,5,8,9],
//         [1,2,5,6,3]
// ]
// DuyetCacPhanTuTrenDuongCheoChinh(matrix)
// Hàm duyệt các phần tử thuộc tam giác trên đường chéo chính
//  Cách 1: Duyệt từ phải qua trái
// function duyetTamGiacTrenCheoChinh(matrix) {
//         for(let  i = 0 ; i<matrix.length; i++){
//           for(let j = matrix[0].length-1; j>=i; j--){
//                 console.log(matrix[i][j])
//           }
//           }
//         }
//       const matrix = [
//           [1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]
//       ];
//       duyetTamGiacTrenCheoChinh(matrix);
// Cách 2: Duyệt từ trái qua phải
// function duyetTamGiacTrenCheoChinh(matrix) {
//         for(let  i = 0 ; i<matrix.length; i++){
//           for(let j = i; j<matrix.length; j++){
//                 console.log(matrix[i][j])
//           }
//           }
//         }
//       const matrix = [
//           [1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]
//       ];
//       duyetTamGiacTrenCheoChinh(matrix);
// Hàm duyệt các phần tử thuộc tam giác dưới đường chéo chính
// function duyetTamGiacDuoiCheoChinh(matrix) {
//         for(let  i = 0 ; i<matrix.length; i++){
//           for(let j = 0; j<=i; j++){
//                   console.log(matrix[i][j])
//           }
//         }
//   }
      
//       // Sử dụng hàm với một ma trận vuông cụ thể
//       const matrix = [
//           [1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]
//       ];
//       duyetTamGiacDuoiCheoChinh(matrix);
// Hàm duyệt các phần tử trên đường chéo phụ
//Cách 1: Duyệt từ trái qua phải
// function DuyetCacPhanTuDuongCheoPhu(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = matrix.length-1-i; j < matrix.length; j++){
//                         console.log(matrix[i][j])
//                 }
//         }
// }
// let matrix = [
//         [4,5,6,3],
//         [7,8,9,6],
//         [1,4,7,8],
//         [2,5,8,7]
// ]
// Cách 2: Duyệt từ phải quải qua trái
// function duyetCheoPhu(matrix) {
//         let n = matrix.length;
//         for (let i = 0; i < n; i++) {
//             for(let j = n-1; j >=n-1-i;j--){
//                 console.log(matrix[i][j])
//             }
//         }
//     }
    
//     // Ma trận ví dụ
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
    
//     duyetCheoPhu(matrix);
// Hàm duyệt các phần tử thuộc tam giác trên đường chéo phụ
// Cách 1: Duyệt từ trái qua phải
// function DuyetCacPhanTuThuocTamGiacTrenDuongCheoPhu(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j<matrix.length-i;j++){
//                         console.log(matrix[i][j])
//                 }
//         }
// }
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
    
//     DuyetCacPhanTuThuocTamGiacTrenDuongCheoPhu(matrix);
// Cách 2: Duyệt từ phải qua trái
// function DuyetCacPhanTuThuocTamGiacTrenDuongCheoPhu2(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = matrix.length-1-i; j>=0;j--){
//                         console.log(matrix[i][j])
//                 }
//         }
// }
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
    
//     DuyetCacPhanTuThuocTamGiacTrenDuongCheoPhu2(matrix);
// Hàm duyệt các phần tử thuộc tam giác dưới đường chéo phụ
// Cách 1: Duyệt từ trái qua phải
// function DuyetPhanTuDuoiDuongCheoPhu(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = matrix.length-1-i; j<matrix.length; j++){
//                         console.log(matrix[i][j])
//                 }
//         }
// }
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
// DuyetPhanTuDuoiDuongCheoPhu(matrix)
// Cách 2: Duyệt từ phải qua trái
// function DuyetPhanTuDuoiDuongCheoPhu2(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = matrix.length-1; j>= matrix.length-1-i;j--){
//                         console.log(matrix[i][j])
//                 }
//         }
// }
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
// DuyetPhanTuDuoiDuongCheoPhu2(matrix)
// Bài 431 + Bài 432: Viết hàm nhập, xuất ma trận vuông các số thực          
// function HamNhapXuatMaTranVuongSoThuc(){
//         let rowsAndCols = prompt('Mời nhập số dòng và cột cho ma trận vuông này!');
//         let matrixOK = [];
//         for(let i = 0; i<rowsAndCols; i++){
//                 matrixOK[i] = [];
//                 for(let j = 0; j<rowsAndCols; j++){
//                         let count = 0;
//                         while(count<3){
//                                 let value = Number(prompt(`Mời nhập phần tử hàng thứ ${i+1} cột thứ ${j+1}`));
//                                 if(!isNaN(value)){
//                                         matrixOK[i].push(value);
//                                         break;
//                                 }
//                                 else{
//                                         count++;
//                                         alert('Bạn đã nhập sai kiểu dữ liệu số, bạn có 3 lần nhập lại');
//                                         if(count===3){
//                                                 {
//                                                         alert('Bạn đã nhập sai kiểu dữ liệu số 3 lần, phần tử này sẽ được gán giá trị mặc định là 0.');
//                                                         matrixOK[i].push(0);
//                                                         break;
//                                                 }
//                                         }
//                                 }
//                         }

//                 }
//         }
//         return matrixOK
// }
// console.log(HamNhapXuatMaTranVuongSoThuc())
// Bài 433: Viết hàm tìm giá trị lớn nhất trong ma trận vuông các số thực
// function findMaxNumberInMatrix(matrix){
//         let maxNumber = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num>maxNumber){
//                                 maxNumber = num
//                         }
//                 }
//         }
//         return maxNumber
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(findMaxNumberInMatrix(matrix))
// Bài 434: Viết hàm kiểm tra trong ma trận vuông các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2015 hay không
// function testMatrixHaveNumber2015OK(matrix){
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num<2015){
//                                 return true
//                         }
//                 }
//         }
//         return false
// }
// let matrix = [
//         [112153,4565,1515668,14514596,1561453,15148],
//         [1561457,145158,145459,151456,151533,1514521],
//         [112514,12154,151458,151459,1515666,151452],
//         [815254,1451549,45456,1451563,151551,1451454],
//         [8454515,151459,454566,45453,4541422,454541],
//         [44545,454518,451418,454457,45459,45456]
// ]
// console.log(testMatrixHaveNumber2015OK(matrix))
// Bài 435: Viết hàm đếm số lượng số nguyên tố trong ma trận vuông các số nguyên
// function TestNumber(number){
//                 if(number < 2){
//                         return false;
//                 }
//                 for(let i = 2; i <= Math.sqrt(number); i++){
//                         if(number % i === 0){
//                                 return false;
//                         }
//                 }
//                 return true;
//         }
// function countSoNguyenToMatrixVuong(matrix){
//         let count = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// let matrix = [
//         [112153,4565,1515668,14514596,1561453,15148],
//         [1561457,145158,145459,151456,151533,1514521],
//         [112514,12154,151458,151459,1515666,151452],
//         [815254,1451549,45456,1451563,151551,1451454],
//         [8454515,151459,454566,45453,4541422,454541],
//         [44545,454518,451418,454457,45459,45456]
// ]
// console.log(countSoNguyenToMatrixVuong(matrix))
// Bài 436: Viết hàm tính tổng các giá trị âm trong ma trận vuông các số thực
// function SumOfPositiveNumberMatrix(matrix){
//         let sum = 0;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num<0){
//                                 sum += num
//                         }
//                 }
//         }
//         return sum
// }
// let matrix = [
//         [112153,4565,1515668,14514596,1561453,15148],
//         [1561457,145158,145459,151456,151533,1514521],
//         [112514,12154,-151458,151459,-1515666,151452],
//         [815254,1451549,-45456,1451563,151551,1451454],
//         [8454515,151459,454566,45453,4541422,454541],
//         [44545,454518,451418,454457,45459,45456]
// ]
// console.log(SumOfPositiveNumberMatrix(matrix))
// Bài 437: Viết hàm sắp xếp ma trận vuông các số thực tăng dần từ trên xuống dưới và từ trái sang phải
// function sortMatrixVuong(matrix){
//         let subarr = matrix.flat();
//         subarr.sort((a,b)=>a-b);
//         let k = 0;
//         for(let rows of matrix){
//                 for(let j = 0; j<matrix.length; j++){
//                         rows[j] = subarr[k];
//                         k++
//                 }
//         }
//         return matrix
// }
// let matrix = [
//         [112153,4565,1515668,14514596,1561453,15148],
//         [1561457,145158,145459,151456,151533,1514521],
//         [112514,12154,-151458,151459,-1515666,151452],
//         [815254,1451549,-45456,1451563,151551,1451454],
//         [8454515,151459,454566,45453,4541422,454541],
//         [44545,454518,451418,454457,45459,45456]
// ]
// console.log(sortMatrixVuong(matrix))
// Tính toán
// Bài 438: Tổng phần tử thuộc ma trận tam giác trên (ko tính đường chéo) trong ma trận vuông
// function TongPhanTuTamGiacTrenKoTinhDuongCheo(matrix){
//         let sum =0;
//         for(let i = 0 ; i< matrix.length; i++){
//                 for(let j = matrix.length-1; j>i; j--){
//                         sum += matrix[i][j]
//                 }
//         }
//         return sum
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(TongPhanTuTamGiacTrenKoTinhDuongCheo(matrix))
// Bài 439: Tổng phần tử thuộc ma trận tam giác dưới (ko tính đường chéo) trong ma trận vuông
// function TongPhanTuTamGiacDuoiKoTinhDuongCheo(matrix){
//         let sum =0;
//         for(let i = 0 ; i< matrix.length; i++){
//                 for(let j =0; j<i; j++){
//                         sum += matrix[i][j]
//                 }
//         }
//         return sum
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(TongPhanTuTamGiacDuoiKoTinhDuongCheo(matrix))
// Bài 440: Tổng phần tử trên đường chéo chính
// function TongPhanTuTrenDuongCheoChinh(matrix){
//         let sum = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 sum += matrix[i][i];
//         }
//         return sum
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(TongPhanTuTrenDuongCheoChinh(matrix))
// function TongPhanTuTrenDuongCheoPhu(matrix){
//         let sum = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 sum += matrix[i][matrix.length-1-i]
//         }
//         return sum
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(TongPhanTuTrenDuongCheoPhu(matrix))
// Bài 442: Tổng phần tử chẵn nằm trên biên
// function TongPhanTuChanNamTrenBien(matrix){
//         let sum = 0;
//         for(let i = 0 ; i<matrix.length; i++){
//                 if(i === 0 || i === matrix.length-1){
//                         sum+=matrix[i].reduce((a,b)=>(b%2===0)?a+b:a,0)
//                 }
//                 else{
//                        if(matrix[i][0]%2){
//                         sum+=matrix[i][0];
//                         if(matrix[i][matrix.length-1]%2){
//                                 sum+=matrix[i][matrix.length-1]
//                         }
//                        }
//                 }
//         }
//         return sum
// }
// let matrix = [
//         [1,5,8,96,3,8],
//         [7,8,9,6,33,21],
//         [1,4,8,9,66,2],
//         [-8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(TongPhanTuChanNamTrenBien(matrix))
// Kỹ thuật đặt lính canh
// Bài 443: Tìm max trong ma trận tam giác trên
// function findMaxInUpperTriangle(matrix) {
//         let max = matrix[0][0]; // Giả sử phần tử đầu tiên là giá trị lớn nhất ban đầu
    
//         for (let i = 0; i < matrix.length; i++) {
//             for (let j = i; j < matrix[i].length; j++) { // Duyệt từ đường chéo chính đến cuối hàng
//                 if (matrix[i][j] > max) {
//                     max = matrix[i][j];
//                 }
//             }
//         }
    
//         return max;
//     }
    
//     // Ma trận tam giác trên để kiểm tra
//     let matrix = [
//         [1, 5, 8],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
    
//     console.log(findMaxInUpperTriangle(matrix)); // Kết quả: 9
// Bài 444: Tìm min trong ma trận tam giác dưới                                                     //Kết thúc ngày 15/03/2024
// function findMinNumberMatrixTamGiacDuoi(matrix){
//         let minNumber = matrix[0][0];
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = 0; j <=i;j++){
//                         if(matrix[i][j]<minNumber){
//                                 minNumber = matrix[i][j]
//                         }
//                 }
//         }
//         return minNumber
// }
//     let matrix = [
//         [1, 5, 8],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
    
//     console.log(findMinNumberMatrixTamGiacDuoi(matrix));
// Bài 445: Tìm max trên đường chéo chính                                     // Bắt đầu ngày 18/03/2024
// function findMaxDuongCheoChinh(matrix){
//         let result = -Infinity;
//         for(let i = 0; i< matrix.length;i++){
//                 if(matrix[i][i]>result){
//                         result = matrix[i][i]
//                 }
//         }
//         return result
// }
//     let matrix = [
//         [1, 5, 8],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
//     console.log(findMaxDuongCheoChinh(matrix))
// Bài 446: Tìm max trên đường chéo phụ
// function findMaxSecondaryDiagonal(matrix){
//         let maxSecondaryDiagonal = -Infinity;
//         for(let i = 0;i<matrix.length; i++){
//                 if(matrix[i][matrix.length-1-i]>maxSecondaryDiagonal){
//                         maxSecondaryDiagonal = matrix[i][matrix.length-1-i]
//                 }
//         }
//         return maxSecondaryDiagonal
// }
//     let matrix = [
//         [1, 5, 8],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
// console.log(findMaxSecondaryDiagonal(matrix))
// Bài 447: Tìm max nguyên tố trong ma trận
// function TestNumber(number){
//         if(number < 2){
//                 return false;
//         }
//         for(let i = 2; i <= Math.sqrt(number); i++){
//                 if(number % i === 0){
//                         return false;
//                 }
//         }
//         return true;
// }
// function findMaxPrimeInMatrix(matrix){
//         let result = -Infinity;
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(TestNumber(num)){
//                                 if(num>result){
//                                         result = num
//                                 }
//                         }
//                 }
//         }
//         return result
// }
//     let matrix = [
//         [1, 5, 11],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
//     console.log(findMaxPrimeInMatrix(matrix))
// Bài 448: Tìm 2 giá trị gần nhau nhất
// function findTwoValueAdjacentMatrix(matrix){
//         let flatMatrix = matrix.flat();
//         let result;
//         let minDiscount = Infinity
//         for(let i = 0; i<flatMatrix.length-1; i++){
//                 for(let j = i+1; j<flatMatrix.length;j++){
//                         let discont = Math.abs(flatMatrix[i]-flatMatrix[j]);
//                         if(discont<minDiscount){
//                                 minDiscount = discont;
//                                 result = [flatMatrix[i],flatMatrix[j]]
//                         }
//                 }
//         }
//         return result
// }
//     let matrix = [
//         [1, 5, 11],
//         [0, 7, 9],
//         [0, 0, 6]
//     ];
//     console.log(findTwoValueAdjacentMatrix(matrix))
// Bài 449: * Cho ma trận vuông A(n x n). Hãy tìm ma trận vuông B(k x k) sao cho tổng các giá trị trên ma trận vuông này là lớn nhất          // Bài này khó quá, chưa làm được
// function TongMaTranCoNCotVaDong(matrix,n){
//         let result = 0;
//         for(let i = 0; i<n;i++){
//                 for(let j = 0; j<n; j++){
//                         result += matrix[i][j]
//                 }
//         }
//         return result
// }
// function findMatrix(matrix,k){
//         let discontRowAndCols = matrix.length - k;
//         let TotalValueMax = -Infinity;
//         let 
//         for(let i = 0; i<discontRowAndCols; i++){
                
//         }
// }
// Kỹ thuật đếm
// Bài 450: Đếm số lượng cặp giá trị đối xứng nhau wa đường chéo chính
// function countCoupleSymmetryMainDiagonalMatrix(matrix){
//         let count = 0;
//         let subArray1 = [];
//         let subArray2 = [];
//         for(let i = 2; i<matrix.length; i++){
//                 subArray1.push(matrix[i][i-2])
//         }
//         for(let j = 0; j<matrix.length-2; j++){
//                 subArray2.push(matrix[j][j+2])
//         }
//         for(let k = 0; k<subArray1.length; k++){
//                 if(subArray1[k]===subArray2[k]){
//                         count++
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,1,96,3,8],
//         [7,8,9,9,33,21],
//         [1,4,8,9,66,2],
//         [8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(countCoupleSymmetryMainDiagonalMatrix(matrix))
// Bài 451: Đếm số lượng dòng giảm
// function testDown(arr){
//         for(let i = 0; i<arr.length; i++){
//                 if(arr[i]<arr[i+1]){
//                         return false
//                 }
//         }
//         return true
// }
// function countRowsDownMatrix(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 if(testDown(matrix[i])){
//                         count++
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,1,9,3,8],
//         [11,8,7,6,3,2],
//         [1,4,8,9,66,2],
//         [8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(countRowsDownMatrix(matrix))
// Bài 452: Đếm phần tử cực đại                        // Bài này khó, chưa làm
// Bài 453: Đếm giá trị dương trên đường chéo chính
// function countPositivenumberInMainDiagonal(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 if(matrix[i][i]>0){
//                         count++
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,1,9,3,8],
//         [11,8,7,6,3,2],
//         [1,4,-8,9,66,2],
//         [8,9,6,63,1,4],
//         [8,9,6,3,22,1],
//         [4,8,8,7,9,6]
// ]
// console.log(countPositivenumberInMainDiagonal(matrix))
// Bài 454: Đếm số âm trên đường chéo phụ
// function countNegativeInSecondDiagonal(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 if(matrix[i][matrix.length-1-i]<0){
//                         count++
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,1,9,3,8],
//         [1,8,7,6,3,2],
//         [1,4,8,-9,6,2],
//         [8,9,6,6,1,4],
//         [8,9,6,3,2,1],
//         [4,8,8,7,9,6]
// ]
// console.log(countNegativeInSecondDiagonal(matrix))
// Bài 455: Đếm số chẵn trong ma trận tam giác trên
// function countEvenNumberTamGiacTrenMatrix(matrix){
//         let count = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j =i+1; j<matrix.length; j++){
//                         if(matrix[i][j]%2===0){
//                                 count++
//                         }
//                 }
//         }
//         return count
// }
// let matrix = [
//         [1,5,1,9,3,8],
//         [1,8,7,6,3,2],
//         [1,4,8,-9,6,2],
//         [8,9,6,6,1,4],
//         [8,9,6,3,2,1],
//         [4,8,8,7,9,6]
// ]
// console.log(countEvenNumberTamGiacTrenMatrix(matrix))
// Kỹ thuật đặt cờ hiệu
// Bài 456: Kiểm tra đường chéo chính có tăng dần hay ko
// function testMainDiagonalIncreasing(matrix){
//         for(let i = 0; i<matrix.length-1; i++){
//                 if(matrix[i][i]>matrix[i][i+1]){
//                         return false
//                 }
//         }
//         return true
// }
// let matrix = [
//         [1,5,1,9,3,8],
//         [1,8,7,6,3,2],
//         [1,4,8,-9,6,2],
//         [8,9,6,6,1,4],
//         [8,9,6,3,2,1],
//         [4,8,8,7,9,6]
// ]
// console.log(testMainDiagonalIncreasing(matrix))
// Bài 457: Kiểm tra ma trận có đối xứng wa chéo chính ko
// Cách 1:
// function isSymmetric(matrix) {
//         let subarr1 = [];
//         let subarr2 = [];
//         for(let j = 0; j<matrix.length; j++){
//                 for(let i = 1+j; i<matrix.length; i++){
//                         subarr1.push(matrix[i][j])
//                 }
//         }
//         console.log(subarr1)
//         for(let i = 0; i<matrix.length-1; i++){
//                 for(let j = i+1; j<matrix.length; j++){
//                         subarr2.push(matrix[i][j])
//                 }
//         }
//         console.log(subarr2)
//         for(let k = 0 ; k <subarr1.length; k++){
//                 if(subarr1[k]!==subarr2[k]){
//                         return false
//                 }
//         }
//         return true
//     }
    
//     // Example usage:
//     let matrix = [
//         [1,2,3,4],
//         [2,4,5,6],
//         [3,5,6,9],
//         [4,6,9,6]
//     ];
//     console.log(isSymmetric(matrix)); // Kết quả sẽ là false, vì ma trận không đối xứng qua đường chéo chính
// Cách 2:
//     function isSymmetric(matrix) {
//         let n = matrix.length;
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
//                 if (matrix[i][j] !== matrix[j][i]) {
//                     return false; // Nếu không đối xứng, trả về false
//                 }
//             }
//         }
//         return true; // Nếu đối xứng, trả về true
//     }
    
//     // Example usage:
//     let matrix = [
//         [1,2,3,4],
//         [2,4,5,6],
//         [3,5,6,9],
//         [4,6,9,6]
//     ];
//     console.log(isSymmetric(matrix)); // Kết quả sẽ là false, vì ma trận không đối xứng qua đường chéo chính
// Bài 458: Kiểm tra ma trận có đối xứng wa chéo phụ ko
// function isAntiSymmetric(matrix){
//         for(let i = 0; i<matrix.length; i++){
//                 for(j = 0;j<matrix.length;j++){
//                         if(matrix[i][j]!==matrix[matrix.length-1-j][matrix.length-1-i]){
//                                 return false
//                         }
//                 }
//         }
//         return true
// }
//     let matrix = [
//         [1,2,3,4],
//         [3,4,5,3],
//         [3,5,4,2],
//         [4,3,3,1]
//     ];
// console.log(isAntiSymmetric(matrix));
// Bài 459: Kiểm tra ma trận có phải là ma phương ko? Ma phương là khi tổng ptử trên các dòng, cột và 2 chéo chính phụ bằng nhau
// function isMagicSquare(matrix) {
//         const n = matrix.length;
//         // Tính tổng các phần tử trên dòng đầu tiên, đây sẽ là giá trị mục tiêu cho tổng các dòng, cột và đường chéo
//         let targetSum = matrix[0].reduce((acc, curr) => acc + curr, 0);
        
//         // Kiểm tra tổng các dòng
//         for (let i = 0; i < n; i++) {
//             let rowSum = matrix[i].reduce((acc, curr) => acc + curr, 0);
//             if (rowSum !== targetSum) {
//                 return false;
//             }
//         }
        
//         // Kiểm tra tổng các cột
//         for (let j = 0; j < n; j++) {
//             let colSum = 0;
//             for (let i = 0; i < n; i++) {
//                 colSum += matrix[i][j];
//             }
//             if (colSum !== targetSum) {
//                 return false;
//             }
//         }
        
//         // Kiểm tra tổng đường chéo chính
//         let diag1Sum = 0;
//         for (let i = 0; i < n; i++) {
//             diag1Sum += matrix[i][i];
//         }
//         if (diag1Sum !== targetSum) {
//             return false;
//         }
        
//         // Kiểm tra tổng đường chéo phụ
//         let diag2Sum = 0;
//         for (let i = 0; i < n; i++) {
//             diag2Sum += matrix[i][n - 1 - i];
//         }
//         if (diag2Sum !== targetSum) {
//             return false;
//         }
        
//         // Nếu tất cả các tổng đều bằng nhau, ma trận là ma phương
//         return true;
//     }
    
//     // Example usage:
//     let matrix = [
//         [2, 7, 6],
//         [9, 5, 1],
//         [4, 3, 8]
//     ];
//     console.log(isMagicSquare(matrix)); // Kết quả sẽ là true, vì ma trận là ma phương
// Sắp xếp
// Bài 460: Sắp chéo chính tăng dần                                       // Kết thúc ngày 18/03/2024
// function SortDuongCheo(matrix){
//         let subarr = [];
//         for(let i = 0 ; i < matrix.length; i++){
//                 subarr.push(matrix[i][i])
//         }
//         subarr.sort((a,b)=>a-b);
//         for(let i = 0; i< matrix.length; i++){
//                 matrix[i][i] = subarr[i]
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
//     console.log(SortDuongCheo(matrix))
// Bài 461: Sắp chéo phụ giảm dần                            // Bắt đầu ngày 19/03/2024
// function SapXepCheoPhuGiamDan(matrix){
//         let subarr = [];
//         for(let i = 0; i<matrix.length; i++){
//                 subarr.push(matrix[i][matrix.length-1-i])
//         }
//         subarr.sort((a,b)=> b-a);
//         for(let i = 0; i<matrix.length; i++){
//                 matrix[i][matrix.length-1-i] = subarr[i]
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
//     console.log(SapXepCheoPhuGiamDan(matrix))
// Bài 462: Hoán vị 2 dòng
// function HoanVi2Dong(matrix,row1,row2){
//         let temp = matrix[row1-1];
//         matrix[row1-1] = matrix[row2-1];
//         matrix[row2-1] = temp;
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(HoanVi2Dong(matrix,2,4))
// Bài 463: Hoán vị 2 cột
// function HoanVi2Cot(matrix,col1,col2){
//         let valueOfCol1 = [];
//         let valueOfCol2 = [];
//         for(let i = 0; i<matrix.length; i++){
//                 valueOfCol1.push(matrix[i][col1-1]);
//                 valueOfCol2.push(matrix[i][col2-1])
//         }
//         for(let i = 0; i<matrix.length; i++){
//                 matrix[i][col1-1] = valueOfCol2[i];
//                 matrix[i][col2-1] = valueOfCol1[i]
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(HoanVi2Cot(matrix,2,4))
// Bài 464: sắp các dòng tăng dần theo tổng dòng
// function SapXepDongCoTongTangDan(matrix){
//         let object = {};
//         let newArray = [];
//         for(let i = 0; i< matrix.length; i++){
//                 object[i] = matrix[i].reduce((a,b)=>a+b,0);
//         }
//         for(let key in object){
//                 newArray.push(object[key])
//         }
//         newArray.sort((a,b)=>a-b);
//         let Index = [];
//        for(let i = 0; i<newArray.length; i++){
//                 for(let key in object){
//                         if(newArray[i]===object[key]){
//                                 Index.push(parseInt(key))
//                         }
//                 }
//        }
//        let setIndex = new Set(Index);
//        let newIndex = Array.from(setIndex);
//         let newMatrix = [];
//         for(let i = 0; i<newIndex.length;i++){
//                 newMatrix.push(matrix[newIndex[i]])
//         }
//         return newMatrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(SapXepDongCoTongTangDan(matrix))
// Bài 465: Đưa số chẵn về đầu ma trận vuông
// function DuaSoChanVeDauMaTranVuong(matrix){
//         let subarr = [];
//         for(let rows of matrix){
//                 for(let num of rows){
//                         if(num%2===0){
//                                 subarr.unshift(num)
//                         }
//                         else{
//                                 subarr.push(num)
//                         }
//                 }
//         }
//         let k = 0;
//         for(let rows of matrix){
//                 for( let j = 0; j<matrix.length;j++){
//                         rows[j] = subarr[k];
//                         k++
//                 }
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(DuaSoChanVeDauMaTranVuong(matrix))
// Bài 466: * Ma trận vuông A(n x n) với n >=3. Sắp tam giác trên tăng dần từ trên xuống dưới và từ trái sang phải
// function SapXepTamGiacTrenTangDanTuTrenXuongDuoiVaTuTraiQuaPhai(matrix){
//         let subarr = [];
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = matrix.length-1; j>=i;j--){
//                         subarr.push(matrix[i][j])
//                 }
//         }
//         subarr.sort((a,b)=>a-b);
//         let k = 0;
//         for(let i = 0; i<matrix.length; i++){
//                 for(let j = i; j<matrix.length;j++){
//                         matrix[i][j] = subarr[k];
//                         k++
//                 }
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(SapXepTamGiacTrenTangDanTuTrenXuongDuoiVaTuTraiQuaPhai(matrix))
// Bài 467: * Ma trận vuông A với n>=3. Sắp tam giác dưới giảm dần từ trên xuống dưới và từ trái sang phải
// function sapXepTamGiacDuoiMaTranVuongGiamDanTuTrenXuongDuoiVaTuTraiQuaPhai(matrix){
//         let subarr = [];
//         for(let i = 0; i< matrix.length; i++){
//                 for(j = 0; j<=i;j++){
//                         subarr.push(matrix[i][j])
//                 }
//         }
//         subarr.sort((a,b)=>b-a);
//         let k =0;
//         for(let i = 0; i< matrix.length; i++){
//                 for(j = 0; j<=i;j++){
//                         matrix[i][j] = subarr[k];
//                         k++
//                 }
//         }
//         return matrix
// }
//     let matrix = [
//                 [1,5,1,9,3,8],
//                 [1,8,7,6,3,2],
//                 [1,4,8,-9,6,2],
//                 [8,9,6,6,1,4],
//                 [8,9,6,3,2,1],
//                 [4,8,8,7,9,6]
//         ];
// console.log(sapXepTamGiacDuoiMaTranVuongGiamDanTuTrenXuongDuoiVaTuTraiQuaPhai(matrix))
// Bài 468: * Xây dựng ma phương A                             // bài này khó quá, không hiểu
// function maPhuongA(n) {
//         // Khởi tạo ma trận ban đầu với tất cả các phần tử đều bằng 0
//         let matrix = [];
//         for (let i = 0; i < n; i++) {
//             matrix.push(new Array(n).fill(0));
//         }
    
//         // Vị trí bắt đầu là cột giữa của hàng đầu tiên
//         let row = 0;
//         let col = Math.floor(n / 2);
    
//         // Đặt giá trị cho các ô từ 1 đến n^2
//         for (let num = 1; num <= n * n; num++) {
//             matrix[row][col] = num;
    
//             // Di chuyển lên phía trên và sang phải
//             let newRow = (row - 1 + n) % n;
//             let newCol = (col + 1) % n;
    
//             // Nếu ô tiếp theo đã được điền, di chuyển xuống phía dưới thay vì di chuyển lên trên
//             if (matrix[newRow][newCol] !== 0) {
//                 newRow = (row + 1) % n;
//                 newCol = col;
//             }
    
//             // Cập nhật vị trí mới
//             row = newRow;
//             col = newCol;
//         }
    
//         return matrix;
//     }
    
//     // Ví dụ: Tạo ma phương A có kích thước 3x3
//     let n = 3;
//     let magicSquare = maPhuongA(n);
//     console.log("Ma phương A kích thước " + n + "x" + n + ":");
//     console.log(magicSquare);
// Các phép toán trên ma trận
// Bài 469: Tổng 2 ma trận
// function Tong2MaTran(matrix1, matrix2){
//         let newMatrix = [];
//         for(let i = 0; i<matrix1.length; i++){
//                 let row = []
//                 for(let j =0; j<matrix1[i].length; j++){
//                         row.push(matrix1[i][j]+matrix2[i][j])
//                 }
//                 newMatrix.push(row)
//         }
//         return newMatrix
// }
// let matrix1 = [
//         [1,5,8,5,8],
//         [2,5,8,3,9],
//         [4,8,9,2,5],
// ]
// let matrix2 = [
//         [1,-5,8,6,9],
//         [3,5,18,1,4],
//         [4,-8,19,2,5],
// ]
// console.log(Tong2MaTran(matrix1,matrix2))
// Bài 470: Hiệu 2 ma trận
// function Hieu2Matran(matrix1,matrix2){
//         let newMatrix = [];
//         for(let i = 0; i<matrix1.length; i++){
//                 let row = []
//                 for(let j =0; j<matrix1[i].length; j++){
//                         row.push(matrix1[i][j]-matrix2[i][j])
//                 }
//                 newMatrix.push(row)
//         }
//         return newMatrix
// }
// let matrix1 = [
//         [1,5,8],
//         [2,5,8],
//         [4,8,9],
// ]
// let matrix2 = [
//         [1,-5,8],
//         [3,5,18],
//         [4,-8,19],
// ]
// console.log(Hieu2Matran(matrix1,matrix2))
// Bài 471: Tích 2 ma trận
// function Tich2Matran(matrix1,matrix2){
//         let colOfMatrix1 = matrix1[0].length;
//         let rowOfMatrix1 = matrix1.length;
//         let colOfMatrix2= matrix2[0].length;
//         let rowOfMatrix2 = matrix2.length;
//         if(colOfMatrix1!==rowOfMatrix2){
//                 return false
//         }
//         else{
//                 let result = []
//             for(let i = 0; i<rowOfMatrix1;i++){
//                 let rows = [];
//                 for(let j = 0; j<colOfMatrix2;j++){
//                         let sum = 0;
//                         for(let k = 0; k<rowOfMatrix2; k++){
//                                 sum+=matrix1[i][k]*matrix2[k][j]
//                         }
//                         rows.push(sum)
//                 }
//                 result.push(rows)
//             }
//             return result
//         }
// }
// let matrix1 = [
//         [1,5,8],
//         [2,5,8],
//         [4,8,9],
//         [5,8,9],
//         [9,6,3]
// ]
// let matrix2 = [
//         [1,-5,8,5,8,8],
//         [3,5,18,2,5,8],
//         [4,-8,19,5,6,9],
// ]
// console.log(Tich2Matran(matrix1,matrix2))
// Bài 472: * Ma trận nghịch đảo             // Khó quá, ko biết làm
// Bài 473: * Định thức của ma trận         // Khó quá, chưa làm
// Bài 474: * Tạo ma phương bậc n x n         // Khó
// Chương 8: Trừu tượng hóa dữ liệu
// Bài 475: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm phân số trong toán học và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// class PhanSo {
//         constructor(tuSo, mauSo) {
//             this.tuSo = tuSo; // Tử số của phân số
//             this.mauSo = mauSo; // Mẫu số của phân số
//         }
    
//         // Phương thức nhập phân số từ chuỗi
//         static nhapPhanSo(str) {
//             const parts = str.split('/'); // Tách chuỗi thành mảng [tuSo, mauSo]
//             const tuSo = parseInt(parts[0]); // Chuyển đổi phần tử đầu tiên thành số nguyên
//             const mauSo = parseInt(parts[1]); // Chuyển đổi phần tử thứ hai thành số nguyên
//             return new PhanSo(tuSo, mauSo); // Trả về một đối tượng PhanSo mới
//         }
    
//         // Phương thức xuất phân số dưới dạng chuỗi
//         toString() {
//             return `${this.tuSo}/${this.mauSo}`;
//         }
//     }
    
//     // Ví dụ sử dụng
//     const phanSo1 = PhanSo.nhapPhanSo('3/4'); // Nhập phân số từ chuỗi
//     console.log(phanSo1.toString()); // Xuất phân số
// Bài 476: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm hỗn số trong toán học và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này           //Kết thúc ngày 19/03/2024
// Khai báo kiểu dữ liệu hỗn số
// class HonSo {
//         constructor(phanNguyen, tuSo, mauSo) {
//             this.phanNguyen = phanNguyen;
//             this.tuSo = tuSo;
//             this.mauSo = mauSo;
//         }
//     }
//     // Định nghĩa hàm nhập cho kiểu dữ liệu hỗn số
//     function nhapHonSo() {
//         let phanNguyen = parseInt(prompt("Nhập phần nguyên: "));
//         let tuSo = parseInt(prompt("Nhập tử số: "));
//         let mauSo = parseInt(prompt("Nhập mẫu số: "));
//         return new HonSo(phanNguyen, tuSo, mauSo);
//     }
//     // Định nghĩa hàm xuất cho kiểu dữ liệu hỗn số
//     function xuatHonSo(honSo) {
//         console.log(`${honSo.phanNguyen} + ${honSo.tuSo}/${honSo.mauSo}`);
//     }
//     // Sử dụng
//     let hs = nhapHonSo();
//     console.log("Hỗn số vừa nhập là:");
//     xuatHonSo(hs);
// Bài 477: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm điểm trong mặt phẳng Oxy và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này   // Bắt đầu ngày 20/03/2024
// class ToaDo {
//         constructor (x,y){
//                 this.TrucTung = x;
//                 this.TrucHoanh = y;
//         }
// }
// function NhapToaDo () {
//         let x = prompt('Nhập hoành độ x');
//         let y = prompt('Nhập tung độ y');
//         return new ToaDo(x,y)
// }
// Khai báo kiểu dữ liệu điểm
// class Diem {
//         constructor(x, y) {
//             this.TungDo = x;
//             this.HoanhDo = y;
//         }
//     }
    
//     // Định nghĩa hàm nhập cho kiểu dữ liệu điểm
//     function nhapDiem() {
//         let x = parseFloat(prompt("Nhập hoành độ x: "));
//         let y = parseFloat(prompt("Nhập tung độ y: "));
//         return new Diem(x, y);
//     }
    
//     // Định nghĩa hàm xuất cho kiểu dữ liệu điểm
//     function xuatDiem(iem) {
//         console.log(`(${iem.TungDo}, ${iem.HoanhDo})`);
//     }
    
//     // Sử dụng
//     let point = nhapDiem();
//     console.log("Điểm vừa nhập là:");
//     xuatDiem(point);
    
// Bài 478: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm điểm trong không gian Oxyz và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// class BanThietKeDiem3Chieu {
//         constructor(x,y,z){
//                 this.TungDoX = x;
//                 this.HoanhDoY = y;
//                 this.CaoDoZ = z;
//         }
// }
// function NhapDiemOXYZ(){
//         let x = prompt('Nhập toạ độ trục x');
//         let y = prompt('Nhập toạ độ trục y');
//         let z = prompt('Nhập toạ độ trục z');
//         return new BanThietKeDiem3Chieu(x,y,z)
// }
// function XuatDiemOXYZ(param){
//         return `(${param.TungDoX},${param.HoanhDoY},${param.CaoDoZ})`;
// }
// let point = NhapDiemOXYZ();
// console.log('Toạ độ điểm A trên trục Oxyz là:',XuatDiemOXYZ(point))
// Bài 479: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm đơn thức P(x) = ax^n trong toán học và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// class BanThietKeDonThuc {
//         constructor(a,n){
//                 this.HeSo = a;
//                 this.SoMu = n
//         }
// }
// function HamNhapDonThuc(){
//         let a = prompt('Nhập Hệ Số');
//         let b = prompt('Nhập số mũ');
//         return new BanThietKeDonThuc(a,b)
// }
// function XuatDonThuc(param){
//         return `${param.HeSo}x^${param.SoMu}`
// }
// let value = HamNhapDonThuc();
// console.log('Đơn thức của bạn là: ',XuatDonThuc(value))
// Bài 480: Hãy khai báo kiểu dữ liệu để biểu diễn khái niệm đa thức 1 biến trong toán học:

// P(x) = a.n.X^n + a.n-1.X^n-1 + … + a.1.X + a.0 và định nghĩa hàm nhập và hàm xuất cho kiểu dữ liệu này
// Bài 481: Hãy khai báo kiểu dữ liệu biểu diễn ngày trong thế giới thực và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// Bài 482: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm đường thẳng ax + by + c = 0 trong mặt phẳng Oxy và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// Bài 483: Hãy khai báo kiểu dữ liệu biểu diễn khái niệm đường tròn trong mặt phẳng Oxy và định nghĩa hàm nhập, hàm xuất cho kiểu dữ liệu này
// Bài 484: Viết chương trình nhập tọa độ tâm và bán kính của 1 đường tròn trong mặt phẳng Oxy. Tính diện tích và chu vi của nó và xuất ra kết quả
// Bài 485: Viết chương trình nhập tọa độ 3 đỉnh của 1 tam giác trong mặt phẳng Oxy. Tính diện tích, chu vi và tọa độ trọng tâm của tam giác và xuất ra kết quả
// Đơn thức
// Bài 486: Tính tích 2 đơn thức
// Bài 487: Tính đạo hàm cấp 1 đơn thức
// Bài 488: Tính thương 2 đơn thức
// Bài 489: Tính đạo hàm cấp k đơn thức
// Bài 490: Tính giá trị đơn thức tại vị trí x=x0
// Bài 491: Định nghĩa toán tử (operator *) cho 2 đơn thức
// Bài 492: Định nghĩa toán tử (operator /) cho 2 đơn thức                          // Kết thúc ngày 20/03/2024
// SourceCode
// Đa thức
// Bài 493: Tính hiệu 2 đa thức
// Bài 494: Tính tổng 2 đa thức
// Bài 495: Tính tích 2 đa thức
// Bài 496: Tính thương 2 đa thức
// Bài 497: Tính đa thức dư của phép chia đa thức thứ nhất cho đa thức thứ hai
// Bài 498: Tính đạo hàm cấp 1 của đa thức
// Bài 499: Tính đạo hàm cấp k của đa thức
// Bài 500: Tính giá trị của đa thức tại vị trí x = x0
// Bài 501: Định nghĩa toán tử cộng (operator +) cho hai đa thức
// Bài 502: Định nghĩa toán tử trừ (operator -) cho hai đa thức
// Bài 503: Định nghĩa toán tử nhân (operator *) cho hai đa thức
// Bài 504: Định nghĩa toán tử thương (operator /) cho hai đa thức
// Bài 505: Tìm nghiệm của đa thức trong đoạn [a, b] cho trước
// SourceCode (còn 1 số câu chưa test)
a = [[2,5,3,6],[7,8,4,5],[3,3,5,6],[0,4,8,6]];
b = a.flat().sort((a,b) => a-b)
c = a.map(aa => aa.map(_ => 'null'))


// function xoanoc(c) {
//     let i=0, j = 0;
//     let status = 'phai';
//     for(let k = 0 ; k < b.length; k ++){
//         if( c[i][j] === 'null'){
//             c[i][j] = b[k]
//         } 
        
        
//         switch(status) {
//             case 'phai':
//                 if(c[i][j+1] === 'null') {
//                     j++;
//                 } else {
//                     status = 'xuong';
//                     if(k-- === b.length - 1) return;
//                 }
//                 break;
//             case 'xuong':
//                 if(c[i+1] && c[i+1][j] === 'null') {
//                     i++;
//                 } else {
//                     status = 'trai';
//                     if(k-- === b.length - 1) return;
//                 }
//                 break;
//             case 'trai':
//                 if(c[i][j-1] === 'null') {
//                     j--;
//                 } else {
//                     status = 'len';
//                     if(k-- === b.length - 1) return;
//                 }
//                 break;
//             case 'len':
//                 if(c[i-1] && c[i-1][j] === 'null') {
//                     i--;
//                 } else {
//                     status = 'phai';
//                     if(k-- === b.length - 1) return;
//                 }
            
//         }
        
        
//     }
    
// }

// const dx = a.length;
// const cx = a[0].length;
// for(let k = 0 ; k < b.length; k ++){
//     const l = k+1;
//     console.log("DC: ", Math.ceil(l/dx), cx-(l%cx) +1);
//     c[Math.ceil(l/dx)][cx-(l%cx) +1] = k;
// }

// console.log(c)
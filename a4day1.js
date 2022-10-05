    var a = [1,2,3,4,5,6,7,8,9,2,13];

    let largestNumber=a[0];
    let secondLargestNumber=a[1];
    let temp;

    let b = a.sort(function(a, b){return a - b});
    console.log('first' +b);
    console.log('first largest element is'+b[b.length-1]);
    console.log('second largest element is'+b[b.length-2]);
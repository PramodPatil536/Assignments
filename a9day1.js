arr=['abc','def','ghi','jkl','mnp'];
function upperCase(arr1)
{
    for(let i=0;i<arr1.length;i++)
    {
    arr1[i]=arr1[i].slice(0,arr1[i].length-1)+arr1[i].slice(arr1[i].lenth-1).toUpperCase()
    }
    document.write(arr1);

}
upperCase(arr);
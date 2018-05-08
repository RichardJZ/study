
var array1 = [1,2,3,4,5,6,7,8,9];



function findIndex(arr,callback){
var result = -1;	
for(var i = 0;  i < arr.length;i++){
	if(callback(arr[i]) == true){
	result = i ;}
	


}
return result;
}

findIndex(array1,function(str){
	return  str == 8; 
});

findIndex(array1,function(str){
	return  str == 10; 
});

findIndex(array1,function(str){
	return  str == 1; 
});
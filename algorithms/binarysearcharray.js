// create a function to do a binary search of an array
// Q. What's the time/space complexity?
// Iterative/Recursive approach?

var bsarray = function (array,target,start,end){
	start = start || 0;
	end = end === undefined ? array.length-1 : end;
	var mid = Math.floor((end+start)/2);

	if (array[mid] === target) return true;
	else if (end < start || start > end) return false;
	else if (array[mid] < target) return bsarray(array,target,mid+1,end);
	else if (array[mid] > target) return bsarray(array,target,start,mid-1);
	else return false;
};
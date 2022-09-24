/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort(compareNumbers)
    let output = [];
    
    //[[1,3],[2,6],[8,10],[15,18]]
    for(let i = 0 ; i < intervals.length ; i ++){
        let start,end;
        if(i+1 < intervals.length){
        if(intervals[i][1] >= intervals[i+1][0]){
            start = intervals[i][0];
            if(intervals[i][1] > intervals[i+1][1]){
                end = intervals[i][1]
            }else{
                end = intervals[i+1][1]
            }
            intervals[i+1] = [start,end]
        }else{
            output.push(intervals[i])
        }
    }else{
        output.push(intervals[i])
    }
        
    }
    
    return output
};
function compareNumbers(a, b) {
  return a[0] - b[0];
}



function taskA(para){
   setTimeout(function(){
       console.log('input parameter of TaskA:', para);
       var result = 'result of A';
       done(null, result);
   }, 2000);
}

function taskB(para){
   setTimeout(function(){
       console.log('input parameter of TaskB:', para);
       var result = 'result of B';
       done(null, result);
   }, 2000);
}

function taskC(para){
   setTimeout(function(){
       console.log('input parameter of TaskC:', para);
       var result = 'result of C';
       done(null, result);
   }, 2000);
}

var taskList = [taskA, taskB, taskC];

function done(error, previousResult) {
    if (error) throw error;
    var currentTask = taskList.shift();
    if (currentTask) {
        currentTask( previousResult );
    } else {
        console.log('final result: ', previousResult);
    };
}

done(null, 'initial input');

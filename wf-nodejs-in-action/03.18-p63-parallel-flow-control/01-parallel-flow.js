
function taskA(para, taskId){
   setTimeout(function(){
       console.log('TaskA done');
       var result = 'result of A';
       parallelDone(null, taskId, result);
   }, 2000);
}

function taskB(para, taskId){
   setTimeout(function(){
       console.log('TaskB done');
       var result = 'result of B';
       parallelDone(null, taskId, result);
   }, 1000);
}

function taskC(para, taskId){
   setTimeout(function(){
       console.log('TaskC done');
       var result = 'result of C';
       parallelDone(null, taskId, result);
   }, 3000);
}


var tasks = {};
tasks.list = [taskA, taskB, taskC];
tasks.completed = 0;
tasks.results = [];

function parallelDone(error, taskId, result) {
    if (error) throw error;
    tasks.results[taskId] = result;
    tasks.completed++;
    if (tasks.completed == tasks.list.length ) {
        console.log('all tasks completed, result:', tasks.results );
    }
}

for (var taskIndex in tasks.list ) {
    tasks.list[taskIndex]('initial input', taskIndex);
}


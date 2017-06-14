var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

if(cluster.isMaster) {
    console.log('Thread master');

    cpus.forEach(() => {
        cluster.fork();
    });

    cluster.on('listening', worker => {
        console.log('Cluster %d running', worker.process.pid);
    });

    cluster.on('exit', worker => {
        console.log('Cluster %d stoped', worker.process.pid);
        cluster.fork();
    });
}else {
    console.log('Thread slave');
    require('./index.js');
}
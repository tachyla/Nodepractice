const EventEmitter = require ('events');

const emitter = new EventEmitter();

emitter.on('message logged', (arg) => {
    console.log("Logged Message", arg);
});

emitter.on('Logging', (e) => {
    console.log('Logged Message', e)
});

// Raise an event
emitter.emit('message logged', {id: 1, url:'http://'});


// Raise logging
emitter.emit('Logging', {data: 'logging message'});
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server '); 

    socket.emit('createMessage', {
        from: 'Luis',
        text: 'yup, thats works for me'
    });
}); 

socket.on('disconnect', function () {
    console.log('Disconnected from server '); 
}); 

socket.on('newMessage', function (message) {
    console.log('NewMessage', message); 
});
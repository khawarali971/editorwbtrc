var peer = require('peer')
var conn;
        var peer = new Peer({
            key: 'kik93uxbdd5kx1or'
        });
        peer.on('open', function(id) {
            $('#pid').text(id)
        });
        peer.on('connection', connect);

        function connect(c) {
            $('#rid').val(conn.peer);
            $('#rid').prop('disabled', true)
            $('#progBar').width('100%')
            conn.on('data', function(data) {
                $('#inputText').val($('#inputText').val() + data)
            })
        }
        $(document).ready(function() {
            $('connect').click(function) {
                $('#progBar').width('50%')
                var c = peer.connect($('#rid').val());
                c.on('open', function() {
                    connect(c)
                })
            })
        });
        $('#inputText').keypress(function(e) {
            var ev = e || window.event;
            var asciikey = ev.keyCode || ev.which;
            text = String.fromCharCode(asciikey);
            conn.send(textKey);
        })
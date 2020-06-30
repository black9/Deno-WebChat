let ws;

window.addEventListener('DOMContentLoaded', () => {
    ws = new WebSocket(`ws://localhost:3000/ws`)
    ws.addEventListener('open', onConnectionOpen);
    ws.addEventListener('open', onMessageReceived);

    const queryParams = getQueryParams()
})

function onConnectionOpen() {
    console.log(`connection Opened`);
}

function onMessageReceived(event) {
    console.log("Message recevied", event)
}

function getQueryParams() {

}
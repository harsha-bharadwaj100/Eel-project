async function getDataFromPython() {
    document.getElementById('myele').innerText = await eel.get_data()();
}

document.getElementById('mybtn').addEventListener('click', () => {getDataFromPython();
})

document.getElementById('sendbtn').addEventListener('click', async() => {
    await eel.send_data('Hello from JS')
})
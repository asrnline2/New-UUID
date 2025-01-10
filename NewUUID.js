// New UUID generation function (36x36x36)
function generateLongUUID() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 3; i++) {
        let segment = '';
        for (let j = 0; j < 36; j++) {
            segment += chars[Math.floor(Math.random() * chars.length)];
        }
        result += segment + (i < 2 ? '-' : '');
    }
    return result;
}
//
let newUUIDs = '';
newUUIDs += generateLongUUID() + '<br>'; // Add a line break after each UUID
document.getElementById('newUUIDContent').innerHTML = newUUIDs;

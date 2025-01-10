<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-2xl">

<h4 class="text-center mb-2">New version UUID</h4>
    <div id="newUUIDContent" class="text-gray-800 break-all font-mono text-sm"></div>
    </div>
</div>
//Add your insert code

// New UUID generation function
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
//Insert your code
let newUUIDs = '';
newUUIDs += generateLongUUID() + '<br>'; // Add a line break after each UUID
document.getElementById('newUUIDContent').innerHTML = newUUIDs;

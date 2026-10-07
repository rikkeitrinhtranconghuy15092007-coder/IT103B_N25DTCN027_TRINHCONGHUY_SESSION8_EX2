const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

const indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

const indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

let availableCount = 0;
let maxPower = 0;
let maxPowerPort = '';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++; 
        
        if (portPowersKw[i] > maxPower) {
            maxPower = portPowersKw[i];
            maxPowerPort = portIds[i];
        }
    }
}

console.log('--- BÁO CÁO TRẠNG THÁI TRẠM SẠC ---');
console.log('Danh sách cập nhật mới nhất:');
for (let i = 0; i < portIds.length; i++) {
    console.log(`- ${portIds[i]} | Trạng thái: ${portStatuses[i]} | Công suất: ${portPowersKw[i]}kW`);
}
console.log('-----------------------------------');
console.log(`Tổng số trụ đang sẵn sàng (AVAILABLE): ${availableCount}`);
console.log(`Trụ sẵn sàng có công suất lớn nhất là: ${maxPowerPort} (${maxPower}kW)`);

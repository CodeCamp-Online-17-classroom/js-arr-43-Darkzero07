// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterRange(arr, a, b) {
    return arr.filter(element => element >= a && element <= b);
}

const filteredArray = filterRange(arr, 3, 7);
console.log(filteredArray); // [3, 4, 5, 6, 7]
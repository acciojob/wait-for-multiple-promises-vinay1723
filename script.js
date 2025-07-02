//your JS code here. If required.

let date1 = new Date();

const promise1 = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
		resolve((new Date() - date1)/1000);	
		},1000);
	})
}

const promise2 = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
		resolve((new Date() - date1)/1000);	
		},2000);
	})
}
const promise3 = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
		resolve((new Date() - date1)/1000);	
		},2700);
	})
}


Promise.all([promise1(),promise2(),promise3()]).then((data) => {
	let total = new Date() - date1;
	const table = document.getElementById('output');
	for (let i = 0;i<data.length;i++) {
		let tableRow = table.insertRow(i);
		let t_data1 = tableRow.insertCell(0)
		let t_data2 = tableRow.insertCell(1)
		t_data1.textContent = `Promise ${i+1}`;
		t_data2.textContent = data[i];
		
	}
	let total_row = table.insertRow(3);
	let total_data1 = total_row.insertCell(0);
	let total_data2 = total_row.insertCell(1);
	total_data1.textContent = 'Total';
	total_data2.textContent = total/1000;
})
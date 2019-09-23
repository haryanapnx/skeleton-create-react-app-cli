export const isEmpty = (value) => {
   if (!value || value === '0') { return true }
   if (typeof value === 'object') {
      for (var k in value) {
         return false;
      }
      return true;
   }
   return false;
}

export const convertToRp = (angka) => {
	let value = angka.toString().split('.')[0]
	let rupiah = "";
	let angkarev = value
		.toString()
		.split("")
		.reverse()
		.join("");
	for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
	return (
		"Rp " +
		rupiah
			.split("", rupiah.length - 1)
			.reverse()
			.join("")
	);
};
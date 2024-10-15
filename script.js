const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

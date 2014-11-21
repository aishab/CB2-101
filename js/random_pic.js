 var imlocation = "../img/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 image = new ImageArray(3)
 image[0] = 'newbinary-1.png'
 image[1] = 'book.jpg'
 image[2] = 'road.jpg'
 var rand = 60/image.length
 function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = image_munber-3*Math.floor(image_number/3)
 	return(image[image_number])
 }
 document.write("<img src='" + imlocation + randomimage()+ "'>");
 

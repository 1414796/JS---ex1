
var ctxArr = [];
var COUNT = 0;
var index = 0;
var table = null;
var a;

//prevent ENTER
window.addEventListener('keydown',function(e){
	if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13) {
		if(e.target.nodeName=='INPUT'&&e.target.type=='text') {
			e.preventDefault();
			return false;
		}
	}
},true);

function addProduct() {
		var close = document.getElementsByClassName("close");

		txtVal = document.getElementById("name-product").value;
		ctxArr[index] = txtVal;
		// console.log(ctxArr);

		if (!txtVal || txtVal == " ") {
			alert("You must write something!");
		}
		else if (txtVal.length>20) {
			alert("length of test must be less than 20");
		}
		else {
			lstNode = document.getElementById("list");
			trNode = document.createElement("TR");
			tdNode = document.createElement("TD");
			td1Node = document.createElement("TD");
			td2Node = document.createElement("TD");
			td2Node.setAttribute("class","close");
			td2Node.setAttribute("onclick", "close()");

			//button "X"
			butNode = document.createElement("BUTTON");
			nameButNode = document.createTextNode("x");
			butNode.append(nameButNode);

			COUNT = COUNT + 1;
			numNode = document.createTextNode(index);
			txtNode = document.createTextNode(ctxArr[index]);

			document.getElementById("name-product").value = " ";

			tdNode.append(numNode);
			td1Node.append(txtNode);
			td2Node.append(butNode);
			trNode.append(tdNode);
			trNode.append(td1Node);
			trNode.append(td2Node);
			lstNode.append(trNode);
			index++;
		}

		for (var i = 0; i < close.length; i++) {

		    close[i].onclick = function() {
		    var div = this.parentElement;
		    // console.log(close.length);
		    div.remove();
		    // console.log(i);

			document.write(ctxArr[i]);

				// console.log(close);
			// update(i);
			}
		}
		// console.log();
	}

	// function update(i) {
	// listUpdate = document.getElementById("list");
	// // console.log(this.ctxArr[0]);
	// // 	console.log(ctxArr.length);
	// for (var j = 0; j<ctxArr.length;j++) {
	// 	this.ctxArr[i] = this.ctxArr[i+1];
	// 	console.log(this.ctxArr);
	// }



	 // }


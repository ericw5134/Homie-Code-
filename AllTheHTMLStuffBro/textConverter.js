/*
    how to install FileSaver.js https://github.com/eligrey/FileSaver.js/
*/

function createText(){
    var code;

    var test = document.getElementById('code');
    if (test != null){
        code = test.value;
    } else {
        code = null;
    }
    //console.log(code);

    var blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "inputCode.txt");

	var submit_button = document.getElementById("btn_container");
	var viewlink = document.createElement("a");
	viewlink.href = "output.py";
	submit_button.appendChild(viewlink);
}



/* 
	reference: https://sumtips.com/snippets/javascript/tab-in-textarea/#js
*/
function insertTab(o, e)
{		
	var kC = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which;
	if (kC == 9 && !e.shiftKey && !e.ctrlKey && !e.altKey)
	{
		var oS = o.scrollTop;
		if (o.setSelectionRange)
		{
			var sS = o.selectionStart;	
			var sE = o.selectionEnd;
			o.value = o.value.substring(0, sS) + "\t" + o.value.substr(sE);
			o.setSelectionRange(sS + 1, sS + 1);
			o.focus();
		}
		else if (o.createTextRange)
		{
			document.selection.createRange().text = "\t";
			e.returnValue = false;
		}
		o.scrollTop = oS;
		if (e.preventDefault)
		{
			e.preventDefault();
		}
		return false;
	}
	return true;
}

function refresh(){
	location.reload();
}
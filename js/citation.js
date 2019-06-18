function selectText(containerid) {
    if (document.selection) { // IE
        document.selection.empty();
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
function copyText(containerid) {
    if (document.selection) {
        document.selection.empty();
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");

    } else if (window.getSelection) {
        document.getElementById('selectableAPACopied').innerHTML="";
        document.getElementById('selectableMLACopied').innerHTML="";

        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        document.getElementById(containerid+"Copied").innerHTML="copied!";
    }}
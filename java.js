function out() {
    var x = parseInt(document.getElementById("value").value);
    var y = document.getElementById("code").value;
    var sum = 30 * x;
    if (y == "K2SHOP") {
        var gst = (18 * sum) / 100;
        var total = sum + gst;
        var dis = (25 * total) / 100;
        var grand = total - dis;
        document.getElementById("demo1").innerHTML = "Bill";
        document.getElementById("demo2").innerHTML = "The Cost Of One Chsir Is $30";
        document.getElementById("demo3").innerHTML = "The Qunantity Of Chair Is " + x;
        document.getElementById("demo4").innerHTML = "The GST Is $" + gst;
        document.getElementById("demo5").innerHTML = "The Total Is $" + total;
        document.getElementById("demo6").innerHTML = "The Discount Of $" + dis;
        document.getElementById("demo7").innerHTML = "The Grand Total Is $" + grand;
    }
    else {
        var gst = (18 * sum) / 100;
        var total = sum + gst;
        var dis = (total * 15) / 100;
        var grand = total - dis;
        document.getElementById("demo2").innerHTML = "The Cost Of One Chsir Is $30";
        document.getElementById("demo3").innerHTML = "The Qunantity Of Chair Is " + x;
        document.getElementById("demo4").innerHTML = "The GST Is $" + gst;
        document.getElementById("demo5").innerHTML = "The Total Is $" + total;
        document.getElementById("demo6").innerHTML = "The Discount Of $" + dis;
        document.getElementById("demo7").innerHTML = "The Grand Total Is $" + grand;
    }
}

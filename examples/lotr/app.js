function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
    }
    }

    function myFunction2() {
    var z = document.getElementById("myDIV");
    if (z.style.display === "none") {
        z.style.display = "block";
        
    } else {
        z.style.display = "none";
    }
    }

    function nftpopup() {
    var gift = document.getElementById("nftlogo");
    let nft = document.getElementById('myDIV3')
    let btn2 = document.getElementById('btn2')
    let btn3 = document.getElementById('btn3')
    let ringmove = document.getElementById("ringmove")
    if (nft.style.display === "none" && btn2.style.display === "none" && btn3.style.display === "none" && ringmove.style.display === "none") {
        
        nft.style.display="block"
        btn2.style.display="block"
        btn3.style.display="block"
        ringmove.style.display='block'
        
    } else {

        nft.style.display="none"
        btn2.style.display="none"
        btn3.style.display="none"
        ringmove.style.display='none'
    }
    }
// Bootcamp12_BaiTap_JS_Buoi_1_NguyenMinhHoang
// Bai 1: Tinh tien luong nhan vien

var ipCalculate = document.getElementById('ipCalculate');
var displayInfo =document.getElementById('displayInfo');
displayInfo.style.display = 'none';

ipCalculate.onclick = function(){
    // Input Luong1Ngay
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    // Input soNgayLam
    var soNgayLam = document.getElementById('soNgayLam').value;
    // Input thuNhap
    var thuNhap = document.getElementById('thuNhap');

    // Operation thuNhap = luong1Ngay x soNgayLam
    thuNhap.innerHTML = luong1Ngay*soNgayLam;
    // output thuNhap
    displayInfo.style.display = 'inline';
}



// Bai 2: Tinh gia tri trung binh

var btnAverage = document.getElementById('btnAverage');
var displayAvg =document.getElementById('displayAvg');
btnAverage.onclick = function(){
    // Input 5 so thuc
    var soA = document.getElementById('soA').value;
    var soB = document.getElementById('soB').value;
    var soC = document.getElementById('soC').value;
    var soD = document.getElementById('soD').value;
    var soE = document.getElementById('soE').value;
    var soTrungBinh = document.getElementById('soTrungBinh');
    // Operation soTrungBinh = (soA+soB+soC+soD+soE)/5
    var update1 = (soA*1 + soB*1 + soC*1 + soD*1 + soE*1)/5;    // Bug plus to be concatenate
    soTrungBinh.innerHTML = update1;
    // Output soTrungBinh
    displayAvg.style.display = 'inline';
    console.log('Bug plus to be concatenate');
}



// Bai 3: Quy doi tien

var helpId1 = document.getElementById('textTrigger');
helpId1.style.display = 'none';
var fxCalculate = document.getElementById('fxCalculate');
var displayExchange =document.getElementById('displayExchange');

// Input quyDoiUSD dang constant
const quyDoiUSD = 23500;
const quyDoiEUR = 27500;
var quyDoiFx;

fxCalculate.onclick = function(){
    var quyDoiVND = document.getElementById('quyDoiVND').value;
    var selectFx = document.getElementById('selectFx').value;
    console.log(selectFx)
    var fxExchange = document.getElementById('fxExchange');

    if(selectFx == 'USD'){
        fxExchange.innerHTML = quyDoiVND / quyDoiUSD + selectFx;
        
    }
    else if(selectFx == 'EUR') {
        fxExchange.innerHTML = quyDoiVND / quyDoiEUR + selectFx;
    }

    helpId1.style.display = 'inline';
    displayExchange.style.display = 'inline';// Output soTienVND
}



// Bai 4: Tinh dien tich, chu vi hinh chu nhat

// Input button
var displayS = document.getElementById('displayS');
var displayP = document.getElementById('displayP');
var SCalculate = document.getElementById('SCalculate');
var PCalculate = document.getElementById('PCalculate');

// Tinh dien tich
SCalculate.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    if(chieuDai < chieuRong) {
        alert('Đọc lại hướng dẫn');
    }
    else{
    var dienTich = document.getElementById('textS');
    dienTich.innerHTML = chieuDai * chieuRong;
    displayS.style.display = 'block';
    }
}
// Tinh chu vi
PCalculate.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    if(chieuDai < chieuRong) {
        alert('Đọc lại hướng dẫn');
    }
    else{
        var chuVi = document.getElementById('textP');
        chuVi.innerHTML = 2*(chieuDai*1 + chieuRong*1) ;
        displayP.style.display = 'block';
    }

}


// Bai 5: Tinh tong 2 ky so
// Input button
var dgCalculate = document.getElementById('dgCalculate');
var displaySum = document.getElementById('displaySum');

dgCalculate.onclick = function(){
    var soAB = document.getElementById('soAB').value;
    // Operation tinh so hang don vi
    var hangDonVi = soAB % 10;
    // Operation tinh so hang chuc
    var hangChuc = Math.floor(soAB / 10);
    // Operation tinh tong ky so
    var tongKySo = hangChuc + hangDonVi;

    // Output tong ky so
    var dgSum = document.getElementById('dgSum');
    dgSum.innerHTML = 'Tổng ký số của ' + soAB + ' là ' + tongKySo;
    displaySum.style.display = 'block';
}



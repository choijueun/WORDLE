// KOREAN REGULAR EXPRESSION
function kRe(str) {
    const re = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; 
    // 검사
    if (re.test(str)) { return true; }
    else { return false; }
}

// SHIFT
function toggleShift(){
    let vr_shift = $('.vr-shift')
    vr_shift.toggleClass('disabled').toggleClass('inline-block')
}

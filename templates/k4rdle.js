$(function(){
    // DRAG UNABLE
    $(document).on('contextmenu dragstart selectstart keydown', function(e){ return false; })

    // SHIFT
    $(document).on( 'click', '#SHIFT', function(){ 
        toggleShift(); 
    });

    // DELETE
    $(document).on( 'click', '#DELETE', function(){
        console.log('click #DELETE')
    });
    
    // SUBMIT
    $(document).on( 'click', '#SUBMIT', function(){
        console.log('click #SUBMIT')
    });

    // TEST
    Toast.fire({
        icon: 'warning',
        title: '단어 없음!!'
    });
});

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

// SWEETALERT2
const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
});
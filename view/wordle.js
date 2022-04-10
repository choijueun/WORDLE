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
});
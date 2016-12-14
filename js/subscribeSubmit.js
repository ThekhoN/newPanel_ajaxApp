function yoloKR() {
    var glob = [];
    $('.ss-q-checkbox').each(function() {
        if ($(this).is(':checked')) {
            glob.push($(this).attr('value'));
            //console.log('checked'+$(this).attr('value'));
        } else {
            //console.log('not checked'+$(this).attr('value'));
        }
    });
    console.log('result:' + glob);
    sweep(glob);
    //end of call sweep extra
    setTimeout(function() {
        $("form").trigger("reset");
    }, 500);
    $('.subsribe_text, .dealform_filed').fadeOut(100);
    $('.subthankyou_text').fadeIn(500);
    $('.divforapp').hide();
}

function sweep(glob) {
    var emailx = $('#entry_2056924394').val();
    var xdata = '{"sweepstakeFormId": "DODSweep1", "sweepstakeQs":["' + glob + '"], "sweepstakeAs":[], "alertEmail":"' + emailx + '"}';
    var podata = JSON.parse(xdata);
    console.log('podata' + JSON.stringify(podata));
    $.ajax({
        type: "POST",
        url: '/sweepstakesDPCall',
        data: JSON.stringify(podata),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        success: function(data) {
            console.log('Sweep success');
        },
        error: function(xhr, textStatus, error) {
            console.log('Sweep found error but success');
        }
    });
}
//var checklogins = getCookie('lu');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('#entry_2056924394').click(function() {
        $('.divforapp').show();
        $('html, body').animate({
            scrollTop: $(".divforapp p").offset().top
        }, 1000);
    });
    var mobgetemail = getCookie('eid');
    if (getCookie('eid')) {
        $('#entry_2056924394').val(mobgetemail.split('"').join(''));
    }
} else {
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    var mobgetemail = getCookie('eid');
    $('#entry_2056924394').val(mobgetemail.split('"').join(''));
}
/*var WapAppInfo =navigator.userAgent.indexOf('WapAppInfo');
var formInputX = document.getElementById('entry_2056924394');
var divForApp = document.getElementsByClassName('divforapp');
console.log('WapAppInfo: ', WapAppInfo);

formInputX.addEventListener('click', function(){
	if(WapAppInfo){
		divForApp.style.display = 'block';
	}
});	*/
$('.dealform_filed input[type=checkbox]').click(function() {
    if ($('.dealform_filed input[type=checkbox]').is(':checked')) {
        $('.dealform_filed input[type=checkbox]').removeAttr('required');
    }
});

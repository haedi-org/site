const gs_url = "https://script.google.com/macros/library/d/1qvxfPktNTGTKIzWGSJed8Bs5ueUCP27bh3SUq30XhHHnWaPgWDXIxNa-/2";

//https://docs.google.com/forms/d/e/1FAIpQLScJGHtqXizArzA4BcRs5jxsdePu69UJGPyGUgk2bV5ryx0GAQ/viewform?usp=pp_url&entry.1176030620=example@example.com

$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your submission has been processed...');
});
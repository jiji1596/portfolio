AOS.init();
let samt = 0;
window.addEventListener('scroll', function() {
samt <= 10 ? samt++ : AOS.refresh();
});

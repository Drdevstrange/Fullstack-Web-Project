// Mobile chat sliding mechanism
function initMobileChatSlider() {
    const chatHero = $('.chat-hero');
    
    // Handle chat block clicks to show messages
    $('.chat-block').on('click', function() {
        if (window.innerWidth <= 768) {
            chatHero.addClass('show-messages');
        }
    });

    // Handle back button click
    $('.back-button').on('click', function(e) {
        e.stopPropagation();
        chatHero.removeClass('show-messages');
    });

    // Reset layout on window resize
    $(window).on('resize', function() {
        if (window.innerWidth > 768) {
            chatHero.removeClass('show-messages');
        }
    });
}

// Initialize mobile slider when document is ready
$(document).ready(function() {
    initMobileChatSlider();
});

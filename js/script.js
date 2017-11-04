

        $('.textWord_about').hide();
    
        $('.link').click(function() {
            $('.textWord_about2').hide();
             $('.textWord_about').hide();
            $('.textWord_about[data-link=' + $(this).data('link') + ']').fadeIn({
                width: '200px'
            }, 300);
        });
        
          $('.link2').click(function() {
        
             $('.textWord_about').hide();
            $('.textWord_about2[data-link=' + $(this).data('link') + ']').fadeIn({
                width: '200px'
            }, 300);
        });
 
/**
 * Created by prio on 2/10/15.
 */
//LazyLoad


$('.lazy-load').lazyload({
    threshold: 200,

    load:function(img){},

    trigger:appear


});
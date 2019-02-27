$(document).ready(function() {
    $('#wel1').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#btn').offset().top
		}, 1000, 'swing', function () {
		 window.location.hash = target;
		});
    });
    $('#wel2').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#check').offset().top
		}, 1100, 'swing', function () {
		 window.location.hash = target;
		});
    });
    $('#wel3').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#radio').offset().top
		}, 1200, 'swing', function () {
		 window.location.hash = target;
		});
    });
    $('#wel4').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#table').offset().top
		}, 1300, 'swing', function () {
		 window.location.hash = target;
		});
    });
    $('#wel5').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#nav').offset().top
		}, 1400, 'swing', function () {
		 window.location.hash = target;
		});
    });
    $('#wel6').on('click',function(e) {
        console.log("hey")
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
		 'scrollTop': $('#form').offset().top
		}, 1500, 'swing', function () {
		 window.location.hash = target;
		});
    });
})
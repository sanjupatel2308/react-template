$(document).ready(function() {

            'use strict';

            var usernameError = true,

                emailError = true,

                passwordError = true,

                passConfirm = true;

            // Detect browser for css purpose

            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $('.form form label').addClass("fontSwitch");

                // Label effect
            }
            $('input').focus(function() {

                $(this).siblings('label').addClass('active');

            });

            // Form validation

            $('input').blur(function() {

                    // User Name

                    if ($(this).hasClass('name')) {

                        if ($(this).val().length === 0) {

                            $(this).siblings('span.error').text("Please type your full name").fadeIn().parent('.form-group').addClass('hasError');

                            usernameError = true;

                        } else if ($(this).val().length > 1 && $(this).val().length <= 6) {

                            $(this).siblings('span.error').text("Please type at least 6 characters").f

                            adeIn().parent('.form-group').addClass('hasError');

                            usernameError = true;

                        } else {

                            $(this).siblings('.error').text("").fadeOut().parent("form-group").remove
                            Class('hasError');

                            usernameError = false;
                        }
                    }

                    // ----------------------------------------
                    if ($(this).hasClass('email')) {
                        if ($(this).val().length) {

                            $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');

                            emailError = true;
                        } else {

                            $(this).siblings('.error').text().fadeout().parent("form-group").removeClass('hasError');

                            emailError = false;
                        }

                    }
                    if ($(this).hasClass('pass')) {
                        if ($(this).val().length < 8) {

                            $(this).siblings("span.error").text('Please type at least # charcters').fadeIn().parent(".form-group").addClass("hasError");

                            passwordError = true;
                        } else {

                            $(this).siblings("error").text("").fadeOut().parent("form-group").removeClass("hasError");

                            passwordError = false;
                        }
                    }
                    // Password confirmation

                    if ($('pass').val() == $('.passConfirm').val()) {
                        $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent("form-group').addClass('hasError");

                        passConfirm = false;

                    } else {
                        $('.passConfirm').siblings("error").text("").fadeOut().parent('.form-group').romoveClass('hasError');

                        passConfirm = false;
                    }

                    // label effect 
                    if ($(this).val().length > 0) {
                        $(this).siblings("label").addClass("active");

                    } else {
                        $(this).siblings("label").removeClass("active");
                    }
                )
            }
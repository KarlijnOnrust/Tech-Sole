$(document).ready(function () {
    $('#upgrade_form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

        fields: {
            date: {
                message: 'Er is iets fout gegaan bij het vinden van de datum',
                validators: {
                    notEmpty: {
                        message: 'Er is iets fout gegaan bij het vinden van de datum'
                    },
                }
            },
            time: {
                message: 'Er is iets fout gegaan bij het vinden van de datum',
                validators: {
                    notEmpty: {
                        message: 'Er is iets fout gegaan bij het vinden van de datum'
                    },
                }
            },
            name: {
                message: 'Deze naam is niet geldig',
                validators: {
                    notEmpty: {
                        message: 'Dit vak mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Je naam moet tussen 1 en 30 tekens zijn'
                    },
                    regexp: {
                        regexp: /^[aA-zZ_]+$/,
                        message: 'Er mogen alleen letters in dit vak staan'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Dit vak mag niet leeg zijn'
                    },
                    emailAddress: {
                        message: 'Dit mailadres is niet geldig'
                    }
                }
            },
            subject: {
                message: 'Dit onderwerp is niet geldig',
                validators: {
                    notEmpty: {
                        message: 'Dit vak mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Je naam moet tussen 1 en 30 tekens zijn'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'Er mogen alleen letters en cijfers in dit vak staan'
                    },
                }
            },
            subject2: {
                message: 'Er is iets fout gegaan bij het vinden van het secundaire onderwerp',
                validators: {
                    notEmpty: {
                        message: 'Er is iets fout gegaan bij het vinden van het secundaire onderwerp'
                    },
                }
            },
            price: {
                message: 'Deze prijs is niet geldig',
                validators: {
                    notEmpty: {
                        message: 'Dit vak mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Er mogen alleen nummers in dit vak staan'
                    },
                }
            },
            message: {
                message: 'Deze naam is niet geldig',
                validators: {
                    notEmpty: {
                        message: 'Dit vak mag niet leeg zijn'
                    }
                    , stringLength: {
                        min: 20,
                        max: 300,
                        message: 'Je naam moet tussen 20 en 300 tekens zijn'
                    },
                }
            },
            check: {
                message: 'Dit vak moet ingevuld zijn',
                validators: {
                    notEmpty: {
                        message: 'Dit vak moet ingevuld zijn'
                    },

                }
            },
        }
    })
        .on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            var url = 'https://script.google.com/macros/s/AKfycbxTexruiGe4sbTdOieqM7h5AlxzWdt03aNzdMJb3zjiym3t79aw/exec';
            var redirectUrl = 'success-page.html';

            // show the loading
            $("#loadingU").addClass("fa fa-spinner fa-spin");
            var jqxhr = $.post(url, $form.serialize(), function (data) {
                console.log("Success! Data: " + data.statusText);
                $(location).attr('href', redirectUrl);
            })
                .fail(function (data) {
                    console.warn("Error! Data: " + data.statusText);
                    // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                        //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                        $(location).attr('href', redirectUrl);
                    }
                });
        });
});
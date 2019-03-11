(function (e) {
    e.fn.validate = function () {
       
        $elem = this;
        $ValidationMsgBox = e("#" + $elem.attr("data-error-container"));
        $ValidationMsgBox.html("");
        isValid = true;
        $elem.find("input.required").each(function () {

            if (e.trim(e(this).val()) == "") {
                isValid = false;
                $ValidationMsgBox.append("<li>" + e(this).attr("data-error-message") + "</li>");
                e(this).addClass('hasError')
            }
            else {
                if (e(this).attr("data-is-numeric")) {
                    var t = /^[0-9]+$/;
                    if (!t.test(e(this).val())) {
                        isValid = false;
                        $ValidationMsgBox.append("<li>" + e(this).attr("data-numeric-error-message") + "</li>");
                        e(this).addClass('hasError')
                    }
                }
                else {
                    e(this).removeClass('hasError')
                }
                if (e(this).attr("data-is-email")) {
                    var t = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                    if (!t.test(e(this).val())) {
                        isValid = false;
                        $ValidationMsgBox.append("<li>" + e(this).attr("data-email-error-message") + "</li>");
                        e(this).addClass('hasError')
                    }
                }
                else {
                    e(this).removeClass('hasError')
                }
                if (e(this).attr("data-is-mobile")) {
                    var t = /^[ ()+]*([0-9][ ()+]*){10}$/;
                    if (!t.test(e(this).val())) {
                        isValid = false;
                        $ValidationMsgBox.append("<li>" + e(this).attr("data-mobile-error-message") + "</li>");
                        e(this).addClass('hasError')
                    }
                }
                else {
                    e(this).removeClass('hasError')
                }
                if (e(this).attr("data-is-ip")) {
                    var t = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
                    if (!t.test(e(this).val())) {
                        isValid = false;
                        $ValidationMsgBox.append("<li>" + e(this).attr("data-ip-error-message") + "</li>");
                        e(this).addClass('hasError')
                    }
                }
                else {
                    e(this).removeClass('hasError')
                }
            }
        });
        var isDone = false;
        $elem.find('input.OneRequired').each(function () {
           
            if ($elem.find('input.OneRequired[type="checkbox"]:checked').length > 0) {
                e(this).removeClass('hasError')
            }
            else {
                if (!isDone) {
                    isDone = true;
                    isValid = false; $ValidationMsgBox.append("<li>" + e(this).attr("data-error-message") + "</li>"); e(this).addClass('hasError')
                }

            }


        });


        $elem.find('input.OneRadioRequired').each(function () {

            if ($elem.find('input.OneRadioRequired[type="radio"]:checked').length > 0) {
                e(this).removeClass('hasError')
            }
            else {
                if (!isDone) {
                    isDone = true;
                    isValid = false; $ValidationMsgBox.append("<li>" + e(this).attr("data-error-message") + "</li>"); e(this).addClass('hasError')
                }

            }
        });



        $elem.find("textarea.required").each(function () {
            if (e.trim(e(this).val()) == "") {
                isValid = false; $ValidationMsgBox.append("<li>" + e(this).attr("data-error-message") + "</li>"); e(this).addClass('hasError')
            } else {
                e(this).removeClass('hasError')
            }
        });
        $elem.find("select.required").each(function () {
            if (e.trim(e(this).val()) <= 0) {
                isValid = false; $ValidationMsgBox.append("<li>" + e(this).attr("data-error-message") + "</li>"); e(this).addClass('hasError')
            } else {
                e(this).removeClass('hasError')
            }
        });


        return isValid
    }; e.fn.changeValidationState = function () {
        $elem = this; $elem.find("select.required").each(function () {
            e(this).removeClass('hasError')
        });
        $elem.find("input.required").each(function () {
            e(this).removeClass('hasError')
        });
        $elem.find("textarea.required").each(function () {
            e(this).removeClass('hasError')
        })
    }
})(jQuery);
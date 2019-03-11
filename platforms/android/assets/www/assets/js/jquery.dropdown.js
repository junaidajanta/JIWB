$(function () {

    jQuery.fn.dropdown = function (params) {
        params = $.extend({ pAction: 0, pLookUpId: 0, pLookUpType: 0, pSelectionType: 0 }, params);
        $elem = $(this);

        postData = { pAction: params.pAction, pLookUpId: params.pLookUpId, pLookUpType: params.pLookUpType, pSelectionType: params.pSelectionType };
        $.ajax({
            async: false,
            type: "POST",
            // url: "../CommonMethod.aspx/lu_details",
            url: webIP + "CommonMethod.aspx/lu_details",
            data: JSON.stringify({ "dbParameters": postData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg != null) {
                    if (msg.d != null) {
                        var opt = '';
                        data = $.parseJSON(msg.d);

                        $.each(data, function (i, d) {
                            if (i == 0) {
                                opt += "<option value='" + d.DataValueField + "' selected='selected'>" + d.DataTextField + "</option>";
                            }
                            else {
                                opt += "<option value='" + d.DataValueField + "'>" + d.DataTextField + "</option>";
                            }
                        });

                        $elem.html(opt);
                    }
                }
            },
            error: function (requestObject, error, errorThrown) {
            }
        });
    }
    return this;
});








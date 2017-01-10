(function ($) {
    $.fn.miniupload = function (options, callback) {
        var jqDom = $(this);
        var defaults = {
            type: "POST",
            url: "",
            filetype: ["*"],
            data: {}
        };
        var opts = $.extend(defaults, options);
        var file_type_accept = opts.filetype.join([",."])
        if ($.inArray("*", opts.filetype) == -1) {
            file_type_accept = "." + file_type_accept;
            jqDom.attr("accept", file_type_accept);
        }

        jqDom.change(function () {
            for (var i = 0; i < jqDom.prop("files").length; i++) {
                var form_data = new FormData();
                var file_data = jqDom.prop("files")[i];
                if ($.inArray("*", opts.filetype) == -1) {
                    if (check_file_type(file_data["name"]) == -1) {
                        layer.alert("file type error");
                        break;
                    }
                }
                form_data.append("file_name", file_data);
                for (var key in opts.data) {
                    form_data.append(key, opts.data[key]);
                }
                $.ajax({
                    url: opts.url,
                    cache: false,
                    contentType: false,
                    processData: false,
                    async: false,
                    type: "POST",
                    data: form_data,
                    beforeSend:function () {
                        layer.load(2);
                    },
                    success:function (data) {
                        callback(data);
                        jqDom.val(null);
                        layer.closeAll('loading');
                    }
                });
            }
        });
        function check_file_type(file) {
            var extension = file.substr((file.lastIndexOf('.') + 1));
            return $.inArray(extension, opts.filetype);
        }
    };
})(jQuery)

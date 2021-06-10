const BASE_URL = "https://api.packimpex.com/webhook/pulse"

$(() => {
    function register() {
        [ 1, 2, 3, 4, 5].forEach( (v, i) => {
            $("#r" + v).on("click", () => {
                var comment = $("#comment").val();
                submit(comment, v);
            });
        })
        
    }
    function submit(comment, value) {
        var hashId = $.url("query");
        console.log({
            hashId,
            comment,
            value
        });
        $.ajax({
            type: "POST",
            url: BASE_URL + "?id=" + hashId,
            dataType: "json",
            data: {
                value,
                comment
            },
            success: function (result, status, xhr) {
                $("#sectionform").hide();
                $("#thankyou").show();
            },
            error: function (xhr, status, error) {
                $("#sectionform").hide();
                $("#thankyou").show();
            }
        });

        
    }
    register();
});
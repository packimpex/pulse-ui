const BASE_URL = "https://api.packimpex.com/webhook/pulse"

$(() => {
    var value = 0;
    function register() {
        [1, 2, 3, 4, 5].forEach((v, i) => {
            $("#r" + v).on("click", () => {
                setValue(v);
            });
        })

        $("#submit").on("click", () => {
            var comment = $("#comment").val();
            var myValue = value;
            submit(comment, myValue;)p
    });

    }
function setValue(newV) {
    value = newV;
    [1, 2, 3, 4, 5].forEach((v, i) => {
        if (newV >= v) {
            $("#r" + v).addClass("rating-active");
        } else {
            $("#r" + v).removeClass("rating-active");
        }
    })
}
function submit(comment, value) {
    var hashId = $.url("query");
    console.log({
        hashId,
        comment,
        value
    });
    fetch(BASE_URL + "?id=" + hashId,
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value,
                comment
            })
        })
        .then(function (result, status, xhr) {
            $("#sectionform").hide();
            $("#thankyou").show();
        })
        .catch(function (xhr, status, error) {
            $("#sectionform").hide();
            $("#thankyou").show();
        });


}
register();
});
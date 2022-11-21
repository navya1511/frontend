const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const localString = "http://127.0.0.1:8000/api";
const localJSON = "http://127.0.0.1:8000/predict";
const cloudString = "https://ccfds.herokuapp.com/api"
const cloudJSON = "https://ccfds.herokuapp.com/predict"
let api;

$("#predict").on("submit", function (e) {
    e.preventDefault();
    var that = $(this)
        if (document.getElementById('JSON').checked) {
        // if (jsonId.checked || jsonId2.checked) {
            api = cloudJSON;
        }
        else {
            api = cloudString;
        }
        url = api,
        method = "GET",
        data = {};
    that.find("[name]").each(function (_index, value) {
        var that = $(this),
            name = that.attr("name"),
            value = that.val();
        data[name] = value;
    });
    $.ajax({
        url: url,
        method: method,
        data: data,
        mode: 'same-origin',
        credentials: 'same-origin',
        success: function (response) {
            result.classList.toggle("hidden");
            result.innerHTML = response;
            setTimeout(function () {
                result.classList.toggle("hidden");
            }, 5000);
        },
    });
});
$("#predictV2").on("submit", function (e) {
    e.preventDefault();
    var that = $(this)
        if (document.getElementById('JSON1').checked) {
            api = cloudJSON;
        }
        else {
            api = cloudString;
        }
        url = api,
        method = "GET",
        data = {};
    that.find("[name]").each(function (_index, value) {
        var that = $(this),
            name = that.attr("name"),
            value = that.val();
        data[name] = value;
    });
    $.ajax({
        url: url,
        method: method,
        data: data,
        mode: 'same-origin',
        credentials: 'same-origin',
        success: function (response) {
            result2.classList.toggle("hidden");
            result2.innerHTML = response;
            setTimeout(function () {
                result2.classList.toggle("hidden");
            }, 5000);
        },
    });
});
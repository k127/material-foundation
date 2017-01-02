var addRippleEffect = function(e) {
    var target = e.target;
    if (target.className.indexOf("ink") === -1) return !1;
    var rect = target.getBoundingClientRect(), ripple = target.querySelector(".ripple");
    ripple || (ripple = document.createElement("span"), target.className.indexOf("ink-color") !== -1 ? ripple.className = "ripple-color" : ripple.className = "ripple", 
    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px", 
    target.appendChild(ripple)), ripple.classList.remove("show");
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - (document.documentElement.scrollTop || document.body.scrollTop), left = e.pageX - rect.left - ripple.offsetWidth / 2 - (document.documentElement.scrollLeft || document.body.scrollLeft);
    return ripple.style.top = top + "px", ripple.style.left = left + "px", ripple.classList.add("show"), 
    !1;
};

document.addEventListener("click", addRippleEffect, !1), $.fn._toggleInput = function() {
    $(this).click(function() {
        $(this).toggleClass("checked"), $(this).siblings("label.radio").removeClass("checked");
    });
}, $("label.radio, label.checkbox")._toggleInput();
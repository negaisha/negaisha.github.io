var isSP = (window.navigator.userAgent.indexOf('iPhone') > 0) || (window.navigator.userAgent.indexOf('iPod') > 0) || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0);


if (isSP) {
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
} else {
    document.write('<meta name="viewport" content="width=1200">');
}

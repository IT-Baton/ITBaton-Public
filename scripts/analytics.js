/* Word Atlas analytics. Include once per page:
   <script src="scripts/analytics.js" defer></script>
   From /game/ use ../scripts/analytics.js
   Yandex and Google both queue hits until their libraries load. */
(function (m, e, t, r, i, k, a) {
	m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
	m[i].l = 1 * new Date();
	for (var j = 0; j < document.scripts.length; j++) {
		if (document.scripts[j].src === r) { return; }
	}
	k = e.createElement(t);
	a = e.getElementsByTagName(t)[0];
	k.async = 1;
	k.src = r;
	a.parentNode.insertBefore(k, a);
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

ym(111470998, 'init', {
	clickmap: true,
	trackLinks: true,
	accurateTrackBounce: true,
	webvisor: true
});

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-F1P84N91L7');

(function () {
	var id = 'G-F1P84N91L7';
	var src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
	var scripts = document.getElementsByTagName('script');
	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].src === src) { return; }
	}
	var tag = document.createElement('script');
	tag.async = true;
	tag.src = src;
	document.head.appendChild(tag);
})();

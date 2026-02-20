(function() {
	var hasGSAP = typeof gsap !== 'undefined';

	// ----- Entrance: blocks fade in, title and labels fly in (GSAP) -----
	var page = document.querySelector('.page');
	var titleEl = document.querySelector('.title-main');
	var taglineEl = document.querySelector('.tagline');
	var storeCards = document.querySelectorAll('.store-card');
	var labels = document.querySelectorAll('.store-card .label');
	var hints = document.querySelectorAll('.store-card .hint');
	var footerLinks = document.querySelector('.footer-links');

	if (hasGSAP) {
		gsap.set([titleEl, taglineEl], { opacity: 0, y: 24 });
		gsap.set(storeCards, { opacity: 0, y: 32 });
		gsap.set(labels, { opacity: 0, y: 12 });
		gsap.set(hints, { opacity: 0, y: 8 });
		gsap.set(footerLinks, { opacity: 0 });

		var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
		tl.to(titleEl, { opacity: 1, y: 0, duration: 0.6 })
			.to(taglineEl, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')
			.to(storeCards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
			.to(labels, { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 }, '-=0.4')
			.to(hints, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06 }, '-=0.3')
			.to(footerLinks, { opacity: 1, duration: 0.4 }, '-=0.2');
	}
})();

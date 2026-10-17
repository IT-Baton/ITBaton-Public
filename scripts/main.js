(function() {
	var hasGSAP = typeof gsap !== 'undefined';
	var bgVideo = document.querySelector('.bg-video');

	// Ensure autoplay starts after browser restores page/session state.
	if (bgVideo) {
		bgVideo.play().catch(function() {});
	}

	// ----- Entrance: blocks fade in, title and labels fly in (GSAP) -----
	var page = document.querySelector('.page');
	var titleEl = document.querySelector('.title-main');
	var taglineEl = document.querySelector('.tagline');
	var storeCards = document.querySelectorAll('.store-card');
	var labels = document.querySelectorAll('.store-card .label');
	var hints = document.querySelectorAll('.store-card .hint');
	var footerLinks = document.querySelector('.footer-links');
	var playNow = document.querySelector('.play-now');
	var lead = document.querySelector('.lead');
	var seo = document.querySelector('.seo');

	if (hasGSAP && titleEl) {
		gsap.set([titleEl, taglineEl, lead].filter(Boolean), { opacity: 0, y: 24 });
		if (playNow) gsap.set(playNow, { opacity: 0, y: 16 });
		gsap.set(storeCards, { opacity: 0, y: 32 });
		gsap.set(labels, { opacity: 0, y: 12 });
		gsap.set(hints, { opacity: 0, y: 8 });
		if (seo) gsap.set(seo, { opacity: 0, y: 16 });
		gsap.set(footerLinks, { opacity: 0 });

		var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
		tl.to(titleEl, { opacity: 1, y: 0, duration: 0.6 })
			.to(taglineEl, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3');
		if (lead) tl.to(lead, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
		if (playNow) tl.to(playNow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15');
		tl.to(storeCards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
			.to(labels, { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 }, '-=0.4')
			.to(hints, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06 }, '-=0.3');
		if (seo) tl.to(seo, { opacity: 1, y: 0, duration: 0.45 }, '-=0.15');
		tl.to(footerLinks, { opacity: 1, duration: 0.4 }, '-=0.2');
	}
})();

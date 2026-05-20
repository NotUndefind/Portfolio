"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
	const dotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const dot = dotRef.current;
		if (!dot) return;

		let mx = -100, my = -100, cx = mx, cy = my;
		let rafId: number;

		const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

		function raf() {
			cx += (mx - cx) * 0.18;
			cy += (my - cy) * 0.18;
			dot!.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
			rafId = requestAnimationFrame(raf);
		}

		window.addEventListener("mousemove", onMove);
		rafId = requestAnimationFrame(raf);

		// Scroll reveal
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("in");
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
		);
		document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(rafId);
			io.disconnect();
		};
	}, []);

	return <div className="cursor-dot" ref={dotRef} />;
}

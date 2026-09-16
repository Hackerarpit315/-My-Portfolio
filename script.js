/* ---------- SCROLL REVEAL ---------- */

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}


/* ---------- ACTIVE NAV ---------- */

.nav-links a.active {
    color: var(--accent);
}

.nav-links a.active::after {
    width: 100%;
}
/**
 * CIVIC.EDU - Modern Civic Design System Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Progress Bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";
        
        // Navigation Scroll Effect
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });



    // 3. Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, section > h2, .check-card').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Checklist Logic
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const successMsg = document.getElementById('checklist-success');

    function updateChecklist() {
        let allDone = true;
        checkboxes.forEach(cb => {
            const id = cb.getAttribute('data-save');
            if (cb.checked) {
                localStorage.setItem('civic_check_' + id, 'true');
            } else {
                allDone = false;
                localStorage.removeItem('civic_check_' + id);
            }
        });
        if (successMsg) {
            if (allDone && checkboxes.length > 0) successMsg.classList.remove('hidden');
            else successMsg.classList.add('hidden');
        }
    }

    checkboxes.forEach(cb => {
        const id = cb.getAttribute('data-save');
        if (localStorage.getItem('civic_check_' + id) === 'true') {
            cb.checked = true;
        }
        cb.addEventListener('change', updateChecklist);
    });
    updateChecklist();

    // 5. Tabs System (Learning Hub)
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanels = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = trigger.getAttribute('data-tab');
            
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            trigger.classList.add('active');
            const panel = document.getElementById(target);
            if (panel) panel.classList.add('active');
        });
    });

    // 6. FAQ Accordion
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close others
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            if (!wasActive) {
                item.classList.add('active');
                trigger.querySelector('span').textContent = '−';
            } else {
                trigger.querySelector('span').textContent = '+';
            }
        });
    });

    // 7. Premium Jargon Buster (Floating Popover)
    const jargonTerms = document.querySelectorAll('.jargon-term');
    const popover = document.createElement('div');
    popover.className = 'jargon-popover';
    document.body.appendChild(popover);

    const jargonData = {
        "electoral college": "A formal body of electors who choose the President and Vice President based on state results.",
        "constituency": "A body of voters in a specified area who elect a representative to a legislative body.",
        "incumbent": "The current holder of an office or post, usually running for re-election.",
        "absentee ballot": "A ballot completed and typically mailed in advance of an election by a voter who is unable to go to the polls."
    };

    jargonTerms.forEach(term => {
        term.addEventListener('mouseenter', () => {
            const key = term.getAttribute('data-term');
            if (jargonData[key]) {
                popover.textContent = jargonData[key];
                popover.classList.add('active');
            }
        });

        term.addEventListener('mouseleave', () => {
            popover.classList.remove('active');
        });
    });
    // 8. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});

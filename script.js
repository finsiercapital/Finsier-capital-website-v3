document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       FINSIER CAPITAL — V3
       Basic interaction layer
       ========================================= */

    // Smooth scrolling for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // Subtle header shadow after scrolling
    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 20) {
                header.style.boxShadow =
                    "0 8px 30px rgba(7, 26, 53, 0.08)";
            } else {
                header.style.boxShadow = "none";
            }

        };

        updateHeader();

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

    }


    // Prevent accidental double-clicking of external CTA links
    document.querySelectorAll(
        'a[href*="forms.gle"]'
    ).forEach(button => {

        button.addEventListener("click", () => {

            button.style.pointerEvents = "none";

            setTimeout(() => {
                button.style.pointerEvents = "";
            }, 1200);

        });

    });

});

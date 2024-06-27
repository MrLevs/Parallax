"use strict"

window.onload = function () {

    const parallax = document.querySelector('#parallax');

    if (parallax) {

        const parallaxTitle = document.querySelector('#title');
        const mountain = document.querySelector('#mountain');
        const clouds = document.querySelector('#clouds');
        const trees = document.querySelector('#trees');
        const cave = document.querySelector('#cave');
        const ellipse = document.querySelector('#ellipse');
        const btn = document.querySelector('#btn');
        const content = document.querySelector('#content');

        window.addEventListener('scroll', function () {

            let parallaxHeight = parallax.getBoundingClientRect();
            let distProcent = Math.abs(parallaxHeight.y / (parallaxHeight.height - (parallaxHeight.height / 5)) * 100);

            if (distProcent > 100) {
                distProcent = 100;
            }
            parallaxTitle.style.opacity = `${0 + 0.01 * distProcent}`;
            mountain.style.cssText = `scale: ${1 + (0.0015 * distProcent)};`;
            clouds.style.cssText = `scale: ${1 + (0.0035 * distProcent)};`;
            trees.style.cssText = `scale: ${1 + (0.0025 * distProcent)};`;
            cave.style.cssText = `scale: ${1 + (0.01 * distProcent)};`;
            ellipse.style.cssText = `scale: ${1 + (0.02 * distProcent)};`;
        });

        btn.onclick = function () {
            let elemCord = content.getBoundingClientRect();
            let elemTop = Math.abs(elemCord.top - 150);
            scrollBy({
                top: elemTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
};


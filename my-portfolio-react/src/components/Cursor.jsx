import { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            if (cursor) {
                cursor.style.left = cursorX - 6 + 'px';
                cursor.style.top = cursorY - 6 + 'px';
            }
            if (follower) {
                follower.style.left = followerX - 20 + 'px';
                follower.style.top = followerY - 20 + 'px';
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener('mousemove', onMouseMove);
        const animId = requestAnimationFrame(animateCursor);

        // Hover effects
        const handleMouseEnter = () => {
            if (cursor) cursor.style.transform = 'scale(2)';
            if (follower) {
                follower.style.transform = 'scale(1.5)';
                follower.style.opacity = '0.3';
            }
        };

        const handleMouseLeave = () => {
            if (cursor) cursor.style.transform = 'scale(1)';
            if (follower) {
                follower.style.transform = 'scale(1)';
                follower.style.opacity = '0.5';
            }
        };

        const addHoverListeners = () => {
            const elements = document.querySelectorAll('a, button, .btn, .project-card, .nav-link');
            elements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Re-add listeners periodically or on mutation? 
        // For simplicity, add roughly delay to catch lazy loads, but global delegation is harder with individual transforms.
        // We'll just run it once and maybe re-run it? 
        // Actually, CSS hover is easier for cursor? No, the JS transforms the CUSTOM cursor divs.
        // A better React way is Context, but porting logic directly:
        addHoverListeners();
        // Just in case, try again after a sec for Await content?
        setTimeout(addHoverListeners, 1000);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animId);
            const elements = document.querySelectorAll('a, button, .btn, .project-card, .nav-link');
            elements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>
        </>
    );
};

export default Cursor;

import React, { useEffect, useRef, useState } from "react";

// Medical-themed Animated Background Component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const scrollSpeedRef = useRef(0);
  const scrollDirectionRef = useRef({ x: 0, y: 0 });
  const lastScrollY = useRef(window.scrollY);
  const lastScrollX = useRef(window.scrollX);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const aboutSection = document.querySelector(".about-section");
      if (aboutSection) {
        canvas.width = aboutSection.offsetWidth;
        canvas.height = aboutSection.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }

      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      const speedY = Math.abs(currentScrollY - lastScrollY.current);
      const speedX = Math.abs(currentScrollX - lastScrollX.current);
      const totalSpeed = Math.sqrt(speedY * speedY + speedX * speedX);

      scrollSpeedRef.current = Math.min(totalSpeed / 8, 12);
      scrollDirectionRef.current = {
        x: currentScrollX - lastScrollX.current,
        y: currentScrollY - lastScrollY.current,
      };

      lastScrollY.current = currentScrollY;
      lastScrollX.current = currentScrollX;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const healingElements = [];
    const elementCount = 300;

    for (let i = 0; i < elementCount; i++) {
      healingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 8,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.2 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: Math.floor(Math.random() * 3),
        pulsePhase: Math.random() * Math.PI * 2,
        scrollBoostX: 0,
        scrollBoostY: 0,
      });
    }

    const drawCross = (ctx, x, y, size, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#4a90e2";
      ctx.fillRect(x - size / 2, y - size / 6, size, size / 3);
      ctx.fillRect(x - size / 6, y - size / 2, size / 3, size);
      ctx.restore();
    };

    const drawHeart = (ctx, x, y, size, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#e74c3c";
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x - size / 2, y - size / 4, x - size, y + size / 4, x, y + size);
      ctx.bezierCurveTo(x + size, y + size / 4, x + size / 2, y - size / 4, x, y + size / 4);
      ctx.fill();
      ctx.restore();
    };

    const drawLeaf = (ctx, x, y, size, opacity, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#27ae60";
      ctx.beginPath();
      ctx.ellipse(0, 0, size / 3, size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#219a52";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(74, 144, 226, 0.02)");
      gradient.addColorStop(0.5, "rgba(52, 152, 219, 0.03)");
      gradient.addColorStop(1, "rgba(74, 144, 226, 0.02)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      scrollSpeedRef.current *= 0.92;

      healingElements.forEach((element) => {
        const scrollInfluence = scrollSpeedRef.current;

        const scrollDirectionInfluence = 0.3;
        element.scrollBoostX = scrollDirectionRef.current.x * scrollDirectionInfluence * (scrollInfluence / 10);
        element.scrollBoostY = scrollDirectionRef.current.y * scrollDirectionInfluence * (scrollInfluence / 10);

        element.x += element.speedX * (1 + scrollInfluence * 1.5) + element.scrollBoostX;
        element.y += element.speedY * (1 + scrollInfluence * 1.5) + element.scrollBoostY;

        element.rotation += element.rotationSpeed * (1 + scrollInfluence * 0.5);
        element.pulsePhase += 0.02 * (1 + scrollInfluence * 0.3);

        if (element.x + element.size > canvas.width || element.x - element.size < 0) {
          element.speedX *= -0.8;
          element.x = Math.max(element.size, Math.min(canvas.width - element.size, element.x));
        }
        if (element.y + element.size > canvas.height || element.y - element.size < 0) {
          element.speedY *= -0.8;
          element.y = Math.max(element.size, Math.min(canvas.height - element.size, element.y));
        }

        const pulse = Math.sin(element.pulsePhase) * 0.3 + 0.7;
        const scrollPulse = 1 + scrollInfluence * 0.1;
        const currentSize = element.size * pulse * scrollPulse;
        const currentOpacity = element.opacity * pulse * Math.min(1, 1 + scrollInfluence * 0.2);

        switch (element.type) {
          case 0:
            drawCross(ctx, element.x, element.y, currentSize, currentOpacity);
            break;
          case 1:
            drawHeart(ctx, element.x, element.y, currentSize, currentOpacity);
            break;
          case 2:
            drawLeaf(ctx, element.x, element.y, currentSize, currentOpacity, element.rotation);
            break;
          default:
            // Safe fallback
            break;
        }
      });

      healingElements.forEach((element, index) => {
        healingElements.slice(index + 1).forEach((otherElement) => {
          const dx = element.x - otherElement.x;
          const dy = element.y - otherElement.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const connectionOpacity = (1 - distance / 150) * 0.08 * (1 + scrollSpeedRef.current * 0.3);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(74, 144, 226, ${connectionOpacity})`;
            ctx.lineWidth = 1 + scrollSpeedRef.current * 0.2;
            ctx.moveTo(element.x, element.y);
            ctx.lineTo(otherElement.x, otherElement.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    />
  );
};

export default AnimatedBackground;

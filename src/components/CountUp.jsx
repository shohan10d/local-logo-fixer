import { useEffect, useRef, useState } from "react";

function CountUp({ value, duration = 1000, className = "" }) {
  const [display, setDisplay] = useState(value);
  const hasStartedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStartedRef.current) return;

    const startAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const match = value.match(/([\d,]+)(.*)/);
      if (!match) {
        setDisplay(value);
        return;
      }

      const raw = match[1].replace(/,/g, "");
      const suffix = match[2].trim();
      const target = parseInt(raw, 10);

      if (Number.isNaN(target)) {
        setDisplay(value);
        return;
      }

      setDisplay(suffix && !/^[+\-%]/.test(suffix) ? `0 ${suffix}` : `0${suffix}`);

      let startTime = null;
      let rafId;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        const formatted = current.toLocaleString();
        const separator = suffix && !/^[+\-%]/.test(suffix) ? " " : "";
        setDisplay(`${formatted}${separator}${suffix}`);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default CountUp;

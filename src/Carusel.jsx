import { useState, useEffect, useRef } from "react";

const COLORS = {
  navy: "#0B3D4D",
  ink: "#0E2229",
  inkSoft: "#4B6067",
  mintPale: "#E4F8EF",
};

const SLIDES = [
  {
    bg: "linear-gradient(115deg,#0B3D4D 0%,#0E5C6B 55%,#137d63 100%)",
    eyebrow: "Sun'iy intellekt asosida",
    title: ["Retseptni ", "AI", " yordamida bir zumda tahlil qiling"],
    desc: "Shifokor xatini yuklang — tizim dori nomi, dozasi va o'zaro ta'sirlarini avtomatik tekshiradi.",
    cta: "Hoziroq boshlash",
    stat: { value: "96%", label: "tizim samaradorligi" },
  },
  {
    bg: "linear-gradient(115deg,#0E3A2E 0%,#1F9D6B 60%,#5FD6A5 130%)",
    eyebrow: "Yetkazib berish 60 daqiqada",
    title: ["Onlayn dorixona — uyingizga ", "tez", " yetkazamiz"],
    desc: "3,450 dan ortiq bemor allaqachon foydalanmoqda. Dorilarni ilova orqali buyurtma qiling.",
    cta: "Buyurtma berish",
    stat: { value: "3,450", label: "faol bemorlar" },
  },
  {
    bg: "linear-gradient(115deg,#0B2E4A 0%,#1B6E8C 55%,#3FA8D8 120%)",
    eyebrow: "Ombor nazorati",
    title: ["Dori zaxirasini ", "AI", " bilan boshqaring"],
    desc: "Qoldiqlar kamayganda tizim avtomatik ogohlantiradi va yetkazib beruvchiga so'rov yuboradi.",
    cta: "Panelni ko'rish",
    stat: { value: "15", label: "bugungi tashriflar" },
  },
];

const QUICKLINKS = [
  {
    label: "Retsept yuklash",
    sub: "AI tahlili bilan",
    bg: COLORS.mintPale,
    stroke: "#1F9D6B",
    path: "M12 5v14M5 12h14",
  },
  {
    label: "Navbat olish",
    sub: "Onlayn tashrif",
    bg: "#E7F3FA",
    stroke: "#3FA8D8",
    path: "M3 10h18M8 2v4M16 2v4",
    rect: true,
  },
  {
    label: "Dorilar katalogi",
    sub: "Narx va mavjudlik",
    bg: "#EFEAF9",
    stroke: "#7F63C9",
    path: "M9 9h6M9 13h6",
    doc: true,
  },
];

function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === -1 ? "Oldingi slayd" : "Keyingi slayd"}
      style={{
        position: "absolute",
        top: "50%",
        [dir === -1 ? "left" : "right"]: 20,
        transform: "translateY(-50%)",
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "rgba(255,255,255,.16)",
        border: "1px solid rgba(255,255,255,.3)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 3,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d={dir === -1 ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
      </svg>
    </button>
  );
}

export default function AiDorixonaBanner() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (i) => setCurrent(i);
  const move = (dir) => setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(() => move(1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: COLORS.ink,
        maxWidth: 1120,
        margin: "0 auto",
        padding: isMobile ? "16px 12px" : "24px 16px",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: 22,
          overflow: "hidden",
          height: isMobile ? 280 : 360,
          boxShadow: "0 12px 30px -14px rgba(11,61,77,.35)",
          background: COLORS.navy,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${current * 100}%)`,
            transition: "transform .55s cubic-bezier(.65,0,.35,1)",
          }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              style={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: isMobile ? "0 24px" : "0 64px",
                background: s.bg,
                overflow: "hidden",
              }}
            >
              {!isMobile && (
                <svg
                  viewBox="0 0 200 200"
                  style={{
                    position: "absolute",
                    right: -40,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 480,
                    height: 480,
                    opacity: 0.16,
                    stroke: "#fff",
                    fill: "none",
                    strokeWidth: 2,
                  }}
                >
                  <path d="M20 100h30v-40h40v80h40v-60h50" />
                  <circle cx="20" cy="100" r="4" fill="#fff" stroke="none" />
                  <circle cx="90" cy="60" r="4" fill="#fff" stroke="none" />
                  <circle cx="130" cy="140" r="4" fill="#fff" stroke="none" />
                  <circle cx="180" cy="80" r="4" fill="#fff" stroke="none" />
                </svg>
              )}

              <div style={{ position: "relative", zIndex: 2, maxWidth: 560 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,.14)",
                    color: "#fff",
                    fontSize: isMobile ? 11 : 12.5,
                    fontWeight: 600,
                    padding: "6px 12px",
                    borderRadius: 999,
                    marginBottom: isMobile ? 12 : 16,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5FD6A5" }} />
                  {s.eyebrow}
                </span>

                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: isMobile ? 22 : 34,
                    lineHeight: 1.18,
                    color: "#fff",
                    margin: "0 0 12px",
                  }}
                >
                  {s.title[0]}
                  <span style={{ color: "#5FD6A5" }}>{s.title[1]}</span>
                  {s.title[2]}
                </h2>

                <p
                  style={{
                    fontSize: isMobile ? 13 : 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,.82)",
                    maxWidth: 440,
                    marginBottom: isMobile ? 16 : 26,
                  }}
                >
                  {s.desc}
                </p>

                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    color: COLORS.navy,
                    fontWeight: 600,
                    fontSize: isMobile ? 13 : 14.5,
                    padding: isMobile ? "10px 16px" : "12px 22px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {s.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>

              {!isMobile && (
                <div
                  style={{
                    position: "absolute",
                    right: 56,
                    top: 28,
                    background: "rgba(255,255,255,.12)",
                    border: "1px solid rgba(255,255,255,.25)",
                    borderRadius: 14,
                    padding: "12px 16px",
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <b style={{ display: "block", fontSize: 19, fontWeight: 700 }}>
                    {s.stat.value}
                  </b>
                  <span style={{ fontSize: 11.5, color: "rgba(255,255,255,.75)" }}>
                    {s.stat.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <Arrow dir={-1} onClick={() => move(-1)} />
            <Arrow dir={1} onClick={() => move(1)} />
          </>
        )}

        <div
          style={{
            position: "absolute",
            left: isMobile ? 16 : 64,
            bottom: 16,
            zIndex: 3,
            display: "flex",
            gap: 8,
          }}
        >
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? (isMobile ? 36 : 46) : 20,
                height: 8,
                borderRadius: 999,
                background:
                  i === current ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.3)",
                cursor: "pointer",
                transition: "width .3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: isMobile ? 10 : 12,
          marginTop: isMobile ? 14 : 18,
          flexWrap: "wrap",
        }}
      >
        {QUICKLINKS.map((q, i) => (
          <div
            key={i}
            style={{
              flex: isMobile ? "1 1 calc(50% - 5px)" : "1 1 200px",
              background: "#fff",
              border: "1px solid #E3EFE9",
              borderRadius: 14,
              padding: isMobile ? "12px 12px" : "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 10 : 12,
              fontSize: isMobile ? 12.5 : 13.5,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: isMobile ? 32 : 34,
                height: isMobile ? 32 : 34,
                borderRadius: 10,
                background: q.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={q.stroke}
                strokeWidth="2"
              >
                {q.rect && <rect x="3" y="4" width="18" height="16" rx="2" />}
                {q.doc && (
                  <path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                )}
                <path d={q.path} />
              </svg>
            </div>
            {!isMobile ? (
              <div>
                {q.label}
                <small
                  style={{
                    display: "block",
                    color: COLORS.inkSoft,
                    fontWeight: 400,
                    fontSize: 11.5,
                    marginTop: 1,
                  }}
                >
                  {q.sub}
                </small>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{q.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
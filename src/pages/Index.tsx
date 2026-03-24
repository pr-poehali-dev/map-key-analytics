import Icon from "@/components/ui/icon";

const meetings = [
  {
    date: "06.03",
    label: "Установочная встреча",
    items: [
      {
        type: "requirement",
        icon: "FileText",
        title: "Новое требование",
        text: "С 01.03.2026 отели переходят на единые целевые структуры служб планирования.",
      },
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Решение (предварительное)",
        text: "Реализация «Службы» как нового справочника — предварительная, может быть пересмотрена.",
      },
    ],
  },
  {
    date: "11.03",
    label: "Рабочая встреча",
    items: [
      {
        type: "cancelled",
        icon: "XCircle",
        title: "Отмена решения 06.03",
        text: "Отказ от создания нового самостоятельного справочника «Службы».",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничения",
        text: "Все процессы завязаны на «Подразделения». Встреча без ключевого держателя требований.",
      },
      {
        type: "risk",
        icon: "AlertOctagon",
        title: "Риск",
        text: "Реализация на справочниках Заказчика может привести к вынужденному отказу от части требований ТЗ.",
      },
    ],
  },
  {
    date: "16.03",
    label: "Обсуждение аналитик",
    items: [
      {
        type: "requirement",
        icon: "FileText",
        title: "Новое требование",
        text: "Система планирования должна вписываться в существующую бюджетную модель.",
      },
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Принятое решение",
        text: "Использовать «Подразделения организации» с ограничением видимости для планировщиков.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Риски",
        text: "Отказ от части требований ТЗ. Возможное увеличение трудозатрат на этапе согласования.",
      },
    ],
  },
  {
    date: "17.03",
    label: "Встреча с архитекторами",
    items: [
      {
        type: "cancelled",
        icon: "XCircle",
        title: "Пересмотр решения 16.03",
        text: "Дополнительно к «Подразделениям» использовать «Направление деятельности» как сквозную аналитику.",
      },
      {
        type: "risk",
        icon: "Clock",
        title: "Риск сдвига сроков",
        text: "Техническая реализация приостанавливается до подтверждения бизнес-решения.",
      },
    ],
  },
  {
    date: "19.03",
    label: "Встреча с бизнесом",
    items: [
      {
        type: "cancelled",
        icon: "XCircle",
        title: "Отказ от решения 17.03",
        text: "Не использовать «Направление деятельности» в качестве аналога служб.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Исполнитель моделирует два варианта реализации аналитики и представляет анализ Заказчику.",
      },
      {
        type: "risk",
        icon: "Clock",
        title: "Риск сдвига сроков",
        text: "Реализация приостановлена до подтверждения бизнес-решения.",
      },
    ],
  },
  {
    date: "20.03",
    label: "Встреча с бизнесом",
    items: [
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Вопрос не был заявлен к обсуждению в силу тайминга встречи (30 мин).",
      },
    ],
  },
];

const typeStyles: Record<string, { border: string; bg: string; badge: string; label: string }> = {
  requirement: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    badge: "text-blue-700",
    label: "Требование",
  },
  decision: {
    border: "border-green-500",
    bg: "bg-green-50",
    badge: "text-green-700",
    label: "Решение",
  },
  cancelled: {
    border: "border-red-500",
    bg: "bg-red-50",
    badge: "text-red-700",
    label: "Отмена / Пересмотр",
  },
  risk: {
    border: "border-orange-400",
    bg: "bg-orange-50",
    badge: "text-orange-700",
    label: "Риск / Ограничение",
  },
};

function getMeetingDotColor(items: typeof meetings[0]["items"]) {
  if (items.some((i) => i.type === "cancelled")) return { bg: "#ef4444", ring: "#fecaca" };
  if (items.some((i) => i.type === "risk")) return { bg: "#f97316", ring: "#fed7aa" };
  if (items.some((i) => i.type === "requirement")) return { bg: "#3b82f6", ring: "#bfdbfe" };
  return { bg: "#22c55e", ring: "#bbf7d0" };
}

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "'Golos Text', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8eaf0 0%, #d6d9e4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* 16:9 slide */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          aspectRatio: "16/9",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#0f1923",
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderBottom: "2px solid #1e2d3d",
          }}
        >
          <div>
            <div style={{ color: "#64748b", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2px" }}>
              Ключевая аналитика · Проект
            </div>
            <div style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, letterSpacing: "-0.01em" }}>
              Дорожная карта — Аналитика «Службы»
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {[
              { color: "#3b82f6", label: "Требование" },
              { color: "#22c55e", label: "Решение" },
              { color: "#f97316", label: "Риск / Ограничение" },
              { color: "#ef4444", label: "Отмена / Пересмотр" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: l.color, flexShrink: 0, display: "inline-block" }} />
                <span style={{ color: "#94a3b8", fontSize: "10px", whiteSpace: "nowrap" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline row */}
        <div
          style={{
            padding: "14px 40px 8px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Horizontal line */}
          <div style={{
            position: "absolute",
            top: "28px",
            left: "calc(40px + 4%)",
            right: "calc(40px + 4%)",
            height: "2px",
            background: "linear-gradient(to right, #cbd5e1, #94a3b8, #cbd5e1)",
            zIndex: 0,
          }} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${meetings.length}, 1fr)`, position: "relative", zIndex: 1 }}>
            {meetings.map((m, i) => {
              const dot = getMeetingDotColor(m.items);
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: dot.bg,
                    boxShadow: `0 0 0 4px ${dot.ring}, 0 2px 8px rgba(0,0,0,0.15)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 800,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ marginTop: "5px", fontSize: "12px", fontWeight: 800, color: "#1e293b", letterSpacing: "0.04em" }}>
                    {m.date}
                  </div>
                  <div style={{ fontSize: "8.5px", color: "#94a3b8", textAlign: "center", maxWidth: "88px", lineHeight: "1.3", marginTop: "1px" }}>
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: `repeat(${meetings.length}, 1fr)`,
            gap: "8px",
            padding: "0 40px 14px",
            overflow: "hidden",
            alignItems: "start",
          }}
        >
          {meetings.map((m, mi) => (
            <div key={mi} style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 0 }}>
              {m.items.map((item, ii) => {
                const s = typeStyles[item.type];
                const isCancelled = item.type === "cancelled";
                return (
                  <div
                    key={ii}
                    style={{
                      borderRadius: "8px",
                      borderLeft: `3px solid ${
                        item.type === "requirement" ? "#3b82f6"
                        : item.type === "decision" ? "#22c55e"
                        : item.type === "cancelled" ? "#ef4444"
                        : "#f97316"
                      }`,
                      background: item.type === "requirement" ? "#eff6ff"
                        : item.type === "decision" ? "#f0fdf4"
                        : item.type === "cancelled" ? "#fff1f2"
                        : "#fff7ed",
                      padding: "7px 9px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "2px" }}>
                      <Icon
                        name={item.icon}
                        size={10}
                        style={{
                          color: item.type === "requirement" ? "#2563eb"
                            : item.type === "decision" ? "#16a34a"
                            : item.type === "cancelled" ? "#dc2626"
                            : "#ea580c",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{
                        fontSize: "9.5px",
                        fontWeight: 700,
                        color: item.type === "requirement" ? "#1d4ed8"
                          : item.type === "decision" ? "#15803d"
                          : item.type === "cancelled" ? "#b91c1c"
                          : "#c2410c",
                        lineHeight: "1.2",
                      }}>
                        {item.title}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "9px",
                      color: isCancelled ? "#9ca3af" : "#475569",
                      lineHeight: "1.45",
                      margin: 0,
                      textDecoration: isCancelled ? "line-through" : "none",
                      textDecorationColor: "#ef4444",
                      textDecorationThickness: "1.5px",
                    }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "8px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Icon name="XCircle" size={11} style={{ color: "#ef4444" }} />
              <span style={{ fontSize: "8.5px", color: "#94a3b8" }}>Перечёркнутый текст — отменённое или пересмотренное решение</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Icon name="Clock" size={11} style={{ color: "#f97316" }} />
              <span style={{ fontSize: "8.5px", color: "#94a3b8" }}>Реализация приостановлена на этапах 17.03 и 19.03</span>
            </div>
          </div>
          <span style={{ fontSize: "8.5px", color: "#cbd5e1", letterSpacing: "0.05em" }}>
            Март 2026 · Ключевая аналитика — Службы
          </span>
        </div>
      </div>
    </div>
  );
}
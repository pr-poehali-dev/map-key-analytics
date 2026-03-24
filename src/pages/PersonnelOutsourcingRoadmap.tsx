import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const meetings = [
  {
    date: "06.03",
    label: "Установочная встреча",
    items: [] as { type: string; icon: string; title: string; text: string }[],
  },
  {
    date: "11.03",
    label: "Рабочая встреча",
    items: [
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Принятое решение",
        text: "Для аутсорс-персонала допустимо использование как обезличенных («Аутсорс 1»), так и именованных записей.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Открытый вопрос использования подсистемы табелирования, см. Профили должностей орг.2. Требуется отдельная встреча с ИТ по обсуждению переноса и миграции данных подсистемы в силу текущей реализации (объекты метаданных в расширении, для корректного использования требуется чтобы находились в основной).",
      },
    ],
  },
  {
    date: "16.03",
    label: "Обсуждение ключевых аналитик",
    items: [
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Принятое решение",
        text: "Использовать функционал Табелирования в части хранения ставок и внешних исполнителей.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Требуется отдельная встреча с ИТ по отсутствию данных и дальнейшему ведению в системе (объекты метаданных в расширении).",
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
        title: "Отмена решения от 16.03",
        text: "Предложено решение ОТМЕНЯЕТ принятое решение встречи от 16.03: не использовать функционал Табелирования в части внешних исполнителей, по причине подозрений ИТ в отсутствии данных.",
      },
      {
        type: "cancelled",
        icon: "Ban",
        title: "Приостановка реализации",
        text: "До подтверждения бизнес-решения по модели хранения ставок, использованию справочника «Исполнители» и аналитике «Профиль должности» — техническая реализация связанных доработок приостанавливается во избежание переделок.",
      },
    ],
  },
  {
    date: "19.03",
    label: "Встреча с Бизнесом",
    items: [
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Принятое решение",
        text: "Отказаться от ведения единого структурированного справочника для временных сотрудников аутсорсинга из-за риска неконтролируемого роста дублей и дополнительной нагрузки на персонал отелей.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Не обсуждались варианты мест хранения и ведения данных по внешнему персоналу.",
      },
    ],
  },
  {
    date: "20.03",
    label: "Встреча с Бизнесом",
    items: [
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Не принято решений, ввиду отсутствия лиц принимающих решения со стороны HR.",
      },
    ],
  },
];

const palette = {
  requirement: { border: "#7aa3c8", bg: "#f4f8fc", text: "#2c4a6e", dot: "#7aa3c8", ring: "#dce9f4" },
  decision:    { border: "#7aab8a", bg: "#f4faf6", text: "#2b4d38", dot: "#7aab8a", ring: "#dceee3" },
  cancelled:   { border: "#b87a7a", bg: "#fdf5f5", text: "#6b2b2b", dot: "#b87a7a", ring: "#f0dede" },
  risk:        { border: "#c4976a", bg: "#fdf8f3", text: "#6b3f1a", dot: "#c4976a", ring: "#f0e3d0" },
};

function getMeetingDot(items: typeof meetings[0]["items"]) {
  if (items.length === 0) return { dot: "#d1d5db", ring: "#f3f4f6", text: "#9ca3af" };
  if (items.some((i) => i.type === "cancelled")) return palette.cancelled;
  if (items.some((i) => i.type === "risk")) return palette.risk;
  if (items.some((i) => i.type === "requirement")) return palette.requirement;
  return palette.decision;
}

export default function PersonnelOutsourcingRoadmap() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "'Golos Text', sans-serif",
        minHeight: "100vh",
        background: "#e5e7eb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        gap: "14px",
      }}
    >
      {/* Nav */}
      <div style={{ display: "flex", gap: "8px", alignSelf: "flex-start", marginLeft: "calc((100% - 1280px) / 2)", maxWidth: "1280px", width: "100%" }}>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "6px 16px", fontSize: "11px", fontWeight: 600, borderRadius: "4px", border: "1.5px solid #d1d5db", background: "transparent", color: "#6b7280", cursor: "pointer" }}
        >
          ← 1 · Службы
        </button>
        <button
          onClick={() => navigate("/profiles-roadmap")}
          style={{ padding: "6px 16px", fontSize: "11px", fontWeight: 600, borderRadius: "4px", border: "1.5px solid #d1d5db", background: "transparent", color: "#6b7280", cursor: "pointer" }}
        >
          2 · Профили должностей
        </button>
        <button
          disabled
          style={{ padding: "6px 16px", fontSize: "11px", fontWeight: 600, borderRadius: "4px", border: "1.5px solid #9ca3af", background: "#ffffff", color: "#374151", cursor: "default", opacity: 1 }}
        >
          3а · Персонал планирования — Аутсорсинг
        </button>
        <button
          onClick={() => navigate("/personnel-staff-roadmap")}
          style={{ padding: "6px 16px", fontSize: "11px", fontWeight: 600, borderRadius: "4px", border: "1.5px solid #d1d5db", background: "transparent", color: "#6b7280", cursor: "pointer" }}
        >
          3б · Персонал планирования — Штат →
        </button>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          aspectRatio: "16/9",
          background: "#ffffff",
          borderRadius: "4px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: "1px solid #d1d5db",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#ffffff",
            padding: "14px 40px 12px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexShrink: 0,
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div>
            <div style={{ color: "#9ca3af", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3px" }}>
              Ключевая аналитика · Персонал планирования
            </div>
            <div style={{ color: "#111827", fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Дорожная карта — Аутсорсинг
            </div>
          </div>
          <div style={{ display: "flex", gap: "18px", alignItems: "center", paddingBottom: "2px" }}>
            {[
              { color: palette.requirement.dot, label: "Требование" },
              { color: palette.decision.dot, label: "Решение" },
              { color: palette.risk.dot, label: "Риск / Ограничение" },
              { color: palette.cancelled.dot, label: "Отмена / Пересмотр" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: l.color, flexShrink: 0, display: "inline-block" }} />
                <span style={{ color: "#6b7280", fontSize: "9.5px", whiteSpace: "nowrap" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline row */}
        <div style={{ padding: "14px 44px 6px", position: "relative", flexShrink: 0 }}>
          <div style={{
            position: "absolute",
            top: "27px",
            left: "calc(44px + 4.2%)",
            right: "calc(44px + 4.2%)",
            height: "1px",
            background: "#d1d5db",
            zIndex: 0,
          }} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${meetings.length}, 1fr)`, position: "relative", zIndex: 1 }}>
            {meetings.map((m, i) => {
              const dot = getMeetingDot(m.items);
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    border: `1.5px solid ${dot.dot}`,
                    boxShadow: `0 0 0 3px ${dot.ring}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: dot.text,
                    fontSize: "9px",
                    fontWeight: 700,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ marginTop: "5px", fontSize: "11.5px", fontWeight: 700, color: "#1f2937", letterSpacing: "0.02em" }}>
                    {m.date}
                  </div>
                  <div style={{ fontSize: "8px", color: "#9ca3af", textAlign: "center", maxWidth: "86px", lineHeight: "1.35", marginTop: "1px" }}>
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
            gap: "6px",
            padding: "4px 44px 12px",
            overflow: "hidden",
            alignItems: "start",
          }}
        >
          {meetings.map((m, mi) => (
            <div key={mi} style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: 0 }}>
              {m.items.length === 0 ? (
                <div style={{ borderRadius: "3px", borderLeft: "2px solid #e5e7eb", background: "#f9fafb", padding: "6px 8px" }}>
                  <p style={{ fontSize: "8.5px", color: "#d1d5db", lineHeight: "1.45", margin: 0, fontStyle: "italic" }}>—</p>
                </div>
              ) : (
                m.items.map((item, ii) => {
                  const p = palette[item.type as keyof typeof palette];
                  return (
                    <div
                      key={ii}
                      style={{
                        borderRadius: "3px",
                        borderLeft: `2px solid ${p.border}`,
                        background: p.bg,
                        padding: "6px 8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                        <Icon name={item.icon} size={9} style={{ color: p.border, flexShrink: 0 }} />
                        <span style={{ fontSize: "9px", fontWeight: 700, color: p.text, lineHeight: "1.2", letterSpacing: "0.01em" }}>
                          {item.title}
                        </span>
                      </div>
                      <p style={{ fontSize: "8.5px", color: "#4b5563", lineHeight: "1.45", margin: 0 }}>
                        {item.text}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          background: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          padding: "7px 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Icon name="XCircle" size={10} style={{ color: "#b87a7a" }} />
              <span style={{ fontSize: "8px", color: "#9ca3af" }}>17.03 — решение отменяет принятое 16.03; реализация приостановлена до подтверждения бизнес-решения</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Icon name="Clock" size={10} style={{ color: "#c4976a" }} />
              <span style={{ fontSize: "8px", color: "#9ca3af" }}>20.03 — решения не приняты; отсутствовали ЛПР со стороны HR</span>
            </div>
          </div>
          <span style={{ fontSize: "8px", color: "#d1d5db", letterSpacing: "0.06em" }}>
            Март 2026 · Ключевая аналитика — Персонал планирования (Аутсорсинг)
          </span>
        </div>
      </div>
    </div>
  );
}

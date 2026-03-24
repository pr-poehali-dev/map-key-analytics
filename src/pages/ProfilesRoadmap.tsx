import Icon from "@/components/ui/icon";

const meetings = [
  {
    date: "06.03",
    label: "Установочная встреча",
    items: [
      {
        type: "requirement",
        icon: "FileText",
        title: "Требование",
        text: "В 1С:УХ отсутствует порядок ведения справочника «Профили должностей», используемого в подсистеме табелирования внешних физлиц.",
      },
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Решение (предварительное)",
        text: "Альтернативный вариант: при невозможности реструктуризации данных — переход на типовой справочник «Должности» для целей планирования.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Нормализация справочника «Профили должностей» — критически важная задача. Аналитика приостановлена до нормализации и согласования целевой структуры.",
      },
    ],
  },
  {
    date: "11.03",
    label: "Рабочая встреча",
    items: [
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Два параллельных справочника: «Должности» (планирование/бюджетирование) и «Профили должностей» (табелирование внешних физлиц). Функционал табелирования работает только в 1 отеле («Изумрудный лес»).",
      },
      {
        type: "risk",
        icon: "AlertOctagon",
        title: "Проблема",
        text: "Подсистема Табелирования подразумевалась как один из источников планирования в текущих границах проекта.",
      },
    ],
  },
  {
    date: "16.03",
    label: "Обсуждение аналитик",
    items: [
      {
        type: "decision",
        icon: "CheckCircle",
        title: "Принятое решение",
        text: "Использование текущего справочника УХ «Должности».",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Риск",
        text: "Нарушение сроков по независящим от Исполнителя причинам — если Заказчик не выполнит объединение и корректировку данных.",
      },
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Необходимо отдельное обсуждение с ИТ по хранению доработок справочника «Договоры». Противоречит ограничению 2 встречи от 11.03. Подсистема табелирования планируется к масштабированию на все отели.",
      },
    ],
  },
  {
    date: "17.03",
    label: "Встреча с архитекторами",
    items: [
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Решение о привязке ставок к «Версии договора» или выделении отдельного документа/регистра выносится на обсуждение с бизнес-заказчиком.",
      },
      {
        type: "risk",
        icon: "AlertOctagon",
        title: "Технический риск",
        text: "ИТ видит проблемы в хранении ставок в Табелировании: права доступа к договору, несинхронность обновления версий и ставок.",
      },
      {
        type: "cancelled",
        icon: "XCircle",
        title: "Отмена всех предыдущих решений",
        text: "Предложено новое решение: реализация хранения ставок как новый самостоятельный функционал (новый документ / регистр / роли). Отменяет все решения по использованию подсистемы Табелирования.",
      },
    ],
  },
  {
    date: "19.03",
    label: "Встреча с бизнесом",
    items: [
      {
        type: "risk",
        icon: "AlertTriangle",
        title: "Ограничение",
        text: "Вопрос не обсуждался — не хватило времени.",
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
        text: "Решения не приняты — отсутствовали лица, принимающие решения со стороны HR.",
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
  if (items.some((i) => i.type === "cancelled")) return palette.cancelled;
  if (items.some((i) => i.type === "risk")) return palette.risk;
  if (items.some((i) => i.type === "requirement")) return palette.requirement;
  return palette.decision;
}

export default function ProfilesRoadmap() {
  return (
    <div
      style={{
        fontFamily: "'Golos Text', sans-serif",
        minHeight: "100vh",
        background: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
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
              Ключевая аналитика · Проект
            </div>
            <div style={{ color: "#111827", fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Дорожная карта — Аналитика «Профили должностей»
            </div>
          </div>
          <div style={{ display: "flex", gap: "18px", alignItems: "center", paddingBottom: "2px" }}>
            {[
              { color: palette.requirement.dot, label: "Требование" },
              { color: palette.decision.dot, label: "Решение" },
              { color: palette.risk.dot, label: "Риск / Ограничение / Проблема" },
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
              {m.items.map((item, ii) => {
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
                      <Icon
                        name={item.icon}
                        size={9}
                        style={{ color: p.border, flexShrink: 0 }}
                      />
                      <span style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        color: p.text,
                        lineHeight: "1.2",
                        letterSpacing: "0.01em",
                      }}>
                        {item.title}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "8.5px",
                      color: "#4b5563",
                      lineHeight: "1.45",
                      margin: 0,
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
              <span style={{ fontSize: "8px", color: "#9ca3af" }}>17.03 — новое решение отменяет все предыдущие по использованию подсистемы Табелирования</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Icon name="Clock" size={10} style={{ color: "#c4976a" }} />
              <span style={{ fontSize: "8px", color: "#9ca3af" }}>Аналитика приостановлена с 06.03 до завершения нормализации справочника</span>
            </div>
          </div>
          <span style={{ fontSize: "8px", color: "#d1d5db", letterSpacing: "0.06em" }}>
            Март 2026 · Ключевая аналитика — Профили должностей
          </span>
        </div>
      </div>
    </div>
  );
}

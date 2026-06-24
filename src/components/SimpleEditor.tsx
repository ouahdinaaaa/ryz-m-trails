import React from "react";

interface SimpleEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SimpleEditor({ value, onChange }: SimpleEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Met en gras la sélection
  const handleBold = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return; // rien sélectionné
    const before = value.slice(0, start);
    const selected = value.slice(start, end);
    const after = value.slice(end);
    const newValue = before + "<strong>" + selected + "</strong>" + after;
    onChange(newValue);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, end + 17); // <strong></strong> = 17 chars
    }, 0);
  };

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <button type="button" onClick={handleBold} style={{ fontWeight: "bold", padding: "4px 12px", borderRadius: 4, border: "1px solid #ccc", background: "#f8f8f8", marginRight: 8 }}>
          Gras
        </button>
      </div>
      <textarea
        ref={textareaRef}
        className="border p-2 w-full"
        rows={6}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Contenu de l'article (vous pouvez sélectionner du texte puis cliquer sur 'Gras')"
      />
    </div>
  );
}

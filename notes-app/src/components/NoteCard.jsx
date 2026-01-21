import { useState } from "react";
import jsPDF from "jspdf";

const colors = [
  "border-indigo-500",
  "border-green-500",
  "border-pink-500",
  "border-yellow-500",
];

const NoteCard = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const color = colors[note.id % colors.length];

  const handleSave = () => {
    editNote(note.id, { title, content });
    setIsEditing(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    doc.text(content, 10, 20);
    doc.save(`${title}.pdf`);
    setShowDownload(false);
  };

  const downloadText = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.txt`;
    link.click();
    setShowDownload(false);
  };

  const downloadExcel = () => {
    const csv = `Title,Content\n"${title}","${content}"`;
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.csv`;
    link.click();
    setShowDownload(false);
  };

  return (
    <div className={`relative overflow-visible bg-white border-l-4 ${color} rounded-xl shadow-lg p-5 mb-6`}>
      {isEditing ? (
        <>
          <input
            className="border w-full mb-2 p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border w-full mb-3 p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave} className="bg-green-600 text-white px-4 py-1 rounded">
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg">{note.title}</h3>
          <p className="text-gray-600 mb-3 whitespace-pre-line">{note.content}</p>

          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded">
              Edit
            </button>

            <button onClick={() => deleteNote(note.id)} className="bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDownload(!showDownload)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Download ⬇
              </button>

              {showDownload && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                  <button onClick={downloadPDF} className="block w-full px-3 py-2 hover:bg-gray-100 bg-red-500">📄 PDF</button>
                  <button onClick={downloadText} className="block w-full px-3 py-2 hover:bg-gray-100 bg-green-500" >📝 Text</button>
                  <button onClick={downloadExcel} className="block w-full px-3 py-2 hover:bg-gray-100 bg-yellow-500">📊 Excel</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
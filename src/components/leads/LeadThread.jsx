"use client";
import { useState } from "react";
import { ChevronDown, Tag, NotebookPen, Send } from "lucide-react";

function Pill({ children }) {
  return (
    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
      {children}
    </span>
  );
}

export default function LeadThread({
  lead,
  onSendMessage = () => {},
  onSaveTags = () => {},
  onSaveNote = () => {},
}) {
  const [showTag, setShowTag] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [message, setMessage] = useState("");
  const [tagsState, setTagsState] = useState({
    Hot: true,
    Warm: true,
    Cold: false,
  });
  const [noteAssignee, setNoteAssignee] = useState("Riteish. S");
  const [noteText, setNoteText] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3 flex-wrap">
          <img
            src={lead?.avatar || "https://i.pravatar.cc/100?img=32"}
            alt="Lead Avatar"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
          />
          <div className="min-w-[100px]">
            <div className="text-sm sm:text-base font-semibold text-gray-900">
              {lead?.name || "Lead"}{" "}
              <span className="text-xs sm:text-sm text-gray-500">
                {lead?.role ? `(${lead.role})` : ""}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              {lead?.platform || "Instagram"} ·{" "}
              <span className="text-green-600">Online</span>
            </div>
          </div>
          <Pill>AI on</Pill>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            className="px-2.5 py-1.5 text-xs sm:text-sm text-gray-500 bg-white border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50"
            onClick={() => setShowTag(true)}
          >
            <Tag className="w-3.5 h-3.5" /> Tag
          </button>

          <button
            className="px-2.5 py-1.5 text-xs sm:text-sm bg-white text-gray-500 border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50"
            onClick={() => setShowNote(true)}
          >
            <NotebookPen className="w-3.5 h-3.5" /> Note
          </button>

          <button className="px-2.5 py-1.5 text-xs sm:text-sm bg-white border text-gray-500 border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50">
            Ritesh. S <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-white">
        {(lead?.messages || []).map((m, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] p-2 sm:p-3 rounded-lg text-sm sm:text-base break-words ${
              m.from === "me"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2 sm:gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border border-gray-300 text-gray-700 rounded-md px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:ring-1 focus:ring-purple-500 outline-none"
            placeholder="Type your message..."
          />
          <button
            className="p-2 sm:px-3 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md flex items-center justify-center"
            onClick={() => {
              if (message.trim()) {
                onSendMessage(message.trim());
                setMessage("");
              }
            }}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Tag Modal */}
      {showTag && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-3"
          onClick={() => setShowTag(false)}
        >
          <div
            className="bg-white w-full max-w-xs sm:max-w-md rounded-xl shadow-lg border border-gray-100 p-4 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold text-gray-900 mb-2 sm:mb-3">
              Tag Lead
            </div>
            <div className="text-sm sm:text-base text-gray-700 mb-2">
              Select Tag
            </div>

            <div className="space-y-2 text-sm sm:text-base">
              {Object.keys(tagsState).map((k) => (
                <label
                  key={k}
                  className="flex items-center text-gray-600 gap-2"
                >
                  <input
                    type="checkbox"
                    checked={tagsState[k]}
                    onChange={() =>
                      setTagsState((s) => ({ ...s, [k]: !s[k] }))
                    }
                  />{" "}
                  {k}
                </label>
              ))}
            </div>

            <input
              className="w-full mt-3 border border-gray-300 text-gray-600 rounded-md px-3 py-2 text-sm sm:text-base"
              placeholder="Add New Tag"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-3 py-1.5 text-sm sm:text-base bg-gray-300 text-gray-700 rounded-md"
                onClick={() => setShowTag(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1.5 text-sm sm:text-base bg-purple-600 text-white rounded-md"
                onClick={() => {
                  onSaveTags(Object.keys(tagsState).filter((k) => tagsState[k]));
                  setShowTag(false);
                }}
              >
                Save Tag
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Note Modal */}
      {showNote && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-3"
          onClick={() => setShowNote(false)}
        >
          <div
            className="bg-white w-full max-w-md sm:max-w-lg rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold text-gray-900 mb-2 sm:mb-3">
              Add Note
            </div>

            <div className="text-sm sm:text-base text-gray-700 mb-1">
              Assign Team Member
            </div>
            <select
              value={noteAssignee}
              onChange={(e) => setNoteAssignee(e.target.value)}
              className="w-full border border-gray-300 text-gray-600 rounded-md px-3 py-2 text-sm sm:text-base mb-3"
            >
              <option>Riteish. S</option>
              <option>Priya K.</option>
            </select>

            <div className="text-sm sm:text-base text-gray-700 mb-1">
              Note
            </div>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full h-28 border text-gray-600 border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base resize-none"
              placeholder="Add internal note for this lead"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-3 py-1.5 text-sm sm:text-base bg-gray-300 text-gray-700 rounded-md"
                onClick={() => setShowNote(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1.5 text-sm sm:text-base bg-purple-600 text-white rounded-md"
                onClick={() => {
                  onSaveNote({ assignee: noteAssignee, text: noteText });
                  setShowNote(false);
                  setNoteText("");
                }}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

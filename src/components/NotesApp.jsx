import { useState } from "react";
import { PlusCircle, LogOut, Heart, Trash2, Edit2, Save } from "lucide-react";

const notesMock = [
  {
    id: "note_001",
    user_id: "user_101",
    title: "Первичный онбординг",
    content: "Задеплоить превью-окружение и прикрутить health-check endpoint.",
    created_at: "2025-11-20T10:12:45.000Z",
    updated_at: "2025-11-20T10:12:45.000Z",
  },
  {
    id: "note_002",
    user_id: "user_101",
    title: "Оптимизация пайплайна",
    content:
      "Разбить CI на продакшн-ступени и вынести проверки в отдельные джобы.",
    created_at: "2025-11-20T16:55:03.000Z",
    updated_at: "2025-11-21T08:21:17.000Z",
  },
  {
    id: "note_003",
    user_id: "user_204",
    title: "Ревью фичи",
    content: "Проверить рендеринг списка и корректность RTK Query кеширования.",
    created_at: "2025-11-19T14:33:12.000Z",
    updated_at: "2025-11-19T18:40:29.000Z",
  },
  {
    id: "note_004",
    user_id: "user_204",
    title: "UX-профилирование",
    content: "Пройтись по LCP, CLS, зафиксировать bottlenecks по lazy-loading.",
    created_at: "2025-11-17T09:02:01.000Z",
    updated_at: "2025-11-18T11:25:51.000Z",
  },
  {
    id: "note_005",
    user_id: "user_333",
    title: "Фидбек по релизу",
    content: "Подготовить changelog и прогнать регрессию по критическим флоу.",
    created_at: "2025-11-15T12:15:00.000Z",
    updated_at: "2025-11-15T12:15:00.000Z",
  },
];

export default function NotesApp() {
  const { user, signOut } = { user: { email: "w@w.ru" }, signOut: () => {} };
  const [notes] = useState(notesMock);
  const [editingNote, setEditingNote] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [showDonation, setShowDonation] = useState(false);

  const startEditing = (note) => {
    setEditingNote(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <nav className="bg-white border-b-4 border-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-gray-900">
                Літара <span className="text-red-600">Ў</span>
              </h1>
              <div className="hidden sm:block w-1 h-8 bg-gray-300"></div>
              <span className="hidden sm:block text-sm font-bold text-gray-600">
                {user?.email}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {}}
                className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Падтрымаць</span>
              </button>

              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-gray-200 text-gray-900 font-bold px-4 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Выйсці</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-gray-900">Мае нататкі</h2>
          <button
            onClick={() => {}}
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <PlusCircle className="w-5 h-5" />
            Новая нататка
          </button>
        </div>

        {notes.length > 100 ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-red-600"></div>
          </div>
        ) : notes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-bold text-gray-600">
              Пакуль няма нататак
            </p>
            <p className="text-gray-500 mt-2">Стварыце першую нататку!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {editingNote === note.id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-3 py-2 border-3 border-gray-900 rounded-lg font-bold text-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                    />
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full px-3 py-2 border-3 border-gray-900 rounded-lg min-h-[120px] focus:outline-none focus:ring-4 focus:ring-red-500 resize-none"
                      placeholder="Напішыце нешта..."
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {}}
                        className="flex-1 bg-green-600 text-white font-bold px-4 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      >
                        <Save className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => setEditingNote(null)}
                        className="flex-1 bg-gray-200 text-gray-900 font-bold px-4 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      >
                        Адмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-gray-900 mb-3 break-words">
                      {note.title}
                    </h3>
                    <p className="text-gray-700 mb-4 whitespace-pre-wrap break-words">
                      {note.content || "Пустая нататка"}
                    </p>
                    <div className="flex gap-2 pt-4 border-t-3 border-gray-200">
                      <button
                        onClick={() => startEditing(note)}
                        className="flex-1 bg-blue-500 text-white font-bold px-3 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      >
                        <Edit2 className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => {}}
                        className="flex-1 bg-red-500 text-white font-bold px-3 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      >
                        <Trash2 className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {showDonation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto text-red-600 mb-4" />
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Падтрымаць праект
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Літара Ў" - гэта беларуская платформа для нататак. Ваша
                падтрымка дапаможа нам развіваць праект і захоўваць беларускую
                мову ў лічбавай прасторы.
              </p>

              <div className="bg-gradient-to-r from-red-500 via-white to-green-500 p-1 rounded-lg mb-6">
                <div className="bg-white rounded-lg p-6">
                  <p className="font-bold text-gray-900 mb-2">
                    Рэквізіты для ахвяраванняў:
                  </p>
                  <p className="text-sm text-gray-600 break-all">
                    Тут могуць быць вашы рэквізіты
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowDonation(false)}
                className="w-full bg-red-600 text-white font-bold px-6 py-3 rounded-lg border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Зразумела
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

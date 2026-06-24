import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SimpleEditor from "../components/SimpleEditor";
import axios from "axios";

interface Article {
  _id: string;
  title: string;
  date?: string;
  subtitle?: string;
  readTime?: string;
  tags?: string;
  tagIds?: string;
  image?: string;
  content?: string;
}

interface Event {
  _id: string;
  title: string;
  date?: string;
  category: string;
  location?: string;
  participants?: string;
  icon?: string;
  isNight?: boolean;
  image?: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

function getToken() {
  return localStorage.getItem("admin_token") || "";
}

export default function Dashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Redirige vers le login si pas de token
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  // Formulaires
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [articleForm, setArticleForm] = useState({
    title: "",
    subtitle: "",
    date: "",
    readTime: "",
    tags: "",
    tagIds: "",
    image: "",
    content: ""
  });
  const [eventForm, setEventForm] = useState({ title: "", date: "", category: "", location: "", image: "", participants: "", icon: "", isNight: false });
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [uploading, setUploading] = useState(false);
  const articleImageInput = useRef<HTMLInputElement>(null);
  const eventImageInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  // Ajout d'un état pour l'édition d'article
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  const fetchData = async () => {
    const token = getToken();
    const headers = { Authorization: `Bearer ${token}` };
    const [artRes, evtRes] = await Promise.all([
      axios.get(`${API_URL}/articles`, { headers }),
      axios.get(`${API_URL}/events`, { headers }),
    ]);
    setArticles(artRes.data);
    setEvents(evtRes.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Upload image helper
  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const token = getToken();
      const res = await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` }
      });
      setUploading(false);
      return res.data.url;
    } catch (err) {
      setUploading(false);
      setError("Erreur lors de l'upload de l'image.");
      throw err;
    }
  };

  // Ajout d'un article
  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      let imageUrl = articleForm.image;
      if (articleImageInput.current && articleImageInput.current.files && articleImageInput.current.files[0]) {
        imageUrl = await uploadImage(articleImageInput.current.files[0]);
      }
      const token = getToken();
      await axios.post(
        `${API_URL}/articles`,
        { ...articleForm, image: imageUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowArticleForm(false);
      setArticleForm({ title: "", subtitle: "", date: "", readTime: "", tags: "", tagIds: "", image: "", content: "" });
      if (articleImageInput.current) articleImageInput.current.value = "";
      fetchData();
    } catch (err: any) {
      setError("Erreur lors de l'ajout de l'article.");
    }
  };

  // Ajout d'un événement

  // Ajout/édition d'un événement
  const handleSubmitEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      let imageUrl = eventForm.image;
      if (eventImageInput.current && eventImageInput.current.files && eventImageInput.current.files[0]) {
        imageUrl = await uploadImage(eventImageInput.current.files[0]);
      }
      if (editingEvent) {
        const token = getToken();
        await axios.put(
          `${API_URL}/events/${editingEvent._id}`,
          { ...eventForm, image: imageUrl },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const token = getToken();
        await axios.post(
          `${API_URL}/events`,
          { ...eventForm, image: imageUrl },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setShowEventForm(false);
      setEditingEvent(null);
      setEventForm({ title: "", date: "", category: "", location: "", image: "", participants: "", icon: "", isNight: false });
      if (eventImageInput.current) eventImageInput.current.value = "";
      fetchData();
    } catch (err: any) {
      setError(editingEvent ? "Erreur lors de la modification de l'événement." : "Erreur lors de l'ajout de l'événement.");
    }
  };

  // Remplir le formulaire d'édition d'événement
  const handleEditEvent = (event: Event) => {
    setShowEventForm(true);
    setEditingEvent(event);
    setEventForm({
      title: event.title || "",
      date: event.date || "",
      category: event.category || "",
      location: event.location || "",
      image: event.image || "",
      participants: event.participants || "",
      icon: event.icon || "",
      isNight: event.isNight || false
    });
  };

  // Suppression d'un événement
  const handleDeleteEvent = async (eventId: string) => {
    if (!window.confirm("Supprimer cet événement ?")) return;
    try {
      const token = getToken();
      await axios.delete(`${API_URL}/events/${eventId}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchData();
    } catch (err) {
      setError("Erreur lors de la suppression de l'événement.");
    }
  };

  // Ajout d'une fonction pour remplir le formulaire d'édition
  const handleEditArticle = (article: Article) => {
    setShowArticleForm(true);
    setEditingArticle(article);
    setArticleForm({
      title: article.title || "",
      subtitle: article.subtitle || "",
      date: article.date || "",
      readTime: article.readTime || "",
      tags: Array.isArray(article.tags) ? article.tags.join(",") : (article.tags || ""),
      tagIds: Array.isArray(article.tagIds) ? article.tagIds.join(",") : (article.tagIds || ""),
      image: article.image || "",
      content: article.content || ""
    });
  };

  // Modification du submit pour différencier ajout/édition
  const handleSubmitArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      let imageUrl = articleForm.image;
      if (articleImageInput.current && articleImageInput.current.files && articleImageInput.current.files[0]) {
        imageUrl = await uploadImage(articleImageInput.current.files[0]);
      }
      if (editingArticle) {
        const token = getToken();
        await axios.put(
          `${API_URL}/articles/${editingArticle._id}`,
          {
            ...articleForm,
            image: imageUrl,
            tags: articleForm.tags.split(",").map(t => t.trim()).filter(Boolean),
            tagIds: articleForm.tagIds.split(",").map(t => t.trim()).filter(Boolean)
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const token = getToken();
        await axios.post(
          `${API_URL}/articles`,
          {
            ...articleForm,
            image: imageUrl,
            tags: articleForm.tags.split(",").map(t => t.trim()).filter(Boolean),
            tagIds: articleForm.tagIds.split(",").map(t => t.trim()).filter(Boolean)
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setShowArticleForm(false);
      setEditingArticle(null);
      setArticleForm({ title: "", subtitle: "", date: "", readTime: "", tags: "", tagIds: "", image: "", content: "" });
      if (articleImageInput.current) articleImageInput.current.value = "";
      fetchData();
    } catch (err: any) {
      setError(editingArticle ? "Erreur lors de la modification de l'article." : "Erreur lors de l'ajout de l'article.");
    }
  };

  const now = new Date();
  const upcomingEvents = events.filter(e => e.date && new Date(e.date) >= now);
  const pastEvents = events.filter(e => e.date && new Date(e.date) < now);


  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>;
  }

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord Admin</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Articles (Blog)</h2>
        <table className="w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Titre</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => (
              <tr key={article._id} className="border-t">
                <td className="p-2">{article.title}</td>
                <td className="p-2">{article.date}</td>
                <td className="p-2">
                  <button className="text-blue-600 mr-2" onClick={() => handleEditArticle(article)}>Éditer</button>
                  <button className="text-red-600">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setShowArticleForm(v => !v)}
        >
          {showArticleForm ? "Annuler" : "Ajouter un article"}
        </button>
        {showArticleForm && (
          <form className="mt-4 space-y-2" onSubmit={handleSubmitArticle}>
            <input
              className="border p-2 w-full"
              placeholder="Titre"
              value={articleForm.title}
              onChange={e => setArticleForm(f => ({ ...f, title: e.target.value }))}
              required
            />
            <input
              className="border p-2 w-full"
              placeholder="Date (YYYY-MM-DD)"
              type="date"
              value={articleForm.date}
              onChange={e => setArticleForm(f => ({ ...f, date: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              placeholder="Sous-titre"
              value={articleForm.subtitle}
              onChange={e => setArticleForm(f => ({ ...f, subtitle: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              placeholder="Temps de lecture (ex: 5 minutes de lecture)"
              value={articleForm.readTime}
              onChange={e => setArticleForm(f => ({ ...f, readTime: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              placeholder="Tags (ex: Joëlette,Émotion,Solidarité)"
              value={articleForm.tags}
              onChange={e => setArticleForm(f => ({ ...f, tags: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              type="file"
              accept="image/*"
              ref={articleImageInput}
            />
            <input
              className="border p-2 w-full"
              placeholder="IDs de badges (ex: competition,portrait)"
              value={articleForm.tagIds}
              onChange={e => setArticleForm(f => ({ ...f, tagIds: e.target.value }))}
            />
            <SimpleEditor
              value={articleForm.content}
              onChange={val => setArticleForm(f => ({ ...f, content: val }))}
            />
            {uploading && <div className="text-blue-600">Upload en cours...</div>}
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Valider</button>
            {editingArticle && (
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  setEditingArticle(null);
                  setArticleForm({ title: "", subtitle: "", date: "", readTime: "", tags: "", tagIds: "", image: "", content: "" });
                  if (articleImageInput.current) articleImageInput.current.value = "";
                }}
              >
                Annuler l'édition
              </button>
            )}
          </form>
        )}
      </section>

      {/* Événements à venir */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Événements à venir</h2>
        <table className="w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Titre</th>
              <th className="p-2">Date</th>
              <th className="p-2">Catégorie</th>
              <th className="p-2">Lieu</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map(event => (
              <tr key={event._id} className="border-t">
                <td className="p-2">{event.title}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.category}</td>
                <td className="p-2">{event.location}</td>
                <td className="p-2">
                  <button className="text-blue-600 mr-2" onClick={() => handleEditEvent(event)}>Éditer</button>
                  <button className="text-red-600" onClick={() => handleDeleteEvent(event._id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setShowEventForm(v => !v)}
        >
          {showEventForm ? "Annuler" : "Ajouter un événement"}
        </button>
        {showEventForm && (
          <form className="mt-4 space-y-2" onSubmit={handleSubmitEvent}>
            <input
              className="border p-2 w-full"
              placeholder="Titre"
              value={eventForm.title}
              onChange={e => setEventForm(f => ({ ...f, title: e.target.value }))}
              required
            />
            <input
              className="border p-2 w-full"
              placeholder="Date (YYYY-MM-DD)"
              type="date"
              value={eventForm.date}
              onChange={e => setEventForm(f => ({ ...f, date: e.target.value }))}
              required
            />
            <input
              className="border p-2 w-full"
              placeholder="Catégorie"
              value={eventForm.category}
              onChange={e => setEventForm(f => ({ ...f, category: e.target.value }))}
              required
            />
            <input
              className="border p-2 w-full"
              placeholder="Lieu"
              value={eventForm.location}
              onChange={e => setEventForm(f => ({ ...f, location: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              placeholder="Nombre de participants"
              value={eventForm.participants}
              onChange={e => setEventForm(f => ({ ...f, participants: e.target.value }))}
            />
            <input
              className="border p-2 w-full"
              placeholder="Icône (emoji)"
              value={eventForm.icon}
              onChange={e => setEventForm(f => ({ ...f, icon: e.target.value }))}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={eventForm.isNight}
                onChange={e => setEventForm(f => ({ ...f, isNight: e.target.checked }))}
              />
              <span>Événement de nuit</span>
            </label>
            <input
              className="border p-2 w-full"
              type="file"
              accept="image/*"
              ref={eventImageInput}
            />
            {uploading && <div className="text-blue-600">Upload en cours...</div>}
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Valider</button>
            {editingEvent && (
              <button
                className="bg-red-600 text-white px-4 py-2 rounded ml-2"
                onClick={e => {
                  e.preventDefault();
                  setEditingEvent(null);
                  setEventForm({ title: "", date: "", category: "", location: "", image: "", participants: "", icon: "", isNight: false });
                  if (eventImageInput.current) eventImageInput.current.value = "";
                }}
              >
                Annuler l'édition
              </button>
            )}
          </form>
        )}
      </section>

      {/* Événements passés */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Événements passés</h2>
        <table className="w-full border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Titre</th>
              <th className="p-2">Date</th>
              <th className="p-2">Catégorie</th>
              <th className="p-2">Lieu</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pastEvents.map(event => (
              <tr key={event._id} className="border-t">
                <td className="p-2">{event.title}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.category}</td>
                <td className="p-2">{event.location}</td>
                <td className="p-2">
                  <button className="text-blue-600 mr-2" onClick={() => handleEditEvent(event)}>Éditer</button>
                  <button className="text-red-600" onClick={() => handleDeleteEvent(event._id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

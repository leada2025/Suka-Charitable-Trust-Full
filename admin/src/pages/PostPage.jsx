import React, { useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'SUKA Annual Report', category: 'News', status: 'Published' },
    { id: 2, title: 'Volunteer Spotlight: Anjali', category: 'Blog', status: 'Draft' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: 'Blog', status: 'Draft' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setPosts(posts.map(post => post.id === editingId ? { ...post, ...formData } : post));
    } else {
      setPosts([...posts, { id: posts.length + 1, ...formData }]);
    }
    setFormData({ title: '', category: 'Blog', status: 'Draft' });
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleEdit = (post) => {
    setFormData(post);
    setEditingId(post.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <button
          onClick={() => {
            setFormData({ title: '', category: 'Blog', status: 'Draft' });
            setEditingId(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-t">
              <td className="p-3">{post.title}</td>
              <td className="p-3">{post.category}</td>
              <td className="p-3">{post.status}</td>
              <td className="p-3 text-right space-x-2">
                <button onClick={() => handleEdit(post)} className="text-blue-600 hover:underline">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">{editingId ? 'Edit Post' : 'Add New Post'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Post Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Blog">Blog</option>
                <option value="News">News</option>
                <option value="Event">Event</option>
              </select>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => { setIsModalOpen(false); setEditingId(null); }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >Cancel</button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

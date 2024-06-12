import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Posts = () => {
const baseURL='http://localhost:5000/posts';
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}/get`);
      const fetchedPosts = response.data;
      if (Array.isArray(fetchedPosts)) {
        setPosts(fetchedPosts);
      } else {
        console.error('Fetched posts data is not an array:', fetchedPosts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async () => {
    if (editMode) {
      updatePost(currentPostId);
    } else {
      addPost();
    }
  };

  const addPost = async () => {
    const newPost = { title, content };
    try {
      const response = await axios.post(`${baseURL}/save`, newPost);
      const updatedPosts = [...posts, response.data];
      setPosts(updatedPosts);
      resetForm();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (id) => {
    const updatedPost = { title, content };
    try {
      await axios.put(`${baseURL}/update/${id}`, updatedPost);
      const updatedPosts = posts.map((post) =>
        post._id === id ? { ...post, ...updatedPost } : post
      );
      setPosts(updatedPosts);
      resetForm();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${baseURL}/delete/${id}`);
      const updatedPosts = posts.filter((post) => post._id !== id);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const editPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditMode(true);
    setCurrentPostId(post._id);
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditMode(false);
    setCurrentPostId(null);
  };

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {editMode ? 'Update Post' : 'Add Post'}
        </button>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-actions">
              <button className="edit" onClick={() => editPost(post)}>Edit</button>
              <button className="delete" onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

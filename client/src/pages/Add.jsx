import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4 text-gray-800'>Add New Book</h1>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Title'
            value={book.title}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='desc'>Description</label>
          <input
            type='text'
            id='desc'
            name='desc'
            placeholder='Description'
            value={book.desc}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='price'>Price</label>
          <input
            type='text'
            id='price'
            name='price'
            placeholder='Price'
            value={book.price}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='cover'>Cover URL</label>
          <input
            type='text'
            id='cover'
            name='cover'
            placeholder='Cover URL'
            value={book.cover}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <button
          type='submit'
          onClick={handleClick}
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

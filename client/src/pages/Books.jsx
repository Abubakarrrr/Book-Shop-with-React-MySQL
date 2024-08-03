import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8800/books');
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/books/${id}`);
            setBooks(books.filter((book) => book.id !== id)); // Remove deleted book from state
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                Book Shop
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden" key={book.id}>
                        <img
                            src={book.cover}
                            alt={book.title}
                            onError={(e) => e.target.src = 'fallback-image-url'} // Fallback image
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
                            <p className="text-gray-600 mt-1">{book.desc}</p>
                            <span className="text-indigo-600 font-semibold mt-2 block">${book.price}</span>
                            <div className="flex justify-center mt-4 space-x-4">
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </button>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                    <Link to={`/update/${book.id}`} className="no-underline text-white">
                                        Update
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
                    <Link to="/add" className="no-underline text-white">
                        Add New Book
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Books;

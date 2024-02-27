// BookProvider.jsx

import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBqXsgDzYwAorpiOG2heBNirBisuNCvsr8',
  authDomain: 'libfree-99914.firebaseapp.com',
  projectId: 'libfree-99914',
});

export const BooksContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const db = getFirestore(firebaseConfig);
      const booksCollectionRef = collection(db, 'books');

      try {
        const querySnapshot = await getDocs(booksCollectionRef);
        const booksData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const { id } = doc; // Obtendo o ID do documento
          return { id, ...data };
        });
        setBooksData(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Executa apenas uma vez

  return <BooksContext.Provider value={{ booksData }}>{children}</BooksContext.Provider>;
};

BookProvider.propTypes = {
  children: PropTypes.node,
};

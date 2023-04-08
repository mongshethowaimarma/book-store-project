import React from 'react';

const Book = ({book}) => {
    
    return (
        <div className='overflow-hidden relative transition duration-200 trnsform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={book.image} alt="book cover" className='object-cover w-full h-56 md:h-64 xl:h-80'/>
            <div>
                <p>{book.title}</p>
                <p>{book.subtitle.substring(0, 45)}.....</p>
                <p>Price: {book.price}</p>
            </div>
        </div>
    );
};

export default Book;
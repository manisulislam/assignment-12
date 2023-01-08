import React from 'react';

const BookingModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="book-now" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="book-now" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-now" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"></span>
                            
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;
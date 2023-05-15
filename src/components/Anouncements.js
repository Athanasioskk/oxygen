import "./styles/Anouncements.css";
import React, { useState, useEffect } from 'react';

function Anouncements() {

    function CommentSection() {
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState("");



        function handleCommentSubmit(event) {
            event.preventDefault();
            if (newComment.trim() === "") return; // Check if newComment is empty or only whitespace
            const timestamp = new Date().toLocaleString();
            const newCommentWithTimeStamp = { text: newComment, timestamp };
            setComments([...comments, newCommentWithTimeStamp]);
            setNewComment("");
        }

        return (
            <div className="OverallContainer2">
                <div className="TitleContainer">
                    <p>Note: Here you will be able to post your questions that will be answered in a form of Q&A</p>
                </div>
                <div className="AddAnounceContainer">
                    <div className="AddAnounce">
                        <h2>Insert a question here:</h2>
                        <form onSubmit={handleCommentSubmit}>
                            <input
                                type="text"
                                id="newComment"
                                value={newComment}
                                placeholder="What's on your mind?"
                                onChange={(event) => setNewComment(event.target.value)}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                {comments.length === 0}
                {comments.map((comment, index) => (
                    <div className="Questions" key={index}>
                        <div className="TimeStamp">{comment.timestamp}</div>
                        <p1>{comment.text}</p1>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <CommentSection />
    );
}

export default Anouncements;
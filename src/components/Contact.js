import "../components/styles/Contact.css";

function Contact() {
    return (
        <div className="OverallContainer">
            <div className="ContactContainer">
                <div className="ContactFormContainer">
                    <form type="submit">
                        <h2>You may contact the owner directly via email.</h2>
                        <label>From:</label>
                        <input type="email" placeholder="example@email.com"></input>
                        <label>To:</label>
                        <input type="email" placeholder="example@email.com"></input>
                        <input className="Email" type="text" placeholder="Write something..."></input>
                    </form>
                </div>
                <div className="ContactInfo"></div>
            </div>
        </div>
    )
}

export default Contact;
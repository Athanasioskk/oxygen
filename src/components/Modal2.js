import SignUpPage from "./SignUpPage"

function Modal2() {

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.15)",
                zIndex: 100,
            }}>
            <SignUpPage />
        </div>
    )
}

export default Modal2
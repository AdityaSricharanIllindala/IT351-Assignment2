export default function LetterButton({ letter, onClick }) {
    return (
        <button className="alphabet-btn" onClick={onClick}>{letter}</button>
    )
}
import './button.css'

const labelMensage = (label) => {
    alert(`A label desse botão é: ${label}`)
}

const Button = ({ label }) => {
    return (
        <>
            <button
                className="btn"
                onClick={() => labelMensage(label)}>
                {label}
            </button>
        </>
    )
}

Button.defaultProps = {
    label: 'Saiba mais!'
}

export default Button
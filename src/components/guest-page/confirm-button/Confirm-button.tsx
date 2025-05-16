import './Confirm-button.css';

type ConfirmButtonProps = {
    onClick: () => void;
};

export function ConfirmButton({onClick}: ConfirmButtonProps) {

    return (
        <div className="confirm-button">
            <button className="confirm-button__btn" onClick={onClick}>Confirm Booking</button>
        </div>
    );
}

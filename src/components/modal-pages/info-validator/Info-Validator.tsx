import './Info-Validator.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    invalidFields: Partial<{
        date: string;
        timeSlot: string;
        service: string;
    }>;
};
export function InfoValidator({ isOpen, onClose, invalidFields }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                {Object.keys(invalidFields).length > 0 ? (
                        <div className='invalid-message-content'>
                            <h2>Some fields are missing:</h2>
                            <ul>
                                {Object.entries(invalidFields).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{value}</strong>
                                    </li>
                                ))}
                            </ul>
                            <button className='confirm-button' onClick={() => onClose()}>
                                I'll fix it
                            </button>
                        </div>
                    ) : (
                        <div className='invalid-message-content'>
                            <h2>Booking Confirmation</h2>
                            <p>Are you sure you want to confirm the booking?</p>
                            <button
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                Yes, Confirm
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
}

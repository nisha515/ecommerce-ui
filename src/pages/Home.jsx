import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{
                height: "90vh",
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/32/16/07/360_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                textShadow: "1px 1px 5px rgba(0,0,0,0.7)"
            }}
        >
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    padding: "40px",
                    borderRadius: "20px"
                }}
            >

                <h1 className="fw-bold mb-3" style={{ fontSize: "48px" }}>
                    Welcome to <span style={{ color: "#ffd700" }}>Our Mart</span>
                </h1>

                <p className="mb-3" style={{ fontSize: "18px" }}>
                    Discover amazing products at the best prices
                </p>

                <p className="mb-4">
                    Fast Delivery | Secure Payment |Top Quality
                </p>

                <Button
                    variant="warning"
                    size="lg"
                    className="px-4 py-2 fw-semibold shadow"
                    style={{
                        borderRadius: "30px"
                    }}
                    onClick={() => navigate("/shop")}
                >
                    Start Shopping →
                </Button>

            </div>
        </div>
    );
}
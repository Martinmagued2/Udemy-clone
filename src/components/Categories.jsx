import genAI from "../images/img_14.png"
import itCert from "../images/img_15.png";
import dataScience from "../images/img_16.png";

const categories = [
    {
        image: genAI,
        users: "1.7M+",
        title: "Generative AI"
    },
    {
        image: itCert,
        users: "14M+",
        title: "IT Certifications"
    },
    {
        image: dataScience,
        users: "8.1M+",
        title: "Data Science"
    },
];

function Categories() {
    return (
        <section style={{ background: "#fff", padding: "42px 0" }}>
            <h2 style={{
                fontSize: "2.1rem",
                color: "#222",
                marginLeft: "48px",
                marginBottom: "10px"
            }}>
                Learn essential career and life skills
            </h2>
            <p style={{
                color: "#50535b",
                fontSize: "1.14rem",
                marginLeft: "48px",
                marginBottom: "24px",
                maxWidth: "550px"
            }}>
                Udemy helps you build in-demand skills fast and advance your career in a changing job market.
            </p>
            <div style={{
                display: "flex",
                gap: "32px",
                justifyContent: "center",
                margin: "0 18px"
            }}>
                {categories.map((cat) => (
                    <div key={cat.title} style={{
                        background: "#f7f9fa",
                        borderRadius: "18px",
                        boxShadow: "0 2px 16px #eee",
                        padding: "24px 24px 16px 24px",
                        minWidth: "230px",
                        maxWidth: "260px",
                        textAlign: "center"
                    }}>
                        <img
                            src={cat.image}
                            alt={cat.title}
                            style={{
                                height: "120px",
                                width: "100%",
                                borderRadius: "10px",
                                marginBottom: "14px",
                                objectFit: "cover"
                            }}
                        />
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            marginBottom: "8px",
                            fontWeight: 600,
                            color: "#50535b"
                        }}>
                            <span style={{ fontSize: "1.07rem" }}>👥</span> {cat.users}
                        </div>
                        <div style={{
                            fontSize: "1.12rem",
                            fontWeight: 700,
                            color: "#222",
                            marginBottom: "4px"
                        }}>
                            {cat.title}
                        </div>
                        <button style={{
                            background: "none",
                            border: "none",
                            color: "#6615DD",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "1.1rem"
                        }}>
                            &#8594;
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;


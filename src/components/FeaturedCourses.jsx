import GenerativeAI from "../images/img.png"
import AIagent from "../images/img_1.png"
import AI from "../images/img_2.png"
import Explorer from "../images/img_3.png"

const courses = [
    {
        image: GenerativeAI,
        title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
        author: "365 Careers",
        badge: "Bestseller",
        rating: 4.6,
        ratings: "11,725",
        price: "£309.99",
        crossed: "£349.99"
    },
    {
        image: AIagent,
        title: "Intro to AI Agents and Agentic AI",
        author: "365 Careers",
        badge: "Bestseller",
        rating: 4.4,
        ratings: "1,727",
        price: "£309.99",
        crossed: "£349.99"
    },
    {
        image: AI,
        title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
        author: "Hadelin de Ponteves, Kirill Eremenko, ...",
        badge: "Premium",
        rating: 4.4,
        ratings: "4,856",
        price: "£579.99",
        crossed: "£719.99"
    },
    {
        image: Explorer,
        title: "AI Engineer Explorer Certificate Course",
        author: "School of AI",
        badge: "Premium",
        rating: 4.5,
        ratings: "187",
        price: "£309.99",
        crossed: "£349.99"
    }
];

function FeaturedCourses() {
    return (
        <section style={{ padding: "38px 0", background: "#fff" }}>
            <h2 style={{ marginLeft: "48px", marginBottom: "18px", fontSize: "2rem", color: "#222" }}>
                Skills to transform your career and life
            </h2>
            <div style={{ display: "flex",gap: "100px", padding: "22px 48px", flexWrap: "wrap"}}>
                {courses.map(course => (
                    <div key={course.title} style={{
                        background: "#fff",
                        borderRadius: "14px",
                        boxShadow: "0 2px 16px rgba(35,50,75,0.08)",
                        width: "260px",
                        padding: "12px",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <img
                            src={course.image}
                            alt={course.title}
                            style={{
                                borderRadius: "11px",
                                width: "100%",
                                height: "128px",
                                objectFit: "cover",
                                marginBottom: "16px"
                            }}
                        />
                        <strong style={{ fontSize: "1.08rem", marginBottom: "6px", color: "#222" }}>
                            {course.title}
                        </strong>
                        <div style={{ color: "#50535b", fontSize: "0.98rem", marginBottom: "6px" }}>
                            {course.author}
                        </div>
                        <div style={{ marginBottom: "6px" }}>
              <span style={{
                  background: course.badge === "Premium" ? "#ededf7" : "#ebf8e1",
                  color: course.badge === "Premium" ? "#6615dd" : "#417505",
                  fontWeight: 600,
                  padding: "4px 11px",
                  fontSize: "0.85rem",
                  borderRadius: "6px",
                  marginRight: "8px"
              }}>{course.badge}</span>
                            <span style={{ color: "#faf33b", fontSize: "1rem", marginRight: "4px" }}>★</span>
                            <span style={{ color: "#444", fontWeight: 600 }}>{course.rating}</span>
                            <span style={{ color: "#888" }}> ({course.ratings} ratings)</span>
                        </div>
                        <div style={{ marginBottom: "8px", fontSize: "1.15rem" }}>
                            <span style={{ fontWeight: 700, color: "#222" }}>{course.price}</span>
                            <span style={{ textDecoration: "line-through", color: "#888", marginLeft: "10px" }}>
                {course.crossed}
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedCourses;

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success" role="alert">
        Thank you, {formData.name}! Your message has been received.
      </div>
    );
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

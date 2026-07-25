import { useState } from "react";
import "../style/From.css";

function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:4000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      description: "",
    });

  } catch (err) {
    console.log(err);
  }
};

  return (
    <section className="getStarted">

      <div className="form-box">

        <h1>Let's Discuss Your Project</h1>

        <p>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>E-commerce Website</option>
            <option>CRM Development</option>
            <option>Portfolio Website</option>
            <option>UI/UX Design</option>
            <option>Other</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Estimated Budget</option>
            <option>Under Rs.500</option>
            <option>Rs500 - Rs1000</option>
            <option>Rs1000 - Rs5000</option>
            <option>Above Rs5000</option>
          </select>

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>

    </section>
  );
}

export default GetStarted;
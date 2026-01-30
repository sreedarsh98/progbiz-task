"use client";

import React, { useEffect, useState } from "react";

interface Testimonial {
  _id: string;
  text: string;
  name: string;
  role: string;
  tag: string;
}

export default function AdminTestimonial() {
  const [list, setList] = useState<Testimonial[]>([]);
  const [form, setForm] = useState({
    text: "",
    name: "",
    role: "",
    tag: "",
  });

  const fetchData = async () => {
    const res = await fetch("/api/testimonial");
    setList(await res.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTestimonial = async () => {
    await fetch("/api/testimonial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ text: "", name: "", role: "", tag: "" });
    fetchData();
  };

  const deleteItem = async (id: string) => {

    await fetch(`/api/testimonial/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  return (
    <div className="admin-testimonial">

      <h2>Testimonial Management</h2>

      {/* ADD FORM */}
      <div className="form-box">
        <textarea
          placeholder="Testimonial text"
          value={form.text}
          onChange={(e) =>
            setForm({ ...form, text: e.target.value })
          }
        />

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Role"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        />

        <input
          placeholder="Tag"
          value={form.tag}
          onChange={(e) =>
            setForm({ ...form, tag: e.target.value })
          }
        />

        <button onClick={addTestimonial}>
          Add Testimonial
        </button>
      </div>

      {/* LIST */}
      <table className="testimonial-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Tag</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t) => (
            <tr key={t._id}>
              <td>{t.name}</td>
              <td>{t.role}</td>
              <td>{t.tag}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(t._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

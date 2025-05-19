import React, { useEffect, useState } from "react";
import axios from "../api/Axios";

const ContactInfoAdmin = () => {
  const [info, setInfo] = useState(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    axios.get("/api/contact-info").then((res) => {
      if (res.data) {
        setInfo(res.data);
        setIsNew(false);
      } else {
        setInfo({
          address: "",
          phone: "",
          email: "",
          website: "",
          officeHours: "",
          socialLinks: { facebook: "", instagram: "", twitter: "", youtube: "" },
        });
        setIsNew(true);
      }
    });
  }, []);

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const handleSocialChange = (e) =>
    setInfo({
      ...info,
      socialLinks: { ...info.socialLinks, [e.target.name]: e.target.value },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew) {
      const res = await axios.post("/api/contact-info", info);
      alert("Contact Info added!");
      setInfo(res.data);
      setIsNew(false);
    } else {
      await axios.put(`/api/contact-info/${info._id}`, info);
      alert("Contact Info updated!");
    }
  };

  if (!info) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input name="address" value={info.address} onChange={handleChange} className="border p-2 w-full" placeholder="Address" />
      <input name="phone" value={info.phone} onChange={handleChange} className="border p-2 w-full" placeholder="Phone" />
      <input name="email" value={info.email} onChange={handleChange} className="border p-2 w-full" placeholder="Email" />
      <input name="website" value={info.website} onChange={handleChange} className="border p-2 w-full" placeholder="Website" />
      <input name="officeHours" value={info.officeHours} onChange={handleChange} className="border p-2 w-full" placeholder="Office Hours" />

      <h4 className="font-semibold">Social Links</h4>
      <input name="facebook" value={info.socialLinks.facebook} onChange={handleSocialChange} className="border p-2 w-full" placeholder="Facebook" />
      <input name="instagram" value={info.socialLinks.instagram} onChange={handleSocialChange} className="border p-2 w-full" placeholder="Instagram" />
      <input name="twitter" value={info.socialLinks.twitter} onChange={handleSocialChange} className="border p-2 w-full" placeholder="Twitter" />
      <input name="youtube" value={info.socialLinks.youtube} onChange={handleSocialChange} className="border p-2 w-full" placeholder="YouTube" />

      <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded">
        {isNew ? "Add Contact Info" : "Update Contact Info"}
      </button>
    </form>
  );
};

export default ContactInfoAdmin;

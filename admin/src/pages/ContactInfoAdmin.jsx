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
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl p-4 bg-white shadow rounded">
      <div>
        <label className="block text-sm font-semibold mb-1">Address</label>
        <input name="address" value={info.address} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Enter address" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Phone</label>
        <input name="phone" value={info.phone} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Enter phone number" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input name="email" value={info.email} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Enter email" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Website</label>
        <input name="website" value={info.website} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Enter website URL" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Office Hours</label>
        <input name="officeHours" value={info.officeHours} onChange={handleChange} className="border p-2 w-full rounded" placeholder="e.g. Mon–Fri, 9am–5pm" />
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Social Links</h4>

        <div className="space-y-2">
          <div>
            <label className="block text-sm font-semibold mb-1">Facebook</label>
            <input name="facebook" value={info.socialLinks.facebook} onChange={handleSocialChange} className="border p-2 w-full rounded" placeholder="Facebook URL" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Instagram</label>
            <input name="instagram" value={info.socialLinks.instagram} onChange={handleSocialChange} className="border p-2 w-full rounded" placeholder="Instagram URL" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Twitter</label>
            <input name="twitter" value={info.socialLinks.twitter} onChange={handleSocialChange} className="border p-2 w-full rounded" placeholder="Twitter URL" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">YouTube</label>
            <input name="youtube" value={info.socialLinks.youtube} onChange={handleSocialChange} className="border p-2 w-full rounded" placeholder="YouTube URL" />
          </div>
<div>
  <label className="block text-sm font-semibold mb-1">LinkedIn</label>
  <input
    name="linkedin"
    value={info.socialLinks.linkedin}
    onChange={handleSocialChange}
    className="border p-2 w-full rounded"
    placeholder="LinkedIn URL"
  />
</div>


        </div>

      </div>

      <div className="pt-4">
        <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded shadow">
          {isNew ? "Add Contact Info" : "Update Contact Info"}
        </button>
      </div>
    </form>
  );
};

export default ContactInfoAdmin;

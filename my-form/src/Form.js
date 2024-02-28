import React, { useState } from 'react';
import db from './firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: ''
    });

    const [submitted, setSubmitted] = useState(false); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!formData.name || !formData.age || !formData.email) {
            alert('Please fill in all details before submitting.');
            return;
        }
        
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: formData.name,
                age: formData.age,
                email: formData.email
            });
            
            console.log("Document written with ID: ", docRef.id);
        
            setFormData({ name: '', age: '', email: '' });
            setSubmitted(true); 
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Enter full name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Enter your age:</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter email address:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Thank you for submitting details!</p>} 
        </div>
    );
};

export default Form;

"use client";

import React, { useState, useEffect } from "react";
import styles from "./AppointmentModal.module.css";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultType?: string;
}

export default function AppointmentModal({ isOpen, onClose, defaultType = "Bridal Couture" }: AppointmentModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        type: defaultType,
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            console.log("Appointment Request:", formData);
            setStatus("success");

            // Auto close after success
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setFormData({ ...formData, message: "" }); // Reset message only
            }, 2000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose} />

            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>

                {status === "success" ? (
                    <div className={styles.successMessage}>
                        <div className={styles.checkIcon}>✓</div>
                        <h3>Request Received</h3>
                        <p>Our concierge will contact you shortly to confirm your appointment.</p>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>Request Appointment</h2>
                        <p className={styles.subtitle}>Begin your bespoke journey with us.</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="Bridal Couture">Bridal Couture</option>
                                        <option value="Bespoke Commission">Bespoke Commission</option>
                                        <option value="Heritage Restoration">Heritage Restoration</option>
                                        <option value="Private Viewing">Private Viewing</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={styles.input}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your requirements (Optional)"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? "Sending Request..." : "Confirm Request"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

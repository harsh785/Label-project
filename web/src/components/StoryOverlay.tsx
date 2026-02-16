import React from 'react';
import Image from 'next/image';
import styles from './StoryOverlay.module.css';

interface Story {
    title: string;
    image: string;
    quote: string;
    text: string;
}

interface StoryOverlayProps {
    story: Story | null;
    onClose: () => void;
}

export default function StoryOverlay({ story, onClose }: StoryOverlayProps) {
    if (!story) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>

                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                <div className={styles.contentCol}>
                    <div className={styles.scrollContent}>
                        <h2 className={styles.title}>{story.title}</h2>
                        <div className={styles.divider}></div>
                        <blockquote className={styles.quote}>"{story.quote}"</blockquote>
                        <p className={styles.text}>{story.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

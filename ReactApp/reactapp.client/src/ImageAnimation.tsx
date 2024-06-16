// ImageAnimation.tsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles/ImageAnimation.css';
import { Image } from 'react-bootstrap';

interface ImageAnimationProps {
    src: string;
    className?: string;
}

const ImageAnimation: React.FC<ImageAnimationProps> = ({ src, className }) => {
    return (
        <div className="image-container">
            <CSSTransition in={true} timeout={500} classNames="image">
                <Image src={src} className={`image ${className}`} />
            </CSSTransition>
        </div>
    );
};

export default ImageAnimation;

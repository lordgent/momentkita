import React from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  initialName: string;
}

const Avatar: React.FC<AvatarProps> = ({ size = 'sm', initialName }) => {
  const sizeClass = {
    sm: styles.avatarSm,
    md: styles.avatarMd,
    lg: styles.avatarLg,
  };

  return (
    <div className={sizeClass[size]}>
      {initialName}
    </div>
  );
};

export default Avatar;

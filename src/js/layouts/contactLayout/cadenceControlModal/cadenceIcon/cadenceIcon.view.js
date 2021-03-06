/* eslint-disable max-len */
import React from 'react';
import styles from './cadenceIcon.module.css';

const CadenceIcon = ({ color }) => (
  <div className={styles._container}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" fill="transparent" />
      <rect x="3" y="8" width="54" height="1.5" fill={`var(--${color})`} />
      <rect x="3" y="22" width="54" height="1.5" fill={`var(--${color})`} />
      <rect x="3" y="36" width="54" height="1.5" fill={`var(--${color})`} />
      <rect x="3" y="50" width="54" height="1.5" fill={`var(--${color})`} />
      <circle
        cx="29.9996"
        cy="15.75"
        r="4"
        transform="rotate(-45 29.9996 15.75)"
        stroke={`var(--${color})`}
        strokeLinejoin="round"
        strokeDasharray="3 2"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="28"
        y="13"
        width="4"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.9163 13.8337C31.8047 13.7221 31.6238 13.7221 31.5123 13.8337L30 15.3459L28.4877 13.8337C28.3762 13.7221 28.1953 13.7221 28.0837 13.8337C27.9721 13.9453 27.9721 14.1262 28.0837 14.2377L29.5959 15.75L28.0837 17.2623C27.9721 17.3738 27.9721 17.5547 28.0837 17.6663C28.1953 17.7779 28.3762 17.7779 28.4877 17.6663L30 16.1541L31.5123 17.6663C31.6238 17.7779 31.8047 17.7779 31.9163 17.6663C32.0279 17.5547 32.0279 17.3738 31.9163 17.2623L30.4041 15.75L31.9163 14.2377C32.0279 14.1262 32.0279 13.9453 31.9163 13.8337Z"
          fill="#1A1A1A"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect x="26" y="11.75" width="8" height="8" fill={`var(--${color})`} />
      </g>
      <circle
        cx="46"
        cy="43.75"
        r="4"
        transform="rotate(45 46 43.75)"
        stroke={`var(--${color})`}
        strokeLinejoin="round"
        strokeDasharray="3 2"
      />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="44"
        y="41"
        width="4"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.9163 41.8337C47.8047 41.7221 47.6238 41.7221 47.5123 41.8337L46 43.3459L44.4877 41.8337C44.3762 41.7221 44.1953 41.7221 44.0837 41.8337C43.9721 41.9453 43.9721 42.1262 44.0837 42.2377L45.5959 43.75L44.0837 45.2623C43.9721 45.3738 43.9721 45.5547 44.0837 45.6663C44.1953 45.7779 44.3762 45.7779 44.4877 45.6663L46 44.1541L47.5123 45.6663C47.6238 45.7779 47.8047 45.7779 47.9163 45.6663C48.0279 45.5547 48.0279 45.3738 47.9163 45.2623L46.4041 43.75L47.9163 42.2377C48.0279 42.1262 48.0279 41.9453 47.9163 41.8337Z"
          fill="#1A1A1A"
        />
      </mask>
      <g mask="url(#mask1)">
        <rect x="42" y="39.75" width="8" height="8" fill={`var(--${color})`} />
      </g>
      <circle
        cx="13.9996"
        cy="29.75"
        r="4"
        transform="rotate(-45 13.9996 29.75)"
        stroke={`var(--${color})`}
        strokeLinejoin="round"
        strokeDasharray="3 2"
      />
      <mask
        id="mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="12"
        y="27"
        width="4"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9163 27.8337C15.8047 27.7221 15.6238 27.7221 15.5123 27.8337L14 29.3459L12.4877 27.8337C12.3762 27.7221 12.1953 27.7221 12.0837 27.8337C11.9721 27.9453 11.9721 28.1262 12.0837 28.2377L13.5959 29.75L12.0837 31.2623C11.9721 31.3738 11.9721 31.5547 12.0837 31.6663C12.1953 31.7779 12.3762 31.7779 12.4877 31.6663L14 30.1541L15.5123 31.6663C15.6238 31.7779 15.8047 31.7779 15.9163 31.6663C16.0279 31.5547 16.0279 31.3738 15.9163 31.2623L14.4041 29.75L15.9163 28.2377C16.0279 28.1262 16.0279 27.9453 15.9163 27.8337Z"
          fill="#1A1A1A"
        />
      </mask>
      <g mask="url(#mask2)">
        <rect x="10" y="25.75" width="8" height="8" fill={`var(--${color})`} />
      </g>
    </svg>
  </div>
);

CadenceIcon.defaultProps = {
  color: 'verySoftPeanut',
};

export default CadenceIcon;

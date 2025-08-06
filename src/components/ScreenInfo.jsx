'use client';
import { useEffect, useState } from 'react';

const getActiveBreakpoints = (width) => {
  const min = [];
  const max = [];

  if (width >= 640) min.push('sm');
  if (width >= 768) min.push('md');
  if (width >= 1024) min.push('lg');
  if (width >= 1280) min.push('xl');
  if (width >= 1536) min.push('2xl');

  if (width < 1536) max.push('max-2xl');
  if (width < 1280) max.push('max-xl');
  if (width < 1024) max.push('max-lg');
  if (width < 768) max.push('max-md');
  if (width < 640) max.push('max-sm');

  return { min, max };
};

const getPrimaryBreakpoint = (width) => {
  if (width < 640) return 'base';
  if (width < 768) return 'sm';
  if (width < 1024) return 'md';
  if (width < 1280) return 'lg';
  if (width < 1536) return 'xl';
  return '2xl';
};

export default function ScreenInfo() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [breakpoints, setBreakpoints] = useState({ min: [], max: [] });
  const [primary, setPrimary] = useState('base');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setSize({ width: w, height: h });
      setBreakpoints(getActiveBreakpoints(w));
      setPrimary(getPrimaryBreakpoint(w));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!visible) {
    return (
      <button
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '0.25rem 1rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          opacity: 0.8,
          cursor: 'pointer',
        }}
        onClick={() => setVisible(true)}
      >
        Show ScreenInfo
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: 'black',
        backdropFilter: 'blur(2px)',
        padding: '1rem',
        borderRadius: '1rem',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
        fontSize: '0.85rem',
        fontFamily: 'monospace',
        maxWidth: '90vw',
        width: 'fit-content',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <strong style={{ color: 'rgba(0, 0, 0, 0.6)', marginRight: '1rem' }}>
          Screen Info
        </strong>
        <button
          onClick={() => setVisible(false)}
          style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Hide
        </button>
      </div>
      <div>
        <strong>Primary:</strong>{' '}
        <span style={{ color: '#4338ca' /* indigo-700 */ }}>{primary}</span>
      </div>
      <div>
        <strong>Min Breakpoints:</strong>{' '}
        <span style={{ color: '#15803d' /* green-700 */ }}>
          {breakpoints.min.join(', ') || 'none'}
        </span>
      </div>
      <div>
        <strong>Max Breakpoints:</strong>{' '}
        <span style={{ color: '#b91c1c' /* red-700 */ }}>
          {breakpoints.max.join(', ') || 'none'}
        </span>
      </div>
      <div>
        <strong>Size:</strong> {size.width}px × {size.height}px
      </div>
    </div>
  );
}

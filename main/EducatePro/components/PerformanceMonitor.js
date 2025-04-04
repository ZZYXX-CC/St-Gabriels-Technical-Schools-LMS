import React, { useEffect, useRef } from 'react';
import { Platform } from 'react-native';

const PerformanceMonitor = ({ name, onComplete }) => {
  const startTime = useRef(Date.now());

  useEffect(() => {
    const endTime = Date.now();
    const duration = endTime - startTime.current;
    
    console.log(`[Performance] ${name} took ${duration}ms to initialize`);
    
    if (onComplete) {
      onComplete(duration);
    }
  }, [name, onComplete]);

  return null;
};

export const measurePerformance = (name, component) => {
  return (props) => {
    return (
      <>
        <PerformanceMonitor name={name} />
        {component(props)}
      </>
    );
  };
};

export default PerformanceMonitor; 
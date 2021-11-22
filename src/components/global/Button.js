import React from 'react';

export default function Button({ className, children, ...props }) {
  return (
    <>
      <button className={`btn bg-dark shadow-none text-white px-5 ${className}`} {...props}>{children}</button>
    </>
  );
}
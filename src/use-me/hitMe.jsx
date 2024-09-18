import React from 'react'

const HitMe = ({ onClick, type='primary', className, disable, children }) => {
    return (
        <button onClick={onClick} disabled={disable}
        className={`rounded-3xl px-4 py-2 text-background-foreground ${type === 'border' ? "border-2 bg-transparent" : 'bg-primary'}
        ${className}`} >
            {children}
        </button>
    )
}

export default HitMe
import React from 'react'

const styles = {
    div: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    h1: {
        fontSize: 48,
        lineHeight: '56px',
        color: "#E5E5E5",
        textShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)"
    },
    h2: {
        fontSize: 24,
        lineHeight: '28px',
        color: "#E5E5E5",
    }
}
export default function Header() {
    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>TodoList</h1>
            <h2 className='titles' style={styles.h2}>Incomplete tasks</h2>
            <h2 className='titles' style={styles.h2}>Completed tasks</h2>
        </div>
    )
}
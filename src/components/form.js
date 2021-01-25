import React from 'react'

const styles = {
    div: {
        display: 'flex',
    },
    form: {
        width: '50%'
    }, 
    input: {
        color: 'rgba(0, 0, 0, 0.56)',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        width: '100%',
        height: '55px',
        borderRadius: '10px',
        background: '#E5E5E5',
        fontSize: '28px',
        lineHeight: '33px',
        paddingLeft: '31px',
        border: 'none',
        outline: 'none'
    },
    button: {
        background: '#E5E5E5',
        borderRadius: '10px',
        width: '12%',
        height: '55px',
        border: 'none',
        fontSize: '28px',
        lineHeight: '33px',
        color: 'rgba(0, 0, 0, 0.56)',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft: '10%',
        outline: 'none',
    }
}
export default function Form() {
    return (
        <div style={styles.div}>
            <form style={styles.form}>
                 <input style={styles.input} type="text" placeholder="Enter Text"></input>
            </form>
            <button className='addbtn' style={styles.button}>Add</button>
        </div>
    )
}
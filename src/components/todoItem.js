import React from 'react'
import success from '../img/success.svg'
import trash from '../img/trash.svg'

const styles = {
    hr: {
        background: '#C4C4C4',
        width: '100%',
        marginTop: 0,
        marginBottom: '6px',
        margin: 0
    },
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        flexWrap: 'wrap'
        
    },
    first: {
        width: '50%',
        display: 'flex',
        marginBottom: '4px'
    },
    second: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '13%',
        marginBottom: '4px',
        textAlign: 'right'
    },
    text: {
        color: '#fff',
        marginLeft: '1rem',
        fontSize: '28px',
    }
}

export default function TodoItem() {
    return(
        <li style={styles.li}>
                <hr style={styles.hr}/>
                <div className='first' style={styles.first}>
                    <img src={success}/>
                    <p style={styles.text} className='text'>React learn everyday</p>
                </div>
                <div className='second' style={styles.second}>
                    <img src={trash}/></div>
        </li>
    )
}
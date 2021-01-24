import React from 'react'
import success from './img/success.svg'
import trash from './img/trash.svg'


const styles = {
    ul: {
        listStyle: 'none'
    },
    hr: {
        background: '#C4C4C4',
        width: '86%',
        marginTop: 0,
        marginBottom: '6px'
    },
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        flexWrap: 'wrap'
        
    },
    first: {
        marginLeft: '135px',
        width: '50%',
        display: 'flex',
        marginBottom: '4px'
    },
    second: {
        justifySelf: 'flex-end',
        width: '13%',
        marginBottom: '4px'
    },
    text: {
        color: '#fff',
        marginLeft: '1rem',
        fontSize: '28px',
        lineHeight: '33px'
    }
}
export default function TodoList() {
    return(
        <ul style={styles.ul}>
            <li style={styles.li}>
                <hr style={styles.hr}/>
                <div className='first' style={styles.first}>
                    <img src={success}/>
                    <p style={styles.text} className='text'>React learn everyday</p>
                </div>
                <div className='second' style={styles.second}>
                    <img src={trash}/></div>
            </li>
        </ul>
    )
}
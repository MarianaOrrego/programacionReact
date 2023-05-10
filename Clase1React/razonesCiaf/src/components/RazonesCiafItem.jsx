import React from 'react'

const RazonesCiafItem = ({ num, title, img, legend, student, text }) => {
    return (
        <div style={styles.container}>
            <button style={styles.button}>{num}</button>
            <p style={styles.title}>{title}</p>
            <img style={styles.img} src={img} />
            <p style={styles.legend}>{legend}</p>
            <p style={styles.title}>{student}</p>
            <p style={styles.text}>{text}</p>
        </div>
    )
}

export default RazonesCiafItem

const styles = {
    container: {
        flex: 1,
        padding: 15,
        margin: 20
    },
    button: {
        background: '#001f79',
        borderRadius: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        height: 50,
        width: 50,
        cursor: 'none',
        border: 'none',
        color: 'white'
    },
    title: {
        color: '#001f79',
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: 100,
        borderRadius: '50%'
    },
    legend: {
        fontSize: 18,
        fontStyle: 'italic'
    },
    text: {
        fontSize: 18
    }
}
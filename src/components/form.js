import React, {Component} from 'react'

const styles = {
    div: {
        display: 'flex',
    },
    form: {
        width: '65%',
        display: 'flex'
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
        width: '20%',
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
export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {title: ''}
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.addToDo(this.state.title)
        this.setState({
            title: ''
        })
    }
    render () {
        return (
            <div style={styles.div}>
                <form style={styles.form} onSubmit={this.onSubmit}>
                     <input style={styles.input} type="text" placeholder="Enter Text" onChange={this.onChangeTitle} value={this.state.title}></input>
                     <button className='addbtn' style={styles.button} type='submit'>Add</button>
                </form>
               
            </div>
        )
    }
  
}
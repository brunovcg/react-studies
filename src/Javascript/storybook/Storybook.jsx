const styles = {
    padding: '15px',
    background: 'black',
    width: '80%',
    height: '200px'
}


function Storybook() {

    return <div style={{ padding: '15px' }}>

        <h1>StoryBook</h1>
        <br />
        <h3>Run on terminal</h3>
        <div style={styles}>
            <p style={{ color: 'grey' }}>{'// to install'}</p>
            <p style={{ color: 'white' }}>$ npx storybook init</p>
            <br />
            <p style={{ color: 'grey' }}>{'// to run'}</p>
            <p style={{ color: 'white' }}>$ yarn storybook</p>
        </div>
        <br />
        <a href="http://localhost:6006" target='_black' > =&#62; Go to Storybook</a>
    </div>

}

export default Storybook
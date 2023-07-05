import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
    const {progress} = useProgress()
    return (
        <Html>
            <span className="canvas-loader"></span>
            <p
                style={{
                    fontStyle: 14,
                    color: '#fff',
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader
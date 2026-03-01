import Track from './Track.js'

const AlbumTitle = (props) => {
  const {text, textColor, exists, height} = props;
  return <h1 style={{color: textColor,
                    background: exists ? 'white' : 'black', height: height}}>
    {text}
    <Track trackText={text}></Track>
  </h1>
}

export default AlbumTitle;
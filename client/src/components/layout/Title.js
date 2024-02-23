const Title = ({text = "People and their cars"}) => {
  const styles = getStyles()
  return <h1 style={styles.title}>{text}</h1>
}

const getStyles = () => ({
  title: {
    fontSize: 20,
    padding: '15px',
    marginBottom: '50px'
  }
})

export default Title

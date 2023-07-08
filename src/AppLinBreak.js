const text = `This is a long string of text and it
  includes new line characters. We want this text
  to display properly using React.`;
// 按照换行符显示文本
const App = () =>
    text.split("\n").map((value, index) => {
        return (
            <span key={index}>
                {value}
                <br />
            </span>
        )
    })

export default App;
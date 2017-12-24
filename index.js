import React from 'react';
import PropTypes from 'prop-types';

// const CHAR_LIST = ['é', 'ä', 'í', 'ƒ', 'ñ', '*', 'π', '[', ']', 'k', '¥', 'å'];
// const FINAL_NAME = 'Tyler Stanish';

class RandomTextGenerator extends React.Component {

  constructor(p){
    super(p);
    this.state = {
      text: this.generateRandomStringFromString(p.text)
    }
  }

  generateRandomStringFromString(str){

    const CHAR_LIST = this.props.charList;

    let newStr = [];
    for(let char of str){
      if(char !== ' ') {
        newStr.push(CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)]);
      }else{
        newStr.push(' ');
      }
    }
    return newStr.join('');
  }

  componentDidMount(){

    const FINAL_NAME = this.props.text;
    const CHAR_LIST = this.props.charList;

    let strings = this.state.text.split('');

    let currIndex = 0;
    let currTime = 0;

    let set_interval = setInterval(() => {
      if(currIndex === FINAL_NAME.length) clearInterval(set_interval);
      if(FINAL_NAME.charAt(currIndex) !== ' '){
        if(currTime % this.props.timePerChar === 0 && currTime){
          strings[currIndex] = FINAL_NAME.charAt(currIndex);
          currIndex++;
        }

        strings.slice(currIndex).map((e, i) => {
          if(strings[i+currIndex] !== ' ')
            strings[i+currIndex] = CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)];
        });
      }else currIndex++;

      currTime += this.props.interval;
      let str = strings.join('');
      this.setState({text: str});
    }, this.props.interval);
  }

  render() {
    return(
      <div>{this.state.text}</div>
    );
  }
}

RandomTextGenerator.propTypes = {
  charList: PropTypes.array,
  text: PropTypes.string,
  interval: PropTypes.number,
  timePerChar: PropTypes.number
};

RandomTextGenerator.defaultProps = {
  charList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  text: 'Please include text prop',
  interval: 10,
  timePerChar: 200
};

export default RandomTextGenerator;
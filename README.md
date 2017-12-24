# react-scrolling-text
![Gif](https://media.giphy.com/media/3ohc0RNzuZHSTof3s4/giphy.gif)
#### As seen in Minecraft!
![Gif Minecraft Gameplay](https://media.giphy.com/media/xULW8INaTo4MqcruN2/giphy.gif)
![Gif Minecraft](https://media.giphy.com/media/xULW8KLTLvTJnjsHh6/giphy.gif)

# Installation
```javascript
npm i --save react-scrolling-text
```

# Usage
### Default Props
```javascript
import RandomTextGenerator from 'react-scrolling-text';
...
<RandomTextGenerator
  charList={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
  text={'Please include text prop'}
  interval={10}
  timePerChar={200}
/>
```
### Props
| Prop Name  | Data Type | Required? | Default Value | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| charList  | Array  | No | ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] | Random characters to display when scrolling |
| text  | String  | No | 'Please include text prop' | The final text to display |
| interval  | Number  | No | 10 | # of milliseconds between each change of random scrolling character |
| timePerChar  | Number  | No | 200 | # of milliseconds it takes to move on to next character when scrolling |

### Warning!!!
**There are no styles included! This component will inherit from its parent**

# Minecraft example from above
*The font being used is Press Start 2P*
```javascript
render(){
  return(
    <RandomText
      charList={['é', 'ä', 'í', 'ƒ', 'ñ', '*', 'π', '[', ']', 'k', '¥', 'å']}
      text={'Hello World!'}
      interval={20}
      timePerChar={200}
    />
  );
}
```

# Todo (hopefully)
- Include Regular Expressions into charList prop
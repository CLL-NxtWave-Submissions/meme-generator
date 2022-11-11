import {Component} from 'react'
import styledComponents from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

export default class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSizeOptionId: fontSizesOptionsList[0].optionId,
    isMemeGenerated: false,
  }

  onMemeConfigurationInputUpdate = inputUpdateEvent => {
    const inputElementReference = inputUpdateEvent.target
    const inputElementId = inputElementReference.id
    const updatedUserInput = inputElementReference.value

    const updatedStateObject = {isMemeGenerated: false}
    updatedStateObject[inputElementId] = updatedUserInput

    this.setState(updatedStateObject)
  }

  onGenerateMeme = () =>
    this.setState({
      isMemeGenerated: true,
    })

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSizeOptionId,
      isMemeGenerated,
    } = this.state

    return (
      <styledComponents.MemeGeneratorBgContainer>
        <styledComponents.MemeHeader>
          Meme Generator
        </styledComponents.MemeHeader>
        <styledComponents.MemeGeneratorContainer>
          <styledComponents.GeneratedMemeContainer
            bgImageUrl={isMemeGenerated ? imageUrl : ''}
          >
            <styledComponents.GeneratedMemeText fontSize={fontSizeOptionId}>
              {isMemeGenerated && topText}
            </styledComponents.GeneratedMemeText>
            <styledComponents.GeneratedMemeText fontSize={fontSizeOptionId}>
              {isMemeGenerated && bottomText}
            </styledComponents.GeneratedMemeText>
          </styledComponents.GeneratedMemeContainer>

          <styledComponents.MemeConfigurationContainer>
            <styledComponents.MemeConfigurationInputContainer>
              <styledComponents.MemeConfigurationInputLabel forHTML="imageUrl">
                Image URL
              </styledComponents.MemeConfigurationInputLabel>
              <styledComponents.MemeConfigurationInput
                id="imageUrl"
                type="url"
                placeholder="Enter the image URL"
                value={imageUrl}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </styledComponents.MemeConfigurationInputContainer>

            <styledComponents.MemeConfigurationInputContainer>
              <styledComponents.MemeConfigurationInputLabel forHTML="topText">
                Top Text
              </styledComponents.MemeConfigurationInputLabel>
              <styledComponents.MemeConfigurationInput
                id="topText"
                type="text"
                placeholder="Enter the Top Text"
                value={topText}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </styledComponents.MemeConfigurationInputContainer>

            <styledComponents.MemeConfigurationInputContainer>
              <styledComponents.MemeConfigurationInputLabel forHTML="bottomText">
                Bottom Text
              </styledComponents.MemeConfigurationInputLabel>
              <styledComponents.MemeConfigurationInput
                id="bottomText"
                type="text"
                placeholder="Enter the Bottom Text"
                value={bottomText}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </styledComponents.MemeConfigurationInputContainer>

            <styledComponents.MemeConfigurationInputContainer>
              <styledComponents.MemeConfigurationInputLabel forHTML="fontSizeOptionId">
                Font Size
              </styledComponents.MemeConfigurationInputLabel>
              <styledComponents.MemeConfigurationInput
                id="fontSizeOptionId"
                as="select"
                value={fontSizeOptionId}
                onChange={this.onMemeConfigurationInputUpdate}
              >
                {fontSizesOptionsList.map(fontSizesOption => (
                  <option value={fontSizesOption.optionId}>
                    {fontSizesOption.displayText}
                  </option>
                ))}
              </styledComponents.MemeConfigurationInput>
            </styledComponents.MemeConfigurationInputContainer>

            <styledComponents.MemeGenerateButton
              type="button"
              onClick={this.onGenerateMeme}
            >
              Generate
            </styledComponents.MemeGenerateButton>
          </styledComponents.MemeConfigurationContainer>
        </styledComponents.MemeGeneratorContainer>
      </styledComponents.MemeGeneratorBgContainer>
    )
  }
}

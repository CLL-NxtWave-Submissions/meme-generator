import {Component} from 'react'
import {
  MemeGeneratorBgContainer,
  MemeHeader,
  MemeGeneratorContainer,
  GeneratedMemeContainer,
  GeneratedMemeText,
  MemeConfigurationContainer,
  MemeConfigurationInputContainer,
  MemeConfigurationInputLabel,
  MemeConfigurationInput,
  MemeGenerateButton,
} from './styledComponents'

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
      <MemeGeneratorBgContainer>
        <MemeHeader>Meme Generator</MemeHeader>
        <MemeGeneratorContainer>
          <GeneratedMemeContainer bgImageUrl={isMemeGenerated ? imageUrl : ''}>
            <GeneratedMemeText fontSize={fontSizeOptionId}>
              {isMemeGenerated && topText}
            </GeneratedMemeText>
            <GeneratedMemeText fontSize={fontSizeOptionId}>
              {isMemeGenerated && bottomText}
            </GeneratedMemeText>
          </GeneratedMemeContainer>

          <MemeConfigurationContainer>
            <MemeConfigurationInputContainer>
              <MemeConfigurationInputLabel forHTML="imageUrl">
                Image URL
              </MemeConfigurationInputLabel>
              <MemeConfigurationInput
                id="imageUrl"
                type="url"
                placeholder="Enter the image URL"
                value={imageUrl}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </MemeConfigurationInputContainer>

            <MemeConfigurationInputContainer>
              <MemeConfigurationInputLabel forHTML="topText">
                Top Text
              </MemeConfigurationInputLabel>
              <MemeConfigurationInput
                id="topText"
                type="text"
                placeholder="Enter the Top Text"
                value={topText}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </MemeConfigurationInputContainer>

            <MemeConfigurationInputContainer>
              <MemeConfigurationInputLabel forHTML="bottomText">
                Bottom Text
              </MemeConfigurationInputLabel>
              <MemeConfigurationInput
                id="bottomText"
                type="text"
                placeholder="Enter the Bottom Text"
                value={bottomText}
                onChange={this.onMemeConfigurationInputUpdate}
              />
            </MemeConfigurationInputContainer>

            <MemeConfigurationInputContainer>
              <MemeConfigurationInputLabel forHTML="fontSizeOptionId">
                Font Size
              </MemeConfigurationInputLabel>
              <MemeConfigurationInput
                id="fontSizeOptionId"
                as="select"
                value={fontSizeOptionId}
                onChange={this.onMemeConfigurationInputUpdate}
              >
                {fontSizesOptionsList.map(fontSizesOption => (
                  <option
                    key={fontSizesOption.optionId}
                    value={fontSizesOption.optionId}
                  >
                    {fontSizesOption.displayText}
                  </option>
                ))}
              </MemeConfigurationInput>
            </MemeConfigurationInputContainer>

            <MemeGenerateButton type="button" onClick={this.onGenerateMeme}>
              Generate
            </MemeGenerateButton>
          </MemeConfigurationContainer>
        </MemeGeneratorContainer>
      </MemeGeneratorBgContainer>
    )
  }
}

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
    imageUrl: {oldValue: '', newNalue: ''},
    topText: {oldValue: '', newNalue: ''},
    bottomText: {oldValue: '', newNalue: ''},
    fontSizeOptionId: {
      oldValue: fontSizesOptionsList[0].optionId,
      newNalue: fontSizesOptionsList[0].optionId,
    },
    isMemeGenerated: false,
  }

  onMemeConfigurationInputUpdate = inputUpdateEvent => {
    const inputElementReference = inputUpdateEvent.target
    const inputElementId = inputElementReference.id
    const updatedUserInput = inputElementReference.value

    this.setState(previousMemeDataState => {
      const currentMemePropertyData = previousMemeDataState[inputElementId]
      const updatedStateObject = {}
      updatedStateObject[inputElementId] = {
        oldValue: currentMemePropertyData.oldValue,
        newValue: updatedUserInput,
      }
      updatedStateObject.isMemeGenerated = false

      return updatedStateObject
    })
  }

  onGenerateMeme = generateMemeClickEvent => {
    generateMemeClickEvent.preventDefault()

    this.setState(prevMemeConfigDataState => {
      let updatedMemeConfigDataState = {}

      const updatedStateObjEntriesArr = Object.entries(
        prevMemeConfigDataState,
      ).map(prevMemeConfigDataStateKVPairArr => {
        const [
          prevStateObjKey,
          prevStateObjValue,
        ] = prevMemeConfigDataStateKVPairArr

        let updatedStateObjEntry = []
        if (prevStateObjKey !== 'isMemeGenerated') {
          updatedStateObjEntry = [
            prevStateObjKey,
            {
              oldValue: prevStateObjValue.newValue,
              newValue: prevStateObjValue.newValue,
            },
          ]
        } else {
          updatedStateObjEntry = [prevStateObjKey, true]
        }

        return updatedStateObjEntry
      })

      updatedMemeConfigDataState = Object.fromEntries(updatedStateObjEntriesArr)
      return updatedMemeConfigDataState
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSizeOptionId} = this.state

    return (
      <MemeGeneratorBgContainer>
        <MemeHeader>Meme Generator</MemeHeader>
        <MemeGeneratorContainer>
          <GeneratedMemeContainer data-testid="meme" bgImageUrl={imageUrl}>
            <GeneratedMemeText fontSize={fontSizeOptionId}>
              {topText}
            </GeneratedMemeText>
            <GeneratedMemeText fontSize={fontSizeOptionId}>
              {bottomText}
            </GeneratedMemeText>
          </GeneratedMemeContainer>

          <MemeConfigurationContainer>
            <MemeConfigurationInputContainer>
              <MemeConfigurationInputLabel htmlFor="imageUrl">
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
              <MemeConfigurationInputLabel htmlFor="topText">
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
              <MemeConfigurationInputLabel htmlFor="bottomText">
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
              <MemeConfigurationInputLabel htmlFor="fontSizeOptionId">
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

            <MemeGenerateButton type="submit" onClick={this.onGenerateMeme}>
              Generate
            </MemeGenerateButton>
          </MemeConfigurationContainer>
        </MemeGeneratorContainer>
      </MemeGeneratorBgContainer>
    )
  }
}

import styled from 'styled-components'

export const MemeGeneratorBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-family: 'Roboto';
  margin: 0;
  height: 100%;
  min-height: 100vh;
`

export const MemeHeader = styled.h1`
  color: #35469c;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const GeneratedMemeContainer = styled.div`
  margin: 0;
  width: 100%;
  min-width: 100%;

  ${props =>
    props.bgImageUrl === ''
      ? `background: inherit;`
      : `background-image: url(${props.bgImageUrl});
  background-size: cover;`}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;

  @media (min-width: 768px) {
    width: 40%;
    min-width: 40%;
    order: 1;
  }
`

export const GeneratedMemeText = styled.p`
  color: #ffffff;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: 550;
  text-align: center;
  line-height: 1.5rem;
  padding: 1rem;
`

export const MemeConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    width: 40%;
    min-width: 40%;
  }
`
export const MemeConfigurationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
  color: #d7dfe9;
  font-size: 1rem;
`

export const MemeConfigurationInputLabel = styled.label`
  margin-bottom: 0.5rem;
`

export const MemeConfigurationInput = styled.input`
  outline: none;
  border: 0.1rem solid #d7dfe9;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  width: 100%;
`

export const MemeGenerateButton = styled.button`
  border: none;
  outline: none;
  background-color: #0b69ff;
  color: #ffffff;
  border-radius: 0.4rem;
  padding: 1rem 2.5rem;
  cursor: pointer;
`

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

  @media (min-width: 768px) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: 1000px) {
    padding: 2.5rem 5rem;
  }
`

export const MemeHeader = styled.h1`
  color: #35469c;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: flex-start;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  min-height: 50vh;
  height: 50vh;

  @media (min-width: 600px) {
    min-height: 60vh;
    height: 60vh;
  }

  @media (min-width: 720px) {
    min-height: 65vh;
    height: 65vh;
  }

  @media (min-width: 768px) {
    width: 50%;
    min-width: 50%;
    order: 1;
  }

  @media (min-width: 1000px) {
    width: 48%;
    min-width: 48%;
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

export const MemeConfigurationContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    width: 45%;
    min-width: 45%;
  }
`
export const MemeConfigurationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
  color: #7e858e;
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
  color: #7e858e;
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
